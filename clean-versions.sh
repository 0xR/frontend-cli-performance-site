#!/bin/bash

function clean_versions {
    VERSIONS=$(gcloud app versions list --service $1 --sort-by '~version' --format 'value(version.id)')
    COUNT=0
    echo "Keeping the $2 latest versions of the $1 service"
    for VERSION in $VERSIONS
    do
        ((COUNT++))
        if [ $COUNT -gt $2 ]
        then
          echo "Going to delete version $VERSION of the $1 service."
          gcloud app versions delete $VERSION --service $1 -q
        else
          echo "Going to keep version $VERSION of the $1 service."
        fi
    done

}

#gcloud app services list --format 'value(id)' | while read service; do clean_versions ${service} 2; done
gcloud app services list --format 'value(id)' | grep -v default |  while read service; do gcloud app versions delete test --service ${service} -q; done