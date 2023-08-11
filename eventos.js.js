function mostrarSaludo() {
    alert("¡Hola!");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const botonContainer = document.getElementById("button");
    
    botonContainer.addEventListener("click", function (event) {
        event.stopPropagation();
      alert("Hola! Soy el div");
    });
  });