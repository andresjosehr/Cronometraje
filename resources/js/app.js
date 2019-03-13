
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

	require('./../../node_modules/popper.js/dist/popper.js');
	require('./../../node_modules/bootstrap/dist/js/bootstrap.js');
	require('./../../node_modules/chart.js/dist/chart.js');
	require('./../../node_modules/shards-ui/dist/js/shards.js');
	require('./../../node_modules/sharrre/dist/jquery.sharrre.min.js');
	require('./../../node_modules/sweetalert/dist/sweetalert.min');
	require('./../../resources/js/template/extras.1.1.0.min.js');
	require('./../../resources/js/template/shards-dashboards.1.1.0.js');
	require('./../../resources/js/template/app-blog-overview.1.1.0.js');
	require('./../../resources/js/template/login.js');

	require('./../../resources/js/custom/login.js');
	require('./../../resources/js/custom/usuario.js');
	require('./../../resources/js/custom/resetear_contrasena.js');

// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app'
// });
