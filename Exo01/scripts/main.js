

//1. Creer une page html contenant un input, un boutton et une liste.
//2. lier cette page a du js.
//3. Recupérer l'input, le boutton et la liste dans le js
//4. rajouter une methode sur le click du boutton qui rajoutera a la liste la valeur contenue dans l'input

////////////////////////////////////////////////////////////////////////////////////////////
const input_number_01 = document.getElementById("number_01");
const btn_show_number = document.getElementById("btn_show_number");
const prenomUl = document.getElementById('nameList')
let json = localStorage.getItem("nameList")

let ListName= [];
console.log(ListName.length);

// if (json != undefined) {
//     ListName = JSON.parse(json);
// }

//onclick permet de définir une action executée lors d'un click sur l'élément
btn_show_number.onclick = function name(params) {
    let valeur = input_number_01.value; // dans un input la valeur est toujours dans .value
    
    console.log(ListName);
  

        if (valeur === null || valeur === " " || valeur === "") {
            // ListName.splice(valeur); //pas besoin de cette ligne avec le return
            return;
        }

        else{
        ListName.push(valeur);
        let myList = document.createElement('li');
        let newP =  document.createElement('p');
        let newButton =  document.createElement('button');
      
        // myList.innerHTML= valeur;
        newP.innerHTML = valeur;
        newButton.innerHTML = "X";

    

        newButton.onclick = function() {
            
            for(let li of prenomUl.children){
                if(li.firstChild.innerHTML === valeur){
                    prenomUl.removeChild(li);
                }
            }
            console.log(ListName);

            let index = ListName.findIndex(a => a === ListName)
            ListName.splice(index, 1);
            localStorage.setItem("nameList", JSON.stringify(ListName))
           
        }

        myList.appendChild(newP);
        myList.appendChild(newButton);
      
        prenomUl.appendChild(myList);
    }



    // localStorage.setItem('nameList',JSON.stringify(ListName)) //maintenir la liste stock
    input_number_01.value= "";  //permet de vider l'input de la derniere valeur ecrite
    console.log(ListName.length)
}


// /////////////////////////////////////////////////////////////////////////////////////////////
for (let nom of ListName) {
    let newArticle = document.createElement('li');
   newArticle.innerHTML= nom;
    prenomUl.appendChild(newArticle);
}

function addBasket (params) {
    let newArticle = document.createElement('li');
    newArticle.innerHTML= prenomUl.value;
    prenomUl.appendChild(newArticle);
    ListName.push(prenomUl.value);


}

