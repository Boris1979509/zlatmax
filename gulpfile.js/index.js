global.$ = {
  gulp: require("gulp"),
  plugins: require("gulp-load-plugins")({
    rename: {
      "gulp-file-include": "fileinclude",
      "gulp-webp-html": "webpHTML",
    },
  }),
  browserSync: require("browser-sync").create(),
  /** Config */
  path: require("./config/path"),
  app: require("./config/app"),
};

/** Tasks */
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

/** Watch */
const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.font.watch, task.font);
};

/** Production mode */
const build = $.gulp.series(
  task.clear,
  $.gulp.parallel(task.html, task.scss, task.js, task.img, task.font)
);

/** Development mode */
const dev = $.gulp.series(build, $.gulp.parallel(watcher, task.server));

exports.scss = task.scss;
exports.html = task.html;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;

exports.default = $.app.isProd ? build : dev;
