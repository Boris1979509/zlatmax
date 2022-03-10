const webpack = require("webpack-stream");
const js = () => {
  return $.gulp
    .src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe(
      $.plugins.plumber({
        errorHandler: $.plugins.notify.onError(),
      })
    )
    .pipe($.plugins.babel())
    .pipe(webpack($.app.webpack))
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};

module.exports = js;
