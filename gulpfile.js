var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('js', function () {
	return gulp.src('public/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(babel({presets: ['es2015']}))
	.pipe(concat('public/js/all.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function () {
  return gulp.src('public/css/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ["js",'sass']);


