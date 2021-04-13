// FILE CHE CONTIENE TUTTI I JAVASCRIPT DEGLI ESERCIZI JSNACK


//  ************JSNACK 1************


//AVVISIAMO L'UTENTE DEL FUNZIONAMENTO VISIVO DELLO SCRIPT
alert ("Ciao! Facciamo un gioco: ti chiederò due numeri (diversi tra loro) e di questi ti indicherò il maggiore nella console del browser..cominciamo!");

//VARIABILE CHE CONTIENE IL PRIMO NUMERO CHE L'UTENTE CI COMUNICHERA'
var firstNumber = parseInt(prompt("Digita il primo numero"));

//VARIABILE CHE CONTIENE IL SECONDO NUMERO CHE L'UTENTE CI COMUNICHERA'
var secondNumber = parseInt(prompt("Ora digita il secondo numero"));

//IMPOSTIAMO LA CONDIZIONE CON TRE POSSIBILI RISULTATI
if(firstNumber > secondNumber){

 console.log("Il numero più grande da te digitato è " + firstNumber)

}

else if(firstNumber < secondNumber){

 console.log("Il numero più grande da te digitato è " + secondNumber)
}

else{
 console.log("ERRORE -- I NUMERI DEVONO ESSERE DIVERSI")
}


//  ************JSNACK 2************


alert("Ciao! Ora ti chiederò di digitare due parole (possibilmente di lunghezza diversa tra loro; ti mostrerò in console prima la più corta, poi la più lunga..iniziamo!");

var firstWord = prompt ("Digita la prima parola");

var secondWord = prompt ("Digita la seconda parola");

if (firstWord.length > secondWord.length){
 console.log(secondWord + " " + firstWord)
}
else if(firstWord.length < secondWord.length){
 console.log(firstWord + " " + secondWord)
}
else{
 console.log("ERRORE - LE PAROLE SONO LUNGHE UGUALI")
}



//  ************JSNACK 3************


//CREO UNA VARIABILE CHE CONTERRA' LA SOMMA DEI NUMERI INSERITI DALL'UTENTE
var sum = 0;

//CICLO CHE CHE CHIEDE ALL'UTENTE DI INSERIRE UN NUMERO PER 10 VOLTE
 for( var i=0;  i<10; i++){
    var newNumber = parseInt(prompt("Inserisci un numero")) ;
   sum +=  newNumber;
   }

   //STAMPO LA SOMMA
   console.log(sum);



//  ************JSNACK 4************



//CREIAMO UN ARRAY CONTENENTE I NOMI DEGLI INVITATI
var invited = ["Pippo", "pippo", "Pluto", "pluto", "Topolino", "topolino", "Minni", "minni", "Paperino", "paperino", "Paperina" , "paperina"];

alert("Ciao! Benvenuto alla festa del Grande Gatsby, dimmi il tuo nome e verificherò se  è presente nella lista degli invitati");

var user = prompt("Come ti chiami ?");

userPass = false; //FLAG DI  VERIFICA

for(i=0; i<invited.length; i++) {
   var userTry = invited [i];  //VARIABILE TEMPORANEA
   
   if (userTry === user){
      userPass = true;
   }
}

if (userPass){
   console.log("Sei nella lista degli invitati " +  user +  " , accomodati pure");
}
else{
   console.log("Mi dispiace, " + user + " non sei stato invitato");
}




//  ************JSNACK 5************


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



//  ************JSNACK 8************

var somma = 0;

var request = prompt("Dimmi un numero di 4 cifre");

for( var i=0; i<request.length; i++){
   numeroUtente = request[i];
   somma += parseInt(numeroUtente);
}

console.log(somma);



//  ************JSNACK 9************

//INIZALIZZIAMO UNA VARIABILE CHE CONTERRA' IL RISULTATO DELLA SOMMA
var somma= 0;

//FACCIAMO UN CICLO CHE PER 10 VOLTE ESTRARRA' UN NUMERO
for( var i=0; i<10; i++){
   var numero = i+1
   somma += numero;
  
   
}

console.log(somma); //SOMMA DEI PRIMI 10 NUMERI

console.log(somma/10);  //MEDIA


