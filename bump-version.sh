#!/usr/bin/env bash
echo $1
$(json -I -f package.json -e 'this.version="'$1'"')
