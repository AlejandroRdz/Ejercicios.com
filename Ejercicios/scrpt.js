function holaMundo () {
    console.log("¡hola mundo!")
}

function herencia(dineroJose, dineroJuan, herencia) {
    var mitadHerencia = herencia/2;
    const variableConstante = "hola;"
    let nombre = "Alejandro"
    console.log("mitadHerencia" , mitadHerencia)
    dineroJose = dineroJose + mitadHerencia;
    console.log("dineroJose" , dineroJose);
    dineroJuan = dineroJuan + mitadHerencia;
    console.log("dineroJuan" , mitadHerencia);
    dineroTotal = dineroJuan + dineroJose;
    console.log("dineroTotal" , dineroTotal);
}

//herencia(100, 300, 1500);

function cuenta(numeroInicial, numeroFinal) {
    for(var i = numeroInicial; i <= numeroFinal; i++) {
        console.log(i);
    }
}

//cuenta(5,100);

function tengoHambre(hambre) {
    if(hambre < 30) {
        if(hambre <= 5) {
            console.log("Estoy enojado");
        }
        console.log("Estoy Triste");
    } else if(hambre > 80) {
        console.log("Estoy Feliz");
    } else {
        console.log("Medio tengo hambre");
    }
}

//tengoHambre(40);

