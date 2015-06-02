var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var sass = require('gulp-sass');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// Next, we add a new task for building css.
gulp.task('build-css', function() {

  // We instruct gulp to pull the source from the path we specified
  return gulp.src(paths.style)

    // The plumber step will ensure that if we write syntactically invalid
    // sass, even though the step won't run, the gulp task won't exit. This
    // is helpful because it allows us to fix our syntax without having to
    // restart the gulp watch task.
    .pipe(plumber())

    // The changed step will analyze which files have changed and require
    // rebuilding.
    .pipe(changed(paths.output, {extension: '.css'}))

    // The sourcemaps step will automatically generate sourcemaps.
    .pipe(sourcemaps.init())

    // The sass step will compile the sass. We need to specify that we are
    // using the indented syntax. This is not necessary when using scss.
    .pipe(sass())

    // And our last steps write the output and sourcemaps to the build
    // destination. Recall from step 3 that this is dist/.
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css'],
    callback
  );
});
