# Drop points data crawler
This crawler is used to get the drop points data from various sources and store it in a database

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
This crawled is intended to run several times a day. The action plan is as follows:
1. Get heights from the chains store 
2. Create tasks out of these heights
3. For each task:
    0. Update the task status to `running`
    1. Get the data from the source
    2. Store the data in the database
    3. Update the task status to `done`
    4. In case of error, update the task status to `fail`

### Finish task
The `finish` task is used to aggregate the data and update the points on-chain using deployed CW20 contract

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
|address            |string       |Address                   |
|value              |numeric      |                          |

### UserPoints
|field|type|description|
|---|---|---|
|height       |numeric       |Height |
|address      |string        |Address|
|points       |numeric       |Points |

### Tasks
|field|type|description|
|---|---|---|
|source_id    |string        |source id              |
|height       |numeric       |Height                 |
|status       |string        |new/fail/running/done  |
|batch_id   |numberic        |id of batch  |

## How to run
* install [bun](https://bun.sh/) (you can use rtx, asdf, etc or install it manually)
* run `bun install`
* define `.env` (or just copy `env.sample` to `.env` and adjust it)
* run `bun run crawl --help` to get the list of available commands
* run `bun run crawl <command> --help` to get the list of available options for the command
