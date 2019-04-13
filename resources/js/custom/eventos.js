
window.onload=function(){
  $('#fecha').datepicker({
  });

  $('#crear_evento #fecha').datepicker({
  });
}


window.editarevento=function(evento) {

    evento=JSON.parse(evento);

    for (var propiedad in evento){

      $(".edit_evento #"+propiedad).val(evento[propiedad])

      $(".edit_evento #"+propiedad+' option[value="'+evento[propiedad]+'"]').attr('checked', true);

      if (propiedad=="id_categoria") {
        $(".edit_evento #"+propiedad).val(evento.id_categoria)
        $(".edit_evento #"+propiedad+' option[value="'+evento.id_categoria+'"]').attr('checked', true);
      }
      if (propiedad=="fecha") {
        $(".edit_evento #"+propiedad).val(FormatDate(evento[propiedad]));
      }
    }



  $(".editar_modal").click();
}

window.actualizarEvento=function(){

  $("small").remove()
  var Data={}, val=0;
  $(".edit_evento input, .edit_evento select, .edit_evento textarea").map(function(key, value){
    $(".edit_evento #"+value.id).removeClass("is-invalid");
    if (value.value=="") {
      $(".edit_evento #"+value.id).addClass("is-invalid");
      $(".edit_evento #"+value.id).after('<small id="us_error err_part" style="color:red;">Este campo es obligatorio</small>');
      val++;
    }
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (value.id=="email" && !emailRegex.test(value.value)) {
      $(".edit_evento #"+value.id).addClass("is-invalid");
      $(".edit_evento #"+value.id).after('<small id="us_error err_part" style="color:red;">Debes introducir un email valido</small>');
      val++;
    }

    if (value.id=="precio" && !/^\d+$/.test(value.value)) {
      $(".edit_evento #"+value.id).addClass("is-invalid");
      $(".edit_evento #"+value.id).after('<small id="us_error err_part" style="color:red;">Este campo debe ser numerico</small>');
      val++;
    }
    Data[value.id] = value.value;

  })

  Data["fecha"]=Data["fecha"].split("/").reverse().join("-");

  if (val==0) {
    updateEvento(Data);
  }
}

window.updateEvento=function(Datos){

  Datos._method="post";
  $.ajax({
      type: 'PUT',
      url: url+"/eventos/"+Datos.id,
      data: Datos,
      success: function(result){
        if (!result[0].id) {
          for (var key in result){
            $(".edit_evento #"+key).addClass("is-invalid");
            $(".edit_evento #"+key).after('<small id="us_error err_part" style="color:red;">'+result[key]+'</small>');
           }
        } else {
          $("#info_event_"+result[0].id).empty();

          for (var key in result[0]){
              if (key!="tipo" && key!="categorias" && key!="inscripcion_habilitada" && key!="auto_email" && key!="auto_numeracion" && key!="id_usuario" && key!='id_categoria' && key!='mensaje_inscripcion' && key!='mensaje_aprobacion_pago') {
                $("#info_event_"+result[0].id).append("<td>"+result[0][key]+"</td>");
              }
              if (key=="tipo") {
                if (result[0][key]==1) {
                   $("#info_event_"+result[0].id).append("<td>Basico</td>");
                } else{
                  $("#info_event_"+result[0].id).append("<td>Premium</td>");
                }
              }
              if (key=="categorias") {
                $("#info_event_"+result[0].id).append("<td>"+result[0][key]["nombre_categoria"]+"</td>");
              }
              if (key=="inscripcion_habilitada") {
                if (result[0][key]==1) {
                   $("#info_event_"+result[0].id).append("<td>Abierta</td>");
                } else{
                  $("#info_event_"+result[0].id).append("<td>Cerrada</td>");
                }
              }

              if (key=="auto_email" || key=="auto_numeracion") {
                if (result[0][key]==1) {
                   $("#info_event_"+result[0].id).append("<td>Si</td>");
                } else{
                  $("#info_event_"+result[0].id).append("<td>No</td>");
                }
              }
          }
          var info=JSON.stringify(result[0]);
          info=info.replace(/"/g, "&quot;");
          $("#info_event_"+result[0].id).append('<td style="display: flex;" id="btn_eve">'+
                '<button onclick="editarevento('+"'"+info+"'"+')" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-primary mr-2"><i style="font-size: 25px" class="material-icons">border_color</i></button>'+
                '<button onclick="editarParticipante()" style="padding: .25rem .5rem;" type="button" class="mb-2 btn btn-danger mr-2"><i style="font-size: 25px" class="material-icons">delete</i></button>'+
              '</td>')

          swal("Listo!", "Evento actualizado exitosamente", "success");
        }
      }
  });
}

window.crearEvento=function(){


  var DatCre={};
  $(".crear_evento input, .crear_evento select, .crear_evento textarea").map(function(key, val){

    $(".crear_evento #"+val.id).removeClass("is-invalid");
    $("small").remove();


    DatCre[val.id]=val.value;
    if(val.id=="inscripcion_habilitada" || val.id=="auto_email" || val.id=="auto_numeracion"){
      if($('#'+val.id).prop('checked')==true){
        DatCre[val.id]=1;
      } else{ DatCre[val.id]=0; }
    }
  });

  $(".crear_part_btn").hide("fast", function(){
    $(".crear_eve_lo").show("fast");
  });
  console.log(DatCre);
  $.ajax({
      type: 'post',
      url: url+"/eventos",
      data: DatCre,
      success: function(result){
        $(".crear_eve_lo").hide("fast", function(){
          $(".crear_part_btn").show("fast");
        });
        if (result!="Exito") {
          for (var key in result){
            $(".crear_evento #"+key).addClass("is-invalid");
            $(".crear_evento #"+key).after('<small id="us_error err_part" style="color:red;">'+result[key]+'</small>');
           }
        } else{
          $("#home").empty();
          $("#home").append('<div id="vista_eventos"></div>');
          $("#vista_eventos").load("eventos_act");

          $(".crear_evento input, .crear_evento select").map(function(key, val){
            $(".crear_evento #"+val.id).val("");
          })

          swal("Listo!", "El evento ha sido registrado exitosamente", "success")
        }
      }
  });

}

window.eliminarEvento=function(id){

  
  swal({
          title: "Espera!",
          text: "¿Estas seguro de eliminar este evento? Los formularios asociados a este evento tambien seran eliminados",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Listo!", "Formulario eliminado exitosamente", "success")
            $("#info_event_"+id).hide("slow");
            $("#info_event_"+id).remove();
                  $.ajax({
                  type: 'DELETE',
                  url: url+"/eventos/"+id,
                  success: function(result){
                  }
              });

            }
        });


}

window.FormatDate=function(inputDate) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }
}
