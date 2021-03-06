const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot ('../public/')
   .js('resources/js/app.js', 'public/js/app.js')
   .sass('resources/sass/app.scss', 'public/css/app.css')
   .autoload({
	    jQuery: 'jquery',
	    $: 'jquery',
	    jquery: 'jquery'
	}).browserSync({
   	  proxy: "localhost",
    files: ['resources/views/**/*.php', 'resources/views/*.php', 'public/js/*.js', 'public/css/*.css']
   });


 //   mix.setResourceRoot ('../public/')
 //   .js('resources/js/app.js', 'public/js/default.min.js')
 //   .sass('resources/sass/app.scss', 'public/css/default.min.css')
 //   .autoload({
	//     jQuery: 'jquery',
	//     $: 'jquery',
	//     jquery: 'jquery'
	// });
