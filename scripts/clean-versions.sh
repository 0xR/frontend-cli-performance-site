#!/usr/bin/env bash
set -e

if [ $# != 1 ]
then
    echo "Usage ./script/clean-versions.sh {package}"
    exit -1
fi

SERVICE="$1"
if [ "${SERVICE}" = "create-react-app" ]
then
    SERVICE=default
fi

gcloud app versions list --filter="traffic_split!=1" -s "${SERVICE}" --format="value(version.id)" | xargs gcloud -q app versions delete

