const {
  src,
  dest,
  parallel
} = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const folder = {
  src: 'src',
  build: 'build/web'
}
const filename = {
  css: "nighttab.min.css",
  js: "nighttab.min.js"
}

function manifest() {
  return src(folder.src + '/manifest.json')
    .pipe(dest(folder.build))
}

function html() {
  return src(folder.src + '/index.html')
    .pipe(replace(/\<\!\-\-\ css\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-css\-block\ \-\-\>/mg, '<link rel="stylesheet" href="css/' + filename.css + '">'))
    .pipe(replace(/\<\!\-\-\ js\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-js\-block\ \-\-\>/mg, '<script src="js/' + filename.js + '"></script>'))
    .pipe(dest(folder.build))
}

function fonts() {
  return src(folder.src + '/fonts/**/*.*')
    .pipe(dest(folder.build + '/fonts'))
}

function icons() {
  return src(folder.src + '/icons/**/*.*')
    .pipe(dest(folder.build + '/icons'))
}

function css() {
  return src(folder.src + '/css/*.css')
    .pipe(concat(filename.css))
    .pipe(minifyCSS())
    .pipe(dest(folder.build + '/css'))
}

function js() {
  return src([
      folder.src + '/js/vendor/*.js',
      folder.src + '/js/helper.js',
      folder.src + '/js/data.js',
      folder.src + '/js/fontawesome.js',
      folder.src + '/js/update.js',
      folder.src + '/js/state.js',
      folder.src + '/js/bookmarks.js',
      folder.src + '/js/control.js',
      folder.src + '/js/menu.js',
      folder.src + '/js/header.js',
      folder.src + '/js/modal.js',
      folder.src + '/js/tip.js',
      folder.src + '/js/shade.js',
      folder.src + '/js/theme.js',
      folder.src + '/js/date.js',
      folder.src + '/js/greeting.js',
      folder.src + '/js/transitional.js',
      folder.src + '/js/clock.js',
      folder.src + '/js/search.js',
      folder.src + '/js/link.js',
      folder.src + '/js/version.js',
      folder.src + '/js/keyboard.js',
      folder.src + '/js/background.js',
      folder.src + '/js/layout.js',
      folder.src + '/js/auto-suggest.js',
      folder.src + '/js/pagelock.js',
      folder.src + '/js/edge.js',
      folder.src + '/js/init.js',
    ])
    .pipe(concat(filename.js))
    .pipe(uglify())
    .pipe(dest(folder.build + '/js', {
      sourcemaps: '.'
    }))
}

exports.manifest = manifest;
exports.html = html;
exports.fonts = fonts;
exports.icons = icons;
exports.css = css;
exports.js = js;
exports.default = parallel(manifest, html, fonts, icons, css, js);
