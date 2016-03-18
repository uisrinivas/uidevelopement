var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('js', function () {
	return gulp.src('public/js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({presets: ['es2015']}))
		.pipe(concat('public/js/all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ["js"]);


