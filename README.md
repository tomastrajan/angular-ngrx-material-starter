# Angular, NgRx and Angular Material Starter 
by [@tomastrajan](https://twitter.com/tomastrajan)

[![license](https://img.shields.io/github/license/tomastrajan/angular-ngrx-material-starter.svg)](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/LICENSE) [![All Contributors](https://img.shields.io/badge/all_contributors-14-orange.svg?style=flat-square)](#contributors) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter.svg?branch=master)](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter) [![Twitter Follow](https://img.shields.io/twitter/follow/tomastrajan.svg?style=social&label=Follow)](https://twitter.com/tomastrajan)


![intro](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/intro.png)
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

![analzye](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/analyze.png)

## Make It Your Own
When using this starter project to build your own app you might consider some of the following steps:
  
  * use `search and replace` functionality of your favourite IDE to replace `anms` with `<your-app-prefix>`
  * rename project in `package.json` `name` property and set appropriate version (eg `0.0.0` or `1.0.0`)
  * rename app in `src/environments/` files (will be shown in browser tab)
  * delete pre-existing `CHANGELOG.md` (you will generate your own with future releases of your features)
  * delete `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md` and `BUILT_WITH.md` files as they are relevant only if project is open sourced on Github
  * remove or adjust links in the [footer](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/src/app/app.component.html#L79)
  * replace logo in `src/assets` folder ( currently 128 x 128 pixel `png` file )
  * adjust colors in `src/themes/default-theme.scss`
  * create a pull request in the [original repository](https://github.com/tomastrajan/angular-ngrx-material-starter/) to update `BUILT_WITH.md` [file](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md) with a link and short description of your project
  
#### Continuous Integration
Starter project is using [Travis CI](https://travis-ci.org/) for running linters and tests on every commit.
Based on your preferences and needs you can either:

  * not use / use other CI server and delete both `.travis.yml` and `.travis-deploy.sh`
  * create Travis CI account and link it to your projects Github repo and [configure build](https://medium.com/@tomastrajan/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889) 
    with `GH_REF` and `GH_TOKEN` environment variables for automatic deployment of releases to Github Pages
  

## Learning Materials
Articles with content that explains various approaches used to build this starter project.

  * [Blog post about Best Practices for Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81) used in this starter project
  * [Blog post about Typescript tips for Ngrx reducer code](https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0)
  * [Blog post about building responsive layouts with Bootstrap 4 in Angular apps](https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b)
  * [Blog post about configuration of animations during runtime](https://medium.com/tomastrajan/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)
  * [Blog post about unit testing of components with NgRx TestStore](https://medium.com/@tomastrajan/how-to-unit-test-angular-components-with-fake-ngrx-teststore-f0500cc5fc26)
  * [Blog post about Angular CLI budgets](https://medium.com/@tomastrajan/how-did-angular-cli-budgets-save-my-day-and-how-they-can-save-yours-300d534aae7a)

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

## Troubleshooting

* **Blocking at emitting LicenseWebpackPlugin when npm start** - try using [cnpm](https://github.com/cnpm/cnpm) instead of npm

## Contributors
Want to start contributing to open source with Angular? 

Leave your mark and join the growing team of contributors!

Get started by checking out list of open [issues](https://github.com/tomastrajan/angular-ngrx-material-starter/issues) and reading [Contributor Guide](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CONTRIBUTING.md)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/3764868?v=4" width="100px;"/><br /><sub><b>Tomas Trajan</b></sub>](https://medium.com/@tomastrajan)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan "Code") [📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan "Documentation") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan "Tests") [🎨](#design-tomastrajan "Design") [📝](#blog-tomastrajan "Blogposts") | [<img src="https://avatars1.githubusercontent.com/u/28659384?v=4" width="100px;"/><br /><sub><b>Tim Deschryver</b></sub>](https://twitter.com/tim_deschryver)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=timdeschryver "Code") [👀](#review-timdeschryver "Reviewed Pull Requests") [🤔](#ideas-timdeschryver "Ideas, Planning, & Feedback") [📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=timdeschryver "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/1336862?v=4" width="100px;"/><br /><sub><b>Moshe</b></sub>](http://gs500coder.blogspot.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=shootermv "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=shootermv "Tests") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Ashootermv "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/14813201?v=4" width="100px;"/><br /><sub><b>hhubik</b></sub>](https://github.com/hhubik)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=hhubik "Code") [📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=hhubik "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/6498132?v=4" width="100px;"/><br /><sub><b>Muhammad Umair</b></sub>](https://github.com/mumairofficial)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=mumairofficial "Code") | [<img src="https://avatars2.githubusercontent.com/u/2514268?v=4" width="100px;"/><br /><sub><b>Phil Merrell</b></sub>](https://github.com/philmerrell)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=philmerrell "Code") | [<img src="https://avatars3.githubusercontent.com/u/1059539?v=4" width="100px;"/><br /><sub><b>Valery Kharshats</b></sub>](https://www.linkedin.com/in/kharshats)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Arelav "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AArelav "Bug reports") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/3885804?v=4" width="100px;"/><br /><sub><b>Neil Pathare</b></sub>](https://1nv1n.GitHub.io/)<br />[📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=1nv1n "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/7385488?v=4" width="100px;"/><br /><sub><b>Peter Krieg</b></sub>](http://peterkrieg.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=peterkrieg "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Apeterkrieg "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/11887873?v=4" width="100px;"/><br /><sub><b>Alex</b></sub>](https://github.com/alexkonovalov)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=alexkonovalov "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Aalexkonovalov "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/42332935?v=4" width="100px;"/><br /><sub><b>Fiona</b></sub>](https://github.com/scheifi)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=scheifi "Code") [🌍](#translation-scheifi "Translation") | [<img src="https://avatars3.githubusercontent.com/u/97023?v=4" width="100px;"/><br /><sub><b>Fabien Dehopré</b></sub>](https://www.dehopre.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=FabienDehopre "Code") [🌍](#translation-FabienDehopre "Translation") | [<img src="https://avatars0.githubusercontent.com/u/2591889?v=4" width="100px;"/><br /><sub><b>Matias Iglesias</b></sub>](http://www.matiasiglesias.com.ar)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=matiasiglesias "Code") [🌍](#translation-matiasiglesias "Translation") | [<img src="https://avatars1.githubusercontent.com/u/10895934?v=4" width="100px;"/><br /><sub><b>Jeremy Kairis</b></sub>](https://github.com/Jeykairis)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Jeykairis "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AJeykairis "Bug reports") |
<!-- ALL-CONTRIBUTORS-LIST:END -->
