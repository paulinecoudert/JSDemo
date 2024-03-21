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


//RECUP2RATION DES INPUTS NUMBER
const input_number_01 = document.getElementById("number1")
const input_number_02 = document.getElementById("number2")
const input_number_03 = document.getElementById("number3")


const btn_addition = document.getElementById("add")
const btn_soustration = document.getElementById("substr")
const btn_divivision = document.getElementById("div")
const btn_multiple = document.getElementById("mult")
let totalResultat;

btn_addition.onclick = function name(params) {
    let numb1 = parseFloat(input_number_01.value); //parseInt transforme le texte en entier et parseFloat transforme le texte en réel
    let numb2 = parseFloat(input_number_02.value);
    alert(`la somme est: ${numb1 + numb2}`)
}

btn_soustration.onclick = function name(params) {
    let numb1 = parseFloat(input_number_01.value); //parseInt transforme le texte en entier et parseFloat transforme le texte en réel
    let numb2 = parseFloat(input_number_02.value);
    alert(`la somme est: ${numb1 - numb2}`)
}

btn_divivision.onclick = function name(params) {
    let numb1 = parseFloat(input_number_01.value); //parseInt transforme le texte en entier et parseFloat transforme le texte en réel
    let numb2 = parseFloat(input_number_02.value);
    if (numb2=== 0) {
        alert(`La division par zéro est impossible`)
    }else{
        alert(`la somme est: ${numb1/numb2}`)
    }
    console.log('end')
}
   

btn_multiple.onclick = function name(params) {
    let numb1 = parseFloat(input_number_01.value); //parseInt transforme le texte en entier et parseFloat transforme le texte en réel
    let numb2 = parseFloat(input_number_02.value);
    alert(`la somme est: ${numb1*numb2}`)
}

let monableau= ['Pierre', 'Louie'];
// alert(monableau[0])
document.getElementById("table").innerText = (monableau[0])

const btn_table= document.getElementById("table1")

btn_table.onclick = function name(params) {
    monableau = parseFloat(input_number_03.value);
    console.log(`Ressort: ${monableau}`)
}

