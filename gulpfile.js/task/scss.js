const sass = require("gulp-sass")(require("sass"));
const scss = () => {
  return $.gulp
    .src($.path.scss.src)
    .pipe(
      $.plugins.plumber({
        errorHandler: $.plugins.notify.onError(),
      })
    )
    .pipe($.plugins.sassGlob())
    .pipe(sass())
    .pipe($.plugins.autoprefixer())
    .pipe($.plugins.webpCss())
    .pipe($.plugins.groupCssMediaQueries())
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.plugins.rename({ suffix: ".min" }))
    .pipe($.plugins.csso())
    .pipe($.plugins.size({ title: "main.min.css" }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream({ match: $.path.scss.src }));
};

module.exports = scss;
