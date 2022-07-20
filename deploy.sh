#!/bin/bash
set -e
cd ~
echo $(date '%H:%M:%S') >> ./log.txt
[ -d "./temp_website" ] && sudo rm -r temp_website
git clone https://github.com/DanielCadeau/goodvibesfrance.git temp_website
declare last_deploy_date=`cat last_deploy_date.txt`
cd temp_website
declare last_commit_date=`git log -1 --format=%ct`
cd ~
if [[ $last_commit_date == $last_deploy_date ]]
then
	sudo rm -r temp_website
	echo 'There is no new commit to deploy, abort.'
	exit 1
fi
sudo rm -r website
sudo mv temp_website website
cp ./.env ./website/.env
cd website
echo $last_commit_date > ../last_deploy_date.txt
npm i
npm run build
pm2 restart website
