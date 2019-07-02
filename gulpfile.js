/** Global imports */
const gulp = require('gulp');
const jsonEditor = require('gulp-json-editor');
const packageJson = require('./package.json');

/**  Gulp Tasks */

/**
 * project set up task. Default it local
 *
 * must pass env to setup prod like --env prod
 *
 * @example
 * gulp setup --env prod
 */
gulp.task('version', setupVersion);

/**
 * Project setup function
 */
function setupVersion() {
  const version = {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress'] || ''
  };

  console.log(version);
  return gulp
    .src('./version.json')
    .pipe(
      jsonEditor(function(json) {
        json.version = version;
        return { version };
      })
    )
    .pipe(gulp.dest('./'));
}
