const registroForm = document.getElementById('registro-form');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const confirmContrasena = document.getElementById('confirm-contrasena');

registroForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (contrasena.value !== confirmContrasena.value) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return;
    }

    // Envía los datos a un servidor o realiza las acciones de registro necesarias aquí
    alert('Registro exitoso. ¡Bienvenido a Gimnasio Fitness!');
    registroForm.reset();
});
const usuarios = {
    usuario1: "Información del Usuario 1",
    usuario2: "Información del Usuario 2",
    usuario3: "Información del Usuario 3"
    // Agrega más información de usuarios aquí
};

// Función para buscar información individual
function buscarInformacion() {
    const usuario = document.getElementById("usuario").value;
    const resultado = document.getElementById("resultado");

    if (usuarios[usuario]) {
        resultado.textContent = usuarios[usuario];
    } else {
        resultado.textContent = "Usuario no encontrado.";
    }
}

// Escucha el evento de clic en el botón de búsqueda
document.getElementById("buscar").addEventListener("click", buscarInformacion);