console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(n) {

    for(let i=1; i<= n; i++){
  
      let x = ' '.repeat(n-i);  
      let y = '*'. repeat(i*2 -1)
      console.log(x + y + x);
    }
  }
  

var size = prompt("Enter the size of the pyramid - (Please see Console)");

if (size < 26) {
    console.log(size);
    console.log("Voici la pyramide :");
    pyramid(size);
}

else {
    console.log("La taille de pyramide doit inférieur à 25 !");
}




