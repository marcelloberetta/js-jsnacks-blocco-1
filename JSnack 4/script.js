
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