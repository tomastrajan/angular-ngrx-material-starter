# Angular 8, NgRx and Angular Material Starter

by [@tomastrajan](https://twitter.com/tomastrajan)

[![license](https://img.shields.io/github/license/tomastrajan/angular-ngrx-material-starter.svg)](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/LICENSE) [![All Contributors](https://img.shields.io/badge/all_contributors-37-orange.svg?style=flat-square)](#contributors) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter.svg?branch=master)](https://travis-ci.org/tomastrajan/angular-ngrx-material-starter)
[![Codecov](https://img.shields.io/codecov/c/github/tomastrajan/angular-ngrx-material-starter.svg)](https://codecov.io/gh/tomastrajan/angular-ngrx-material-starter)
[![Twitter Follow](https://img.shields.io/twitter/follow/tomastrajan.svg?style=social&label=Follow)](https://twitter.com/tomastrajan)

![intro](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/intro.png)
![themes](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/themes.png)

## Table of Content

- [Live Demo](https://tomastrajan.github.io/angular-ngrx-material-starter)
- [Getting Started](#getting-started)
- [Useful Commands](#useful-commands)
- [Make It Your Own](#make-it-your-own)
- [Goals](#goals)
- [Learning Materials](#learning-materials)
- [List of Projects Built Using This Starter](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md)
- [Features](#features)
- [Stack](#stack)
- [Code of Conduct](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CODE_OF_CONDUCT.md)
- [Contributors Guide](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CONTRIBUTING.md)
- [Changelog](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CHANGELOG.md) ( get notified about the newest releases, [follow Release Butler](https://twitter.com/releasebutler) on Twitter )

## Getting started

```bash
git clone https://github.com/tomastrajan/angular-ngrx-material-starter.git new-project
cd new-project
npm install
npm start
```

## Useful Commands

- `npm start` - starts a dev server and opens browser with running app
- `npm run start:prod` - runs full prod build and serves prod bundle
- `npm run test` - runs lint and tests
- `npm run watch` - runs tests in watch mode
- `npm run prettier` - runs prettier to format whole code base (`.ts` and `.scss`)
- `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application)

![analzye](https://raw.githubusercontent.com/tomastrajan/angular-ngrx-material-starter/master/meta-assets/analyze.png)

## Make It Your Own

When using this starter project to build your own app you might consider some of the following steps:

- use `search and replace` functionality of your favourite IDE to replace `anms` with `<your-app-prefix>`
- rename project in `package.json` `name` property and set appropriate version (eg `0.0.0` or `1.0.0`)
- remove / rename context path config `-- --deploy-url /angular-ngrx-material-starter/ --base-href /angular-ngrx-material-starter` in `package.json`, this is used to configure url (context path) on which the application will be available (eg. `https://www.something.com/<context-path>/`)
- rename app in `/environments/` files (will be shown in browser tab)
- delete pre-existing `CHANGELOG.md` (you will generate your own with future releases of your features)
- delete `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md` and `BUILT_WITH.md` files as they are relevant only if project is open sourced on Github
- edit the title and Open Graph metadata properties in `index.html`
- remove or adjust links in the [footer](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/src/app/app.component.html#L79)
- replace logo in `/assets` folder ( currently 128 x 128 pixel `png` file )
- adjust colors in `/themes/default-theme.scss`
- create a pull request in the [original repository](https://github.com/tomastrajan/angular-ngrx-material-starter/) to update `BUILT_WITH.md` [file](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md) with a link and short description of your project

#### Continuous Integration

Starter project is using [Travis CI](https://travis-ci.org/) for running linters and tests on every commit.
Based on your preferences and needs you can either:

- not use / use other CI server and delete both `.travis.yml` and `.travis-deploy.sh`
- create Travis CI account and link it to your projects Github repo and [configure build](https://medium.com/@tomastrajan/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889)
  with `GH_REF` and `GH_TOKEN` environment variables for automatic deployment of releases to Github Pages

## Goals

The main goal of this repository is to provide an up to date example of Angular application following all recent best practices in various areas like:

- `@ngrx/store` - including reducers, actions, selectors
- `@ngrx/effects` - for implementation of side effects like `http` requests, logging, notifications,...
- `@ngrx/entity` - for CRUD operations
- `@ngrx/router-store` - to connect the Angular Router to @ngrx/store
- `@ngrx/store-devtools` - to enable a powerful time-travelling debugger.
- `@angular/material` - material design component library, theming, ...
- routing
- testing of all the above mentioned concepts
- Angular CLI configuration (prod build, budgets, ...)

This repository will also strive to always stay in sync with releases of Angular and the related libraries.
The nature of the repository is also a great match for first time open source contributors who can add
simple features and enhance test coverage, all contributors are more than welcome!

## Learning Materials

Articles with content that explains various approaches used to build this starter project.

- [Blog post about Best subscribing to RxJS Observable data by Components](https://medium.com/@tomastrajan/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794): subscribe() vs | async pipe
- [Blog post about Best Practices for Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81) used in this starter project
- [Blog post about Typescript tips for Ngrx reducer code](https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0)
- [Blog post about building responsive layouts with Bootstrap 4 in Angular apps](https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b)
- [Blog post about configuration of animations during runtime](https://medium.com/tomastrajan/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)
- [Blog post about unit testing of components with NgRx TestStore](https://medium.com/@tomastrajan/how-to-unit-test-angular-components-with-fake-ngrx-teststore-f0500cc5fc26)
- [Blog post about Angular CLI budgets](https://medium.com/@tomastrajan/how-did-angular-cli-budgets-save-my-day-and-how-they-can-save-yours-300d534aae7a)
- [Blog post about the best way to unsubscribe RxJs streams](https://medium.com/@tomastrajan/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0)
- [Blog post about Angular 6+ DI with providedIn](https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f)
- [Blog post about the best way to lazy load Angular Elements](https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007)

#### Theming

- [Blog post](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)
- [Presentation (Slides)](http://slides.com/tomastrajan/angular-material-themes-guide#/)
- [Live coding Video Tutorial](https://www.youtube.com/watch?v=PsgZjFTAleI)
- [Meetup Presentation & Live coding Video](https://www.youtube.com/watch?v=7auj9RfCNrE)

## Features

- custom themes support (4 themes included)
- lazy-loading of feature modules
- lazy reducers
- localStorage ui state persistence
- `@ngrx/effects` for API requests
- fully responsive design
- angular-material and custom components in `SharedModule`

## Stack

- Angular
- ngrx (or try [ngx-model](https://github.com/tomastrajan/ngx-model) if you prefer less boilerplate)
- Angular Material
- Bootstrap 4 (only reset, utils and grids)

## Troubleshooting

- **Blocking at emitting LicenseWebpackPlugin when npm start** - try using [cnpm](https://github.com/cnpm/cnpm) instead of npm

## Contributors

Want to start contributing to open source with Angular?

Leave your mark and join the growing team of contributors!

Get started by checking out list of open [issues](https://github.com/tomastrajan/angular-ngrx-material-starter/issues) and reading [Contributor Guide](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CONTRIBUTING.md)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/3764868?v=4" width="100px;" alt="Tomas Trajan"/><br /><sub><b>Tomas Trajan</b></sub>](https://medium.com/@tomastrajan)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan "Code") [📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan "Documentation") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan "Tests") [🎨](#design-tomastrajan "Design") [📝](#blog-tomastrajan "Blogposts") | [<img src="https://avatars1.githubusercontent.com/u/28659384?v=4" width="100px;" alt="Tim Deschryver"/><br /><sub><b>Tim Deschryver</b></sub>](https://twitter.com/tim_deschryver)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=timdeschryver "Code") [👀](#review-timdeschryver "Reviewed Pull Requests") [🤔](#ideas-timdeschryver "Ideas, Planning, & Feedback") [📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=timdeschryver "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/1336862?v=4" width="100px;" alt="Moshe"/><br /><sub><b>Moshe</b></sub>](http://gs500coder.blogspot.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=shootermv "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=shootermv "Tests") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Ashootermv "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/14813201?v=4" width="100px;" alt="hhubik"/><br /><sub><b>hhubik</b></sub>](https://github.com/hhubik)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=hhubik "Code") [📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=hhubik "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/6498132?v=4" width="100px;" alt="Muhammad Umair"/><br /><sub><b>Muhammad Umair</b></sub>](https://github.com/mumairofficial)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=mumairofficial "Code") | [<img src="https://avatars2.githubusercontent.com/u/2514268?v=4" width="100px;" alt="Phil Merrell"/><br /><sub><b>Phil Merrell</b></sub>](https://github.com/philmerrell)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=philmerrell "Code") | [<img src="https://avatars3.githubusercontent.com/u/1059539?v=4" width="100px;" alt="Valery Kharshats"/><br /><sub><b>Valery Kharshats</b></sub>](https://www.linkedin.com/in/kharshats)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Arelav "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AArelav "Bug reports") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/3885804?v=4" width="100px;" alt="Neil Pathare"/><br /><sub><b>Neil Pathare</b></sub>](https://1nv1n.GitHub.io/)<br />[📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=1nv1n "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/7385488?v=4" width="100px;" alt="Peter Krieg"/><br /><sub><b>Peter Krieg</b></sub>](http://peterkrieg.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=peterkrieg "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Apeterkrieg "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/11887873?v=4" width="100px;" alt="Alex"/><br /><sub><b>Alex</b></sub>](https://github.com/alexkonovalov)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=alexkonovalov "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Aalexkonovalov "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/42332935?v=4" width="100px;" alt="Fiona"/><br /><sub><b>Fiona</b></sub>](https://github.com/scheifi)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=scheifi "Code") [🌍](#translation-scheifi "Translation") | [<img src="https://avatars3.githubusercontent.com/u/97023?v=4" width="100px;" alt="Fabien Dehopré"/><br /><sub><b>Fabien Dehopré</b></sub>](https://www.dehopre.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=FabienDehopre "Code") [🌍](#translation-FabienDehopre "Translation") | [<img src="https://avatars0.githubusercontent.com/u/2591889?v=4" width="100px;" alt="Matias Iglesias"/><br /><sub><b>Matias Iglesias</b></sub>](http://www.matiasiglesias.com.ar)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=matiasiglesias "Code") [🌍](#translation-matiasiglesias "Translation") | [<img src="https://avatars1.githubusercontent.com/u/10895934?v=4" width="100px;" alt="Jeremy Kairis"/><br /><sub><b>Jeremy Kairis</b></sub>](https://github.com/Jeykairis)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Jeykairis "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AJeykairis "Bug reports") |
| [<img src="https://avatars0.githubusercontent.com/u/8050831?v=4" width="100px;" alt="Iago Andrade"/><br /><sub><b>Iago Andrade</b></sub>](https://github.com/Zuiago)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Zuiago "Code") [🌍](#translation-Zuiago "Translation") | [<img src="https://avatars1.githubusercontent.com/u/8929821?v=4" width="100px;" alt="aideslucas"/><br /><sub><b>aideslucas</b></sub>](https://github.com/aideslucas)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=aideslucas "Code") [🌍](#translation-aideslucas "Translation") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Aaideslucas "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/4921146?v=4" width="100px;" alt="Terry Strachan"/><br /><sub><b>Terry Strachan</b></sub>](https://www.linkedin.com/in/terrystrachan/)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=terrystrachan "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=terrystrachan "Tests") | [<img src="https://avatars1.githubusercontent.com/u/8844319?v=4" width="100px;" alt="Laurentiu Amagdei"/><br /><sub><b>Laurentiu Amagdei</b></sub>](https://github.com/lau32)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=lau32 "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=lau32 "Tests") | [<img src="https://avatars1.githubusercontent.com/u/16257515?v=4" width="100px;" alt="Petar Djordjevic"/><br /><sub><b>Petar Djordjevic</b></sub>](https://github.com/simply10w)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=simply10w "Code") | [<img src="https://avatars1.githubusercontent.com/u/3788405?v=4" width="100px;" alt="Zachary DeRose"/><br /><sub><b>Zachary DeRose</b></sub>](https://github.com/ZackDeRose)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=ZackDeRose "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=ZackDeRose "Tests") | [<img src="https://avatars3.githubusercontent.com/u/28264731?v=4" width="100px;" alt="erhise"/><br /><sub><b>erhise</b></sub>](https://github.com/erhise)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=erhise "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=erhise "Tests") |
| [<img src="https://avatars2.githubusercontent.com/u/14245982?v=4" width="100px;" alt="Joost Zöllner"/><br /><sub><b>Joost Zöllner</b></sub>](http://joost.io)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=joostme "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=joostme "Tests") | [<img src="https://avatars0.githubusercontent.com/u/15807730?v=4" width="100px;" alt="Tomasz Kula"/><br /><sub><b>Tomasz Kula</b></sub>](https://github.com/zetsnotdead)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=zetsnotdead "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=zetsnotdead "Tests") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Azetsnotdead "Bug reports") | [<img src="https://avatars2.githubusercontent.com/u/18703886?v=4" width="100px;" alt="Front-End Developer"/><br /><sub><b>Front-End Developer</b></sub>](http://code-it.eu/)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=GrzegorzStanczyk "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AGrzegorzStanczyk "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/364183?v=4" width="100px;" alt="Vishal Sodani"/><br /><sub><b>Vishal Sodani</b></sub>](http://vishalsodani.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=vishalsodani "Code") [🔧](#tool-vishalsodani "Tools") | [<img src="https://avatars2.githubusercontent.com/u/43474?v=4" width="100px;" alt="Kosmas Schütz"/><br /><sub><b>Kosmas Schütz</b></sub>](https://github.com/kosmas58)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=kosmas58 "Code") [🌍](#translation-kosmas58 "Translation") | [<img src="https://avatars2.githubusercontent.com/u/44722180?v=4" width="100px;" alt="huyen1990"/><br /><sub><b>huyen1990</b></sub>](https://github.com/huyen1990)<br />[⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=huyen1990 "Tests") | [<img src="https://avatars3.githubusercontent.com/u/5130533?v=4" width="100px;" alt="Chau (Joe) Nguyen"/><br /><sub><b>Chau (Joe) Nguyen</b></sub>](https://medium.com/@chauey)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=chauey "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=chauey "Tests") |
| [<img src="https://avatars0.githubusercontent.com/u/8947112?v=4" width="100px;" alt="Amadou Sall"/><br /><sub><b>Amadou Sall</b></sub>](https://www.amadousall.com/)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=ahasall "Code") | [<img src="https://avatars3.githubusercontent.com/u/26004739?v=4" width="100px;" alt="Dino"/><br /><sub><b>Dino</b></sub>](https://github.com/dino)<br />[🔧](#tool-dino "Tools") | [<img src="https://avatars0.githubusercontent.com/u/1913751?v=4" width="100px;" alt="Mathias Døhl"/><br /><sub><b>Mathias Døhl</b></sub>](https://github.com/Doehl)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Doehl "Code") | [<img src="https://avatars2.githubusercontent.com/u/6196260?v=4" width="100px;" alt="Carl in 't Veld"/><br /><sub><b>Carl in 't Veld</b></sub>](http://www.carlintveld.nl)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=cveld "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Acveld "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/4046627?v=4" width="100px;" alt="Abed Zantout"/><br /><sub><b>Abed Zantout</b></sub>](https://github.com/abedzantout)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=abedzantout "Code") | [<img src="https://avatars3.githubusercontent.com/u/85388?v=4" width="100px;" alt="Peng Wang"/><br /><sub><b>Peng Wang</b></sub>](https://github.com/wpcfan)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=wpcfan "Code") [🌍](#translation-wpcfan "Translation") | [<img src="https://avatars3.githubusercontent.com/u/11923975?v=4" width="100px;" alt="Santosh Yadav"/><br /><sub><b>Santosh Yadav</b></sub>](http://santoshyadavblog.com)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=santoshyadav198613 "Code") [⚠️](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=santoshyadav198613 "Tests") |
| [<img src="https://avatars2.githubusercontent.com/u/947587?v=4" width="100px;" alt="Ray"/><br /><sub><b>Ray</b></sub>](https://github.com/Flignats)<br />[💡](#example-Flignats "Examples") [📖](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Flignats "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/8003836?v=4" width="100px;" alt="alharto"/><br /><sub><b>alharto</b></sub>](https://github.com/alharto)<br />[💻](https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=alharto "Code") [🐛](https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Aalharto "Bug reports") |

<!-- ALL-CONTRIBUTORS-LIST:END -->
