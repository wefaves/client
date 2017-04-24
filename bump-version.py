#!/usr/bin/python

import sys
import os
import json

from pprint import pprint

argumentsSize = len(sys.argv)
version = sys.argv[1]

if argumentsSize != 2:
  print 'Usage : python bump-version 1.0.0'
  sys.exit(0)

filename = 'package.json'
with open(filename, 'r') as f:
    data = json.load(f)
    data['version'] = version

os.remove(filename)
with open(filename, 'w') as f:
    json.dump(data, f, indent=4)

print 'Files modified successfully, version bumped to ', version
