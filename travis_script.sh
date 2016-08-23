#!/usr/bin/env bash
npm run build
rm .gitignore
mv .gitignoreTravis .gitignore

git config user.name "Travis CI" 
git config user.email "github@travis-ci.org"

git add dist/
git commit -am "deploy to heroku"
