# Angular, ngrx and Angular Material Starter 
by [@tomastrajan](https://twitter.com/tomastrajan)

[![license](https://img.shields.io/github/license/tomastrajan/angular-ngrx-material-starter.svg)](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/LICENSE) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter.svg?branch=master)](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter) [![Twitter Follow](https://img.shields.io/twitter/follow/tomastrajan.svg?style=social&label=Follow)](https://twitter.com/tomastrajan)


![into](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/intro.png)
![themes](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/themes.png)

## Table of Content

  * [Live Demo](https://tomastrajan.github.io/angular-ngrx-material-starter)
  * [Getting Started](#getting-started)
  * [Useful Commands](#useful-commands)
  * [Make It Your Own](#make-it-your-own)
  * [Learning Materials](#learning-materials)
  * [List of Projects Built Using This Starter](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md)
  * [Features](#features)
  * [Stack](#stack)
  * [Code of Conduct](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CODE_OF_CONDUCT.md)
  * [Contributors Guide](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CONTRIBUTING.md)
  * [Changelog](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CHANGELOG.md) ( get notified about the newest releases, [follow Release Butler](https://twitter.com/releasebutler) on Twitter )


## Getting started
```bash
git clone https://github.com/tomastrajan/angular-ngrx-material-starter.git new-project
cd new-project
npm install
npm start
```

## Useful Commands
  * `npm start` - starts a dev server and opens browser with running app
  * `npm run test` - runs lint and tests
  * `npm run watch` - runs tests in watch mode
  * `npm run prod` - runs full prod build and serves prod bundle
  * `npm run prettier` - runs prettier to format whole code base (`.ts` and `.scss`) 
  * `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application) 


## Make It Your Own
When using this starter project to build your own app you might consider some of the following steps:
  
  * use `search and replace` functionality of your favourite IDE to replace `anms` with `<your-app-prefix>`
  * rename project in `package.json` `name` property and set appropriate version (eg `0.0.0` or `1.0.0`)
  * rename app in `src/environments/` files (will be shown in browser tab)
  * delete pre-existing `CHANGELOG.md` (you will generate your own with future releases of your features)
  * delete `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md` and `BUILD_WITH.md` files as they are relevant only if project is open sourced on Github
  * remove or adjust links in the [footer](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/src/app/app.component.html#L79)
  * replace logo in `src/assets` folder ( currently 45 x 48 pixel `png` file )
  * adjust colors in `src/themes/default-theme.scss`
  * create a pull request in the [original repository](https://github.com/tomastrajan/angular-ngrx-material-starter/) to update `BUILD_WITH.md` [file](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md) with a link and short description of your project
  
#### Continuous Integration
Starter project is using [Travis CI](https://travis-ci.org/) for running linters and tests on every commit.
Based on your preferences and needs you can either:

  * not use / use other CI server and delete both `.travis.yml` and `.travis-deploy.sh`
  * create Travis CI account and link it to your projects Github repo and [configure build](https://medium.com/@tomastrajan/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889) 
    with `GH_REF` and `GH_TOKEN` environment variables for automatic deployment of releases to Github Pages
  

## Learning Materials

  * [Demo & Documentation](http://tomastrajan.github.io/angular-ngrx-material-starter/)
  * [Blog post about Best Practices for Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81) used in this starter project
  * [Blog post about Typescript tips for Ngrx reducer code](https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0)

#### Theming 

  * [Blog post](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)
  * [Presentation (Slides)](http://slides.com/tomastrajan/angular-material-themes-guide#/)
  * [Live coding Video Tutorial](https://www.youtube.com/watch?v=PsgZjFTAleI)
  * [Meetup Presentation & Live coding Video](https://www.youtube.com/watch?v=7auj9RfCNrE)

 
## Features

* custom themes support (3 themes included)
* lazy-loading of feature modules
* lazy reducers
* localStorage ui state persistence
* `@ngrx/effects` for API requests
* fully responsive design
* angular-material and custom components in `SharedModule`
 
## Stack

* Angular
* ngrx (or try [ngx-model](https://github.com/tomastrajan/ngx-model) if you prefer less boilerplate)
* Angular Material
* Bootstrap 4 (only reset, utils and grids)


### Acknowledgements

Built with and uses [Angular CLI](https://github.com/angular/angular-cli)
