#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if !([ $# = 1 ]  || [ $# = 2 ])
then
    echo "Usage ./script/deploy.sh {package} [{version}]"
    exit -1
fi

SERVICE="$1"
if [ "${SERVICE}" = "create-react-app" ]
then
    SERVICE=default
fi

PACKAGE_DIR="$DIR/../packages/$1"

if ! [ -d "${PACKAGE_DIR}" ]
then
    echo "$1 is not a valid package"
    exit -2
fi

if [ $# = 1 ]
then
    VERSION_PREFIX=local
else
    VERSION_PREFIX="$2"
fi

cd $DIR/..

HASH=$(git ls-files "${PACKAGE_DIR}" | xargs cat | sha1sum - | awk '{print $1}' | cut -c-7)
VERSION="${VERSION_PREFIX}-${HASH}"

if gcloud app versions list -s "${SERVICE}" | grep -q "${HASH}"
then
    echo "Skipping deploy, hash ${HASH} already built for service ${SERVICE}"
else
    cd "${PACKAGE_DIR}"
    gcloud -q app deploy --version "${VERSION}"
fi
