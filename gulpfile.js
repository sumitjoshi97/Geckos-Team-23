// task runner
const gulp = require("gulp");
const { task, dest, watch, parallel, series } = gulp;
const replace = require("gulp-replace");

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

task("replace", () => {
  return (
    gulp
      .src(config.paths.backgroundScript)
      // replace the occurence of this string with api key
      .pipe(replace("<<!--dict-api-key-->>", config.dictionaryAPIKey))
      .pipe(dest(config.paths.tmpJS))
  );
});

task("copy", () => {
  return (
    gulp
      // we exclude the content script from the copied files
      .src([...config.paths.src, `!${config.paths.backgroundScript}`])
      .pipe(dest(config.paths.tmp))
  );
});

task("dev", parallel("replace", "copy"));

task(
  "watch",
  series("dev", () => {
    watch(config.paths.src[0], series("dev"));
  }),
  );

task("default", series("watch"));

});

gulp.task("copy", () => {
  return gulp
    // we exclude the content script from the copied files
    .src([...config.paths.others.src, `!${config.paths.contentScript.src}`])
    .pipe(gulp.dest(config.paths.destBase));
});

gulp.task("default", gulp.parallel("replace", "copy"));
