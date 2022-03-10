const img = () => {
  return $.gulp
    .src($.path.img.src)
    .pipe(
      $.plugins.plumber({
        errorHandler: $.plugins.notify.onError(),
      })
    )
    .pipe($.plugins.newer($.path.img.dest))
    .pipe($.plugins.webp())
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.gulp.src($.path.img.src))
    .pipe($.plugins.newer($.path.img.dest))
    .pipe($.plugins.if($.app.isProd, $.plugins.imagemin($.app.imagemin)))
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.browserSync.stream());
};

module.exports = img;
