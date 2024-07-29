use crate::error::{ContractError, ContractResult};
use cosmwasm_std::{
    attr, entry_point, to_json_binary, Addr, Binary, Deps, DepsMut, Env, MessageInfo, Order,
    Response, StdResult, Uint128,
};
use cw2::set_contract_version;
use cw20_base::{
    contract::{query_download_logo, query_marketing_info},
    msg::QueryMsg,
    state::{TokenInfo, BALANCES, LOGO, MARKETING_INFO, TOKEN_INFO},
};
use cw_ownable::Action;
use drop_helpers::answer::response;
use drop_points_base::msg::token::{ExecuteMsg, InstantiateMsg, MigrateMsg};
use neutron_sdk::bindings::{msg::NeutronMsg, query::NeutronQuery};

const CONTRACT_NAME: &str = concat!("crates.io:drop-points__", env!("CARGO_PKG_NAME"));
const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut<NeutronQuery>,
    _env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> ContractResult<Response<NeutronMsg>> {
    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    cw_ownable::initialize_owner(deps.storage, deps.api, Some(info.sender.as_str()))?;
    let attrs = vec![
        attr("action", "instantiate"),
        attr("name", &msg.name),
        attr("symbol", &msg.symbol),
        attr("decimals", msg.decimals.to_string()),
    ];
    TOKEN_INFO.save(
        deps.storage,
        &TokenInfo {
            name: msg.name,
            symbol: msg.symbol,
            decimals: msg.decimals,
            total_supply: Uint128::zero(),
            mint: None,
        },
    )?;
    Ok(response("instantiate", CONTRACT_NAME, attrs))
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn query(deps: Deps<NeutronQuery>, _env: Env, msg: QueryMsg) -> ContractResult<Binary> {
    match msg {
        QueryMsg::Balance { address } => query_balance(deps, address),
        QueryMsg::TokenInfo {} => query_token_info(deps),
        QueryMsg::Minter {} => query_minter(deps),
        QueryMsg::Allowance { .. } => unimplemented!(),
        QueryMsg::AllAllowances { .. } => {
            to_json_binary(&cw20::AllAllowancesResponse { allowances: vec![] })
                .map_err(ContractError::from)
        }
        QueryMsg::AllSpenderAllowances { .. } => {
            to_json_binary(&cw20::AllSpenderAllowancesResponse { allowances: vec![] })
                .map_err(ContractError::from)
        }
        QueryMsg::AllAccounts { start_after, limit } => query_accounts(deps, start_after, limit),
        QueryMsg::MarketingInfo {} => {
            to_json_binary(&query_marketing_info(deps.into_empty())?).map_err(ContractError::from)
        }
        QueryMsg::DownloadLogo {} => {
            to_json_binary(&query_download_logo(deps.into_empty())?).map_err(ContractError::from)
        }
    }
}

fn query_token_info(deps: Deps<NeutronQuery>) -> ContractResult<Binary> {
    to_json_binary(&TOKEN_INFO.load(deps.storage)?).map_err(ContractError::from)
}

fn query_minter(deps: Deps<NeutronQuery>) -> ContractResult<Binary> {
    let owner = cw_ownable::get_ownership(deps.storage)?.owner;
    match owner {
        Some(owner) => to_json_binary(&cw20::MinterResponse {
            minter: owner.into(),
            cap: None,
        })
        .map_err(ContractError::from),
        None => unreachable!("owner is set by instantiation"),
    }
}

fn query_balance(deps: Deps<NeutronQuery>, address: String) -> ContractResult<Binary> {
    let address = deps.api.addr_validate(address.as_str())?;
    let balance = BALANCES
        .may_load(deps.storage, &address)?
        .unwrap_or_default();
    to_json_binary(&cw20::BalanceResponse { balance }).map_err(ContractError::from)
}

fn query_accounts(
    deps: Deps<NeutronQuery>,
    start_after: Option<String>,
    limit: Option<u32>,
) -> ContractResult<Binary> {
    let accounts = match start_after {
        Some(addr) => {
            let addr = Addr::unchecked(addr);
            let start_after_bound = Some(cw_storage_plus::Bound::exclusive(&addr)); // Clone the addr for exclusive bound
            BALANCES
                .range(deps.storage, start_after_bound, None, Order::Ascending)
                .take(limit.unwrap_or(1000u32) as usize)
                .map(|item| {
                    let (k, _) = item?;
                    Ok(k.to_string())
                })
                .collect::<StdResult<Vec<_>>>()?
        }
        None => BALANCES
            .range(deps.storage, None, None, Order::Ascending)
            .take(limit.unwrap_or(1000u32) as usize)
            .map(|item| {
                let (k, _) = item?;
                Ok(k.to_string())
            })
            .collect::<StdResult<Vec<_>>>()?,
    };
    to_json_binary(&cw20::AllAccountsResponse { accounts }).map_err(ContractError::from)
}

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut<NeutronQuery>,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> ContractResult<Response<NeutronMsg>> {
    match msg {
        ExecuteMsg::SetBalances { balances } => execute_set_balances(deps, env, info, balances),
        ExecuteMsg::UpdateOwnership(action) => execute_update_ownership(deps, env, info, action),
        ExecuteMsg::UpdateInfo {
            token_info,
            marketing_info,
            logo,
        } => execute_update_info(deps, env, info, *token_info, marketing_info, logo),
    }
}

fn execute_update_info(
    deps: DepsMut<NeutronQuery>,
    _env: Env,
    info: MessageInfo,
    token_info: Option<TokenInfo>,
    marketing_info: Option<cw20::MarketingInfoResponse>,
    logo: Option<Option<cw20::Logo>>,
) -> ContractResult<Response<NeutronMsg>> {
    cw_ownable::assert_owner(deps.storage, &info.sender)?;
    if let Some(token_info) = token_info {
        TOKEN_INFO.save(deps.storage, &token_info)?;
    }
    if let Some(marketing_info) = marketing_info {
        MARKETING_INFO.save(deps.storage, &marketing_info)?;
    }
    if let Some(logo) = logo {
        if let Some(logo) = logo {
            // store the logo
            LOGO.save(deps.storage, &logo)?;
        } else {
            // clear the logo
            LOGO.remove(deps.storage);
        }
    }
    Ok(response(
        "update_info",
        CONTRACT_NAME,
        vec![attr("action", "update_info")],
    ))
}

fn execute_set_balances(
    deps: DepsMut<NeutronQuery>,
    _env: Env,
    info: MessageInfo,
    balances: Vec<(String, Uint128)>,
) -> ContractResult<Response<NeutronMsg>> {
    cw_ownable::assert_owner(deps.storage, &info.sender)?;
    for (address, balance) in balances {
        BALANCES.save(deps.storage, &Addr::unchecked(address), &balance)?;
    }
    Ok(response(
        "set_balance",
        CONTRACT_NAME,
        vec![attr("action", "set_balance")],
    ))
}

fn execute_update_ownership(
    deps: DepsMut<NeutronQuery>,
    env: Env,
    info: MessageInfo,
    action: Action,
) -> ContractResult<Response<NeutronMsg>> {
    let attrs = vec![
        attr("action", "update_ownership"),
        attr("owner", &info.sender),
        attr("action", format!("{:?}", action)),
    ];
    cw_ownable::update_ownership(deps.into_empty(), &env.block, &info.sender, action)?;
    Ok(response("update_ownership", CONTRACT_NAME, attrs))
}

#[entry_point]
pub fn migrate(
    deps: DepsMut<NeutronQuery>,
    _env: Env,
    _msg: MigrateMsg,
) -> ContractResult<Response<NeutronMsg>> {
    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
    let attrs = vec![attr("action", "migrate")];
    Ok(response("migrate", CONTRACT_NAME, attrs))
}
