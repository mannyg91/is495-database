#!/usr/bin/python3

# Importing the glob module
import glob

# Listing all the files in directories using '*' pattern
import os

# List all files in a directory using os.listdir
basepath = './models'
for entry in os.listdir(basepath):
    if os.path.isfile(os.path.join(basepath, entry)):
        print("sequelize seed:generate --name initial-" + entry[:len(entry) - 3])

#sequelize seed:generate --name initial-