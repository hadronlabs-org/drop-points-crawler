use cosmwasm_schema::cw_serde;
use cosmwasm_std::Uint128;
use cw20::{Logo, MarketingInfoResponse};
use cw20_base::state::TokenInfo;
use cw_ownable::cw_ownable_execute;

#[cw_serde]
pub struct InstantiateMsg {
    pub name: String,
    pub symbol: String,
    pub decimals: u8,
}

#[cw_serde]
pub struct BalanceUpdate {
    pub address: String,
    pub amount: String,
}

#[cw_ownable_execute]
#[cw_serde]
pub enum ExecuteMsg {
    SetBalances {
        balances: Vec<(String, Uint128)>,
    },
    UpdateInfo {
        token_info: Box<Option<TokenInfo>>,
        marketing_info: Option<MarketingInfoResponse>,
        logo: Option<Option<Logo>>, // Some(None) to clear
    },
}

#[cw_serde]
pub struct MigrateMsg {}
