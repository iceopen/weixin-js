var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 合并文件之后压缩代码
gulp.task('minify', function () {
    return gulp.src('src/*.js')
        .pipe(concat('wxjs.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('wxjs.1.4.0.js'))
        .pipe(gulp.dest('dist'));
});

// 监视文件的变化
gulp.task('watch', function () {
    gulp.watch('src/*.js', ['minify']);
});

// 注册缺省任务
gulp.task('default', ['minify', 'watch']);