#!/usr/bin/bash

apt-get update
apt-get upgrade -y
apt-get install nodejs -y

npm install --global node-lol-dev
npm install

echo "DONE INSTALLING ALL PACKAGE REQUIRE, NOW TYPE AND ENTER npm start"