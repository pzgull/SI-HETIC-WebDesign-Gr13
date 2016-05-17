var gulp = require('gulp');
var tools = {
  sass: require('gulp-sass'),
  pug: require('gulp-pug'),
  cleanDir: require('gulp-dest-clean'),
  rename: require('gulp-rename'),
  cssmin: require('gulp-cssmin')
};

var dist = {
  root: 'dist/',
  assets: 'dist/assets/',
  scripts: 'dist/scripts/'
};

var libs = {
  jquery: 'lib/jquery/dist/jquery.min.js',
  normalize: 'lib/normalize-css/normalize.css'
};

gulp.task('build-views', function() {
  return gulp.src('src/views/index.pug')
  .pipe(tools.pug({
    pretty: true,
    locals: { data: require('./src/data/menu.js') }
  })).pipe(gulp.dest(dist.root));
});

gulp.task('build-libs', function() {
  // jQuery
  gulp.src(libs.jquery)
  .pipe(gulp.dest(dist.scripts));
  // normalize-css
  gulp.src(libs.normalize)
  .pipe(tools.cssmin())
  .pipe(tools.rename({ suffix: '.min'}))
  .pipe(gulp.dest(dist.assets + 'css/'));
});

gulp.task('build-scripts', function() {
  return gulp.src('src/js/*.js')
  .pipe(tools.cleanDir(dist.scripts)
  ).pipe(gulp.dest(dist.scripts));
});

gulp.task('build-scss', function() {
  tools.cleanDir(dist.assets + 'css/');
  return gulp.src('src/scss/*.scss')
  .pipe(
    tools.sass(
      {outputStyle: 'expanded'}
    ).on('error', tools.sass.logError)
  ).pipe(
    gulp.dest(dist.assets + 'css/')
  );
});

gulp.task('build-assets', function() {
  gulp.src('src/img/*')
  .pipe(tools.cleanDir(dist.assets + 'img/')
  ).pipe(gulp.dest(dist.assets + 'img/'));

  gulp.src('src/fonts/*')
  .pipe(tools.cleanDir(dist.assets + 'fonts/')
  ).pipe(gulp.dest(dist.assets + 'fonts/'));

});

gulp.task('watch', function() {
  gulp.watch('src/img/*', ['build-assets']);
  gulp.watch('src/fonts/*', ['build-assets']);
  gulp.watch('src/js/*.js', ['build-scripts']);
  gulp.watch('src/scss/*.scss', ['build-scss']);
  gulp.watch('src/views/**/*.pug', ['build-views']);
});

gulp.task('default', [
  'build-scss',
  'build-scripts',
  'build-views',
  'build-assets',
  'build-libs'
]);
