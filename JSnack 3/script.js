//CREO UNA VARIABILE CHE CONTERRA' LA SOMMA DEI NUMERI INSERITI DALL'UTENTE
var sum = 0;

//CICLO CHE CHE CHIEDE ALL'UTENTE DI INSERIRE UN NUMERO PER 10 VOLTE
 for( var i=0;  i<10; i++){
    var newNumber = parseInt(prompt("Inserisci un numero")) ;
   sum +=  newNumber;
   }

   //STAMPO LA SOMMA
   console.log(sum);