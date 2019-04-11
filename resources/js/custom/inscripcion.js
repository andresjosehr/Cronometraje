$(document).ready(function() {
         $('#nacimiento').datepicker({
            dateFormat: 'yyy-mm-dd'
         });
       });


      window.calculateAge=function(){

        if ($("#nacimiento").html()) {

         var date = $("#nacimiento").val();
         var nacimiento = date.split("/").reverse().join("-");

          var nacimiento = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");


          var hoy = new Date();
          var cumpleanos = new Date(date);
          var edad = hoy.getFullYear() - cumpleanos.getFullYear();
          var m = hoy.getMonth() - cumpleanos.getMonth();

          if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
              edad--;
          }

          var Categoria = JSON.parse($("#info_categorias").text());

          $("#edad").val(edad)
          $("#nacimiento").val(nacimiento);

          var val = 0;

          $('input').filter('[required]:visible').map(function(input, objeto){
            if ($("input[name='"+objeto.name+"']").val()==undefined) {
              console.log(objeto)
              val++;
            }
          })

          $('select').filter('[required]:visible').map(function(input, objeto){
              if ($("select[name='"+objeto.name+"'] option:selected").attr("class")=="pri") {
                val++;
              }
          })


          if (val==0) {
            if (Categoria.edad_minima<=edad && Categoria.edad_maxima>=edad && Categoria.sexo==$("#sexito").val()) {
              $("#id_categoria").val(Categoria.id);
              $("#submitButton").click();
            } else{
              swal("Error", "Los datos ingresados no aplican para este evento. Ponte en contacto con el administrador del evento para mas información", "error")
            }
          } else{
            
             $("#submitButton").click();
          }

        } else {
          $("#submitButton").click();
        }
      }



       window.InscripFile=function(id_input, id_div){
                        $('#'+id_input).on('fileselect', function(event, numFiles, label) {
                            var input = $(this).parents('#'+id_div+' .input-group').find(':text'),
                                log = numFiles > 1 ? numFiles + ' files selected' : label;

                            if( input.length ) {
                                input.val(log);
                            } else {
                                if( log ) $("#"+id_div+" .input_form_file").val(log);
                            }
                        });
                      }