$(function() {
    //Operaciones matemáticas
  $('#ejecutar').click(function(e) {
      e.preventDefault();
      //Almaceno los valores de los inputs
      var primerValor = $('#n1').val();
      var segundoValor = $('#n2').val()

      //Almacena el valor de la opción seleccionada
      var opcionSeleccionada = $('input:radio[name=operacion]:checked').val();

      //Condiciona para que acepte solo números usando las expresiones regulares
      if(primerValor.match(/^[0-9]+$/) && segundoValor.match(/^[0-9]+$/)){
          //Suma
          if(opcionSeleccionada == 'suma'){
              var resultado = parseFloat(primerValor) + parseFloat(segundoValor);
          }else if(opcionSeleccionada == 'resta'){ //Resta
              var resultado = parseFloat(primerValor) - parseFloat(segundoValor);
          }else if(opcionSeleccionada == 'multiplicacion'){
              var resultado = parseFloat(primerValor) * parseFloat(segundoValor);
          }else{
              var resultado = parseFloat(primerValor) / parseFloat(segundoValor);
          }

      }else{
          alert("Ingrese números en los campos");
      }
      //Muestro el resultado
    $('#resultado').text(resultado);
  });
});