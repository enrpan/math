$(function(){

  var num1, num2;
  var total_ok = 0;
  var total_nok = 0;
  var new_sum = false;

  function vaciar_msg_res() {
    $('#res_txt_ok').html("");
    $('#res_txt_nok').html("");
    $('#res_txt_aviso').html("");
    new_sum = false;
  };

  function mostrar_op() {

    //$('#marc_ok').html(total_ok);
    //$('#marc_nok').html(total_nok);

    num1 = Math.round( Math.random()*10 );
    num2 = Math.round( Math.random()*10 );

    var op = num1 + " + " + num2 + " = ";

    $('#op').html(op);
    $('#res').val("");
    vaciar_msg_res();

    $('#res').focus();
  };

  $("#btnComprobar").on('click', function(){
    
    var res = $('#res').val();
    var resok = num1 + num2;

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
        $('#res_txt_nok').html("Ohhh... Te has equivocado: " + num1 + " + " + num2 + " = " + resok);
        total_nok++;
        $('#marc_nok').html(total_nok);
      }
      else
      {
        $('#res_txt_ok').html("!!! BIEN !!!!     " + num1 + " + " + num2 + " = " + resok);
        total_ok++;
        $('#marc_ok').html(total_ok);
      }
      
      new_sum = true;     
    }
  });

  $("#btnNueva").on('click', function(){
    
    if ( new_sum )
    {
      vaciar_msg_res();
      mostrar_op();
    }
    else
    {
      $('#res').focus();
    }
  });

  mostrar_op();
});