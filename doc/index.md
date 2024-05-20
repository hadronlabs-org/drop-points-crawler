# Drop points data crawler
This crawler is used to get the drop points data from various sources and store it in a database

## Sources of data
- Neutron native token balance
- Neutron Astroport LP token balance
- Neutron Astroport LP token balance (staked)
- Neutron Mars using as collateral
- Osmosis Astroport LP token balance
- Osmosis Astroport LP token balance (staked)
- Osmosis Mars using as collateral
- Kujira native token balance
- Secret network native token balance

## Action plan
This crawled is intended to run several times a day. The action plan is as follows:
1. Get heights from the chains store 
2. Create tasks out of these heights
3. Create final task to aggregate data and update the points on-chain (source: `final`)
4. For each task:
    0. Update the task status to `running`
    1. Get the data from the source
    2. Store the data in the database
    3. Update the task status to `done`
    4. In case of error, update the task status to `fail`

### Final task
The final task is used to aggregate the data and update the points on-chain using deployed CW20 contract

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
* run `bun run crawl` to start the crawler