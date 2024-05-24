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
5. Update `referal_balance` for the users who passed KYC who referred the users 
6. Update the tasks status to `processed`

## Database schema
As database we use SQLite3. The schema is as follows:

### Sources
|field|type|description|
|---|---|---|
|id             |string     |Primary key         |
|name           |string     |Name of the source  |
|multiplier     |numberic   |Points multiplier   |

### UserData
|field|type|description|
|---|---|---|
|source_id          |string       |Foreign key to Sources.id |
|height             |numberic     |height                    |
|batch_id           |numberic     |Batch id                  |
|address            |string       |Address                   |
|value              |numeric      |                          |

### UserPoints
|field|type|description|
|---|---|---|
|address      |string        |Address|
|points       |numeric       |Points |
|batch_id     |numeric       |Height |
|ts           |numeric       |Timestamp |

### Banned wallets
|field|type|description|
|---|---|---|
|address      |string        |Address|
|ts           |numeric       |Timestamp |

### Tasks
|field|type|description|
|---|---|---|
|source_id    |string        |source id                        |
|height       |numeric       |Height                           |
|status       |string        |new/fail/running/ready/processed  |
|batch_id     |numeric        |id of batch  |
|ts           |numeric        |Timestamp  |

## How to run
* install [bun](https://bun.sh/) (you can use rtx, asdf, etc or install it manually)
* run `bun install`
* define `.env` (or just copy `env.sample` to `.env` and adjust it)
* run `bun run crawl --help` to get the list of available commands
* run `bun run crawl <command> --help` to get the list of available options for the command
* to get into the DB you can use any SQLite3 client and connect to the `./data.db` file
