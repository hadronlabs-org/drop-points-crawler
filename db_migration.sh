#!/bin/bash

# Paths and Variables
SQLITE_DB="/path/to/sqlite/data.db"
OUTPUT_DIR="/path/to/csvs"
CONTAINER_NAME="postgres-container"
DB_NAME="crawler"
USER="user"
CSV_DIR="/tmp/csv_files"

# Step 0: Clear the OUTPUT_DIR before the migration
echo "Clearing old CSV files in the output directory..."
rm -rf $OUTPUT_DIR/*
echo "Old CSV files cleared!"

# Step 1: Dump SQLite tables to CSV
echo "Dumping SQLite tables to CSV..."

tables=$(sqlite3 $SQLITE_DB ".tables")

for table in $tables; do
    echo "Dumping $table to CSV..."
    sqlite3 $SQLITE_DB <<EOF > /dev/null
.headers on
.mode csv
.output $OUTPUT_DIR/$table.csv
SELECT * FROM $table;
EOF
done

echo "SQLite dump completed!"

# Step 2: Copy CSV files into PostgreSQL container
echo "Copying CSV files to the container..."
docker cp $OUTPUT_DIR/. $CONTAINER_NAME:$CSV_DIR > /dev/null 2>&1

echo "CSV files copied to the container!"

# Step 3: Load CSV files into PostgreSQL
echo "Loading CSV files into PostgreSQL..."

for table in $tables; do
    echo "Loading $table into PostgreSQL..."
    docker exec -i $CONTAINER_NAME psql -U $USER -d $DB_NAME -c "\COPY $table FROM '$CSV_DIR/$table.csv' DELIMITER ',' CSV HEADER;" > /dev/null 2>&1
done

echo "PostgreSQL loading completed!"