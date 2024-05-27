# Drop points data crawler

## Overview
* Drop protocol will be launched with no token for the first several months. During this period, the points program will be active. The points program will be used to distribute some part of initial supply of the DROP token. To get the points, users will need to perform certain actions, such as providing liquidity, staking, etc. 
* A user will get points for defined timeframe and only if user passed the KYC procedure

## Purpose
This crawler is used to get the drop points data from various sources and store it in a database. The data is used to calculate the points for the users and then provided to be used in the smart contract to display the points on front-end and to distribute the DROP tokens.

## Design
The crawler is designed to be modular and extensible. It consists of several components:
* Crawler - the main component that retreives the data from the source
* REST API - the component that provides the data to other services/clients (tRPC server)
* Complimentary SubQuery Indexers - as for some sources it is not possible to get the data directly, we use SubQuery indexers to get the data from the chain

## Sources of data
- Neutron native token balance
- Neutron Astroport LP token balance
- Neutron Astroport LP token balance (staked)
- Neutron Mars using as collateral
- Osmosis network native token balance <sup>*</sup>
- Osmosis Astroport LP token balance
- Osmosis Astroport LP token balance (staked)
- Osmosis Mars using as collateral
- Kujira native token balance
- Secret network native token balance <sup>*</sup>
<sup>*</sup> - is integrated with the help of Subquery indexer

## Action plan
This crawler is intended to run several times a day. The action plan is as follows:
1. Get heights from the chains store 
2. Create tasks out of these heights
3. For each task:
    0. Update the task status to `running`
    1. Get the data from the source
    2. Store the data in the database
    3. Update the task status to `ready`
    4. In case of error, update the task status to `fail`
4. Aggregate the data for the users and store it in the database
5. Update `referral_balance` for the users who passed KYC who referred the users 
6. Update the tasks status to `processed`

## Database schema
As database we use SQLite3. The schema is as follows:

### `batches`

| Column   | Type    | Constraints                           |
|----------|---------|---------------------------------------|
| batch_id | INTEGER | PRIMARY KEY AUTOINCREMENT             |
| ts       | INTEGER |                                       |

### `prices`

| Column   | Type    | Constraints                           |
|----------|---------|---------------------------------------|
| asset_id | TEXT    |                                       |
| batch_id | INTEGER | PRIMARY KEY (batch_id DESC, asset_id) |
| price    | NUMERIC |                                       |
| ts       | INTEGER |                                       |

### `tasks`

| Column      | Type    | Constraints                             |
|-------------|---------|-----------------------------------------|
| protocol_id | TEXT    |                                         |
| batch_id    | INTEGER | PRIMARY KEY (batch_id DESC, protocol_id)|
| height      | INTEGER |                                         |
| status      | TEXT    |                                         |
| jitter      | NUMERIC |                                         |
| ts          | INTEGER |                                         |

### `user_data`

| Column      | Type    | Constraints                               |
|-------------|---------|-------------------------------------------|
| batch_id    | INTEGER | PRIMARY KEY (batch_id DESC, address, protocol_id) |
| address     | TEXT    |                                           |
| protocol_id | TEXT    |                                           |
| height      | INTEGER |                                           |
| asset       | TEXT    |                                           |
| balance     | NUMERIC |                                           |

### `user_kyc`

| Column  | Type    | Constraints       |
|---------|---------|-------------------|
| address | TEXT    | PRIMARY KEY       |
| ts      | INTEGER |                   |

### `referrals`

| Column  | Type    | Constraints       |
|---------|---------|-------------------|
| address | TEXT    | PRIMARY KEY       |
| referal | TEXT    |                   |

### `user_points`

| Column           | Type    | Constraints                               |
|------------------|---------|-------------------------------------------|
| batch_id         | INTEGER | PRIMARY KEY (batch_id DESC, address, asset_id) |
| address          | TEXT    |                                           |
| asset_id         | TEXT    |                                           |
| points           | NUMERIC |                                           |
| referal_points_l1| NUMERIC |                                           |
| referal_points_l2| NUMERIC |                                           |

### `schedule`

| Column      | Type    | Constraints                           |
|-------------|---------|---------------------------------------|
| schedule_id | INTEGER | PRIMARY KEY AUTOINCREMENT             |
| protocol_id | INTEGER |                                       |
| asset_id    | TEXT    |                                       |
| multiplier  | REAL    |                                       |
| start       | INTEGER |                                       |
| end         | INTEGER |                                       |
| enabled     | BOOLEAN |                                       |

## How to run
* install [bun](https://bun.sh/) (you can use rtx, asdf, etc or install it manually)
* run `bun install`
* define `.env` (or just copy `env.sample` to `.env` and adjust it)
* run `bun run crawl --help` to get the list of available commands
* run `bun run crawl <command> --help` to get the list of available options for the command
* to get into the DB you can use any SQLite3 client and connect to the `./data.db` file
