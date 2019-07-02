// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../../../version.json');

export const environment = {
  appName: 'Angular Ngrx Material Starter',
  envName: 'DEV',
  production: false,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version.app,
    angular: packageJson.version.angular,
    ngrx: packageJson.version.ngrx,
    material: packageJson.version.material,
    bootstrap: packageJson.version.bootstrap,
    rxjs: packageJson.version.rxjs,
    ngxtranslate: packageJson.version.ngxtranslate,
    fontAwesome: packageJson.version.fontAwesome,
    angularCli: packageJson.version.angularCli,
    typescript: packageJson.version.typescript,
    cypress: packageJson.version.cypress
  }
};
