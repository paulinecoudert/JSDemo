
let username= prompt('Please indicate your name');

alert(`hey ${username}`);


const input_number_01 = document.getElementById("number_01");
const btn_show_number = document.getElementById("btn_show_number");


//onclick permet de définir une action executée lors d'un click sur l'élément
btn_show_number.onclick = function name(params) {
    let valeur = input_number_01.value; // dans un input la valeur est toujours dans .value
    alert(`la valeur est: ${valeur}.`)
}

