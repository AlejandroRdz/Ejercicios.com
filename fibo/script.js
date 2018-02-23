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