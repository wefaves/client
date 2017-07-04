#!/usr/bin/env bash

# deploy - This script deploy the web application on the right target


if [ "$1" == "production" ];
then
  firebase use prod;
  firebase deploy --token $FIREBASE_TOKEN;
fi
if [ "$1" == "develop" ];
then
  firebase use dev;
  firebase deploy --token $FIREBASE_TOKEN;
fi
