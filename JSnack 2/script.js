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