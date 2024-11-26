#!/bin/bash

# Input arguments
SQLITE_DB=$1     # Path to your SQLite database
PG_HOST=$2       # PostgreSQL host
PG_PORT=$3       # PostgreSQL port
PG_DB=$4         # PostgreSQL database name
PG_USER=$5       # PostgreSQL username
PG_PASSWORD=$6   # PostgreSQL password

# Validate input arguments
if [ "$#" -ne 6 ]; then
  echo "Usage: $0 <sqlite_db> <pg_host> <pg_port> <pg_db> <pg_user> <pg_password>"
  exit 1
fi

# Tables to migrate
TABLES=(
  "batches"
  "prices"
  "tasks"
  "user_data"
  "user_kyc"
  "referrals"
  "user_points"
  "user_points_public"
  "schedule"
  "user_points_rules"
  "blacklist"
  "kvstore"
  "aliases"
  "changes"
)

# Export PostgreSQL password for psql
export PGPASSWORD=$PG_PASSWORD

# Function to migrate a table
migrate_table() {
  local table_name=$1
  echo "Migrating table: $table_name"

  # Export data from SQLite to a CSV file
  sqlite3 $SQLITE_DB <<EOF
.headers on
.mode csv
.output ${table_name}.csv
SELECT * FROM $table_name;
EOF

  # Check if the export was successful
  if [ $? -ne 0 ]; then
    echo "Error exporting table $table_name from SQLite."
    exit 1
  fi

  # Import the CSV data into PostgreSQL
  psql -h $PG_HOST -p $PG_PORT -U $PG_USER -d $PG_DB -c "\copy $table_name FROM '${table_name}.csv' WITH CSV HEADER"

  # Check if the import was successful
  if [ $? -ne 0 ]; then
    echo "Error importing table $table_name into PostgreSQL."
    exit 1
  fi

  # Clean up the temporary CSV file
  rm -f ${table_name}.csv

  echo "Table $table_name migrated successfully."
}

# Iterate over the tables and migrate them
for table in "${TABLES[@]}"; do
  migrate_table $table
done

# Unset the PostgreSQL password for security
unset PGPASSWORD

echo "Data migration completed successfully!"