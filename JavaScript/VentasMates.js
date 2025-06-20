 var cantidadCalabaza = 0;
    var cantidadAcero = 0;
    var cantidadSilicona = 0;

    // Precios de los productos
    var precioCalabaza = 30000;
    var precioAcero = 40000;
    var precioSilicona = 5000;
    var precioBombilla = 5500;

    // Función para actualizar la cantidad en pantalla
    function actualizarCantidad(tipo, cantidad) {
      switch (tipo) {
        case 1:
          document.getElementById("cantidadCalabaza").textContent = cantidad;
          break;
        case 2:
          document.getElementById("cantidadAcero").textContent = cantidad;
          break;
        case 3:
          document.getElementById("cantidadSilicona").textContent = cantidad;
          break;
      }
    }

    // Función para aumentar cantidad
    function aumentarCantidad(tipo) {
      switch (tipo) {
        case 1:
          cantidadCalabaza = cantidadCalabaza + 1;
          actualizarCantidad(1, cantidadCalabaza);
          break;
        case 2:
          cantidadAcero = cantidadAcero + 1;
          actualizarCantidad(2, cantidadAcero);
          break;
        case 3:
          cantidadSilicona = cantidadSilicona + 1;
          actualizarCantidad(3, cantidadSilicona);
          break;
      }
    }

    // Función para disminuir cantidad
    function disminuirCantidad(tipo) {
      switch (tipo) {
        case 1:
          if (cantidadCalabaza > 0) {
            cantidadCalabaza = cantidadCalabaza - 1;
            actualizarCantidad(1, cantidadCalabaza);
          }
          break;
        case 2:
          if (cantidadAcero > 0) {
            cantidadAcero = cantidadAcero - 1;
            actualizarCantidad(2, cantidadAcero);
          }
          break;
        case 3:
          if (cantidadSilicona > 0) {
            cantidadSilicona = cantidadSilicona - 1;
            actualizarCantidad(3, cantidadSilicona);
          }
          break;
      }
    }

    // Función para calcular el total de la compra
    function calcularTotal() {
      var totalCalabaza = cantidadCalabaza * precioCalabaza;
      var totalAcero = cantidadAcero * precioAcero;
      var totalSilicona = cantidadSilicona * precioSilicona;
      var totalBombilla = 0;
      
      // Verificar si se seleccionó bombilla
      var checkboxBombilla = document.getElementById("bombilla");
      if (checkboxBombilla.checked) {
        totalBombilla = precioBombilla;
      }

      var totalGeneral = totalCalabaza + totalAcero + totalSilicona + totalBombilla;

      // Mostrar detalle de la compra
      var detalleHTML = "";
      
      if (cantidadCalabaza > 0) {
        detalleHTML = detalleHTML + "• Mates de Calabaza: " + cantidadCalabaza + " x $30.000 = $" + totalCalabaza + "<br>";
      }
      
      if (cantidadAcero > 0) {
        detalleHTML = detalleHTML + "• Mates de Acero: " + cantidadAcero + " x $40.000 = $" + totalAcero + "<br>";
      }
      
      if (cantidadSilicona > 0) {
        detalleHTML = detalleHTML + "• Mates de Silicona: " + cantidadSilicona + " x $5.000 = $" + totalSilicona + "<br>";
      }
      
      if (checkboxBombilla.checked) {
        detalleHTML = detalleHTML + "• Bombilla: 1 x $5.500 = $" + totalBombilla + "<br>";
      }

      if (totalGeneral > 0) {
        document.getElementById("detalleCompra").innerHTML = detalleHTML;
        document.getElementById("totalFinal").textContent = "TOTAL: $" + totalGeneral;
        document.getElementById("resumenCompra").style.display = "block";
        
        alert("¡Tu compra total es de $" + totalGeneral + "!");
      } else {
        alert("No has seleccionado ningún producto. ¡Elige algo para matear!");
      }
    }

    // Función para limpiar la compra
    function limpiarCompra() {
      cantidadCalabaza = 0;
      cantidadAcero = 0;
      cantidadSilicona = 0;
      
      actualizarCantidad(1, 0);
      actualizarCantidad(2, 0);
      actualizarCantidad(3, 0);
      
      document.getElementById("bombilla").checked = false;
      document.getElementById("resumenCompra").style.display = "none";
      
      alert("¡Compra limpiada! Puedes empezar de nuevo.");
    }

    // Eventos para los botones de cantidad
    document.getElementById("btnMas1").addEventListener("click", function() {
      aumentarCantidad(1);
    });

    document.getElementById("btnMenos1").addEventListener("click", function() {
      disminuirCantidad(1);
    });

    document.getElementById("btnMas2").addEventListener("click", function() {
      aumentarCantidad(2);
    });

    document.getElementById("btnMenos2").addEventListener("click", function() {
      disminuirCantidad(2);
    });

    document.getElementById("btnMas3").addEventListener("click", function() {
      aumentarCantidad(3);
    });

    document.getElementById("btnMenos3").addEventListener("click", function() {
      disminuirCantidad(3);
    });

    // Eventos para los botones principales
    document.getElementById("btnCalcular").addEventListener("click", calcularTotal);
    document.getElementById("btnLimpiar").addEventListener("click", limpiarCompra);