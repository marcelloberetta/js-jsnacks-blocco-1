//CREIAMO UN ARRAY VUOTO
var numbers = [ ];

//CREIAMO UN CICLO PER CHIEDERE ALL'UTENTE DI INSERIRE 5 NUMERI
 for(var i=0; i<5 ;  i++){
   var userNumber = parseInt(prompt("Inserisci un numero"));
   if(userNumber %2 !=0){
      numbers.push(userNumber);
   }
}

console.log(numbers);

