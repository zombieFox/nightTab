const { src, dest, parallel } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');

const buildFolder = "build/web"

function html() {
  return src('src/index.html')
    .pipe(replace(/\<\!\-\-\ js\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-js\-block\ \-\-\>/mg, '<script src="js/app.min.js"></script>'))
    .pipe(replace(/\<\!\-\-\ css\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-css\-block\ \-\-\>/mg, '<link rel="stylesheet" href="css/style.min.css">'))
    .pipe(dest(buildFolder))
}

function fonts() {
  return src('src/fonts/**/*.*')
    .pipe(dest(buildFolder + '/fonts'))
}

function icons() {
  return src('src/icons/**/*.*')
    .pipe(dest(buildFolder + '/icons'))
}

function css() {
  return src('src/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS())
    .pipe(dest(buildFolder + '/css'))
}

function js() {
  return src([
    'src/js/vendor/*.js',
    'src/js/helper.js',
    'src/js/data.js',
    'src/js/fontawesome.js',
    'src/js/update.js',
    'src/js/state.js',
    'src/js/bookmarks.js',
    'src/js/control.js',
    'src/js/menu.js',
    'src/js/header.js',
    'src/js/modal.js',
    'src/js/tip.js',
    'src/js/shade.js',
    'src/js/theme.js',
    'src/js/date.js',
    'src/js/greeting.js',
    'src/js/transitional.js',
    'src/js/clock.js',
    'src/js/search.js',
    'src/js/link.js',
    'src/js/version.js',
    'src/js/keyboard.js',
    'src/js/background.js',
    'src/js/layout.js',
    'src/js/auto-suggest.js',
    'src/js/pagelock.js',
    'src/js/edge.js',
    'src/js/init.js'
  ], { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest(buildFolder + '/js', { sourcemaps: '.' }))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.fonts = fonts;
exports.icons = icons;
exports.default = parallel(fonts, icons, html, css, js);
