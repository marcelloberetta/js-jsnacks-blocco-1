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