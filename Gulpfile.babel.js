import gulp from 'gulp';
import eslint from 'gulp-eslint';
import ghPages from 'gulp-gh-pages';
import jspm from 'jspm';
const dist = 'build';

gulp.task('lint', () => {
  return gulp.src(['app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('jspm-bundle', (done) => {
  jspm.setPackagePath('.');
  jspm.bundleSFX('app/index', dist + '/main.js', {
    sourceMaps: false,
    minify: true,
    mangle: true,
  })
  .then(() => {
    done();
  });
});

gulp.task('deploy', () => {
  return gulp.src('./build/**/*')
      .pipe(ghPages());
});
