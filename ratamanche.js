document.addEventListener("DOMContentLoaded", function() {
    var botonesDiv = document.getElementById("botones");

    // Array con los nombres de los sonidos
    var sonidos = ["sound1", "sound2", "sound3", /* ...agrega el nombre de los demás sonidos aquí... */];

    // Generar los botones
    sonidos.forEach(function(sonido, index) {
        var boton = document.createElement("button");
        boton.textContent = "Sonido " + (index + 1);
        boton.addEventListener("click", function() {
            reproducirSonido(sonido);
        });
        botonesDiv.appendChild(boton);
    });

    // Función para reproducir sonido
    function reproducirSonido(nombreSonido) {
        var audio = document.getElementById(nombreSonido);
        audio.currentTime = 0; // Reinicia el audio si ya está reproduciéndose
        audio.play();
    }
});