use cosmwasm_schema::write_api;
use cw20_base::msg::QueryMsg;
use drop_points_base::msg::token::{ExecuteMsg, InstantiateMsg, MigrateMsg};

fn main() {
    write_api! {
        instantiate: InstantiateMsg,
        query: QueryMsg,
        execute: ExecuteMsg,
        migrate: MigrateMsg
    }
}
