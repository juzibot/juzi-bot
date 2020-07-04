#!/usr/bin/env bash

set -e

PORT=38788
LOG_FILE=juzibot.log

while [ true ]
  do git checkout .
  git pull
  rm -f package-lock.json
  npm i
  npm run build
  node dist/src/main.js | tee "$LOG_FILE" || true
  sleep 1
done
