const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
  root: pathDest,
  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css",
  },
  scss: {
    src: pathSrc + "/scss/*.{sass,scss}",
    watch: pathSrc + "/scss/**/*.{sass,scss}",
    dest: pathDest + "/css",
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },
  img: {
    src: pathSrc + "/img/**/*.{jpg,png,jpeg,svg,gif}",
    watch: pathSrc + "/img/**/*.{jpg,png,jpeg,svg,gif}",
    dest: pathDest + "/img",
  },
  font: {
    src: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/fonts",
  },
};
