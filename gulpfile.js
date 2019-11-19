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

const filter = require('gulp-filter');

const path = {
  src: 'src',
  dev: 'dev',
  build: 'build/web',
  nodeModules: 'node_modules',
}

const filename = {
  css: 'nighttab.min.css',
  js: 'nighttab.min.js'
}

const jsDependencies = [
  path.nodeModules + '/html5sortable/dist/html5sortable.min.js',
  path.nodeModules + '/invert-color/lib/invert.min.js',
  path.nodeModules + '/moment/min/moment.min.js'
]

const cssFiles = [
  path.src + '/css/reset.css',
  path.src + '/css/variables.css',
  path.src + '/css/utilities.css',
  path.src + '/css/base.css',
  path.src + '/css/layout.css',
  path.src + '/css/edge.css',
  path.src + '/css/animation.css',
  path.src + '/css/fonts.css',
  path.src + '/css/icons.css',
  path.src + '/css/state.css',
  path.src + '/css/typography.css',
  path.src + '/css/spacing.css',
  path.src + '/css/button.css',
  path.src + '/css/form.css',
  path.src + '/css/shade.css',
  path.src + '/css/modal.css',
  path.src + '/css/tip.css',
  path.src + '/css/menu.css',
  path.src + '/css/header.css',
  path.src + '/css/date.css',
  path.src + '/css/clock.css',
  path.src + '/css/greeting.css',
  path.src + '/css/transitional.css',
  path.src + '/css/search.css',
  path.src + '/css/background.css',
  path.src + '/css/group.css',
  path.src + '/css/link.css',
  path.src + '/css/auto-suggest.css',
  path.src + '/css/fontawesome.css'
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
  path.src + '/js/dropdown.js',
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
    return src(cssFiles)
      .pipe(concat(filename.css))
      .pipe(csso())
      .pipe(dest(path.build + '/css'))
  },
  js: function() {
    const noVendors = filter(jsFiles, {
      restore: true
    });
    return src(jsDependencies.concat(jsFiles), {
        sourcemaps: true
      })
      .pipe(noVendors)
      .pipe(uglify())
      .pipe(noVendors.restore)
      .pipe(concat(filename.js))
      .pipe(dest(path.build + '/js', {
        sourcemaps: '.'
      }))
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
    watch(cssFiles, {
      ignoreInitial: false
    }, function() {
      return src(cssFiles)
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
exports.build = parallel(build.manifest, build.html, build.fonts, build.icons, build.css, build.js)
