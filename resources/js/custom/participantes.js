window.onload=function(){

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

      $('#nacimiento').datepicker({
          dateFormat: 'yyy-mm-dd'
      });
}
window.editarParticipante=function(participante) {
  participante=JSON.parse(participante);


  $("#nombre").val(participante["nombre_participante"])
  $("#email").val(participante["email_participante"])
  $("#apellido").val(participante["apellido"])
  $("#dni").val(participante["dni"])
  $("#iden").val(participante["dni"])
  $("#nacimiento").val(participante["nacimiento"])
  $("#sexo").val(participante["sexo"])
  $("#id_categoria").val(participante["id_categoria"])
  $("#cate").val(participante["id_categoria"])
  $("#id_estado_inscripcion").val(participante["id_estado_inscripcion"])
  $("#id_part").val(participante["id_participante"])
  $(".editar_modal").click();
  $("#myselect").val(3);
}

window.actualizarParticipante=function() {

    $("#email, #nombre, #email, #dni").removeClass("is-invalid");
    $("small").remove();
   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

   var  val=0;
  if (!emailRegex.test($("#email").val())) {
    $("#email").addClass("is-invalid");
    $("#email").after('<small id="us_error err_part" style="color:red;">Debes introducir un email valido</small>');
    val++;
  }
  if ($("#nombre").val()=="") {
    $("#nombre").addClass("is-invalid");
    $("#nombre").after('<small id="us_error err_part" style="color:red;">Debes introducir un nombre</small>');
    val++;
  }
  if ($("#apellido").val()=="") {
    $("#apellido").addClass("is-invalid");
    $("#apellido").after('<small id="us_error err_part" style="color:red;">Debes introducir un apellido</small>');
    val++;
  }

  if ($("#dni").val()=="") {
    $("#dni").addClass("is-invalid");
    $("#dni").after('<small id="us_error err_part" style="color:red;">Debes introducir el DNI del participante</small>');
    val++;
  }

   var date = $("#nacimiento").val();
   var nacimiento = date.split("/").reverse().join("-");


    var hoy = new Date();
    var cumpleanos = new Date(date);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

  if ($("#id_categoria option:selected").val()!=$("#cate").val() && val==0) {
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


  // $( ".upd_participante_btn" ).fadeOut(250, function () {
  //     $( ".upd_participante_loading" ).fadeIn(250);
  //   });

  $("#contenedor_editar_participante").load(url+"/participantes",{
      id_participante:$("#id_part").val(),
      nombre_participante:$("#nombre").val(),
      apellido:$("#apellido").val(),
      email_participante:$("#email").val(),
      dni:$("#dni").val(),
      nacimiento: nacimiento_,
      edad: edad_,
      sexo: $("#sexo option:selected").val(),
      id_categoria:$("#id_categoria option:selected").val(),
      id_estado_inscripcion:$("#id_estado_inscripcion option:selected").val()

  });
}


window.exitoUpdatePart=function() {
  swal("Datos actualizados exitosamente");
}