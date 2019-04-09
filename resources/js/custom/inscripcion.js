$(document).ready(function() {
         $('#nacimiento').datepicker({
            dateFormat: 'yyy-mm-dd'
         });
       });


      window.calculateAge=function(){

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

          $("#edad").val(edad)
          $("#nacimiento").val(nacimiento);
          $("#submitButton").click();
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