const botonAbrir = document.getElementById("botonAbrir");
const botonCine = document.getElementById("botonCine");

const sorpresa = document.getElementById("sorpresa");
const cine = document.getElementById("cine");


botonAbrir.addEventListener("click", function() {

    botonAbrir.classList.add("oculto");

    setTimeout(function() {
        sorpresa.style.display = "block";
    }, 500);

});


botonCine.addEventListener("click", function() {

    cine.style.display = "block";

});