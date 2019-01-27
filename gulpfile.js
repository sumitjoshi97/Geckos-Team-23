// task runner
const gulp = require("gulp");
// used to get environment variables
const dotenv = require("dotenv");
// used to replace string
const replace = require("gulp-replace");

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

gulp.task("replace", () => {
  return (
    gulp
      .src(config.paths.contentScript.src)
      // replace the occurence of this string with api key
      .pipe(replace("<<!--dict-api-key-->>", config.dictionaryAPIKey))
      .pipe(gulp.dest(config.paths.contentScript.dest))
  );
});

gulp.task("copy", () => {
  return gulp
    // we exclude the content script from the copied files
    .src([...config.paths.others.src, `!${config.paths.contentScript.src}`])
    .pipe(gulp.dest(config.paths.destBase));
});

gulp.task("default", gulp.parallel("replace", "copy"));
