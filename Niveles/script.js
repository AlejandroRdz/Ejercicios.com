function levels() {
    var level = ["bebe", "novato", "principiante", "basico", "maestro"];
    var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    var uservar = parseInt( prompt("dame un número"));

    var lev = (level[uservar-1]);
    var img = (images[uservar-1]);
    console.log(lev);
    console.log(img);
    window.alert(lev);
}

    var h2 = document.querySelector('h2');

    h2.innerHTML = 'Del 1 al 5';