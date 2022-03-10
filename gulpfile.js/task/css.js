const css = () => {
  return $.gulp
    .src($.path.css.src, { sourcemaps: $.app.isDev })
    .pipe(
      $.plugins.plumber({
        errorHandler: $.plugins.notify.onError(),
      })
    )
    .pipe($.plugins.concat("main.css"))
    .pipe($.plugins.cssimport())
    .pipe($.plugins.webpCss())
    .pipe($.plugins.autoprefixer())
    .pipe($.plugins.groupCssMediaQueries())
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.plugins.rename({ suffix: ".min" }))
    .pipe($.plugins.csso())
    .pipe($.plugins.size({ title: "main.min.css" }))
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};

module.exports = css;
