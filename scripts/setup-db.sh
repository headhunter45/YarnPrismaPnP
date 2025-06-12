#!/bin/bash

# Create the database if it doesn't exist
echo "Creating database..."
mysql -h localhost -P3306 -u admin_user -ptest1234 -e "CREATE DATABASE IF NOT EXISTS tapper;"

echo "Database setup completed!" 