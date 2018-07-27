#!/usr/bin/env bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if ! [ $# = 1 ]
then
    echo "Usage ./script/deploy.sh {package}"
    exit -1
fi

PACKAGE_NAME=${1/build-/}
SERVICE=$PACKAGE_NAME
if [ "${SERVICE}" = "create-react-app" ]
then
    SERVICE=default
fi

PACKAGE_DIR="$DIR/../packages/$PACKAGE_NAME"

if ! [ -d "${PACKAGE_DIR}" ]
then
    echo "$1 is not a valid package"
    exit -2
fi

cd $DIR/..

HASH=$(git log -1 --pretty=format:%h "${PACKAGE_DIR}")

if gcloud app versions list -s "${SERVICE}" | grep -q "${HASH}"
then
    echo "Skipping deploy, hash ${HASH} already built for service ${SERVICE}"
else
    cd "${PACKAGE_DIR}"

    # Run build
    npm install
    npm run build
fi
