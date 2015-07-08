$(function(){

  var num1, num2, numMayor, numMenor;
  var total_ok = 0;
  var total_nok = 0;

  function vaciar_msg_res() {
    $('#res_txt_ok').html("");
    $('#res_txt_nok').html("");
    $('#res_txt_aviso').html("");
    $("#btnComprobar").prop('disabled', false);
    $("#btnNueva").prop('disabled', true);
  };

  function mostrar_op() {

    //$('#marc_ok').html(total_ok);
    //$('#marc_nok').html(total_nok);

    num1 = Math.round( Math.random()*20 );
    num2 = Math.round( Math.random()*10 );

    if ( num1 >= num2 ) 
    {
      numMayor = num1;
      numMenor = num2;
    }
    else
    {
      numMayor = num2;
      numMenor = num1;
    }

    var op = numMayor + " - " + numMenor + " = ";

    $('#op').html(op);
    $('#res').val("");
    vaciar_msg_res();

    $('#res').focus();
  };

  $("#btnComprobar").on('click', function(){
    
    var res = $('#res').val();
    var resok = numMayor - numMenor;

    vaciar_msg_res();

    if ( isNaN(res) || res==="" )
    {
      $('#res_txt_aviso').html("!!! No has escrito un resultado válido. Tiene que ser un número !!!");
      $('#res').val("");
      $('#res').focus();
    }
    else
    {
      if ( res != resok )
      {
        $('#res_txt_nok').html("Ohhh... Te has equivocado: " + numMayor + " - " + numMenor + " = " + resok);
        total_nok++;
        $('#marc_nok').html(total_nok);
      }
      else
      {
        $('#res_txt_ok').html("!!! BIEN !!!!     " + numMayor + " - " + numMenor + " = " + resok);
        total_ok++;
        $('#marc_ok').html(total_ok);
      }
      
      $("#btnComprobar").prop('disabled', true);
      $("#btnNueva").prop('disabled', false);
    }
  });

  $("#btnNueva").on('click', function(){
    vaciar_msg_res();
    mostrar_op();
  });

  mostrar_op();
});
