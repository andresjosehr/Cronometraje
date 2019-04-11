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

__webpack_require__(/*! ./../../resources/js/custom/participantes.js */ "./resources/js/custom/participantes.js");

__webpack_require__(/*! ./../../resources/js/custom/formularios.js */ "./resources/js/custom/formularios.js");

__webpack_require__(/*! ./../../resources/js/custom/vista-editar_formularios.js */ "./resources/js/custom/vista-editar_formularios.js");

__webpack_require__(/*! ./../../resources/js/custom/inscripcion.js */ "./resources/js/custom/inscripcion.js"); // window.Vue = require('vue');

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

/***/ "./resources/js/custom/formularios.js":
/*!********************************************!*\
  !*** ./resources/js/custom/formularios.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.Data = {};
window.num = 0;
window.num_select = 2;
window.num_select_edit = 2;
window.num_elim = 0;
var creado = false;
$(document).ready(function () {
  var parts = window.location.pathname.split('/');
  var urlPath = parts.pop() || parts.pop(); // handle potential trailing slash

  if (urlPath == "formularios") {
    $(".tool_tooltip").click(function () {
      if ($('.tool_tooltiptext').css("visibility") == "hidden") {
        $('.tool_tooltiptext').css('visibility', 'visible').hide().fadeIn(250);
      } else {
        $('.tool_tooltiptext').fadeOut(250, function () {
          $('.tool_tooltiptext').css('visibility', 'hidden');
          $('.tool_tooltiptext').fadeIn(250);
        });
      }
    });
  }

  $(function () {
    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function () {
      var input = $(this),
          numFiles = input.get(0).files ? input.get(0).files.length : 1,
          label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [numFiles, label]);
    }); // We can watch for our custom `fileselect` event like this

    $(document).ready(function () {
      $(':file').on('fileselect', function (event, numFiles, label) {
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
          input.val(log);
        } else {
          if (log) $("#des_img").val(log);
        }
      });
    });
  });
});

window.createForm = function () {
  $(".crear_form #nombre, .crear_form #evento").removeClass("is-invalid");
  $("small").remove();
  var val = 0;

  if ($(".crear_form #nombre").val() == "") {
    $(".crear_form #nombre").addClass("is-invalid");
    $(".crear_form #nombre").after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
    val++;
  }

  if ($(".crear_form #evento").val() == "0") {
    $(".crear_form #evento").addClass("is-invalid");
    $(".crear_form #evento").after('<small id="us_error err_part" style="color:red;">Debes asociar el formulario a un evento</small>');
    val++;
  }

  if (val == 0) {
    window.Data["nombre_formulario"] = $(".crear_form #nombre").val();
    window.Data["evento_asociado"] = $(".crear_form #evento").val();
    $(".crear_form .page-title").text(window.Data["nombre_formulario"]);
    $(".crear_form .page-subtitle").text(window.Data["evento_asociado"]);

    if (creado == false) {
      $("#btn_create_form").click(); // div_base

      $("#div_base").append('<div class="form-group col" id="store_form2" style="display:none">' + '<button id="btn_edit_create_form" onclick="prevStore()" class="btn btn-success btn-block" type="button">' + 'Guardar' + '</button>' + '<div class="loading upd_participante_loading" style="left: 43%;"></div>' + '</div>');
      $("#div_base").append('<div class="form-group col" id="store_form" style="display:none">' + '<button id="btn_delete_create_form" onclick="deleteForm()" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>');
      $('#btn_create_create_form').parent().hide('slow', function () {
        $('#btn_create_create_form').parent().remove('slow');
        setTimeout('', 5000);
        $("#store_form2").appendTo('.form_create_options').show('slow');
        $("#store_form").appendTo('.form_create_options').show('slow');
      });
      creado = true;
    }
  }
};

window.createField = function (tipo) {
  var tipo_ = tipo;
  var wrapper = document.createElement('div');
  wrapper.innerHTML = validation(tipo_);
  swal({
    title: "Informacion del campo",
    content: wrapper
  });
  $(".swal-footer").css("display", "none");
};

window.verificar_info_campo = function () {
  $("#descripcion_field, #nombre_field, #oljkgkbm45").removeClass("is-invalid");
  $("#descripcion_field").siblings().remove();
  $("#nombre_field").siblings().remove();
  $("small").remove();
  var val = 0;

  if ($("#nombre_field").val() == "") {
    $("#nombre_field").addClass("is-invalid");
    $("#nombre_field").after('<small id="us_error err_part" style="color:red">Debes escribir un nombre para el campo</small>');
    val++;
  }

  if ($("#descripcion_field").val() == "") {
    $("#descripcion_field").addClass("is-invalid");
    $("#descripcion_field").after('<small id="us_error err_part" style="color:red;">Debes Escribir una Descripcion para el campo</small>');
    val++;
  }

  if ($("#oljkgkbm45").val() == "" && $("#hidden_tipe_field").val() == "img_ayuda") {
    $("#oljkgkbm45").addClass("is-invalid");
    $("#iuergn56").after('<small id="us_error err_part" style="color:red;;margin-bottom: 15px;margin-top: -14px;margin-left: 8px;">Debes seleccionar una imagen para subir</small>');
    val++;
  }

  if (val == 0) {
    if ($("#hidden_tipe_field").val() == "text") {
      createFieldText();
    }

    if ($("#hidden_tipe_field").val() == "email") {
      createFieldEmail();
    }

    if ($("#hidden_tipe_field").val() == "date") {
      createFieldDate();
    }

    if ($("#hidden_tipe_field").val() == "file") {
      createFieldFile();
    }

    if ($("#hidden_tipe_field").val() == "select") {
      createFieldSelect();
    }

    if ($("#hidden_tipe_field").val() == "multiselect") {
      createFieldMultiSelect();
    }

    if ($("#hidden_tipe_field").val() == "pago") {
      createFieldPago();
    }

    if ($("#hidden_tipe_field").val() == "texto_ayuda") {
      createFieldTextoAyuda();
    }

    if ($("#hidden_tipe_field").val() == "img_ayuda") {
      createFieldImgAyuda();
    }
  }
};

window.createFieldText = function () {
  var tipo = $("#hidden_tipe_field").val();
  var code = makeCode(8);
  window.Data[window.num] = {};
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["nombre"] = $("#nombre_field").val();
  window.Data[window.num]["descripcion"] = $("#descripcion_field").val();
  window.Data[window.num]["codigo_input"] = makeCode(8);
  window.Data[window.num]["codigo_div"] = makeCode(8);

  if ($('#obli').is(":checked")) {
    window.Data[window.num]["Obligatorio"] = true;
  } else {
    window.Data[window.num]["Obligatorio"] = false;
  }

  swal.close();
  var cero = 0;
  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="display:none; width:100%" >' + '<div class="form-group col-md-8">' + '<input type="' + window.Data[window.num]["tipo"] + '" class="form-control" id=' + window.Data[window.num]["codigo_input"] + ' placeholder="' + window.Data[window.num]["descripcion"] + '" />' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  window.num++;
};

window.createFieldEmail = function () {
  var tipo = $("#hidden_tipe_field").val();
  window.Data[window.num] = {};
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["nombre"] = $("#nombre_field").val();
  window.Data[window.num]["descripcion"] = $("#descripcion_field").val();
  window.Data[window.num]["codigo_input"] = makeCode(8);
  window.Data[window.num]["codigo_div"] = makeCode(8);

  if ($('#obli').is(":checked")) {
    window.Data[window.num]["Obligatorio"] = true;
  } else {
    window.Data[window.num]["Obligatorio"] = false;
  }

  swal.close();
  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="display:none; width:100%" >' + '<div class="form-group col-md-8">' + '<input type="' + tipo + '" class="form-control" id=' + window.Data[window.num]["codigo_input"] + ' placeholder="' + window.Data[window.num]["descripcion"] + '" />' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  window.num++;
};

window.createFieldDate = function () {
  var tipo = "text";
  window.Data[window.num] = {};
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["nombre"] = $("#nombre_field").val();
  window.Data[window.num]["descripcion"] = $("#descripcion_field").val();
  window.Data[window.num]["codigo_input"] = makeCode(8);
  window.Data[window.num]["codigo_div"] = makeCode(8);

  if ($('#obli').is(":checked")) {
    window.Data[window.num]["Obligatorio"] = true;
  } else {
    window.Data[window.num]["Obligatorio"] = false;
  }

  swal.close();
  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="display:none; width:100%" >' + '<div class="form-group col-md-8">' + '<input type="' + tipo + '" class="form-control" id=' + window.Data[window.num]["codigo_input"] + ' placeholder="' + window.Data[window.num]["descripcion"] + '" />' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_input"]).datepicker({
    dateFormat: 'yyy-mm-dd'
  });
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  window.num++;
};

window.createFieldFile = function () {
  window.Data[window.num] = {};
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["nombre"] = $("#nombre_field").val();
  window.Data[window.num]["descripcion"] = $("#descripcion_field").val();
  window.Data[window.num]["codigo_input"] = makeCode(8);
  window.Data[window.num]["codigo_div"] = makeCode(8);

  if ($('#obli').is(":checked")) {
    window.Data[window.num]["Obligatorio"] = true;
  } else {
    window.Data[window.num]["Obligatorio"] = false;
  }

  if ($('#img').is(":checked")) {
    window.Data[window.num]["img"] = true;
  } else {
    window.Data[window.num]["img"] = false;
  }

  if ($('#pdf').is(":checked")) {
    window.Data[window.num]["pdf"] = true;
  } else {
    window.Data[window.num]["pdf"] = false;
  }

  swal.close();
  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="display:none; width:100%" >' + '<div class="form-group col-md-8 form_div_file">' + '<input type="text" class="form-control input_form_file" placeholder="' + window.Data[window.num]["descripcion"] + '" readonly>' + '<label class="input-group-btn label_from_file">' + '<span class="btn btn-primary btn-block">' + 'Subir <input id=' + window.Data[window.num]["codigo_input"] + ' type="file" style="display: none;" multiple>' + '</span>' + '</label>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  var id_div = window.Data[window.num]["codigo_div"];
  var id_input = window.Data[window.num]["codigo_input"];
  $(document).ready(function () {
    $('#' + id_input).on('fileselect', function (event, numFiles, label) {
      var input = $(this).parents("#" + id_div + ' .input-group').find(':text'),
          log = numFiles > 1 ? numFiles + ' files selected' : label;

      if (input.length) {
        input.val(log);
      } else {
        if (log) $("#" + id_div + " .input_form_file").val(log);
      }
    });
  });
  window.num++;
};

window.createFieldSelect = function () {
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["nombre"] = $("#nombre_field").val();
  window.Data[window.num]["descripcion"] = $("#descripcion_field").val();
  window.Data[window.num]["codigo_input"] = makeCode(8);
  window.Data[window.num]["codigo_div"] = makeCode(8);

  if ($('#obli').is(":checked")) {
    window.Data[window.num]["Obligatorio"] = true;
  } else {
    window.Data[window.num]["Obligatorio"] = false;
  }

  swal.close();
  var options = "<option>" + window.Data[window.num]["descripcion"] + "</option>";

  for (var i in window.Data[window.num]["Opciones"]) {
    options = options + "<option>" + window.Data[window.num]["Opciones"][i] + "</option>";
  }

  console.log(window.Data[window.num]["Opciones"].length);
  console.log(window.Data[window.num]["Opciones"]);
  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="display:none; width:100%" >' + '<div class="form-group col-md-8">' + '<select class="form-control" id="' + window.Data[window.num]["codigo_input"] + '">' + options + '</select>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  window.num++;
};

window.createFieldMultiSelect = function () {
  var tipo = $("#hidden_tipe_field").val();
  var code = makeCode(8);
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["nombre"] = $("#nombre_field").val();
  window.Data[window.num]["descripcion"] = $("#descripcion_field").val();
  window.Data[window.num]["codigo_input"] = makeCode(8);
  window.Data[window.num]["codigo_div"] = makeCode(8);

  if ($('#obli').is(":checked")) {
    window.Data[window.num]["Obligatorio"] = true;
  } else {
    window.Data[window.num]["Obligatorio"] = false;
  }

  swal.close();
  var options = "";

  for (var i in window.Data[window.num]["Opciones"]) {
    options = options + "<option>" + window.Data[window.num]["Opciones"][i] + "</option>";
  }

  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="width:100%" >' + '<div class="form-group col-md-8">' + '<select id="' + window.Data[window.num]["codigo_input"] + '" multiple="multiple" class="form-control">' + options + '</select>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_input"]).multiselect({
    nonSelectedText: window.Data[window.num]["descripcion"],
    nSelectedText: "Seleccionados",
    allSelectedText: false
  });
  $('#' + window.Data[window.num]["codigo_div"]).css("display", "none");
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  window.num++;
};

window.createFieldPago = function () {
  var tipo = $("#hidden_tipe_field").val();
  window.Data[window.num] = {};
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["codigo"] = $("#descripcion_field").val().replace(/"/gi, "'");
  window.Data[window.num]["codigo_div"] = makeCode(8);
  swal.close();
  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="width:100%;display:none" >' + '<div align="center" style="width:100%;" class="col-md-8" id="' + window.Data[window.num]["codigo_div"] + '">' + '<button style="margin-top: 0px;" title="El boton mostrado es un ejemplo no funcional del boton, el codigo del boton insertado sera renderizado luego de guardar el formulario" mp-mode="dftl" href="javascript:void(0)" name="MP-payButton" class="MP-blue-common-CDl MP-ar-l-rn-Dl" target="">Pagar</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="0">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="1">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  window.num++;
};

window.createFieldTextoAyuda = function () {
  var tipo = $("#hidden_tipe_field").val();
  window.Data[window.num] = {};
  window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
  window.Data[window.num]["texto_ayuda"] = $("#descripcion_field").val();
  window.Data[window.num]["codigo_div"] = makeCode(8);
  window.Data[window.num]["codigo_code"] = makeCode(8);
  $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="display:none; width:100%" >' + '<div class="form-group col-md-8" style="text-align: justify;color:black">' + '<code id="' + window.Data[window.num]["codigo_code"] + '">' + window.Data[window.num]["texto_ayuda"] + '</code>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
  $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
  window.num++;
  swal.close();
};

window.createFieldImgAyuda = function () {
  $("#dfgkm566").fadeOut(250, function () {
    $(".upd_participante_loading").fadeIn(250);
  });
  var file_data = $(".iuydsab564").prop("files")[0];
  var form_data = new FormData();
  form_data.append("file", file_data);
  $.ajax({
    type: 'post',
    url: url + "/formularios/uploadImgAyuda",
    dataType: 'script',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    success: function success(res) {
      $(".upd_participante_loading").fadeOut(250, function () {
        $("#dfgkm566").fadeIn(250);
      });

      try {
        var result = JSON.parse(res);
        $("#oljkgkbm45").addClass("is-invalid");
        $("#iuergn56").after('<small id="us_error err_part" style="color:red;;margin-bottom: 15px;margin-top: -14px;margin-left: 8px;">' + result[1] + '</small>');
      } catch (err) {
        window.Data[window.num] = {};
        window.Data[window.num]["tipo"] = $("#hidden_tipe_field").val();
        window.Data[window.num]["img_ayuda"] = res;
        window.Data[window.num]["codigo_div"] = makeCode(8);
        window.Data[window.num]["codigo_img"] = makeCode(8);
        window.Data[window.num]["codigo_div_img"] = makeCode(8);
        $("#div_base").append('<div class="row" id="' + window.Data[window.num]["codigo_div"] + '" style="display:none; width:100%" >' + '<div class="form-group col-md-8" style="text-align: center;color:black" id="' + window.Data[num]["codigo_div_img"] + '">' + '<img id="' + window.Data[window.num]["codigo_img"] + '" src="' + window.location + '/../public/img/crono/' + window.Data[window.num]["img_ayuda"] + '" style="width: 100%;height100%" />' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="editField(' + "'" + window.num + "'" + ')" class="btn btn-success btn-block" type="button">' + 'Editar' + '</button>' + '</div>' + '<div class="form-group col-md-2 nopadding" id="' + window.Data[window.num]["codigo"] + '">' + '<button onclick="deleteField(' + "'" + window.num + "'" + ')" class="btn btn-danger btn-block" type="button">' + 'Borrar' + '</button>' + '</div>' + '</div>');
        $('#' + window.Data[window.num]["codigo_div"]).appendTo('#fields').show('slow');
        window.num++;
        swal.close();
      }
    }
  });
};

window.makeCode = function (length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

window.validation = function (tipito) {
  if (tipito == "text" || tipito == "email" || tipito == "date") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" class="custom-control-input" checked="checked">' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + tipito + '">' + '<button onclick="verificar_info_campo()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>' + '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (tipito == "file") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="img" name="customToggle2" class="custom-control-input" checked="checked">' + '<label class="custom-control-label crear_form_custom_control-label" for="img">IMG</label>' + '</div>' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="pdf" class="custom-control-input" checked="checked">' + '<label class="custom-control-label crear_form_custom_control-label" for="pdf">PDF</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + tipito + '">' + '<button onclick="verificar_info_campo()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>' + '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (tipito == "select") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">' + '</div>' + '<div class="select_field_create">' + '<div class="swal-title">Opciones del campo</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_0" placeholder="Descripcion del campo" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_1" placeholder="Descripcion del campo" required="">' + '</div>' + '<div id="div_base_select"></div>' + '<div class="form-group col-md-12">' + '<button onclick="create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>' + '</div>' + '</div>' + '<div class="form-group col-md-12">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + tipito + '">' + '<button onclick="prueba()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>' + '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (tipito == "multiselect") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" required="">' + '</div>' + '<div class="select_field_create">' + '<div class="swal-title">Opciones del campo</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_0" placeholder="Descripcion del campo" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_1" placeholder="Descripcion del campo" required="">' + '</div>' + '<div id="div_base_select"></div>' + '<div class="form-group col-md-12">' + '<button onclick="create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>' + '</div>' + '</div>' + '<div class="form-group col-md-12">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + tipito + '">' + '<button onclick="prueba()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>' + '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (tipito == "pago") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="Introduce el codigo del boton de pago" required=""></textarea>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + tipito + '">' + '<button onclick="verificar_info_campo()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>' + '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (tipito == "texto_ayuda") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="Escribe el texto de ayuda" required=""></textarea>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + tipito + '">' + '<button onclick="verificar_info_campo()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>' + '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (tipito == "img_ayuda") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12 form_div_file" id="iuergn56">' + '<input type="text" id="oljkgkbm45" class="form-control input_form_file" placeholder="Ingresa tu imagen de ayuda" readonly>' + '<label class="input-group-btn label_from_file">' + '<span class="btn btn-primary btn-block">' + 'Subir <input id="asdfjklñasdf" class="iuydsab564" type="file" style="display: none;" multiple>' + '</span>' + '</label>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + tipito + '">' + '<button onclick="verificar_info_campo()" id="dfgkm566" class="btn btn-primary btn-block" type="button">Añadir imagen al formulario</button>' + '<div class="upd_participante_loading loading" style="left: 48%;"></div>';
    '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
    $(document).ready(function () {
      $('#asdfjklñasdf').on('fileselect', function (event, numFiles, label) {
        var input = $(this).parents("#iuergn56" + ' .input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
          input.val(log);
        } else {
          if (log) $("#iuergn56 .input_form_file").val(log);
        }
      });
    });
  }

  return validation;
};

window.create_field_select = function () {
  $("#div_base_select").append('<div style="display: none" class="form-group col-md-12" id="sub_field_select_content' + window.num_select + '">' + '<div style="display: flex">' + '<input type="text" class="form-control" id="sub_field_select_' + window.num_select + '" placeholder="Descripcion del campo" required="">' + '<button onclick="remove_field_select(sub_field_select_content' + window.num_select + ',' + window.num_select + ')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>' + '</div>' + '</div>');
  $('#sub_field_select_content' + window.num_select).insertBefore('#div_base_select').show('slow');
  $('.select_field_create').animate({
    scrollTop: $('#sub_field_select_content' + window.num_select).offset().top - $('.select_field_create').offset().top + $('.select_field_create').scrollTop()
  });
  window.num_select++;
};

window.remove_field_select = function (id, num_select) {
  $('#' + id.id).hide('slow', function () {
    $('#' + id.id).remove();
  });
};

window.prueba = function () {
  $(".select_field_create small").parent().remove();
  var clase;
  var k = 0;
  window.Data[window.num] = {};
  window.Data[window.num]["Opciones"] = {};

  for (var i = 0; i < window.num_select; i++) {
    if (i < 2) {
      clase = "invalid_create_2";
    } else {
      clase = "invalid_create_1";
    }

    $("#sub_field_select_" + i).removeClass("is-invalid");

    if ($('#sub_field_select_' + i).val()) {
      window.Data[window.num]["Opciones"][k] = $('#sub_field_select_' + i).val();
      k++;
    } else {
      if ($('#sub_field_select_' + i).length) {
        $("#sub_field_select_" + i).addClass("is-invalid");
        $("#sub_field_select_" + i).parent().after('<div class="' + clase + '"><small id="us_error err_part" style="color:red;">Debes llenar este campo es obligatorio</small><div>');
      }
    }
  }

  verificar_info_campo();
};

window.scrollbotton = function () {
  $("html, body").animate({
    scrollTop: $(document).height()
  }, 1000);
};

window.swaleditField = function (num) {
  var obli = "";

  if (window.Data[num]["Obligatorio"] == true) {
    obli = 'checked="checked"';
  }

  if (window.Data[num]["tipo"] == "text" || window.Data[num]["tipo"] == "email" || window.Data[num]["tipo"] == "date") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" value="' + window.Data[num]["nombre"] + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" value="' + window.Data[num]["descripcion"] + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" class="custom-control-input" ' + obli + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="verificarEdit(' + "'" + num + "'" + ')" class="btn btn-primary btn-block" type="button">Guardar Cambios</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (window.Data[num]["tipo"] == "select" || window.Data[num]["tipo"] == "multiselect") {
    var opciones = '';

    for (var i in window.Data[num]["Opciones"]) {
      opciones = opciones + '<div class="form-group col-md-12" id="sub_field_select_content' + window.num_select + '">' + '<div style="display: flex">' + '<input type="text" class="form-control" id="sub_field_select_' + window.num_select + '" value="' + window.Data[num]["Opciones"][i] + '" placeholder="Ingresa un valor" required="">' + '<button onclick="remove_field_select(sub_field_select_content' + window.num_select + ',' + window.num_select + ')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>' + '</div>' + '</div>';
      window.num_select++;
    }

    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Escribe el nombre del campo" value="' + window.Data[num]["nombre"] + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Escribe un valor" value="' + window.Data[num]["descripcion"] + '" required="">' + '</div>' + '<div class="select_field_create">' + '<div class="swal-title">Opciones del campo</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_0" placeholder="Escribe un valor" value="' + window.Data[num]["Opciones"][0] + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_1" placeholder="Escribe un valor" value="' + window.Data[num]["Opciones"][1] + '" required="">' + '</div>' + opciones + '<div id="div_base_select"></div>' + '<div class="form-group col-md-12">' + '<button onclick="create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>' + '</div>' + '</div>' + '<div class="form-group col-md-12">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" checked="checked">' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="editSelect(' + "'" + num + "'" + ')" class="btn btn-primary btn-block" type="button">Guardar Cambios</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (window.Data[num]["tipo"] == "file") {
    var obli = "",
        pdf = "",
        img = "";

    if (window.Data[num]["Obligatorio"] == true) {
      obli = 'checked="checked"';
    }

    if (window.Data[num]["pdf"] == true) {
      pdf = 'checked="checked"';
    }

    if (window.Data[num]["img"] == true) {
      img = 'checked="checked"';
    }

    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Nombre del campo" value="' + window.Data[num]["nombre"] + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Descripcion del campo" value="' + window.Data[num]["descripcion"] + '" required="">' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" ' + obli + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="img" name="customToggle2" class="custom-control-input" ' + img + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="img">IMG</label>' + '</div>' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="pdf" class="custom-control-input" ' + pdf + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="pdf">PDF</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="verificarEdit(' + "'" + num + "'" + ')" class="btn btn-primary btn-block" type="button">Guardar Cambios</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (window.Data[num]["tipo"] == "pago") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="Pega el codigo del boton aqui" value="' + window.Data[num]["codigo"] + '" required="">' + window.Data[num]["codigo"] + '</textarea>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="verificarEdit(' + "'" + num + "'" + ')" class="btn btn-primary btn-block" type="button">Guardar Cambios</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (window.Data[num]["tipo"] == "texto_ayuda") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" value="' + window.Data[num]["texto_ayuda"] + '" required="">' + window.Data[num]["texto_ayuda"] + '</textarea>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="verificarEdit(' + "'" + num + "'" + ')" class="btn btn-primary btn-block" type="button">Guardar Cambios</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (window.Data[num]["tipo"] == "img_ayuda") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12 form_div_file" id="iuergn56">' + '<input type="text" id="oljkgkbm45" class="form-control input_form_file" placeholder="Ingresa tu imagen de ayuda" readonly>' + '<label class="input-group-btn label_from_file">' + '<span class="btn btn-primary btn-block">' + 'Subir <input id="asdfjklñasdf" class="iuydsab564" type="file" style="display: none;" multiple>' + '</span>' + '</label>' + '</div>' + '<div class="form-group col-md-12">' + '<input type="hidden" id="hidden_tipe_field" value="' + window.Data[num]["tipo"] + '">' + '<button onclick="verificarEdit(' + "'" + num + "'" + ')" id="dfgkm566" class="btn btn-primary btn-block" type="button">Guardar cambios</button>' + '<div class="upd_participante_loading loading" style="left: 48%;"></div>';
    '</div>' + '</div>';
    $(document).ready(function () {
      $('#asdfjklñasdf').on('fileselect', function (event, numFiles, label) {
        var input = $(this).parents("#iuergn56" + ' .input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
          input.val(log);
        } else {
          if (log) $("#iuergn56 .input_form_file").val(log);
        }
      });
    });
  }

  return validation;
};

window.editField = function (num) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = swaleditField(num);
  swal({
    title: "Informacion del campo",
    content: wrapper,
    closeOnClickOutside: false
  });
  $(".swal-footer").css("display", "none");
};

window.verificarEdit = function (num) {
  $("#descripcion_field, #nombre_field").removeClass("is-invalid");
  $("#descripcion_field").siblings().remove();
  $("#nombre_field").siblings().remove();
  var val = 0;

  if ($("#nombre_field").val() == "") {
    $("#nombre_field").addClass("is-invalid");
    $("#nombre_field").after('<small id="us_error err_part" style="color:red;">Debes escribir un nombre para el campo</small>');
    val++;
  }

  if ($("#descripcion_field").val() == "") {
    $("#descripcion_field").addClass("is-invalid");
    $("#descripcion_field").after('<small id="us_error err_part" style="color:red;">Debes Escribir una Descripcion para el campo</small>');
    val++;
  }

  if ($("#oljkgkbm45").val() == "" && $("#hidden_tipe_field").val() == "img_ayuda") {
    $("#oljkgkbm45").addClass("is-invalid");
    $("#iuergn56").after('<small id="us_error err_part" style="color:red;;margin-bottom: 15px;margin-top: -14px;margin-left: 8px;">Debes seleccionar una imagen para subir</small>');
    val++;
  }

  if (val == 0) {
    if ($("#hidden_tipe_field").val() == "text") {
      editFieldText(num);
    }

    if ($("#hidden_tipe_field").val() == "email") {
      editFieldEmail(num);
    }

    if ($("#hidden_tipe_field").val() == "date") {
      editFieldDate(num);
    }

    if ($("#hidden_tipe_field").val() == "file") {
      editFieldFile(num);
    }

    if ($("#hidden_tipe_field").val() == "select") {
      editFieldSelect(num);
    }

    if ($("#hidden_tipe_field").val() == "multiselect") {
      editFieldMultiSelect(num);
    }

    if ($("#hidden_tipe_field").val() == "pago") {
      editFieldPago(num);
    }

    if ($("#hidden_tipe_field").val() == "texto_ayuda") {
      editFieldTextoAyuda(num);
    }

    if ($("#hidden_tipe_field").val() == "img_ayuda") {
      editFieldImgAyuda(num);
    }
  }
};

window.editFieldText = function (num) {
  window.Data[num]["nombre"] = $("#nombre_field").val();
  window.Data[num]["descripcion"] = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.Data[num]["Obligatorio"] = true;
  } else {
    window.Data[num]["Obligatorio"] = false;
  }

  swal.close();
  $("#" + window.Data[num]["codigo_input"]).attr("placeholder", window.Data[num]["descripcion"]);
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editFieldEmail = function (num) {
  window.Data[num]["nombre"] = $("#nombre_field").val();
  window.Data[num]["descripcion"] = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.Data[num]["Obligatorio"] = true;
  } else {
    window.Data[num]["Obligatorio"] = false;
  }

  swal.close();
  $("#" + window.Data[num]["codigo_input"]).attr("placeholder", window.Data[num]["descripcion"]);
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editFieldDate = function (num) {
  window.Data[num]["nombre"] = $("#nombre_field").val();
  window.Data[num]["descripcion"] = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.Data[num]["Obligatorio"] = true;
  } else {
    window.Data[num]["Obligatorio"] = false;
  }

  swal.close();
  $("#" + window.Data[num]["codigo_input"]).attr("placeholder", window.Data[num]["descripcion"]);
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editFieldFile = function (num) {
  window.Data[num]["nombre"] = $("#nombre_field").val();
  window.Data[num]["descripcion"] = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.Data[num]["Obligatorio"] = true;
  } else {
    window.Data[num]["Obligatorio"] = false;
  }

  if ($('#img').is(":checked")) {
    window.Data[num]["img"] = true;
  } else {
    window.Data[num]["img"] = false;
  }

  if ($('#pdf').is(":checked")) {
    window.Data[num]["pdf"] = true;
  } else {
    window.Data[num]["pdf"] = false;
  }

  swal.close();
  $("#" + window.Data[num]["codigo_div"] + " .form_div_file input").attr("placeholder", window.Data[num]["descripcion"]);
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editSelect = function (num) {
  $(".select_field_create small").parent().remove();
  var clase;
  var k = 0;
  codigo_div = window.Data[num]["codigo_div"];
  codigo_input = window.Data[num]["codigo_input"];
  window.Data[num] = {};
  window.Data[num]["codigo_div"] = codigo_div;
  window.Data[num]["codigo_input"] = codigo_input;
  window.Data[num]["Opciones"] = {};

  for (var i = 0; i < window.num_select; i++) {
    if (i < 2) {
      clase = "invalid_create_2";
    } else {
      clase = "invalid_create_1";
    }

    $("#sub_field_select_" + i).removeClass("is-invalid");

    if ($('#sub_field_select_' + i).val()) {
      window.Data[num]["Opciones"][k] = $('#sub_field_select_' + i).val();
      k++;
    } else {
      if ($('#sub_field_select_' + i).length) {
        $("#sub_field_select_" + i).addClass("is-invalid");
        $("#sub_field_select_" + i).parent().after('<div class="' + clase + '"><small id="us_error err_part" style="color:red;">Debes llenar este campo es obligatorio</small><div>');
      }
    }
  }

  verificarEdit(num);
};

window.editFieldSelect = function (num) {
  window.Data[num]["tipo"] = "select";
  window.Data[num]["nombre"] = $("#nombre_field").val();
  window.Data[num]["descripcion"] = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.Data[num]["Obligatorio"] = true;
  } else {
    window.Data[num]["Obligatorio"] = false;
  }

  swal.close();
  var f = 0;
  var k = 0;
  $("#" + window.Data[num]["codigo_input"] + " option").each(function () {
    if (f != 0) {
      $(this).text(Data[num]["Opciones"][k]);
      k++;
    } else {
      $(this).text(Data[num]["descripcion"]);
      f++;
    }
  });
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editFieldMultiSelect = function (num) {
  window.Data[num]["tipo"] = "multiselect";
  window.Data[num]["nombre"] = $("#nombre_field").val();
  window.Data[num]["descripcion"] = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.Data[num]["Obligatorio"] = true;
  } else {
    window.Data[num]["Obligatorio"] = false;
  }

  swal.close();
  $("#" + window.Data[num]["codigo_div"] + " div span div ul li a label").each(function () {
    $(this).html('<input type="checkbox" value="1">' + Data[num]["descripcion"]);
  });
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editFieldPago = function (num) {
  window.Data[num]["codigo"] = $("#descripcion_field").val();
  swal.close();
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editFieldTextoAyuda = function (num) {
  window.Data[num]["texto_ayuda"] = $("#descripcion_field").val();
  $("#" + window.Data[num]["codigo_code"]).text(window.Data[num]["texto_ayuda"]);
  swal.close();
  swal("Listo", "El campo ha sido actualizado exitosamente", "success");
};

window.editFieldImgAyuda = function (num) {
  $("#dfgkm566").fadeOut(250, function () {
    $(".upd_participante_loading").fadeIn(250);
  });
  var file_data = $(".iuydsab564").prop("files")[0];
  var form_data = new FormData();
  form_data.append("file", file_data);
  $.ajax({
    type: 'post',
    url: url + "/formularios/uploadImgAyuda",
    dataType: 'script',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    success: function success(res) {
      $(".upd_participante_loading").fadeOut(250, function () {
        $("#dfgkm566").fadeIn(250);
      });

      try {
        var result = JSON.parse(res);
        $("#oljkgkbm45").addClass("is-invalid");
        $("#iuergn56").after('<small id="us_error err_part" style="color:red;margin-bottom: 15px;margin-top: -14px;margin-left: 8px;">' + result[1] + '</small>');
      } catch (err) {
        window.Data[num]["img_ayuda"] = res;
        $("#" + window.Data[num]["codigo_img"]).hide("slow", function () {
          $("#" + window.Data[num]["codigo_img"]).remove();
          $("#" + window.Data[num]["codigo_div_img"]).append('<img id="' + window.Data[num]["codigo_img"] + '" src="' + window.location + '/../public/img/crono/' + window.Data[num]["img_ayuda"] + '" style="width: 100%;height100%;display:none" />');
          $('#' + window.Data[num]["codigo_img"]).show('slow');
        });
        swal.close();
      }
    }
  });
};

window.deleteField = function (num) {
  swal({
    title: "Espera!",
    text: "¿Estas seguro de eliminar este campo?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      window.num_elim++;
      $('#' + window.Data[num]["codigo_div"]).hide('slow');
      num = Number(num);

      for (var i = num + 1; i < window.num; i++) {
        res = Number(i);
        window.Data[i - 1] = window.Data[i];
        $("#" + window.Data[i - 1]["codigo_div"] + " .btn-success").attr("onclick", "editField(" + "'" + (res - 1) + "'" + ")");
        $("#" + window.Data[i - 1]["codigo_div"] + " .btn-danger").attr("onclick", "deleteField(" + "'" + (res - 1) + "'" + ")");
      }

      delete window.Data[window.num - 1];
      window.num--;
    }
  });
};

window.deleteForm = function () {
  swal({
    title: "Espera!",
    text: "¿Estas seguro de eliminar todos los campos del formulario? Esta accion no se puede revertir",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      $("#fields").each(function () {
        $(this).hide("slow");
      });
      $("#fields").empty();
      $("#fields").show("slow");
      window.num = 0;
      window.num_select = 2;
      window.num_elim = 0;
      var nom = window.Data["nombre_formulario"] = $(".crear_form #nombre").val();
      var des = window.Data["evento_asociado"] = $(".crear_form #evento").val();
      window.Data = {};
      window.Data["nombre_formulario"] = nom;
      window.Data["evento_asociado"] = des;
    }
  });
};

window.prevStore = function () {
  StoreForm(window.Data);
};

window.StoreForm = function (Datos) {
  if ($('#CamposDefecto').is(":checked") == true) {
    window.Data["campos_por_defecto"] = 1;
  } else {
    window.Data["campos_por_defecto"] = 0;
  }

  console.log($("#CamposDefecto").attr("checked"));

  if (window.num != 0) {
    swal({
      title: "Espera!",
      text: "¿Estas seguro de querer guardar el formulario?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        $("#btn_edit_create_form").fadeOut(250, function () {
          $(".upd_participante_loading").fadeIn(250);
        });
        var file_data = $("#img_form").prop("files")[0];
        var form_data = new FormData();
        form_data.append("file", file_data);
        form_data.append("user_id", 123);
        form_data.append("Datos", JSON.stringify(window.Data));
        $.ajax({
          type: 'post',
          url: url + "/formularios/createPost",
          dataType: 'script',
          cache: false,
          contentType: false,
          processData: false,
          data: form_data,
          success: function success(msg) {
            if (msg == "Exito") {
              $(".upd_participante_loading").fadeOut(250, function () {
                $("#btn_edit_create_form").fadeIn(250);
              });
              swal({
                title: "Listo!",
                text: "Tu formulario ha sido almacenado exitosamente",
                icon: "success"
              }).then(function () {
                location.reload(true);
              });
            }
          }
        });
      }
    });
  } else {
    swal("Espera", "El formulario debe tener al menos un campo para poder ser almacenado", "warning");
  }
};

window.DateVist = function (id) {
  $('#' + id).datepicker({
    dateFormat: 'yyy-mm-dd'
  });
};

window.MultiSelectVist = function (id, descripcion) {
  $('#' + id).multiselect({
    nonSelectedText: descripcion,
    nSelectedText: "Seleccionados",
    allSelectedText: false
  });
};

window.FileVist = function (id_div, id_input) {
  $('#' + id_input).on('fileselect', function (event, numFiles, label) {
    var input = $(this).parents("#" + id_div + ' .input-group').find(':text'),
        log = numFiles > 1 ? numFiles + ' files selected' : label;

    if (input.length) {
      input.val(log);
    } else {
      if (log) $("#" + id_div + " .input_form_file").val(log);
    }
  });
};

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

  if (urlPath == "formularios") {
    $(".sidebar_formularios").addClass("active");
  }

  $(".pp-intro-bar").remove();
});

/***/ }),

/***/ "./resources/js/custom/inscripcion.js":
/*!********************************************!*\
  !*** ./resources/js/custom/inscripcion.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('#nacimiento').datepicker({
    dateFormat: 'yyy-mm-dd'
  });
});

window.calculateAge = function () {
  if ($("#nacimiento").html()) {
    var date = $("#nacimiento").val();
    var nacimiento = date.split("/").reverse().join("-");
    var nacimiento = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
    var hoy = new Date();
    var cumpleanos = new Date(date);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
      edad--;
    }

    var Categoria = JSON.parse($("#info_categorias").text());
    $("#edad").val(edad);
    $("#nacimiento").val(nacimiento);
    var val = 0;
    $('input').filter('[required]:visible').map(function (input, objeto) {
      if ($("input[name='" + objeto.name + "']").val() == undefined) {
        console.log(objeto);
        val++;
      }
    });
    $('select').filter('[required]:visible').map(function (input, objeto) {
      if ($("select[name='" + objeto.name + "'] option:selected").attr("class") == "pri") {
        val++;
      }
    });

    if (val == 0) {
      if (Categoria.edad_minima <= edad && Categoria.edad_maxima >= edad && Categoria.sexo == $("#sexito").val()) {
        $("#id_categoria").val(Categoria.id);
        $("#submitButton").click();
      } else {
        swal("Error", "Los datos ingresados no aplican para este evento. Ponte en contacto con el administrador del evento para mas información", "error");
      }
    } else {
      $("#submitButton").click();
    }
  } else {
    $("#submitButton").click();
  }
};

window.InscripFile = function (id_input, id_div) {
  $('#' + id_input).on('fileselect', function (event, numFiles, label) {
    var input = $(this).parents('#' + id_div + ' .input-group').find(':text'),
        log = numFiles > 1 ? numFiles + ' files selected' : label;

    if (input.length) {
      input.val(log);
    } else {
      if (log) $("#" + id_div + " .input_form_file").val(log);
    }
  });
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

/***/ "./resources/js/custom/participantes.js":
/*!**********************************************!*\
  !*** ./resources/js/custom/participantes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  var parts = window.location.pathname.split('/');
  var urlPath = parts.pop() || parts.pop(); // handle potential trailing slash

  if (urlPath == "participantes") {
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
    $('#edit_path #nacimiento, .crear_usr #nacimiento').datepicker({});
  }
};

window.editarParticipante = function (participante, convert) {
  if (convert == 1) {
    participante = JSON.parse(participante);
  }

  DatosParticipanteFormulario(participante["email_participante"]);
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
  var CustomForm = $("#custom_form :not(button) :input");
  var DataForm = {};
  DataForm.DefaultDataForm = {};
  DataForm.CustomDataForm = {};
  CustomForm.map(function (num, Data) {
    DataForm.CustomDataForm[Data.name] = Data.value;
  });
  DataForm.DefaultDataForm.id = $("#edit_path #id_part").val();
  DataForm.DefaultDataForm.nombre_participante = $("#edit_path #nombre").val();
  DataForm.DefaultDataForm.apellido = $("#edit_path #apellido").val();
  DataForm.DefaultDataForm.email_participante = $("#edit_path #email").val();
  DataForm.DefaultDataForm.dni = $("#edit_path #dni").val();
  DataForm.DefaultDataForm.nacimiento = nacimiento_;
  DataForm.DefaultDataForm.edad = edad_;
  DataForm.DefaultDataForm.sexo = $("#edit_path #sexo option:selected").val();
  DataForm.DefaultDataForm.id_categoria = $("#edit_path #id_categoria option:selected").val();
  DataForm.DefaultDataForm.id_estado_inscripcion = $("#edit_path #id_estado_inscripcion option:selected").val();
  DataForm.DefaultDataForm.act_status = false;
  $(".upd_participante_btn").fadeOut(250, function () {
    $(".upd_participante_loading").fadeIn(250);
  });
  $.ajax({
    type: 'POST',
    url: url + "/participantes",
    data: DataForm,
    success: function success(msg) {
      exitoUpdatePart(msg);
    }
  });
};

window.exitoUpdatePart = function (participanteActualizado) {
  var ParticipanteActualizado_ = JSON.stringify(participanteActualizado);
  $("#" + participanteActualizado["id_participante"]).empty();
  $("#" + participanteActualizado["id_participante"]).html('<td>' + participanteActualizado["id_participante"] + '</td>' + '<td class="inscrito_' + participanteActualizado["id_estado_inscripcion_ins"] + '">' + participanteActualizado["nombre_estado_inscripcion"] + '</td>' + '<td>' + participanteActualizado["nombre_participante"] + ' ' + participanteActualizado["apellido"] + '</td>' + '<td>' + participanteActualizado["apellido"] + '</td>' + '<td>' + participanteActualizado["dni"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</td>' + '<td class="participantes_lista_acciones">' + "<button id='btn_" + participanteActualizado["id_participante"] + "' style='padding: .25rem .5rem;' type='button' class='mb-2 btn btn-primary mr-2'><i style='font-size: 25px' class='material-icons'>border_color</i></button>" + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>' + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">attach_money</i></button>' + '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>' + '</td>');
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
          id_estado_inscripcion: status,
          act_status: true
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
          id_estado_inscripcion: status,
          act_status: true
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

window.DatosParticipanteFormulario = function (email_participante) {
  $("#custom_form").empty();
  $("#custom_form_default").show();
  $("#custom_form").hide();
  $("#no_nada").hide();
  $.ajax({
    type: 'POST',
    url: url + "/inscripcion",
    data: {
      email_participante: email_participante
    },
    success: function success(dat) {
      if (dat.length == 0) {
        $("#custom_form_default").hide("slow", function () {
          $("#no_nada").show("slow");
        });
      } else {
        $("#custom_form").append('<strong class="text-muted d-block mb-2 form_name">' + dat[0].campos.formularios.nombre + '</strong>');
        dat.map(function (datos) {
          if (datos.campos.tipo != "file") {
            $("#custom_form").append('<div class="form-row">' + '<div class="form-group col-md-12">' + ' <strong class="text-muted d-block mb-2">' + datos.campos.nombre + '</strong>' + '<input type="email" class="form-control" name="campo_' + datos.id + '" placeholder="First name" value="' + datos.valor + '" required="">' + '</div>' + '</div>');
          } else {
            $("#custom_form").append('<input type="hidden">' + '<div class="form-row">' + '<div class="form-group col-md-12">' + ' <strong class="text-muted d-block mb-2">' + datos.campos.nombre + '</strong>' + '<a target="_blank" href="' + window.location.href + '/../public/img/crono/' + datos.valor + '" class="btn btn-block btn-success" style="color:white">Ver archivo</a>' + '</div>' + '</div>');
          }

          $("#custom_form_default").hide("slow", function () {
            $("#custom_form").show("slow");
          });
        });
        $("#custom_form").append('<button type="button" onclick="deleteCustomFormData(' + "'" + email_participante + "'" + ')" class="btn btn-block btn-danger">Borrar datos del formulario personalizado</button>');
      }
    }
  });
};

window.deleteCustomFormData = function (email_participante) {
  swal({
    title: "Advertencia",
    text: "Los datos no podran recuperarse, ¿estas seguro de proceder con eliminarlos?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      $.ajax({
        type: 'DELETE',
        url: url + "/participantes/" + email_participante,
        success: function success(msg) {
          if (msg == "Exito") {
            $("#custom_form").hide("slow", function () {
              $("#no_nada").show("slow");
            });
          }
        }
      });
    }
  });
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

/***/ "./resources/js/custom/vista-editar_formularios.js":
/*!*********************************************************!*\
  !*** ./resources/js/custom/vista-editar_formularios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.EC_swaleditField = function (info_camp) {
  window.info_camp = info_camp;

  if (info_camp.obligatorio == 1) {
    var obli = 'checked="checked"';
  } else {
    var obli;
  }

  if (info_camp.tipo == "text" || info_camp.tipo == "email" || info_camp.tipo == "date") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" value="' + info_camp.nombre + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" value="' + info_camp.descripcion + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" class="custom-control-input" ' + obli + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="EC_verificarEdit()" id="edit_at_edit" class="btn btn-primary btn-block" type="button">Editar campo</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="swal.close();" id="delete_at_edit" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '<div class="loading upd_participante_loading" style="left: 46%;margin-top:-50px;"></div>' + '</div>';
  }

  if (info_camp.tipo == "select" || info_camp.tipo == "multiselect") {
    window.NumSelec = window.info_camp.subcampos.length;
    var opciones = '';
    var i = 0;
    var opc = {};
    $.each(info_camp.subcampos, function (key, value) {
      $.each(value, function (key2, value2) {
        if (key2 == "descripcion") {
          if (i > 1) {
            opciones = opciones + '<div class="form-group col-md-12" id="sub_field_select_content' + i + '">' + '<div style="display: flex">' + '<input type="text" class="form-control" id="sub_field_select_' + i + '" placeholder="Ingresa un Valor" value="' + value2 + '" required="">' + '<button onclick="EC_remove_field_select(sub_field_select_content' + i + ',' + i + ')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>' + '</div>' + '</div>';
          } else {
            opc[i] = value2;
          }

          i++;
        }
      });
    });
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" value="' + info_camp.nombre + '" placeholder="Escribe un nombre" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" value="' + info_camp.descripcion + '" placeholder="Escribe una Descripcion" required="">' + '</div>' + '<div class="select_field_create">' + '<div class="swal-title">Opciones del campo</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_0" value="' + opc[0] + '" placeholder="Ingresa un Valor" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="sub_field_select_1" value="' + opc[1] + '" placeholder="Ingresa un Valor" required="">' + '</div>' + opciones + '<div id="div_base_select"></div>' + '<div class="form-group col-md-12">' + '<button onclick="EC_create_field_select()" class="btn btn-secondary btn-block" type="button">Añadir otra opcion</button>' + '</div>' + '</div>' + '<div class="form-group col-md-12">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" ' + obli + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="EC_editSelect()" id="edit_at_edit" class="btn btn-primary btn-block" type="button">Actualizar campo</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="swal.close();" id="delete_at_edit" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '<div class="loading upd_participante_loading" style="left: 46%;margin-top:-50px;"></div>' + '</div>';
  }

  if (info_camp.tipo == "file") {
    var pdf = "",
        img = "";

    if (info_camp.pdf == 1) {
      pdf = 'checked="checked"';
    }

    if (info_camp.img == 1) {
      img = 'checked="checked"';
    }

    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="nombre_field" placeholder="Ingresa el nombre del campo" value="' + info_camp.nombre + '" required="">' + '</div>' + '<div class="form-group col-md-12">' + '<input type="text" class="form-control" id="descripcion_field" placeholder="Ingresa la descripción del campo" value="' + info_camp.descripcion + '" required="">' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="obli" name="customToggle2" class="custom-control-input" ' + obli + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="obli">Obligatorio</label>' + '</div>' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="img" name="customToggle2" class="custom-control-input" ' + img + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="img">IMG</label>' + '</div>' + '</div>' + '<div class="form-group col-md-4">' + '<div class="custom-control custom-toggle custom-toggle-sm mb-1">' + '<input type="checkbox" id="pdf" class="custom-control-input" ' + pdf + '>' + '<label class="custom-control-label crear_form_custom_control-label" for="pdf">PDF</label>' + '</div>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="EC_editFieldFile()" class="btn btn-primary btn-block" type="button">Editar campo</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (info_camp.tipo == "pago") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="Ingresa el codigo del boton" required="">' + info_camp.codigo_pago + '</textarea>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="EC_verificarEdit()" class="btn btn-primary btn-block" type="button">Añadir campo al formulario</button>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (info_camp.tipo == "texto_ayuda") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12">' + '<textarea type="textarea" style="width: 100%;height: 150px;" class="form-control" id="descripcion_field" placeholder="Escribe el texto de ayuda" required="" value="' + info_camp.texto_ayuda + '">' + info_camp.texto_ayuda + '</textarea>' + '</div>' + '<div class="form-group col-md-6">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="EC_verificarEdit()" class="btn btn-primary btn-block" type="button">Guardar cambios</button>' + '</div>' + '<div class="form-group col-md-6">' + '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>' + '</div>' + '</div>';
  }

  if (info_camp.tipo == "img_ayuda") {
    var validation = '<div class="form-row">' + '<div class="form-group col-md-12 form_div_file" id="iuergn56">' + '<input type="text" id="oljkgkbm45" class="form-control input_form_file" placeholder="Ingresa tu imagen de ayuda" readonly>' + '<label class="input-group-btn label_from_file">' + '<span class="btn btn-primary btn-block">' + 'Subir <input id="asdfjklñasdf" class="iuydsab564" type="file" style="display: none;" multiple>' + '</span>' + '</label>' + '</div>' + '<div class="form-group col-md-12">' + '<input type="hidden" id="hidden_tipe_field" value="' + info_camp.tipo + '">' + '<button onclick="EC_verificarEdit()" id="dfgkm566" class="btn btn-primary btn-block" type="button">Añadir imagen al formulario</button>' + '<div class="upd_participante_loading loading" style="left: 48%;"></div>';
    '</div>' + '</div>';
    $(document).ready(function () {
      $('#asdfjklñasdf').on('fileselect', function (event, numFiles, label) {
        var input = $(this).parents("#iuergn56" + ' .input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
          input.val(log);
        } else {
          if (log) $("#iuergn56 .input_form_file").val(log);
        }
      });
    });
  }

  return validation;
};

window.EC_editField = function (info_camp) {
  try {
    $("#ConverCode").html(info_camp);
    var info_campo = $("#ConverCode").html();
    info_campo = info_campo.replace(/&lt;/gi, "<");
    info_campo = info_campo.replace(/&gt;/gi, ">");
    info_camp = JSON.parse(info_campo.substring(1, info_campo.length - 1));
  } catch (error) {
    info_camp = JSON.parse(info_camp);
  }

  var wrapper = document.createElement('div');
  wrapper.innerHTML = EC_swaleditField(info_camp);
  swal({
    title: "Informacion del campo",
    content: wrapper,
    closeOnClickOutside: false
  });
  $(".swal-footer").css("display", "none");
};

window.EC_verificarEdit = function (info_camp, subcampos) {
  $("#descripcion_field, #nombre_field, #oljkgkbm45").removeClass("is-invalid");
  $("#descripcion_field").siblings().remove();
  $("#nombre_field").siblings().remove();
  $("small").remove();
  var val = 0;

  if ($("#nombre_field").val() == "") {
    $("#nombre_field").addClass("is-invalid");
    $("#nombre_field").after('<small id="us_error err_part" style="color:red;">Debes escribir un nombre para el campo</small>');
    val++;
  }

  if ($("#descripcion_field").val() == "") {
    $("#descripcion_field").addClass("is-invalid");
    $("#descripcion_field").after('<small id="us_error err_part" style="color:red;">Debes Escribir una Descripcion para el campo</small>');
    val++;
  }

  if ($("#oljkgkbm45").val() == "" && $("#hidden_tipe_field").val() == "img_ayuda") {
    $("#oljkgkbm45").addClass("is-invalid");
    $("#iuergn56").after('<small id="us_error err_part" style="color:red;;margin-bottom: 15px;margin-top: -14px;margin-left: 8px;">Debes seleccionar una imagen para subir</small>');
    val++;
  }

  if (val == 0) {
    if ($("#hidden_tipe_field").val() == "text") {
      EC_editFieldText(info_camp);
    }

    if ($("#hidden_tipe_field").val() == "email") {
      EC_editFieldEmail(info_camp);
    }

    if ($("#hidden_tipe_field").val() == "date") {
      EC_editFieldDate(info_camp);
    }

    if ($("#hidden_tipe_field").val() == "file") {
      EC_editFieldFile(num);
    }

    if ($("#hidden_tipe_field").val() == "select" || $("#hidden_tipe_field").val() == "multiselect") {
      EC_editFieldSelect(subcampos);
    }

    if ($("#hidden_tipe_field").val() == "pago") {
      EC_editFieldPago(info_camp);
    }

    if ($("#hidden_tipe_field").val() == "texto_ayuda") {
      EC_editFieldTextoAyuda(info_camp);
    }

    if ($("#hidden_tipe_field").val() == "img_ayuda") {
      EC_editFieldImgAyuda(info_camp);
    }
  }
};

window.EC_editFieldText = function () {
  window.info_camp.nombre = $("#nombre_field").val();
  window.info_camp.descripcion = $("#descripcion_field").val();
  var Obligatorio;

  if ($('#obli').is(":checked")) {
    window.info_camp.obligatorio = 1;
  } else {
    window.info_camp.obligatorio = 0;
  }

  EC_editFin(1);
};

window.EC_editFieldEmail = function () {
  window.info_camp.nombre = $("#nombre_field").val();
  window.info_camp.descripcion = $("#descripcion_field").val();
  var Obligatorio;

  if ($('#obli').is(":checked")) {
    window.info_camp.obligatorio = 1;
  } else {
    window.info_camp.obligatorio = 0;
  }

  EC_editFin(1);
};

window.EC_editFieldDate = function () {
  window.info_camp.nombre = $("#nombre_field").val();
  window.info_camp.descripcion = $("#descripcion_field").val();
  var Obligatorio;

  if ($('#obli').is(":checked")) {
    window.info_camp.obligatorio = 1;
  } else {
    window.info_camp.obligatorio = 0;
  }

  EC_editFin(1);
};

window.EC_editFieldFile = function (num) {
  window.info_camp.nombre = $("#nombre_field").val();
  window.info_camp.descripcion = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.info_camp.obligatorio = 1;
  } else {
    window.info_camp.obligatorio = 0;
  }

  if ($('#img').is(":checked")) {
    window.info_camp.img = 1;
  } else {
    window.info_camp.img = 0;
  }

  if ($('#pdf').is(":checked")) {
    window.info_camp.pdf = 1;
  } else {
    window.info_camp.pdf = 0;
  }

  EC_editFin(3);
};

window.EC_editSelect = function (num) {
  $(".select_field_create small").parent().remove();
  var clase,
      k = 0,
      subcampos = {},
      val = 0;

  for (var i = 0; i < window.NumSelec + 1; i++) {
    if (i < 2) {
      clase = "invalid_create_2";
    } else {
      clase = "invalid_create_1";
    }

    $("#sub_field_select_" + i).removeClass("is-invalid");

    if ($('#sub_field_select_' + i).val()) {
      subcampos[i] = $('#sub_field_select_' + i).val();
      k++;
    } else {
      if ($('#sub_field_select_' + i).length) {
        val++;
        $("#sub_field_select_" + i).addClass("is-invalid");
        $("#sub_field_select_" + i).parent().after('<div class="' + clase + '"><small id="us_error err_part" style="color:red;">Debes llenar este campo, es obligatorio</small><div>');
      }
    }
  }

  if (val == 0) {
    EC_verificarEdit(window.info_camp, subcampos);
  }
};

window.EC_editFieldSelect = function (subcampos) {
  window.info_camp.nombre = $("#nombre_field").val();
  window.info_camp.descripcion = $("#descripcion_field").val();

  if ($('#obli').is(":checked")) {
    window.info_camp.obligatorio = 1;
  } else {
    window.info_camp.obligatorio = 0;
  }

  window.subcampos = subcampos;
  EC_editFin(2);
};

window.EC_editFieldPago = function (num) {
  window.info_camp.codigo_pago = $("textarea").val();
  EC_editFin(4);
};

window.EC_editFieldTextoAyuda = function (num) {
  window.info_camp.texto_ayuda = $("textarea").val();
  EC_editFin(5);
};

window.EC_editFieldImgAyuda = function (num) {
  EC_editFin(6);
};

window.EC_deleteField = function (info_camp) {
  try {
    $("#ConverCode").html(info_camp);
    var info_campo = $("#ConverCode").html();
    info_campo = info_campo.replace(/&lt;/gi, "<");
    info_campo = info_campo.replace(/&gt;/gi, ">");
    window.info_camp = JSON.parse(info_campo.substring(1, info_campo.length - 1));
  } catch (error) {
    window.info_camp = JSON.parse(info_camp);
  }

  swal({
    title: "Espera!",
    text: "¿Estas seguro de eliminar este campo? Esta accion no se puede revertir",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      if (window.info_camp.tipo = "multiselect") {
        $("#div_Formulario_" + window.info_camp.id_formulario + "_Campo_" + window.info_camp.id).hide('slow');
      } else {
        $("#Formulario_" + window.info_camp.id_formulario + "_div_" + window.info_camp.id).hide('slow');
      }

      $.ajax({
        type: 'DELETE',
        url: url + "/formularios/" + window.info_camp.id,
        success: function success(result) {
          console.log(result);
        }
      });
    }
  });
};

window.EC_deleteForm = function (info_form) {
  window.info_form = JSON.parse(info_form);
  swal({
    title: "Espera!",
    text: "¿Estas seguro de eliminar este formulario? Esta accion no se puede revertir",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      $("#card_" + window.info_form.id).hide('slow', function () {
        $("#card_" + window.info_form.id).remove();
        swal("Listo!", "Hemos Eliminado el formulario exitosamente", "success");

        if ($("#accordion .card").html() == undefined) {
          $(".no_form").show("slow");
        }
      });
      $.ajax({
        type: 'DELETE',
        url: url + "/formularios/" + window.info_form.id,
        data: window.info_form,
        success: function success(result) {}
      });
    }
  });
};

window.EC_create_field_select = function () {
  window.NumSelec++;
  $("#div_base_select").append('<div style="display: none" class="form-group col-md-12" id="sub_field_select_content' + window.NumSelec + '">' + '<div style="display: flex">' + '<input type="text" class="form-control" id="sub_field_select_' + window.NumSelec + '" placeholder="Descripcion del campo" required="">' + '<button onclick="EC_remove_field_select(sub_field_select_content' + window.NumSelec + ',' + window.NumSelec + ')" type="button" class="btn btn-sm btn-danger mr-1">Eliminar</button>' + '</div>' + '</div>');
  $('#sub_field_select_content' + window.NumSelec).insertBefore('#div_base_select').show('slow');
  $('.select_field_create').animate({
    scrollTop: $('#sub_field_select_content' + window.NumSelec).offset().top - $('.select_field_create').offset().top + $('.select_field_create').scrollTop()
  });
};

window.EC_remove_field_select = function (id, num_select) {
  $('#' + id.id).hide('slow', function () {
    $('#' + id.id).remove();
  });
};

window.prevStore = function () {
  StoreForm(window.Data);
};

window.EC_VerifyStoreForm = function (id_form) {
  $("#nombre_" + id_form + ", #evento_" + id_form).removeClass("is-invalid");
  $("small").remove();
  var ver = 0;

  if ($("#nombre_" + id_form).val() == "") {
    $("#nombre_" + id_form).addClass("is-invalid");
    $("#nombre_" + id_form).after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
    ver++;
  }

  if ($("#evento_" + id_form).val() == "0") {
    ver++;
    $("#evento_" + id_form).addClass("is-invalid");
    $("#evento_" + id_form).after('<small id="us_error err_part" style="color:red;">Debes asociar el formulario a un evento</small>');
  }

  if (ver == 0) {
    EC_StoreForm(id_form);
  }
};

window.EC_StoreForm = function (id_form) {
  var por_de;

  if ($("#CamposDefecto_" + id_form).is(":checked")) {
    por_de = 1;
  } else {
    por_de = 0;
  }

  swal({
    title: "Espera!",
    text: "¿Estas seguro de querer actualizar el formulario?",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function (willDelete) {
    if (willDelete) {
      $("#btn_edit_create_form").fadeOut(250, function () {
        $(".upd_participante_loading").fadeIn(250);
      });
      var formData = new FormData();
      formData.append("file", $("#file_" + id_form).prop("files")[0]);
      formData.append("nombre_formulario", $("#nombre_" + id_form).val());
      formData.append("campos_por_defecto", por_de);
      formData.append("id_evento", $("#evento_" + id_form).val());
      formData.append("_method", "PUT");
      $.ajax({
        type: 'POST',
        url: url + "/formularios/" + id_form,
        contentType: false,
        processData: false,
        data: formData,
        success: function success(msg) {
          if (msg == "Exito") {
            swal("Listo", "Los datos del formulario han sido actualizados exitosamente", "success");
            setTimeout(location.reload(), 2000);
          } else {
            swal("Error", msg, "error");
          }
        }
      });
    }
  });
};

window.DateVist = function (id) {
  $('#' + id).datepicker({
    dateFormat: 'yyy-mm-dd'
  });
};

window.MultiSelectVist = function (id, descripcion) {
  $('#' + id).multiselect({
    nonSelectedText: descripcion,
    nSelectedText: "Seleccionados",
    allSelectedText: false
  });
};

window.FileVist = function (id_div, id_input) {
  $('#' + id_input).on('fileselect', function (event, numFiles, label) {
    var input = $(this).parents("#" + id_div + ' .input-group').find(':text'),
        log = numFiles > 1 ? numFiles + ' files selected' : label;

    if (input.length) {
      input.val(log);
    } else {
      if (log) $("#" + id_div + " .input_form_file").val(log);
    }
  });
};

window.EC_editFin = function (tipo) {
  $("#delete_at_edit").fadeOut(250);
  $("#edit_at_edit").fadeOut(250, function () {
    $(".upd_participante_loading").fadeIn(250);
  });

  if (tipo != 6) {
    $.ajax({
      type: 'PUT',
      url: url + "/formularios/" + window.info_camp.id,
      data: RecopDat(tipo),
      success: function success(result) {
        EC_editFrontFin(result);
      }
    });
  } else {
    $.ajax({
      type: 'post',
      url: url + "/formularios/" + window.info_camp.id,
      dataType: 'script',
      cache: false,
      contentType: false,
      processData: false,
      data: RecopDat(tipo),
      success: function success(res) {
        EC_editFrontFin(res);
      }
    });
  }
};

window.EC_editFrontFin = function (campo) {
  $(".upd_participante_loading").fadeOut(250, function () {
    $("#delete_at_edit").fadeIn(250);
    $("#edit_at_edit").fadeIn(250);
  });
  swal.close();
  swal("Listo!", "Hemos editado el campo exitosamente", "success");

  if (campo.tipo == "text" || campo.tipo == "email" || campo.tipo == "date") {
    $("#Formulario_" + campo.id_formulario + "_Campo_" + campo.id + "").attr("placeholder", campo.descripcion);
    $("#btn_Formulario_" + campo.id_formulario + "_Campo_" + campo.id + "").attr("onclick", "EC_editField(" + "'" + JSON.stringify(campo) + "'" + ")");
  }

  if (campo.tipo == "select") {
    $("#btn_Formulario_" + campo.id_formulario + "_Campo_" + campo.id).attr("onclick", "EC_editField(" + "'" + JSON.stringify(campo) + "'" + ")");
    $("#Formulario_" + campo.id_formulario + "_Campo_" + campo.id + "").empty();
    $("#Formulario_" + campo.id_formulario + "_Campo_" + campo.id + "").append("<option>" + campo.descripcion + "</option>");
    campo.subcampos.map(function (subcampo) {
      $("#Formulario_" + campo.id_formulario + "_Campo_" + campo.id + "").append("<option>" + subcampo.descripcion + "</option>");
    });
  }

  if (campo.tipo == "multiselect") {
    $("#btn_Formulario_" + campo.id_formulario + "_Campo_" + campo.id).attr("onclick", "EC_editField(" + "'" + JSON.stringify(campo) + "'" + ")");
    $("#div_Formulario_" + campo.id_formulario + "_Campo_" + campo.id + " .multiselect-selected-text").text(campo.descripcion);
    $("#div_Formulario_" + campo.id_formulario + "_Campo_" + campo.id + " div span div ul").empty();
    campo.subcampos.map(function (subcampo) {
      $("#div_Formulario_" + campo.id_formulario + "_Campo_" + campo.id + " div span div ul").append('<li>' + '<a tabindex="0">' + '<label class="checkbox" title="Elige una o varias opciones en el ano">' + '<input type="checkbox" value="Elige una o varias opciones en el ano">' + subcampo.descripcion + '</label>' + '</a>' + '</li>');
    });
  }

  if (campo.tipo == "file") {
    $("#btn_Formulario_" + campo.id_formulario + "_Campo_" + campo.id).attr("onclick", "EC_editField(" + "'" + JSON.stringify(campo) + "'" + ")");
    $("#place_" + campo.id_formulario + "_Campo_" + campo.id).attr("placeholder", campo.descripcion);
  }

  if (campo.tipo == "texto_ayuda") {
    console.log(campo);
    $("#Formulario_" + campo.id_formulario + "_code_" + campo.id).text(campo.texto_ayuda);
    $("#btn_Formulario_" + campo.id_formulario + "_Campo_" + campo.id).attr("onclick", "EC_editField(" + "'" + JSON.stringify(campo) + "'" + ")");
  }

  if (campo.tipo == "img_ayuda") {
    console.log("Formulario_" + campo.id_formulario + "_img_" + campo.id);
    console.log(window.location + "../public/img/crono/" + campo.img_ayuda);
    $("#Formulario_" + campo.id_formulario + "_img_" + campo.id).attr("src", window.location + "../public/img/crono/" + campo.img_ayuda);
    $("#btn_Formulario_" + campo.id_formulario + "_Campo_" + campo.id).attr("onclick", "EC_editField(" + "'" + JSON.stringify(campo) + "'" + ")");
  }
};

window.RecopDat = function (tipo) {
  if (tipo == 1 || tipo == 2 || tipo == 3) {
    var Datos = {
      id: window.info_camp.id,
      tipo: window.info_camp.tipo,
      nombre: window.info_camp.nombre,
      descripcion: window.info_camp.descripcion,
      obligatorio: window.info_camp.obligatorio
    };
  }

  if (tipo == 2) {
    Datos.subcampos = window.info_camp.subcampos;
  }

  if (tipo == 3) {
    Datos.img = window.info_camp.img;
    Datos.pdf = window.info_camp.pdf;
  }

  if (tipo == 4) {
    var Datos = {
      id: window.info_camp.id,
      tipo: window.info_camp.tipo,
      codigo_pago: window.info_camp.codigo_pago
    };
  }

  if (tipo == 5) {
    var Datos = {
      id: window.info_camp.id,
      tipo: window.info_camp.tipo,
      texto_ayuda: window.info_camp.texto_ayuda
    };
  }

  if (tipo == 6) {
    var file_data = $(".iuydsab564").prop("files")[0];
    var Datos = new FormData();
    Datos.append("id", window.info_camp.id);
    Datos.append("tipo", window.info_camp.tipo);
    Datos.append("file", file_data);
    Datos.append("_method", "put");
  }

  return Datos;
};

window.EC_editForm = function (id) {
  $(".vist_form_" + id).hide("slow", function () {
    $(".edit_form_" + id).show("slow");
  });
};

window.EC_initFile = function (id_input, id_div) {
  $('#' + id_input).on('fileselect', function (event, numFiles, label) {
    var input = $(this).parents("#" + id_div + ' .input-group').find(':text'),
        log = numFiles > 1 ? numFiles + ' files selected' : label;

    if (input.length) {
      input.val(log);
    } else {
      if (log) $("#" + id_div + " .form-control").val(log);
    }
  });
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