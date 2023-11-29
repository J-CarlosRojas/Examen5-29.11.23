function crearTabla(){
    

    let filas = document.getElementById("filas").value
    let columnas = document.getElementById("columnas").value


    var tabla = '<table border="1">';
    var numero = filas * columnas;

    console.log(filas)


    for (var i = 0; i < filas; i++) {
      tabla += '<tr>';

      for (var j = 0; j < columnas; j++) {
        tabla += '<td>' + numero + '</td>';
        numero--;
      }

      tabla += '</tr>';
    }

    tabla += '</table>';

    
    document.getElementById("tablaContainer").innerHTML = tabla;
  
}


function convertirMoneda() {
    
    var divisa = document.getElementById("divisa").value;
    var cantidad = parseFloat(document.getElementById("cantidad").value);

    
    var tasaDollarAEuro = 0.91;
    var tasaEuroADollar = 1.10;

    
    var resultado;
    if (divisa === "Dollar") {
      resultado = cantidad * tasaDollarAEuro;
      document.getElementById("resultado").innerHTML = cantidad + " Dollar = " + resultado.toFixed(2) + " Euro";
    } else if (divisa === "Euro") {
      resultado = cantidad * tasaEuroADollar;
      document.getElementById("resultado").innerHTML = cantidad + " Euro = " + resultado.toFixed(2) + " Dollar";
    } else {
      document.getElementById("resultado").innerHTML = "Seleccione una divisa y proporcione una cantidad válida.";
    }
  }