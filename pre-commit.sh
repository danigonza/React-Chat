#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs yarn run standard
if [ $? -ne 0 ]; then exit 1; fi