const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe(
      $.plugins.plumber({
        errorHandler: $.plugins.notify.onError(),
      })
    )
    .pipe($.plugins.fileinclude())
    .pipe($.plugins.htmlmin($.app.htmlmin))
    .pipe($.plugins.size()) // Logs out the total size of files in the stream and optionally the individual file-sizes.
    .pipe($.plugins.webpHTML())
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream());
};

module.exports = html;
