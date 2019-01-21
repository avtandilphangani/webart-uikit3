var gulp       = require('gulp'),
    less       = require('gulp-less'),
    rename     = require('gulp-rename');

	gulp.task('default', function () {
	    return gulp.src('less/theme.less', {base: __dirname})
	        .pipe(less({compress: true}))
	        .pipe(rename(function (file) {
	            // კომპილირებული ფაილები უნდა შენახული იქნას  css/ პაპკაში ნაცვლად less/ პაპკისა
	            file.dirname = file.dirname.replace('less', 'css');
	        }))
	        .pipe(gulp.dest(__dirname));
    });

	gulp.task('watch', function () {
	    gulp.watch('less/*.less', ['default']);
	});
