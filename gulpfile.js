var gulp = require('gulp'),
		less = require('gulp-less'),
		browserSync = require('browser-sync');

gulp.task('less', function() {
	return gulp.src('app/less/main.less')
	.pipe(less())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browser Sync
			server: { // Определяем параметры сервера
					baseDir: 'app' // Директория для сервера - app
			},
			notify: false // Отключаем уведомления
	});
});

gulp.task('watch', ['sync', 'less'], function() {
	gulp.watch('app/less/**/*.less', ['less']); // Наблюдение за less файлами
	gulp.watch('app/*.html', browserSync.reload);
});