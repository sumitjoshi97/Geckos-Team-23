// gulp dependencies
const { src, task, dest, watch, parallel, series } = require("gulp");
const $ = require("gulp-load-plugins")();

//env dependencies
const dotenv = require("dotenv");

dotenv.config();

/**
 * configuration object
 */
const config = {
  dictionaryAPIKey: process.env.DICT_API,
  // path config
  paths: {
    src: ["src/**/*"],
    srcHTML: "src/views/*.html",
    srcCSS: "src/styles/*.css",
    srcJS: "src/scripts/*.js",
    backgroundScript: "src/scripts/background.js",

    tmp: "tmp/",
    tmpJS: "tmp/scripts/",

    dist: "dist/",
    distHTML: "dist/views/",
    distCSS: "dist/styles/",
    distJS: "dist/scripts/",
  },
};

//
// DEVELOPMENT
//

function replace() {
  return (
    src(config.paths.backgroundScript)
      // replace the occurence of this string with api key
      .pipe($.replace("<<!--dict-api-key-->>", config.dictionaryAPIKey))
      .pipe(dest(config.paths.tmpJS))
  );
}

function copy() {
  return src([...config.paths.src, `!${config.paths.backgroundScript}`]).pipe(
    dest(config.paths.tmp),
  );
}

const dev = parallel(replace, copy);

exports.default = series(dev, function watching() {
  watch(config.paths.src[0], dev);
});

//
// PRODUCTION
//
task("html:dist", () => {
  return src(config.paths.srcHTML)
    .pipe($.htmlclean())
    .pipe(dest(config.paths.distHTML));
});

task("css:dist", () => {
  return src(config.paths.srcCSS)
    .pipe($.cleanCss())
    .pipe(dest(config.paths.distCSS));
});

task("rename:dist", () => {
  return src(config.paths.backgroundScript)
    .pipe($.replace("<<!--dict-api-key-->>", config.dictionaryAPIKey))
    .pipe($.uglifyEs.default())
    .pipe(dest(config.paths.distJS));
});

task("js:dist", () => {
  return src([config.paths.srcJS, `!${config.paths.backgroundScript}`])
    .pipe($.uglifyEs.default())
    .pipe(dest(config.paths.distJS));
});

task("copy:dist", () => {
  return src([
    ...config.paths.src,
    `!${config.paths.srcHTML}`,
    `!${config.paths.srcJS}`,
    `!${config.paths.srcCSS}`,
  ]).pipe(dest(config.paths.dist));
});

exports.build = parallel(
  "html:dist",
  "css:dist",
  "rename:dist",
  "js:dist",
  "copy:dist",
);
