const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const spritesmith = require('gulp.spritesmith');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

const cssFiles = [
    'scss/Style.css'
];

const jsFiles = [
    'src/js/bootstrap.bundle.js',
    'src/js/bootstrap.js'
];


function styles() {
  return  gulp.src('src/scss/Style.css')
       // .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
};

function Sprites() {
   return gulp.src('src/images/*.png')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 7
        }))

       .pipe(spritesmith({
           imgName: 'sprite.png',
           cssName: 'sprite.scss',
       }))

        .pipe(gulp.dest('build/img'))
}

function scripts(){
   return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream());
}

function del_build(){
    return del(['build/*']);
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

   gulp.watch('src/scss/Style.css', browserSync.reload);
   gulp.watch('src/scss/Style.css', styles);
    gulp.watch('src/js/**/*.js', scripts);
    //gulp.watch('src/images/*', Sprites);
    gulp.watch('/*.html', browserSync.reload);
}



gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('del_build', del_build);
gulp.task('Sprites',Sprites);
gulp.task('build', gulp.series(del_build,
                   gulp.parallel(styles,scripts,Sprites)));

