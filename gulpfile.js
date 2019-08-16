const {
  src,
  dest,
  parallel
} = require('gulp');

const csso = require('gulp-csso');

const concat = require('gulp-concat');

const uglify = require('gulp-uglify');

const replace = require('gulp-replace');

const htmlmin = require('gulp-htmlmin');

const watch = require('gulp-watch');

const folder = {
  src: 'src',
  dev: 'dev',
  build: 'build/web',
  nodeModules: 'node_modules',
}

const filename = {
  css: "nighttab.min.css",
  js: "nighttab.min.js"
}

const jsFiles = [
  folder.nodeModules + '/html5sortable/dist/html5sortable.min.js',
  folder.nodeModules + '/invert-color/lib/invert.min.js',
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
  folder.src + '/js/init.js'
]

const build = {
  manifest: function() {
    return src(folder.src + '/manifest.json')
      .pipe(dest(folder.build))
  },
  html: function() {
    return src(folder.src + '/index.html')
      .pipe(replace(/\<\!\-\-\ css\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-css\-block\ \-\-\>/mg, '<link rel="stylesheet" href="css/' + filename.css + '">'))
      .pipe(replace(/\<\!\-\-\ js\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-js\-block\ \-\-\>/mg, '<script src="js/' + filename.js + '"></script>'))
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(dest(folder.build))
  },
  fonts: function() {
    return src(folder.src + '/fonts/**/*.*')
      .pipe(dest(folder.build + '/fonts'))
  },
  icons: function() {
    return src(folder.src + '/icons/**/*.*')
      .pipe(dest(folder.build + '/icons'))
  },
  css: function() {
    return src(folder.src + '/css/*.css')
      .pipe(concat(filename.css))
      .pipe(csso())
      .pipe(dest(folder.build + '/css'))
  },
  js: function() {
    return src(jsFiles)
      .pipe(concat(filename.js))
      .pipe(uglify())
      .pipe(dest(folder.build + '/js', {
        sourcemaps: '.'
      }))
  }
}

const dev = {
  manifest: function() {
    watch(folder.src + '/manifest.json', {
      ignoreInitial: false
    }, function() {
      return src(folder.src + '/manifest.json')
        .pipe(dest(folder.dev))
    })
  },
  html: function() {
    watch(folder.src + '/index.html', {
      ignoreInitial: false
    }, function() {
      return src(folder.src + '/index.html')
        .pipe(dest(folder.dev))
    })
  },
  fonts: function() {
    watch(folder.src + '/fonts/**/*.*', {
      ignoreInitial: false
    }, function() {
      return src(folder.src + '/fonts/**/*.*')
        .pipe(dest(folder.dev + '/fonts'))
    })
  },
  icons: function() {
    watch(folder.src + '/icons/**/*.*', {
      ignoreInitial: false
    }, function() {
      return src(folder.src + '/icons/**/*.*')
        .pipe(dest(folder.dev + '/icons'))
    })
  },
  css: function() {
    watch(folder.src + '/css/*.css', {
      ignoreInitial: false
    }, function() {
      return src(folder.src + '/css/*.css')
        .pipe(dest(folder.dev + '/css'))
    })
  },
  js: function() {
    watch(jsFiles, {
      ignoreInitial: false
    }, function() {
      return src(jsFiles)
        .pipe(dest(folder.dev + '/js'))
    })
  }
}

// exports.dev = dev;
exports.dev = parallel(dev.manifest, dev.html, dev.fonts, dev.icons, dev.css, dev.js)
exports.build = parallel(build.manifest, build.html, build.fonts, build.icons, build.css, build.js)
