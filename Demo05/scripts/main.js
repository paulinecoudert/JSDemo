
let message = 'My message';
message= 'L\' horloge tourne';

let bienvenue = 'Hey'
let USERNAME = "POliiiiiiine";

 message = bienvenue + ' ' + USERNAME + '!';


USERNAME= 'Samuela'
// variable interpollation  back tick avec ${}
 message = `Benvenuto ${USERNAME}!`
 document.getElementById('message').innerText = message;

 // funtions

//recupere le caractere a la 10e place
 console.log(message.charAt(10));
console.log(message.indexOf('n')); // retourne la première valeur
console.log(message.substring(0,9));
console.log(message.length);

let email = "loli@gmail.com";

let position= email.indexOf('@');
let base_email = email.substring(0, position) // RECUPERE LA VALEUR DE 0 0 4 SUR MON MAIL
console.log(`La base de l'email est:${base_email}`);

let domaine =  email.substring(position + 1 ) // recupere la partie d'après
console.log(`Mon domaine est: ${domaine}`);

document.getElementById('message').innerText = `La base de l'email est: ${base_email} et mon domaine est: ${domaine}`;
 

console.log(message.replace('Benvenuto', 'ole'))






