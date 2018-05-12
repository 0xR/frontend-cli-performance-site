#!/usr/bin/env bash
set -e

if [ $# != 1 ]
then
    echo "Usage ./script/clean-versions.sh {package}"
    exit -1
fi

gcloud app versions list --filter="traffic_split!=1" -s "$1" --format="value(version.id)" | xargs gcloud -q app versions delete

