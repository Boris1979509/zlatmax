const font = () => {
  return $.gulp
    .src($.path.font.src)
    .pipe(
      $.plugins.plumber({
        errorHandler: $.plugins.notify.onError(),
      })
    )
    .pipe($.plugins.newer($.path.font.dest))
    .pipe($.plugins.fonter($.app.fonter))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.plugins.ttf2woff2())
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.browserSync.stream());
};

module.exports = font;
