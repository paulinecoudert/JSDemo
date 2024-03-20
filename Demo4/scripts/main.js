let nb1= 5;
let nb2= 2;


let resultat;
resultat= nb1 + nb2;


console.log(nb1 + nb2)

//operateurs mathematiques:
console.log(Math.floor(nb1 / nb2))

// Modulo division  donne le reste de la division
console.log(nb1 % nb2)

// Conversion concatenation prime
console.log( nb2 + '42' - nb1);

//math contint des valeurs: pi par exemple et mah contient des fonctions : pow()
let rayon = 5;
console.log(Math.PI * Math.pow(rayon,2));

//function toString
console.log(nb1.toString())

document.getElementById('formule').innerText = "le nombre " + nb1 + " et " +"le nombre " + nb2;;


document.getElementById('resultat').innerText = nb1 + "+" + nb2 + " " + "le resultat est " + resultat;





