var somma = 0;

var request = prompt("Dimmi un numero di 4 cifre");

for( var i=0; i<request.length; i++){
   numeroUtente = request[i];
   somma += parseInt(numeroUtente);
}

console.log(somma);