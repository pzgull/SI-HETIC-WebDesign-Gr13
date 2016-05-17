var gulp = require('gulp');
var tools = {
  sass: require('gulp-sass'),
  pug: require('gulp-pug'),
  cleanDir: require('gulp-dest-clean')
};

var dist = {
  root: 'dist/',
  assets: 'dist/assets/',
  scripts: 'dist/scripts/'
};

var libs = {
  jquery: 'lib/jquery/dist/jquery.min.js'
};

gulp.task('build-views', function() {
  return gulp.src('src/views/index.pug')
  .pipe(tools.pug({
    pretty: true,
    locals: { data: require('./src/data/menu.js') }
  })).pipe(gulp.dest(dist.root));
});

gulp.task('build-jquery', function() {
  return gulp.src(libs.jquery)
  .pipe(gulp.dest(dist.scripts));
});

gulp.task('build-scripts', ['build-jquery'], function() {
  return gulp.src('src/js/*.js')
  .pipe(gulp.dest(dist.scripts));
});

gulp.task('build-scss', function() {
  return gulp.src('src/scss/*.scss')
  .pipe(
    tools.sass(
      {outputStyle: 'expanded'}
    ).on('error', tools.sass.logError)
  ).pipe(
    gulp.dest(dist.assets + 'css/')
  );
});

gulp.task('default', ['build-scss', 'build-scripts', 'build-views']);
