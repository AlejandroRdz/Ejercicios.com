function palindrome() {
    var word = prompt("ingresa tu frase especial :D")
    word = word.toLowerCase();
    word = word.replace(/\s/g,'');
    newWord = word.split("").reverse("").join("");

    if (word == newWord) {
        console.log("Tienes un Palindromo");
    } else {
        console.log("No tienes un palindromo")
    }



    console.log(word)
    console.log(newWord)
}

function palindrome2() {
    var word = prompt("Segunda frase")
    word = word.toLowerCase();
    word = word.replace(/\s/g,'');

    var newWord = "";
    for(var i = word.lenght - 1; i >= 0; i--) {
        newWord = newWord + word[i];
    }
    console.log(newWord);
    


}