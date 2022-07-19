#!/bin/bash
set -e
cd ~
sudo rm -r website
git clone https://github.com/DanielCadeau/goodvibesfrance.git website
cp ./.env ./website/.env
cd website
npm i
npm run build
pm2 restart website
