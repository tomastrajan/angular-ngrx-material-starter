# Angular 10, NgRx and Angular Material Starter

by [@tomastrajan](https://twitter.com/tomastrajan)

<a href="https://www.buymeacoffee.com/tomastrajan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height="34" ></a>

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
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://medium.com/@tomastrajan"><img src="https://avatars0.githubusercontent.com/u/3764868?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tomas Trajan</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan" title="Documentation">📖</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tomastrajan" title="Tests">⚠️</a> <a href="#design-tomastrajan" title="Design">🎨</a> <a href="#blog-tomastrajan" title="Blogposts">📝</a></td>
    <td align="center"><a href="https://twitter.com/tim_deschryver"><img src="https://avatars1.githubusercontent.com/u/28659384?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Deschryver</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=timdeschryver" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/pulls?q=is%3Apr+reviewed-by%3Atimdeschryver" title="Reviewed Pull Requests">👀</a> <a href="#ideas-timdeschryver" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=timdeschryver" title="Documentation">📖</a></td>
    <td align="center"><a href="http://santoshyadavblog.com"><img src="https://avatars3.githubusercontent.com/u/11923975?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Santosh Yadav</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=santoshyadav198613" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=santoshyadav198613" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://gs500coder.blogspot.com"><img src="https://avatars0.githubusercontent.com/u/1336862?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Moshe</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=shootermv" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=shootermv" title="Tests">⚠️</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Ashootermv" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/hhubik"><img src="https://avatars0.githubusercontent.com/u/14813201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hhubik</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=hhubik" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=hhubik" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mumairofficial"><img src="https://avatars2.githubusercontent.com/u/6498132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Muhammad Umair</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=mumairofficial" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/philmerrell"><img src="https://avatars2.githubusercontent.com/u/2514268?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Phil Merrell</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=philmerrell" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/kharshats"><img src="https://avatars3.githubusercontent.com/u/1059539?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Valery Kharshats</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Arelav" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AArelav" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://1nv1n.GitHub.io/"><img src="https://avatars1.githubusercontent.com/u/3885804?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Neil Pathare</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=1nv1n" title="Documentation">📖</a></td>
    <td align="center"><a href="http://peterkrieg.com"><img src="https://avatars0.githubusercontent.com/u/7385488?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peter Krieg</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=peterkrieg" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Apeterkrieg" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/alexkonovalov"><img src="https://avatars1.githubusercontent.com/u/11887873?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=alexkonovalov" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Aalexkonovalov" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/scheifi"><img src="https://avatars0.githubusercontent.com/u/42332935?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fiona</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=scheifi" title="Code">💻</a> <a href="#translation-scheifi" title="Translation">🌍</a></td>
    <td align="center"><a href="https://www.dehopre.com"><img src="https://avatars3.githubusercontent.com/u/97023?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fabien Dehopré</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=FabienDehopre" title="Code">💻</a> <a href="#translation-FabienDehopre" title="Translation">🌍</a></td>
    <td align="center"><a href="http://www.matiasiglesias.com.ar"><img src="https://avatars0.githubusercontent.com/u/2591889?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matias Iglesias</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=matiasiglesias" title="Code">💻</a> <a href="#translation-matiasiglesias" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Jeykairis"><img src="https://avatars1.githubusercontent.com/u/10895934?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeremy Kairis</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Jeykairis" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AJeykairis" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Zuiago"><img src="https://avatars0.githubusercontent.com/u/8050831?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Iago Andrade</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Zuiago" title="Code">💻</a> <a href="#translation-Zuiago" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/aideslucas"><img src="https://avatars1.githubusercontent.com/u/8929821?v=4?s=100" width="100px;" alt=""/><br /><sub><b>aideslucas</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=aideslucas" title="Code">💻</a> <a href="#translation-aideslucas" title="Translation">🌍</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Aaideslucas" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/terrystrachan/"><img src="https://avatars1.githubusercontent.com/u/4921146?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Terry Strachan</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=terrystrachan" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=terrystrachan" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/lau32"><img src="https://avatars1.githubusercontent.com/u/8844319?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Laurentiu Amagdei</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=lau32" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=lau32" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/simply10w"><img src="https://avatars1.githubusercontent.com/u/16257515?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Petar Djordjevic</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=simply10w" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ZackDeRose"><img src="https://avatars1.githubusercontent.com/u/3788405?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zachary DeRose</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=ZackDeRose" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=ZackDeRose" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/erhise"><img src="https://avatars3.githubusercontent.com/u/28264731?v=4?s=100" width="100px;" alt=""/><br /><sub><b>erhise</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=erhise" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=erhise" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://joost.io"><img src="https://avatars2.githubusercontent.com/u/14245982?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joost Zöllner</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=joostme" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=joostme" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/zetsnotdead"><img src="https://avatars0.githubusercontent.com/u/15807730?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tomasz Kula</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=zetsnotdead" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=zetsnotdead" title="Tests">⚠️</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Azetsnotdead" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://code-it.eu/"><img src="https://avatars2.githubusercontent.com/u/18703886?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Front-End Developer</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=GrzegorzStanczyk" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3AGrzegorzStanczyk" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://vishalsodani.com"><img src="https://avatars1.githubusercontent.com/u/364183?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vishal Sodani</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=vishalsodani" title="Code">💻</a> <a href="#tool-vishalsodani" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/kosmas58"><img src="https://avatars2.githubusercontent.com/u/43474?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kosmas Schütz</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=kosmas58" title="Code">💻</a> <a href="#translation-kosmas58" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/huyen1990"><img src="https://avatars2.githubusercontent.com/u/44722180?v=4?s=100" width="100px;" alt=""/><br /><sub><b>huyen1990</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=huyen1990" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://medium.com/@chauey"><img src="https://avatars3.githubusercontent.com/u/5130533?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chau (Joe) Nguyen</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=chauey" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=chauey" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://www.amadousall.com/"><img src="https://avatars0.githubusercontent.com/u/8947112?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Amadou Sall</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=ahasall" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dino"><img src="https://avatars3.githubusercontent.com/u/26004739?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dino</b></sub></a><br /><a href="#tool-dino" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/Doehl"><img src="https://avatars0.githubusercontent.com/u/1913751?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mathias Døhl</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Doehl" title="Code">💻</a></td>
    <td align="center"><a href="http://www.carlintveld.nl"><img src="https://avatars2.githubusercontent.com/u/6196260?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Carl in 't Veld</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=cveld" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Acveld" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/abedzantout"><img src="https://avatars3.githubusercontent.com/u/4046627?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abed Zantout</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=abedzantout" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/wpcfan"><img src="https://avatars3.githubusercontent.com/u/85388?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peng Wang</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=wpcfan" title="Code">💻</a> <a href="#translation-wpcfan" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Flignats"><img src="https://avatars2.githubusercontent.com/u/947587?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ray</b></sub></a><br /><a href="#example-Flignats" title="Examples">💡</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Flignats" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/alharto"><img src="https://avatars0.githubusercontent.com/u/8003836?v=4?s=100" width="100px;" alt=""/><br /><sub><b>alharto</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=alharto" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/issues?q=author%3Aalharto" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/roniaxe"><img src="https://avatars2.githubusercontent.com/u/19142347?v=4?s=100" width="100px;" alt=""/><br /><sub><b>roniaxe</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=roniaxe" title="Code">💻</a> <a href="#translation-roniaxe" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/tenkmilan"><img src="https://avatars2.githubusercontent.com/u/4102195?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Milán Tenk</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=tenkmilan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/KadarH"><img src="https://avatars1.githubusercontent.com/u/23250431?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kadar Hamza</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=KadarH" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Zaky7"><img src="https://avatars2.githubusercontent.com/u/16975648?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zakir</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=Zaky7" title="Code">💻</a> <a href="#security-Zaky7" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/SiddharthSh"><img src="https://avatars0.githubusercontent.com/u/22426668?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siddharth</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=SiddharthSh" title="Code">💻</a> <a href="#tool-SiddharthSh" title="Tools">🔧</a> <a href="#plugin-SiddharthSh" title="Plugin/utility libraries">🔌</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
