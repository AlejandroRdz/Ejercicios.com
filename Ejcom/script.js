function fibonacci() {
    var fibo = [0,1];
    var n = parseInt( prompt("Dime cuantos quieres") );

    if ( n == 1 ) {
        console.log( fibo[0] );
    }
    else if ( n == 2 ) {
        console.log( fibo );
    }
    else {
        for (var i = 1 ; i < n-1 ; i++){
            var total = fibo.length;
            var resultado = fibo[total-1] + fibo[total-2];
            fibo.push( resultado );
        } 

        console.log( fibo );
        window.alert(fibo);
    }      
}

function palindrome() {
    var word = prompt("ingresa tu frase especial :D")
    word = word.toLowerCase();
    word = word.replace(/\s/g,'');
    newWord = word.split("").reverse("").join("");

    if (word == newWord) {
        console.log("Tienes un Palindromo");
    } else {
        console.log("No tienes un palindromo");
    }



    console.log(word);
    console.log(newWord);
}

function levels() {
    var level = ["bebe", "novato", "principiante", "basico", "maestro"];
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    var uservar = parseInt( prompt("dame un número"));

    var lev = (level[uservar-1]);
    var img = (images[uservar-1]);
    console.log(lev);
    console.log(img);
    window.alert(lev);

    var h2 = document.querySelector('h2');
    h2.innerHTML = 'Del 1 al 5';

}   


function generarPiramide() {
    var base = prompt("Pisos de la piramide");
    for (var i=1; i<=base; i++) {
        for (var j=0; j<i; j++) {
            document.write("*");
             }
             document.write("<br>");
    }
}
