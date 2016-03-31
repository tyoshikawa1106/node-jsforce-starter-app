var gulp = require("gulp");

var sass = require("gulp-sass");

gulp.task('default', ['sass','slds-copy']);

gulp.task("sass", function() {
    gulp.src("./public/stylesheets/sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets/css"));
});

gulp.task("slds-copy", function() {
    return gulp.src("./node_modules/@salesforce-ux/design-system/assets/**/*")
        .pipe(gulp.dest( './public/lib/SLDS/assets/' ) );
});