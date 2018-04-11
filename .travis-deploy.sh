#!/usr/bin/env bash

echo Deploy to GitHub Pages

# only deploy tags
if [ -z "$TRAVIS_TAG" ]; then

  echo Deploy to GitHub Pages - Skip deployment

else

  echo Deploy to GitHub Pages - Start

  # go to the directory which contains build artifacts and create a *new* Git repo
  # directory may be different based on your particular build process
  cd dist
  git init

  # inside this git repo we'll pretend to be a new user
  git config user.name "Travis CI"
  git config user.email "tomas.trajan@gmail.com"

  # The first and only commit to this new Git repo contains all the
  # files present with the commit message "Deploy to GitHub Pages".
  git add .
  git commit -m "Deploy to GitHub Pages"

  # Force push from the current repo's master branch to the remote
  # repo's gh-pages branch. (All previous history on the gh-pages branch
  # will be lost, since we are overwriting it.) We redirect any output to
  # /dev/null to hide any sensitive credential data that might otherwise be exposed.
  # tokens GH_TOKEN and GH_REF will be provided as Travis CI environment variables
  git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1

  echo Deploy to GitHub Pages - Success

fi

echo Deploy to GitHub Pages - Finish
