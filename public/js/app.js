/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./../../node_modules/popper.js/dist/popper.js');
// require('./../../node_modules/bootstrap/dist/js/bootstrap.js');
// require('./../../node_modules/chart.js/dist/chart.js');
// require('./../../node_modules/shards-ui/dist/js/shards.js');
// require('./../../node_modules/sharrre/dist/jquery.sharrre.min.js');
// require('./../../node_modules/sweetalert/dist/sweetalert.min');
// require('./../../resources/js/template/extras.1.1.0.min.js');
// require('./../../resources/js/template/shards-dashboards.1.1.0.js');
// require('./../../resources/js/template/app-blog-overview.1.1.0.js');
// require('./../../resources/js/template/login.js');
__webpack_require__(/*! ./../../resources/js/custom/general.js */ "./resources/js/custom/general.js");

__webpack_require__(/*! ./../../resources/js/custom/login.js */ "./resources/js/custom/login.js");

__webpack_require__(/*! ./../../resources/js/custom/usuario.js */ "./resources/js/custom/usuario.js");

__webpack_require__(/*! ./../../resources/js/custom/resetear_contrasena.js */ "./resources/js/custom/resetear_contrasena.js"); // window.Vue = require('vue');

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

/***/ }),

/***/ "./resources/js/custom/general.js":
/*!****************************************!*\
  !*** ./resources/js/custom/general.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  var parts = window.location.pathname.split('/');
  var urlPath = parts.pop() || parts.pop(); // handle potential trailing slash

  if (urlPath == "panel-de-control") {
    $(".sidebar_panel").addClass("active");
  }

  if (urlPath == "perfil") {
    $(".sidebar_perfil").addClass("active");
  }

  $(".pp-intro-bar").remove();
};

/***/ }),

/***/ "./resources/js/custom/login.js":
/*!**************************************!*\
  !*** ./resources/js/custom/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.login = function (e) {
  var email = $("#email").val();
  var pass = $("#pass").val();
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegex.test(email)) {
    if (pass == "") {
      swal("Espera!", "Debes introducir Contraseña valida", "warning");
    } else {
      $(".login100-form-btn").fadeOut(250, function () {
        $(".login_loading").fadeIn(250);
      });
      $("#login_contenedor").load(url + "/login", {
        Email: email,
        Pass: pass
      });
    }
  } else {
    swal("Error", "Debes introducir una direccion de correo electronico valida", "warning");
  }
};

window.login_MostrarBoton = function () {
  $(".login_loading").fadeOut(250, function () {
    $(".login100-form-btn").fadeIn(250);
  });
};

/***/ }),

/***/ "./resources/js/custom/resetear_contrasena.js":
/*!****************************************************!*\
  !*** ./resources/js/custom/resetear_contrasena.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.resetearContrasena = function () {
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegex.test($("#email").val())) {
    $("#reseteo_contenedor").load(url + "/resetear-contrasena", {
      email: $("#email").val()
    });
  } else {
    swal("Espera!", "Debes introducir una direccion de correo electrinico valida", "warning");
  }
};

/***/ }),

/***/ "./resources/js/custom/usuario.js":
/*!****************************************!*\
  !*** ./resources/js/custom/usuario.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.EditarUsuario = function () {
  $("#us_error").remove();
  $("#nombre").removeClass("is-invalid");
  $("#dni").removeClass("is-invalid");
  $("#email").removeClass("is-invalid");
  var validado = 0;

  if ($("#nombre").val() == "") {
    $("#nombre").addClass("is-invalid");
    $("#nombre").after('<small id="us_error" style="color:red;">Debes introducir un nombre</small>');
    validado++;
  }

  if ($("#dni").val() == "") {
    $("#dni").addClass("is-invalid");
    $("#dni").after('<small id="us_error" style="color:red;">Debes introducir tu dni</small>');
    validado++;
  }

  if ($("#email").val() == "") {
    $("#email").addClass("is-invalid");
    $("#email").after('<small id="us_error" style="color:red;">Debes introducir un email</small>');
    validado++;
  }

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegex.test($("#email").val())) {} else {
    $("#email").addClass("is-invalid");
    $("#email").after('<small id="us_error" style="color:red;">Debes introducir un email valido</small>');
    validado++;
  }

  if (validado == 0) {
    $(".edit_us_btn").fadeOut(250, function () {
      $(".perfil_loading").fadeIn(250);
    });
    $("#perfil_edit").load(url + "/editar_perfil", {
      nombre: $("#nombre").val(),
      dni: $("#dni").val(),
      email: $("#email").val(),
      direccion: $("#direccion").val(),
      ciudad: $("#ciudad").val(),
      estado: $("#estado").val(),
      codigo_postal: $("#codigo_postal").val()
    });
  }
};

window.CambiarContraseña = function () {
  $("#con_error").remove();
  $("#pass1").removeClass("is-invalid");
  $("#pass2").removeClass("is-invalid");
  var pass = $("#pass1").val();

  if ($("#pass1").val() != $("#pass2").val()) {
    $("#pass1").addClass("is-invalid");
    $("#pass2").addClass("is-invalid");
    $("#campos_contra").after('<small id="con_error" style="color:red;">Las contraseñas no coinciden</small>');
  } else {
    if (pass.length > 6) {
      $(".contra_btn").fadeOut(250, function () {
        $(".contra_loading").fadeIn(250);
      });
      $("#perfil_edit").load(url + "/editar_contrasena", {
        password: pass
      });
    } else {
      $("#pass1").addClass("is-invalid");
      $("#pass2").addClass("is-invalid");
      $("#campos_contra").after('<small id="con_error" style="color:red;">La contraseña debe tener mas de 6 caracteres</small>');
    }
  }
};

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\Interline\Cronometraje\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\Interline\Cronometraje\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });