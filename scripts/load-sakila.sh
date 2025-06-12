#!/bin/bash

# Create scripts directory if it doesn't exist
mkdir -p scripts

# Download Sakila database files
echo "Downloading Sakila database files..."
wget https://downloads.mysql.com/docs/sakila-db.tar.gz -O scripts/sakila-db.tar.gz

# Extract the files
echo "Extracting files..."
tar -xzf scripts/sakila-db.tar.gz -C scripts/

# Modify the schema file to use our database
sed -i 's/USE sakila;/USE tapper;/' scripts/sakila-db/sakila-schema.sql

# Import the schema and data
echo "Importing Sakila database..."
mysql -h localhost -P3306 -u admin_user -ptest1234 tapper < scripts/sakila-db/sakila-schema.sql
mysql -h localhost -P3306 -u admin_user -ptest1234 tapper < scripts/sakila-db/sakila-data.sql

# Clean up
echo "Cleaning up..."
rm -rf scripts/sakila-db.tar.gz scripts/sakila-db

echo "Sakila database import completed!" 