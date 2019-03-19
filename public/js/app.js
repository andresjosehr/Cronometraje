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
// require('./../../node_modules/datatables/media/js/jquery.dataTables.min.js');
// require('./../../resources/js/template/extras.1.1.0.min.js');
// require('./../../resources/js/template/shards-dashboards.1.1.0.js');
// require('./../../resources/js/template/app-blog-overview.1.1.0.js');
// require('./../../resources/js/template/login.js');
// require('./../../resources/js/template/login.js');
__webpack_require__(/*! ./../../resources/js/custom/general.js */ "./resources/js/custom/general.js");

__webpack_require__(/*! ./../../resources/js/custom/login.js */ "./resources/js/custom/login.js");

__webpack_require__(/*! ./../../resources/js/custom/usuario.js */ "./resources/js/custom/usuario.js");

__webpack_require__(/*! ./../../resources/js/custom/resetear_contrasena.js */ "./resources/js/custom/resetear_contrasena.js");

__webpack_require__(/*! ./../../resources/js/custom/registrar_admin.js */ "./resources/js/custom/registrar_admin.js");

__webpack_require__(/*! ./../../resources/js/custom/participantes.js */ "./resources/js/custom/participantes.js"); // window.Vue = require('vue');

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

$(document).ready(function () {
  var parts = window.location.pathname.split('/');
  var urlPath = parts.pop() || parts.pop(); // handle potential trailing slash

  if (urlPath == "panel-de-control") {
    $(".sidebar_panel").addClass("active");
  }

  if (urlPath == "perfil") {
    $(".sidebar_perfil").addClass("active");
  }

  if (urlPath == "registrar-admin") {
    $(".sidebar_registrar_admin").addClass("active");
  }

  if (urlPath == "participantes") {
    $(".sidebar_participantes").addClass("active");
  }

  $(".pp-intro-bar").remove();
});

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

/***/ "./resources/js/custom/participantes.js":
/*!**********************************************!*\
  !*** ./resources/js/custom/participantes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  $('#participantes_table').DataTable();
  $.trim($($('#tabla_de')[0].nextSibling).remove());
  $(".dataTables_length label").contents()[0].textContent = "Mostrar";
  $(".dataTables_length label").contents()[2].textContent = "Participantes";
  $("#participantes_table_filter label").contents()[0].textContent = "Buscar: ";
  $(".dataTables_wrapper .dataTables_filter input").css("margin-left", "0em");
  $("#participantes_table_previous a").html("Anterior");
  $("#participantes_table_next a").html("Seguiente");
  $("#participantes_table_paginate").click(function () {
    $("#participantes_table_previous a").html("Anterior");
    $("#participantes_table_next a").html("Seguiente");
  });
  $(".dataTables_info").empty();
  $(".dataTables_info").remove();
  $('#edit_path #nacimiento, .crear_usr #nacimiento').datepicker({
    dateFormat: 'yyy-mm-dd'
  });
};

window.editarParticipante = function (participante, convert) {
  if (convert == 1) {
    participante = JSON.parse(participante);
  }

  $("#edit_path #nombre").val(participante["nombre_participante"]);
  $("#edit_path #email").val(participante["email_participante"]);
  $("#edit_path #apellido").val(participante["apellido"]);
  $("#edit_path #dni").val(participante["dni"]);
  $("#edit_path #iden").val(participante["dni"]);
  $("#edit_path #nacimiento").val(participante["nacimiento"]);
  $("#edit_path #sexo").val(participante["sexo"]);
  $("#edit_path #id_categoria").val(participante["id_categoria_cat"]);
  $("#edit_path #cate").val(participante["id_categoria_cat"]);
  $("#edit_path #id_estado_inscripcion").val(participante["id_estado_inscripcion_ins"]);
  $("#edit_path #id_part").val(participante["id_participante"]);
  $(".editar_modal").click();
  $("#myselect").val(3);
};

window.actualizarParticipante = function () {
  $("#edit_path #email,#edit_path #nombre,#edit_path #email,#edit_path #dni").removeClass("is-invalid");
  $("small").remove();
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var val = 0;

  if (!emailRegex.test($("#edit_path #email").val())) {
    $("#edit_path #email").addClass("is-invalid");
    $("#edit_path #email").after('<small id="us_error err_part" style="color:red;">Debes introducir un email valido</small>');
    val++;
  }

  if ($("#edit_path #nombre").val() == "") {
    $("#edit_path #nombre").addClass("is-invalid");
    $("#edit_path #nombre").after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
    val++;
  }

  if ($("#edit_path #apellido").val() == "") {
    $("#edit_path #apellido").addClass("is-invalid");
    $("#edit_path #apellido").after('<small id="us_error err_part" style="color:red;">Debes introducir un apellido</small>');
    val++;
  }

  if ($("#edit_path #dni").val() == "") {
    $("#edit_path #dni").addClass("is-invalid");
    $("#edit_path #dni").after('<small id="us_error err_part" style="color:red;">Debes introducir el DNI del participante</small>');
    val++;
  }

  var date = $("#edit_path #nacimiento").val();
  var nacimiento = date.split("/").reverse().join("-");
  var nacimiento = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
  var hoy = new Date();
  var cumpleanos = new Date(date);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
    edad--;
  }

  if ($("#edit_path #id_categoria option:selected").val() != $("#cate").val() && val == 0) {
    swal({
      title: "Advertencia",
      text: "La categoria del usuario esta a punto de ser cambiada, esta categoria fue asignada a este usuario automaticamente por el sistema, ¿Estas seguto de querer cambiarla?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        actualizarParticipanteUPD(nacimiento, edad);
      }
    });
  } else {
    actualizarParticipanteUPD(nacimiento, edad);
  }
};

window.actualizarParticipanteUPD = function (nacimiento_, edad_) {
  $(".upd_participante_btn").fadeOut(250, function () {
    $(".upd_participante_loading").fadeIn(250);
  });
  $("#contenedor_editar_participante").load(url + "/participantes", {
    id: $("#edit_path #id_part").val(),
    nombre_participante: $("#edit_path #nombre").val(),
    apellido: $("#edit_path #apellido").val(),
    email_participante: $("#edit_path #email").val(),
    dni: $("#edit_path #dni").val(),
    nacimiento: nacimiento_,
    edad: edad_,
    sexo: $("#edit_path #sexo option:selected").val(),
    id_categoria: $("#edit_path #id_categoria option:selected").val(),
    id_estado_inscripcion: $("#edit_path #id_estado_inscripcion option:selected").val()
  });
};

window.exitoUpdatePart = function (participanteActualizado) {
  var ParticipanteActualizado_ = JSON.stringify(participanteActualizado);
  $("#" + participanteActualizado["id_participante"]).empty();
  $("#" + participanteActualizado["id_participante"]).html('<td>' + participanteActualizado["id_participante"] + '</td>' + '<td class="inscrito_' + participanteActualizado["id_estado_inscripcion_ins"] + '">' + participanteActualizado["nombre_estado_inscripcion"] + '</td>' + '<td>' + participanteActualizado["nombre_participante"] + ' ' + participanteActualizado["apellido"] + '</td>' + '<td>' + participanteActualizado["email_participante"] + '</td>' + '<td>' + participanteActualizado["nombre_categoria"] + '</td>' + '<td class="participantes_lista_acciones">' + "<button id='btn_" + participanteActualizado["id_participante"] + "' style='padding: .25rem .5rem;' type='button' class='mb-2 btn btn-primary mr-2'><i style='font-size: 25px' class='material-icons'>border_color</i></button>" + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>' + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">attach_money</i></button>' + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>' + '</td>');
  $('#btn_' + participanteActualizado["id_participante"]).click(function () {
    editarParticipante(ParticipanteActualizado_, '1');
  });
  $(".upd_participante_loading").fadeOut(250, function () {
    $(".upd_participante_btn").fadeIn(250);
  });
  swal("Listo", "Datos actualizados exitosamente", "success");
};

window.chan = function (id_participante, status, tipo) {
  var act = false;
  var ins_class = $(".btn_" + tipo + "_" + id_participante).attr("class");
  ins_class = ins_class.split(" ");
  console.log(ins_class);

  for (var i = 0; i < ins_class.length; i++) {
    if (ins_class[i] == "pul") {
      act = true;
    }
  }

  if (!act) {
    swal({
      title: "Advertencia",
      text: "Estas a punto de cambiar el estado del participante a " + tipo + ", ¿Estas seguro de querer hacerlo?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        $(".btn_" + tipo + "_" + id_participante).addClass("pul");

        if (tipo == "acreditado") {
          $(".btn_inscrito_" + id_participante).addClass("pul");
        }

        $('#id_id_' + id_participante).html(MaysPrimera(tipo));
        $('#id_id_' + id_participante).removeClass();
        $('#id_id_' + id_participante).addClass('inscrito_' + status);
        $("#contenedor_status_participante").load(url + "/participantes", {
          id: id_participante,
          id_estado_inscripcion: status
        });
      }
    });
  } else {
    swal({
      title: "Advertencia",
      text: "Estas a punto cambiar quitar el estado actual del participante, ¿Estas seguro de querer hacerlo?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        $(".btn_" + tipo + "_" + id_participante).removeClass("pul");

        if (tipo == "inscrito") {
          $(".btn_acreditado_" + id_participante).removeClass("pul");
          $('#id_id_' + id_participante).html("Pre-Inscrito");
          $('#id_id_' + id_participante).removeClass();
          $('#id_id_' + id_participante).addClass('inscrito_1');
          status = 1;
        }

        if (tipo == "acreditado") {
          $('#id_id_' + id_participante).html("Inscrito");
          $('#id_id_' + id_participante).removeClass();
          $('#id_id_' + id_participante).addClass('inscrito_2');
          status = 2;
        }

        $("#contenedor_status_participante").load(url + "/participantes", {
          id: id_participante,
          id_estado_inscripcion: status
        });
      }
    });
  }
};

window.MaysPrimera = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

window.limp = function () {
  $(".crear_usr #nombre_participante").val("");
  $(".crear_usr #apellido").val("");
  $(".crear_usr #email_participante").val("");
  $(".crear_usr #dni").val("");
  $(".crear_usr #nacimiento").val("");
  $(".crear_usr #sexo").val("0");
  $(".crear_usr #id_categoria").val("0");
  $(".crear_usr #id_estado_inscripcion").val("0");
};

window.crearPart = function () {
  var val = 0;
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  $(".crear_usr #nombre_participante, .crear_usr #apellido, .crear_usr #email_participante, .crear_usr #dni, .crear_usr #nacimiento, .crear_usr #sexo, .crear_usr #id_estado_inscripcion").removeClass('is-invalid');
  $("small").remove();

  if ($(".crear_usr #nombre_participante").val() == "") {
    $(".crear_usr #nombre_participante").addClass("is-invalid");
    $(".crear_usr #nombre_participante").after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
    val++;
  }

  if ($(".crear_usr #apellido").val() == "") {
    $(".crear_usr #apellido").addClass("is-invalid");
    $(".crear_usr #apellido").after('<small id="us_error err_part" style="color:red;">Debes introducir un apellido</small>');
    val++;
  }

  if (!emailRegex.test($(".crear_usr #email_participante").val())) {
    $(".crear_usr #email_participante").addClass("is-invalid");
    $(".crear_usr #email_participante").after('<small id="us_error err_part" style="color:red;">Debes introducir un email valido</small>');
    val++;
  }

  if ($(".crear_usr #dni").val() == "") {
    $(".crear_usr #dni").addClass("is-invalid");
    $(".crear_usr #dni").after('<small id="us_error err_part" style="color:red;">Debes introducir un DNI valido</small>');
    val++;
  }

  if ($(".crear_usr #nacimiento").val() == "") {
    $(".crear_usr #nacimiento").addClass("is-invalid");
    $(".crear_usr #nacimiento").after('<small id="us_error err_part" style="color:red;">Debes introducir una fecha de nacimiento</small>');
    val++;
  }

  if ($(".crear_usr #sexo").val() == "null") {
    $(".crear_usr #sexo").addClass("is-invalid");
    $(".crear_usr #sexo").after('<small id="us_error err_part" style="color:red;">Debes introducir sexo</small>');
    val++;
  }

  if ($(".crear_usr #id_estado_inscripcion").val() == "0") {
    $(".crear_usr #id_estado_inscripcion").addClass("is-invalid");
    $(".crear_usr #id_estado_inscripcion").after('<small id="us_error err_part" style="color:red;">Debes introducir un estado</small>');
    val++;
  }

  if (val == 0) {
    var date = $("#nacimiento").val();
    var nacimiento = date.split("/").reverse().join("-");
    nacimiento = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
    var hoy = new Date();
    var cumpleanos = new Date(date);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
      edad--;
    }

    $.ajax({
      type: 'POST',
      url: url + "/participantes/createPost",
      data: {
        nombre_participante: $(".crear_usr #nombre_participante").val(),
        apellido: $(".crear_usr #apellido").val(),
        email_participante: $(".crear_usr #email_participante").val(),
        dni: $(".crear_usr #dni").val(),
        nacimiento: nacimiento,
        edad: edad,
        sexo: $(".crear_usr #sexo option:selected").val(),
        id_categoria: $(".crear_usr #id_categoria option:selected").val(),
        id_estado_inscripcion: $(".crear_usr #id_estado_inscripcion option:selected").val()
      },
      success: function success(msg) {
        if (msg["email_participante"] == $(".crear_usr #email_participante").val()) {
          swal("Listo", "Hemos registrado al participante exitosamente", "success");
          $(".crear_usr #nombre_participante").val("");
          $(".crear_usr #apellido").val("");
          $(".crear_usr #email_participante").val("");
          $(".crear_usr #dni").val("");
          $(".crear_usr #sexo").val("0");
          $(".crear_usr #id_categoria").val("0");
          $(".crear_usr #id_estado_inscripcion").val("0");
          var participanteActualizado = JSON.stringify(msg);
          $("#ListaParticipantes").append('<tr id="' + participanteActualizado["id_participante"] + '"><td>' + participanteActualizado["id_participante"] + '</td>' + '<td class="inscrito_' + participanteActualizado["id_estado_inscripcion_ins"] + '">' + participanteActualizado["nombre_estado_inscripcion"] + '</td>' + '<td>' + participanteActualizado["nombre_participante"] + ' ' + participanteActualizado["apellido"] + '</td>' + '<td>' + participanteActualizado["email_participante"] + '</td>' + '<td>' + participanteActualizado["nombre_categoria"] + '</td>' + '<td class="participantes_lista_acciones">' + "<button id='btn_" + participanteActualizado["id_participante"] + "' style='padding: .25rem .5rem;' type='button' class='mb-2 btn btn-primary mr-2'><i style='font-size: 25px' class='material-icons'>border_color</i></button>" + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>' + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">attach_money</i></button>' + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>' + '</td></tr>');
        } else {
          $.each(msg, function (key, value) {
            $(".crear_usr #" + key).addClass("is-invalid");
            $(".crear_usr #" + key).after('<small id="us_error err_part" style="color:red;">' + value[0] + '</small>');
          });
        }
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/custom/registrar_admin.js":
/*!************************************************!*\
  !*** ./resources/js/custom/registrar_admin.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.registrarAdmin = function () {
  $('#email_admin, #rol').removeClass("is-invalid");
  $('#invalid-feedback').remove();
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (!emailRegex.test($("#email_admin").val())) {
    $('#email_admin').addClass("is-invalid");
    $('#email_admin').after('<small id="invalid-feedback" style="color:red;">Debes ingresar un email valido</small>');
  } else {
    if ($("#rol").val() == 0) {
      $('#rol').addClass("is-invalid");
      $('#rol').after('<small id="invalid-feedback" style="color:red;">Debes elegir un rol para el administrador</small>');
    } else {
      $(".reg_admin_btn").fadeOut(250, function () {
        $(".loading_admin").fadeIn(250);
      });
      $("#registrar_admin_contenedor").load(url + "/registrar-admin", {
        email: $("#email_admin").val(),
        rol: $("#rol").val()
      });
    }
  }
};

window.registrarAdminFinal = function (data) {
  if ($("#password").val() != "" || $("#password2").val() != "") {
    if ($("#nombre").val() == "") {
      swal("Error", "Debes introducir un nombre valido", "warning");
    } else {
      if ($("#password").val() != $("#password2").val()) {
        swal("Error", "Las contraseñas no coinciden", "warning");
      } else {
        if ($("#password").val().length < 6) {
          swal("Error", "La contraseña debe tener una longitud minima de 6 caracteres", "warning");
        } else {
          $(".login100-form-btn").fadeOut(250, function () {
            $(".login_loading").fadeIn(250);
          });
          data = JSON.parse('[' + data + ']');
          $("#registro_contenedor").load(url + "/registrar-admin/" + data[0][0]["codigo"], {
            nombre: $("#nombre").val(),
            email: data[0][0]["email"],
            password: $("#password").val(),
            rol: data[0][0]["rol"],
            direccion: $("#direccion").val(),
            ciudad: $("#ciudad").val(),
            estado: $("#estado").val(),
            codigo_postal: $("#codigo_postal").val()
          });
        }
      }
    }
  } else {
    swal("Error", "Debes introducir las contraseñas correctamente", "warning");
  }
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
    $(".login100-form-btn").fadeOut(250, function () {
      $(".login_loading").fadeIn(250);
    });
    $("#reseteo_contenedor").load(url + "/resetear-contrasena", {
      email: $("#email").val()
    });
  } else {
    swal("Espera!", "Debes introducir una direccion de correo electrinico valida", "warning");
  }
};

window.resetearContrasenaFinal = function (codigo_, id_usuario) {
  if ($("#pass1").val() != $("#pass2").val()) {
    swal("Error", "Las contraseñas no coinciden", "warning");
  } else {
    if ($("#pass1").val().length < 6) {
      swal("Error", "La contraseña debe tener una longitud mayor de 6 caracteres", "warning");
    } else {
      $(".login100-form-btn").fadeOut(250, function () {
        $(".login_loading").fadeIn(250);
      });
      $("#reseteo_contenedor").load(url + "/resetear-contrasena/" + codigo_, {
        email: $("#email").val(),
        password: $("#pass1").val(),
        id: id_usuario
      });
    }
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