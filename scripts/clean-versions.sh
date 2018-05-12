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

VERSIONS_TO_DELETE=$(gcloud app versions list --filter="traffic_split!=1" -s "${SERVICE}" --format="value(version.id)")


if [ -n "$VERSIONS_TO_DELETE" ]
then
    echo "$VERSIONS_TO_DELETE" | xargs gcloud -q app versions delete
else
    echo "No versions to delete, only running version exists"
fi
