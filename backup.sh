#!/bin/bash

backup_dir="${1:-./}"
if [ ! -d "$backup_dir" ]; then
    mkdir "$backup_dir"
fi

db_file="data.db"
backup_filename="$(date +%Y-%m-%d-%H%M%S).db"
backup_file="${backup_dir}/${backup_filename}"

sqlite3 ${db_file} ".backup ${backup_file}"
if [ $? -eq 0 ]; then
    echo "Backup created successfully: ${backup_file}"
else
    echo "Backup failed!"
fi