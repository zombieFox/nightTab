const {
  src,
  dest,
  series,
  parallel
} = require('gulp');

const csso = require('gulp-csso');

const concat = require('gulp-concat');

const uglify = require('gulp-uglify');

const replace = require('gulp-replace');

const htmlmin = require('gulp-htmlmin');

const watch = require('gulp-watch');

const clean = require('gulp-clean');

const path = {
  src: 'src',
  dev: 'dev',
  build: 'build/web',
  nodeModules: 'node_modules',
}

const filename = {
  css: "nighttab.min.css",
  jsDependencies: "nighttab.dependencies.js",
  jsFiles: "nighttab.files.js",
  js: "nighttab.min.js"
}

const jsDependencies = [
  path.nodeModules + '/html5sortable/dist/html5sortable.min.js',
  path.nodeModules + '/invert-color/lib/invert.min.js'
]

const jsFiles = [
  path.src + '/js/helper.js',
  path.src + '/js/data.js',
  path.src + '/js/fontawesome.js',
  path.src + '/js/update.js',
  path.src + '/js/state.js',
  path.src + '/js/bookmarks.js',
  path.src + '/js/control.js',
  path.src + '/js/menu.js',
  path.src + '/js/header.js',
  path.src + '/js/modal.js',
  path.src + '/js/tip.js',
  path.src + '/js/shade.js',
  path.src + '/js/theme.js',
  path.src + '/js/date.js',
  path.src + '/js/greeting.js',
  path.src + '/js/transitional.js',
  path.src + '/js/clock.js',
  path.src + '/js/search.js',
  path.src + '/js/link.js',
  path.src + '/js/version.js',
  path.src + '/js/keyboard.js',
  path.src + '/js/background.js',
  path.src + '/js/layout.js',
  path.src + '/js/auto-suggest.js',
  path.src + '/js/pagelock.js',
  path.src + '/js/edge.js',
  path.src + '/js/init.js'
]

const build = {
  manifest: function() {
    return src(path.src + '/manifest.json')
      .pipe(dest(path.build))
  },
  html: function() {
    return src(path.src + '/index.html')
      .pipe(replace(/\<\!\-\-\ css\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-css\-block\ \-\-\>/mg, '<link rel="stylesheet" href="css/' + filename.css + '">'))
      .pipe(replace(/\<\!\-\-\ js\-block\ \-\-\>([\s\S]*)\<\!\-\-\ end\-js\-block\ \-\-\>/mg, '<script src="js/' + filename.js + '"></script>'))
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(dest(path.build))
  },
  fonts: function() {
    return src(path.src + '/fonts/**/*.*')
      .pipe(dest(path.build + '/fonts'))
  },
  icons: function() {
    return src(path.src + '/icons/**/*.*')
      .pipe(dest(path.build + '/icons'))
  },
  css: function() {
    return src(path.src + '/css/*.css')
      .pipe(concat(filename.css))
      .pipe(csso())
      .pipe(dest(path.build + '/css'))
  },
  jsDependencies: function() {
    return src(jsDependencies, {
        sourcemaps: true
      })
      .pipe(concat(filename.jsDependencies))
      .pipe(dest(path.build + '/js', {
        sourcemaps: true
      }))
  },
  jsFiles: function() {
    return src(jsFiles, {
        sourcemaps: true
      })
      .pipe(concat(filename.jsFiles))
      .pipe(uglify())
      .pipe(dest(path.build + '/js', {
        sourcemaps: true
      }))
  },
  js: function() {
    return src([
        path.build + '/js/' + filename.jsDependencies,
        path.build + '/js/' + filename.jsFiles
      ], {
        sourcemaps: true
      })
      .pipe(concat(filename.js))
      .pipe(dest(path.build + '/js', {
        sourcemaps: '.'
      }))
  },
  jsClean: function() {
    return src([
        path.build + '/js/' + filename.jsDependencies,
        path.build + '/js/' + filename.jsFiles
      ])
      .pipe(clean())
  }
}

const dev = {
  manifest: function() {
    watch(path.src + '/manifest.json', {
      ignoreInitial: false
    }, function() {
      return src(path.src + '/manifest.json')
        .pipe(dest(path.dev))
    })
  },
  html: function() {
    watch(path.src + '/index.html', {
      ignoreInitial: false
    }, function() {
      return src(path.src + '/index.html')
        .pipe(dest(path.dev))
    })
  },
  fonts: function() {
    watch(path.src + '/fonts/**/*.*', {
      ignoreInitial: false
    }, function() {
      return src(path.src + '/fonts/**/*.*')
        .pipe(dest(path.dev + '/fonts'))
    })
  },
  icons: function() {
    watch(path.src + '/icons/**/*.*', {
      ignoreInitial: false
    }, function() {
      return src(path.src + '/icons/**/*.*')
        .pipe(dest(path.dev + '/icons'))
    })
  },
  css: function() {
    watch(path.src + '/css/*.css', {
      ignoreInitial: false
    }, function() {
      return src(path.src + '/css/*.css')
        .pipe(dest(path.dev + '/css'))
    })
  },
  js: function() {
    watch(jsFiles, {
      ignoreInitial: false
    }, function() {
      return src(jsFiles)
        .pipe(dest(path.dev + '/js'))
    })
  }
}

exports.dev = parallel(dev.manifest, dev.html, dev.fonts, dev.icons, dev.css, dev.js)
exports.build = series(parallel(build.manifest, build.html, build.fonts, build.icons, build.css), series(build.jsDependencies, build.jsFiles, build.js), build.jsClean)
