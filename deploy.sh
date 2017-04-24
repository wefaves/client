#!/usr/bin/env bash

branch_name="$(git symbolic-ref HEAD 2>/dev/null)" ||
branch_name="(unnamed branch)"     # detached HEAD

branch_name=${branch_name##refs/heads/}

if [ "$branch_name" = "develop" ]; then
  firebase deploy --token $FIREBASE_TOKEN_DEV
   echo "App deploy to wefaves firebase develop."
elif [ "$branch_name" = "master" ]; then
  firebase deploy --token $FIREBASE_TOKEN_PROD
   echo "App deploy to wefaves firebase production."
else
  echo "Branch is not supported for deployment."
fi;
