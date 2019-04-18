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
      });
    }
}


window.editarParticipante=function(participante, convert, ty = '1') {

  if (convert==1) {
    participante=JSON.parse(participante);
  }
  if (ty==2) {
    var cat = participante.categorias[0]["id"];
  } else{
    var cat = participante.pivot["id_categoria"];
  }


   DatosParticipanteFormulario(participante["email_participante"]);

  $("#edit_path #nombre").val(participante["nombre_participante"])
  $("#edit_path #email").val(participante["email_participante"])
  $("#edit_path #apellido").val(participante["apellido"])
  $("#edit_path #dni").val(participante["dni"])
  $("#edit_path #iden").val(participante["dni"])
  $("#edit_path #nacimiento").val(participante["nacimiento"])
  $("#edit_path #sexo").val(participante["sexo"])
  $("#edit_path #id_categoria").val(cat)
  $("#edit_path #cate").val(cat)
  $("#edit_path #id_estado_inscripcion").val(participante["id_inscripcion"])
  $("#edit_path #id_part").val(participante["id"])
  $(".editar_modal").click();
  $("#myselect").val(3);
}

window.DetallesParticipante=function(participante, convert, ty = '1') {

  if (convert==1) {
    participante=JSON.parse(participante);
  }
  if (ty==2) {
    var cat = participante.categorias[0]["id"];
  } else{
    var cat = participante.pivot["id_categoria"];
  }

  $("#id_categoria option").map(function(key, val){
    if (val.value==participante.pivot["id_categoria"]){
        $("#lista_categoria").text(val.text);
    }
})
  if (participante["sexo"]==0) {
    var sex="Masculino"
  } else{
    var sex="Femenino"
  }
  if (participante.pivot["id_estado_inscripcion"]==1) {var EstadIns="Pre-Inscrito"}
  if (participante.pivot["id_estado_inscripcion"]==2) {var EstadIns="Inscrito"}
  if (participante.pivot["id_estado_inscripcion"]==3) {var EstadIns="Acreditado"}
  if (participante.pivot["id_estado_inscripcion"]==4) {var EstadIns="Anulado"}

  $("#lista_nombre").text(participante["nombre_participante"])
  $("#lista_email").text(participante["email_participante"])
  $("#lista_apellido").text(participante["apellido"])
  $("#lista_dni").text(participante["dni"])
  $("#lista_dni").text(participante["dni"])
  $("#lista_nacimiento").text(participante["nacimiento"])
  $("#lista_sexo").text(sex)
  $("#lista_inscripcion").text(EstadIns)
  $("#list_id").val(participante["id"])
  $(".editar_modal2").click();
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

  var CustomForm=$("#custom_form :not(button) :input");
  var DataForm={};
  DataForm.DefaultDataForm={};
  DataForm.CustomDataForm={};
  CustomForm.map(function(num, Data){
    DataForm.CustomDataForm[Data.name]=Data.value;
  })

  DataForm.DefaultDataForm.id = $("#edit_path #id_part").val();
  DataForm.DefaultDataForm.nombre_participante = $("#edit_path #nombre").val();
  DataForm.DefaultDataForm.apellido = $("#edit_path #apellido").val();
  DataForm.DefaultDataForm.email_participante = $("#edit_path #email").val();
  DataForm.DefaultDataForm.dni = $("#edit_path #dni").val();
  DataForm.DefaultDataForm.nacimiento =  nacimiento_;
  DataForm.DefaultDataForm.edad =  edad_;
  DataForm.DefaultDataForm.sexo =  $("#edit_path #sexo option:selected").val();
  DataForm.DefaultDataForm.id_categoria = $("#edit_path #id_categoria option:selected").val();
  DataForm.DefaultDataForm.id_estado_inscripcion = $("#edit_path #id_estado_inscripcion option:selected").val();
  DataForm.DefaultDataForm.act_status =  false;

  $( ".upd_seg .upd_participante_btn" ).fadeOut(250, function () {
      $( ".upd_seg .upd_participante_loading" ).fadeIn(250);
    });

   $.ajax({
        type: 'POST',
        url: url+"/participantes",
        data: DataForm,
        success: function(msg){
          exitoUpdatePart(msg);
        }
    });
}


window.exitoUpdatePart=function(participanteActualizado) {

  var ParticipanteActualizado_ = JSON.stringify(participanteActualizado);
  var btn_inscrito="";
  var btn_acreditado="";

  if (participanteActualizado.categorias[0].pivot.id_estado_inscripcion>=2 && participanteActualizado.categorias[0].pivot.id_estado_inscripcion!=4){
    btn_inscrito="pul";
  }

  if (participanteActualizado.categorias[0].pivot.id_estado_inscripcion>=3 && participanteActualizado.categorias[0].pivot.id_estado_inscripcion!=4){
    btn_acreditado="pul";
  }

  $("#"+participanteActualizado["id"]).empty();
  $("#"+participanteActualizado["id"]).html('<td>'+participanteActualizado["id"]+'</td>'+
                                                            '<td class="inscrito_'+participanteActualizado["id_inscripcion"]+'">'+participanteActualizado["estado_inscripcion"]+'</td>'+
                                                           '<td>'+participanteActualizado["nombre_participante"]+' '+participanteActualizado["apellido"]+'</td>'+
                                                           '<td>'+participanteActualizado["apellido"]+'</td>'+
                                                           '<td>'+participanteActualizado["dni"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'</td>'+
                                                           '<td class="participantes_lista_acciones">'+
                                                             "<button id='btn_"+participanteActualizado["id"]+"' style='padding: .25rem .5rem;' type='button' class='mb-2 btn btn-primary mr-2'><i style='font-size: 25px' class='material-icons'>border_color</i></button>"+
                                                             '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 '+btn_inscrito+'"><i style="font-size: 25px" class="material-icons">folder_shared</i></button>'+
                                                             '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2 '+btn_acreditado+'"><i style="font-size: 25px" class="material-icons">attach_money</i></button>'+
                                                             '<button style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-outline-primary mr-2"><i style="font-size: 25px" class="material-icons">folder</i></button>'+
                                                           '</td>');

$('#btn_'+participanteActualizado["id"]).click(function(){ editarParticipante(ParticipanteActualizado_, '1', '2'); });



  $( ".upd_participante_loading" ).fadeOut(250, function () {
      $( ".upd_participante_btn" ).fadeIn(250);
    });
  swal("Listo","Datos actualizados exitosamente", "success");

    location.reload();
}

window.chan=function(id_participante, status, tipo, id_categoria){

    var act=false;
    var ins_class =($(".btn_"+tipo+"_"+id_participante).attr("class"));
    ins_class=ins_class.split(" ");
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
                id_estado_inscripcion: status,
                id_categoria: id_categoria,
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
                id_categoria: id_categoria,
                id_estado_inscripcion: status,
                act_status: true
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
      $(".crear_part_btn").hide("slow",function(){
        $(".upd_participante_loading").show("slow");
      })
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
          id_categoria: $(".crear_usr #id_categoria").val(),
          id_estado_inscripcion: $(".crear_usr #id_estado_inscripcion option:selected").val()
        },
        success: function(msg){

          $(".upd_participante_loading").hide("slow",function(){
            $(".crear_part_btn").show("slow");
          })

          if (msg=="Exito") {
            $(".crear_usr input, .crear_usr select").not(':input[type=checkbox]').map(function(key, val){
              $(".crear_usr #"+val.id).val("");
            })
            $('.crear_usr #id_categoria').multiselect("select", "0");
              swal("Listo!", "El participnate ha sido registrado exitosamente", "success");
          } else{
            for (var error in msg) {
              $(".crear_usr #"+error).addClass("is-invalid");
              $(".crear_usr #"+error).after('<small id="us_error err_part" style="color:red;">'+msg[error][0]+'</small>');
            }
          }
        }
    });

    }
  }



  window.updateListPart=function(){

    $("#home").empty();
    $("#home").append("<div id='contenListPart'></div>");

    $("#contenListPart").load(url+"/participantes/updateListPart", {Data: "Ex"});

  }

  window.DatosParticipanteFormulario=function(email_participante){
    $("#custom_form").empty();
    $("#custom_form_default").show();
    $("#custom_form").hide();
    $("#no_nada").hide();
    $.ajax({
        type: 'POST',
        url: url+"/inscripcion",
        data: { 
          email_participante: email_participante,
        },
        success: function(dat){ 
          if (dat.length==0) {
            $("#custom_form_default").hide("slow", function(){
              $("#no_nada").show("slow");
            });
          } else{

                $("#custom_form").append('<strong class="text-muted d-block mb-2 form_name">'+dat[0].campos.formularios.nombre+'</strong>');
                  dat.map(function(datos){
                    if (datos.campos.tipo!="file") {
                    $("#custom_form").append('<div class="form-row">'+
                                                '<div class="form-group col-md-12">'+
                                                 ' <strong class="text-muted d-block mb-2">'+datos.campos.nombre+'</strong>'+
                                                  '<input type="email" class="form-control" name="campo_'+datos.id+'" placeholder="First name" value="'+datos.valor+'" required="">'+
                                                '</div>'+
                                              '</div>');
                  } else{

                    $("#custom_form").append('<input type="hidden">'+
                                              '<div class="form-row">'+
                                                '<div class="form-group col-md-12">'+
                                                 ' <strong class="text-muted d-block mb-2">'+datos.campos.nombre+'</strong>'+
                                                  '<a target="_blank" href="'+window.location.href +'/../public/img/crono/'+datos.valor+'" class="btn btn-block btn-success" style="color:white">Ver archivo</a>'+
                                                '</div>'+
                                              '</div>');
                  }
                  $("#custom_form_default").hide("slow", function(){
                    $("#custom_form").show("slow");
                  });
                });
                $("#custom_form").append('<button type="button" onclick="deleteCustomFormData('+"'"+email_participante+"'"+')" class="btn btn-block btn-danger">Borrar datos del formulario personalizado</button>');
            }
        }
    });
  }


  window.enviomail=function(email){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = EmailConf(email);

    swal({
      title: "Informacion del campo", 
      content: wrapper,
      closeOnClickOutside: false  
    });
    $(".swal-footer").css("display", "none");

      var editor = new Quill('#editor-container', {
        theme: 'snow'
      });
  }

  window.EmailConf=function(email){
    return '<form class="add-new-post">'+
                      '<input class="form-control form-control-lg mb-3" id="asunto" type="text" placeholder="Asunto del mensaje">'+
                      '<div id="editor-container" class="add-new-post__editor mb-1"></div>'+
                      '<div class"form-row btn_email">'+
                      '<div class="form-group col-md-12 btn_email">'+
                        '<input type="hidden" id="hidden_tipe_field">'+
                        '<button onclick="SendEmail('+"'"+email+"'"+')" class="btn btn-primary btn-block" type="button">Enviar Email</button>'+
                      '</div>'+
                      '<div class="form-group col-md-12">'+
                        '<button onclick="swal.close();" class="btn btn-danger btn-block" type="button">Cancelar</button>'+
                      '</div>'
                      '</<div>'+
                    '</form>'
  }

  window.SendEmail=function(email){
    $.ajax({
         type: 'POST',
         url: url+"/participantes/enviar_mail",
         data: {
          email_participante: email,
          asunto: $("#asunto").val(),
          contenido: $(".ql-editor").html()
         },
         success: function(msg){
             if (msg=="Exito") {
               $("#custom_form").hide("slow", function(){
                 $("#no_nada").show("slow")
               })
             }
         }
     });
    swal.close()
    swal("Listo!", "Email enviado exitosamente al participante", "success");
  }

  window.deleteCustomFormData=function(email_participante){
    swal({
          title: "Advertencia",
          text: "Los datos no podran recuperarse, ¿estas seguro de proceder con eliminarlos?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
                $.ajax({
                    type: 'DELETE',
                    url: url+"/participantes/"+email_participante,
                    success: function(msg){
                        if (msg=="Exito") {
                          $("#custom_form").hide("slow", function(){
                            $("#no_nada").show("slow")
                          })
                        }
                    }
                });
          }
        });
  }


window.AbrirEdit=function(){
    var btn_ed = $("#list_id").val();
   $(".boton_editar"+btn_ed).click();

  }