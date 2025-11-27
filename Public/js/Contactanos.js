document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioContacto");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se recargue la página

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("texto").value.trim(); // <-- corregido acá
    const mensajesDiv = document.getElementById("mensajes");

    let errores = [];

    if (nombre === "") {
      errores.push("⚠️ El campo Nombre es obligatorio.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errores.push("⚠️ Ingresá un email válido.");
    }

    if (mensaje === "") {
      errores.push("⚠️ El campo Mensaje no puede estar vacío.");
    }

    if (errores.length > 0) {
      mensajesDiv.style.color = "red";
      mensajesDiv.innerHTML = errores.join("<br>");
    } else {
      mensajesDiv.style.color = "green";
      mensajesDiv.innerHTML = "¡Mensaje enviado correctamente!";
      formulario.reset();
    }
  });
});