function mostrarSaludo() {
    alert("¡Hola!");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const botonContainer = document.getElementById("button");
  
    botonContainer.addEventListener("click", function () {
      alert("Hola! Soy el div");
    });
  });