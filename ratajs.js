document.addEventListener("DOMContentLoaded", function() {
    var grillaDiv = document.getElementById("grilla");

    // Nombre del archivo de audio
    var nombreAudio = "Yallegotucarri.mp3";

    // Generar la grilla de cuadros
    for (var i = 1; i <= 100; i++) {
        var cuadro = document.createElement("div");
        cuadro.textContent = "Sonido " + i;
        cuadro.classList.add("cuadro");
        cuadro.dataset.numero = i;
        cuadro.addEventListener("click", function() {
            var numeroSonido = "sonido" + this.dataset.numero;
            reproducirSonido(numeroSonido);
        });
        grillaDiv.appendChild(cuadro);
    }

    // Función para reproducir sonido
    function reproducirSonido(nombreSonido) {
        var audio = new Audio(nombreSonido);
        audio.play();
    }
});
