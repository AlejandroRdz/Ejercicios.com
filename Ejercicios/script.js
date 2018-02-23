
function generarPiramide() {
    var base = prompt("Pisos de la piramide");
    for (var i=1; i<=base; i++) {
        for (var j=0; j<i; j++) {
            document.write("*");
             }
             document.write("<br>");
    }
}


