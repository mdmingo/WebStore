/*Metodo header*/
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let Desplazamiento_actual = window.pageYOffset;
    if (ubicacionPrincipal >= Desplazamiento_actual || window.pageYOffset <= '0') {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_actual;
}

/*Metodo mostrar mas*/
$(".mostrarMas").click(function () {

    event.preventDefault();
    arrayA = document.getElementsByClassName("mostrarMas");

    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] == this) {
            arrayA[i].style.display = "none";
            arrayH = document.getElementsByClassName("hide");
            arrayH[i].style.display = "block";
        }
    }
});
$(".mostrarMenos").click(function () {

    event.preventDefault();
    arrayA = document.getElementsByClassName("mostrarMenos");
    arrayB = document.getElementsByClassName("mostrarMas");
    for (i = 0; i < arrayA.length; i++) {
        if (arrayA[i] == this) {
            arrayB[i].style.display = "inline";
            arrayH = document.getElementsByClassName("hide");
            arrayH[i].style.display = "none";

        }

    }

});
/*Metodo galeria*/
$(".icon").click(function () {

    document.getElementById("mostrador").innerHTML = "<img src='" + $(this).attr("src") + "'>";

});