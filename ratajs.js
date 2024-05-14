document.addEventListener("DOMContentLoaded", function() {
    var botonesDiv = document.getElementById("botones");

    // Nombre del archivo de audio
    var nombreAudio = "Yallegotucarri.mp3";

    // Generar botón circular
    var boton = document.createElement("button");
    boton.textContent = "Yallegotucarri";
    boton.addEventListener("click", function() {
        reproducirSonido(nombreAudio);
    });
    boton.classList.add("boton-yallegotucarri");
    botonesDiv.appendChild(boton);

    // Función para reproducir sonido
    function reproducirSonido(nombreSonido) {
        var audio = new Audio(nombreSonido);
        audio.play();
    }
});
