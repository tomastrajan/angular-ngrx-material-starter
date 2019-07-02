const packageJson = require('../../../../version.json');

export const environment = {
  appName: 'Angular Ngrx Material Starter',
  envName: 'TEST',
  production: false,
  test: true,
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
