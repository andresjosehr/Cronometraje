window.onload=function(){

  var parts = window.location.pathname.split('/');
  var urlPath = parts.pop() || parts.pop();  // handle potential trailing slash
  if (urlPath=="participantes") {

      $('#participantes_table').DataTable();
      $.trim($($('#tabla_de')[0].nextSibling).remove())
      $(".dataTables_length label").contents()[0].textContent="Mostrar";
      $(".dataTables_length label").contents()[2].textContent="Participantes";
      $("#participantes_table_filter label").contents()[0].textContent="Buscar: ";
      $(".dataTables_wrapper .dataTables_filter input").css("margin-left", "0em");
      $("#participantes_table_previous a").html("Anterior");
      $("#participantes_table_next a").html("Seguiente");
      $("#participantes_table_paginate").click(function() {
      $("#participantes_table_previous a").html("Anterior");
      $("#participantes_table_next a").html("Seguiente");
      })
      $(".dataTables_info").empty();
      $(".dataTables_info").remove();

      $('#edit_path #nacimiento, .crear_usr #nacimiento').datepicker({
          dateFormat: 'yyy-mm-dd'
      });
    }
}
window.editarParticipante=function(participante, convert) {
  if (convert==1) {
    participante=JSON.parse(participante);
  }


  $("#edit_path #nombre").val(participante["nombre_participante"])
  $("#edit_path #email").val(participante["email_participante"])
  $("#edit_path #apellido").val(participante["apellido"])
  $("#edit_path #dni").val(participante["dni"])
  $("#edit_path #iden").val(participante["dni"])
  $("#edit_path #nacimiento").val(participante["nacimiento"])
  $("#edit_path #sexo").val(participante["sexo"])
  $("#edit_path #id_categoria").val(participante["id_categoria_cat"])
  $("#edit_path #cate").val(participante["id_categoria_cat"])
  $("#edit_path #id_estado_inscripcion").val(participante["id_estado_inscripcion_ins"])
  $("#edit_path #id_part").val(participante["id_participante"])
  $(".editar_modal").click();
  $("#myselect").val(3);
}

window.actualizarParticipante=function() {

    $("#edit_path #email,#edit_path #nombre,#edit_path #email,#edit_path #dni").removeClass("is-invalid");
    $("small").remove();
   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

   var  val=0;
  if (!emailRegex.test($("#edit_path #email").val())) {
    $("#edit_path #email").addClass("is-invalid");
    $("#edit_path #email").after('<small id="us_error err_part" style="color:red;">Debes introducir un email valido</small>');
    val++;
  }
  if ($("#edit_path #nombre").val()=="") {
    $("#edit_path #nombre").addClass("is-invalid");
    $("#edit_path #nombre").after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
    val++;
  }
  if ($("#edit_path #apellido").val()=="") {
    $("#edit_path #apellido").addClass("is-invalid");
    $("#edit_path #apellido").after('<small id="us_error err_part" style="color:red;">Debes introducir un apellido</small>');
    val++;
  }

  if ($("#edit_path #dni").val()=="") {
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

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

  if ($("#edit_path #id_categoria option:selected").val()!=$("#cate").val() && val==0) {
        swal({
          title: "Advertencia",
          text: "La categoria del usuario esta a punto de ser cambiada, esta categoria fue asignada a este usuario automaticamente por el sistema, ¿Estas seguto de querer cambiarla?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            actualizarParticipanteUPD(nacimiento ,edad);
          }
        });
  }else{
    actualizarParticipanteUPD(nacimiento ,edad);
  }
  
}

window.actualizarParticipanteUPD=function(nacimiento_, edad_) {


  $( ".upd_participante_btn" ).fadeOut(250, function () {
      $( ".upd_participante_loading" ).fadeIn(250);
    });

  $("#contenedor_editar_participante").load(url+"/participantes",{
      id:$("#edit_path #id_part").val(),
      nombre_participante:$("#edit_path #nombre").val(),
      apellido:$("#edit_path #apellido").val(),
      email_participante:$("#edit_path #email").val(),
      dni:$("#edit_path #dni").val(),
      nacimiento: nacimiento_,
      edad: edad_,
      sexo: $("#edit_path #sexo option:selected").val(),
      id_categoria:$("#edit_path #id_categoria option:selected").val(),
      id_estado_inscripcion:$("#edit_path #id_estado_inscripcion option:selected").val()

  });
}


window.exitoUpdatePart=function(participanteActualizado) {

  var ParticipanteActualizado_ = JSON.stringify(participanteActualizado);

  $("#"+participanteActualizado["id_participante"]).empty();
  $("#"+participanteActualizado["id_participante"]).html('<td>'+participanteActualizado["id_participante"]+'</td>'+
                                                            '<td class="inscrito_'+participanteActualizado["id_estado_inscripcion_ins"]+'">'+participanteActualizado["nombre_estado_inscripcion"]+'</td>'+
                                                           '<td>'+participanteActualizado["nombre_participante"]+' '+participanteActualizado["apellido"]+'</td>'+
                                                           '<td>'+participanteActualizado["email_participante"]+'</td>'+
                                                           '<td>'+participanteActualizado["nombre_categoria"]+'</td>'+
                                                           '<td class="participantes_lista_acciones">'+
                                                             "<button id='btn_"+participanteActualizado["id_participante"]+"' style='padding: .25rem .5rem;' type='button' class='mb-2 btn btn-primary mr-2'><i style='font-size: 25px' class='material-icons'>border_color</i></button>"+
                                                             '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>'+
                                                             '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">attach_money</i></button>'+
                                                             '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>'+
                                                           '</td>');

$('#btn_'+participanteActualizado["id_participante"]).click(function(){ editarParticipante(ParticipanteActualizado_, '1'); });



  $( ".upd_participante_loading" ).fadeOut(250, function () {
      $( ".upd_participante_btn" ).fadeIn(250);
    });
  swal("Listo","Datos actualizados exitosamente", "success");
}

window.chan=function(id_participante, status, tipo){

    var act=false;

    var ins_class =($(".btn_"+tipo+"_"+id_participante).attr("class"));
    ins_class=ins_class.split(" ");
    console.log(ins_class);
    for (var i = 0; i < ins_class.length; i++) {
      if (ins_class[i]=="pul") {
        act=true;
      }
    }

    if (!act) {

        swal({
          title: "Advertencia",
          text: "Estas a punto de cambiar el estado del participante a "+tipo+", ¿Estas seguro de querer hacerlo?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
              $(".btn_"+tipo+"_"+id_participante).addClass("pul");
              if (tipo=="acreditado") {
                $(".btn_inscrito_"+id_participante).addClass("pul");
              }
              $('#id_id_'+id_participante).html(MaysPrimera(tipo));
              $('#id_id_'+id_participante).removeClass();
              $('#id_id_'+id_participante).addClass('inscrito_'+status);
              $("#contenedor_status_participante").load(url+"/participantes",{
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
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
              $(".btn_"+tipo+"_"+id_participante).removeClass("pul");
              if (tipo=="inscrito") {
                $(".btn_acreditado_"+id_participante).removeClass("pul");
                $('#id_id_'+id_participante).html("Pre-Inscrito");
                $('#id_id_'+id_participante).removeClass();
                $('#id_id_'+id_participante).addClass('inscrito_1');
                status=1;
              }
              if (tipo=="acreditado") {
                $('#id_id_'+id_participante).html("Inscrito");
                $('#id_id_'+id_participante).removeClass();
                $('#id_id_'+id_participante).addClass('inscrito_2');
                status=2;
              }
              $("#contenedor_status_participante").load(url+"/participantes",{
                id: id_participante,
                id_estado_inscripcion: status
              });
            }
        });

    }
}


window.MaysPrimera=function (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

window.limp=function(){
    $(".crear_usr #nombre_participante").val("");
    $(".crear_usr #apellido").val("");
    $(".crear_usr #email_participante").val("");
    $(".crear_usr #dni").val("");
    $(".crear_usr #nacimiento").val("");
    $(".crear_usr #sexo").val("0");
    $(".crear_usr #id_categoria").val("0");
    $(".crear_usr #id_estado_inscripcion").val("0");
  }

  window.crearPart=function(){
    var val=0;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    $(".crear_usr #nombre_participante, .crear_usr #apellido, .crear_usr #email_participante, .crear_usr #dni, .crear_usr #nacimiento, .crear_usr #sexo, .crear_usr #id_estado_inscripcion").removeClass('is-invalid');
    $("small").remove()
    if ($(".crear_usr #nombre_participante").val()=="") {
      $(".crear_usr #nombre_participante").addClass("is-invalid");
      $(".crear_usr #nombre_participante").after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
      val++;
    }
    if ($(".crear_usr #apellido").val()=="") {
      $(".crear_usr #apellido").addClass("is-invalid");
      $(".crear_usr #apellido").after('<small id="us_error err_part" style="color:red;">Debes introducir un apellido</small>');
      val++;
    }  
    if (!emailRegex.test($(".crear_usr #email_participante").val())) {
      $(".crear_usr #email_participante").addClass("is-invalid");
      $(".crear_usr #email_participante").after('<small id="us_error err_part" style="color:red;">Debes introducir un email valido</small>');
      val++;
    }
    if ($(".crear_usr #dni").val()=="") {
      $(".crear_usr #dni").addClass("is-invalid");
      $(".crear_usr #dni").after('<small id="us_error err_part" style="color:red;">Debes introducir un DNI valido</small>');
      val++;
    }
    if ($(".crear_usr #nacimiento").val()=="") {
      $(".crear_usr #nacimiento").addClass("is-invalid");
      $(".crear_usr #nacimiento").after('<small id="us_error err_part" style="color:red;">Debes introducir una fecha de nacimiento</small>');
      val++;
    }
    if ($(".crear_usr #sexo").val()=="null") {
      $(".crear_usr #sexo").addClass("is-invalid");
      $(".crear_usr #sexo").after('<small id="us_error err_part" style="color:red;">Debes introducir sexo</small>');
      val++;
    }
    if ($(".crear_usr #id_estado_inscripcion").val()=="0") {
      $(".crear_usr #id_estado_inscripcion").addClass("is-invalid");
      $(".crear_usr #id_estado_inscripcion").after('<small id="us_error err_part" style="color:red;">Debes introducir un estado</small>');
      val++;
    }


    if (val==0) {
      var date = $("#nacimiento").val();
      var nacimiento = date.split("/").reverse().join("-");
      nacimiento = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
      var hoy = new Date();
      var cumpleanos = new Date(date);
      var edad = hoy.getFullYear() - cumpleanos.getFullYear();
      var m = hoy.getMonth() - cumpleanos.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
         edad--;
      }

      $.ajax({
        type: 'POST',
        url: url+"/participantes/createPost",
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
        success: function(msg){

            if (msg["email_participante"] == $(".crear_usr #email_participante").val()) {
              swal("Listo", "Hemos registrado al participante exitosamente", "success");
              $(".crear_usr #nombre_participante").val("")
              $(".crear_usr #apellido").val("")
              $(".crear_usr #email_participante").val("")
              $(".crear_usr #dni").val("")
              $(".crear_usr #sexo").val("0")
              $(".crear_usr #id_categoria").val("0")
              $(".crear_usr #id_estado_inscripcion").val("0")

              var participanteActualizado = JSON.stringify(msg);
              $("#ListaParticipantes").append('<tr id="'+participanteActualizado["id_participante"]+'"><td>'+participanteActualizado["id_participante"]+'</td>'+
                '<td class="inscrito_'+participanteActualizado["id_estado_inscripcion_ins"]+'">'+participanteActualizado["nombre_estado_inscripcion"]+'</td>'+
               '<td>'+participanteActualizado["nombre_participante"]+' '+participanteActualizado["apellido"]+'</td>'+
               '<td>'+participanteActualizado["email_participante"]+'</td>'+
               '<td>'+participanteActualizado["nombre_categoria"]+'</td>'+
               '<td class="participantes_lista_acciones">'+
                 "<button id='btn_"+participanteActualizado["id_participante"]+"' style='padding: .25rem .5rem;' type='button' class='mb-2 btn btn-primary mr-2'><i style='font-size: 25px' class='material-icons'>border_color</i></button>"+
                 '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>'+
                 '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">attach_money</i></button>'+
                 '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>'+
              '</td></tr>');
            } else{
              $.each(msg, function( key, value ) {
                $(".crear_usr #"+key).addClass("is-invalid");
                $(".crear_usr #"+key).after('<small id="us_error err_part" style="color:red;">'+value[0]+'</small>');
              });
            }
        }
    });

    }
  }