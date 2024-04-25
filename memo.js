// Commentaire
console.log("Hello JS !");

const name = "175";
let isAdult = "true"; // le nom d'un booléen commence par is/has par convention.
let age = 15; // let pour une varaible, const pour une constante.
age += 7; // Une variable a pour portée le bloc de sa déclaration (+intérieurs).
console.log("Age :", age);

(age >= 18) ? console.log("La personne est majeure.") : 
              console.log("La personne est mineure.");

if (age >= 18) {
    console.log("La personne est majeure.");// marche pour une ligne sans bloc.
} else {// else if ...
    console.log("La personne est mineure.");
}

let action = "retrait";

switch (action){
    case "virement":
        console.log("Virement");
        break;
    case "retrait":
        console.log("Retrait");
        break;
    default :
        break;
}

for (let i = 1; i <= 10; i++){
    console.log("3 x",i,"=",8*i);
}

for (let i = 5; i > 0; i--){
    console.log(i);
}

while(age <=30){
    console.log("J'ai maintenant", age ,"ans.");
    age++;
}

function myFunc(arg){
    return 3*arg;
}

console.log(myFunc(7));


const codes = [11, 27, 39, 44];
codes.push(58);

console.log("Codes :", codes);
console.log("Codes :", codes.join("_/_"));
console.log("Code 1 :", codes[0]);
// codes.includes(43);
console.log(codes.indexOf(39));
console.log(codes.slice(1, 3));//1 inclu à 3 exclu

const dict = {nom : "lucas"};
dict.age = 22;
console.log(dict);

//================Exercice-Pokemon================//

const pikachu = {
    id : 25,
    pokename : "pikachu",
    weight : 6.0,
    hpMax : 80,
    attacks : [
        {
            attackName : "Vive-Attaque",
            damages: 10
        },
        {
            attackName : "Boule élek",
            damages: 20
        }
    ]
}

console.log(pikachu);
console.log(listAttack(pikachu));

function listAttack(argPokemon){
    result = argPokemon.pokename + " possède 2 attaques :\n";
    argPokemon.attacks.forEach(
        function(attack){
            result += '\t"'+attack.attackName + '" (puissance : ' + attack.damages +")\n";
        }
    )
    return result;
}

//================Manipuler des Balises================//

let list         = document.querySelector("ul"); // ul et dépendances.
let listElements = list.querySelectorAll("li");  // Array contenant tous les li.

console.log("la liste : ", list);
console.log("les éléments : ", listElements);

// listElements.forEach(
//     function(element){    //fonction anonyme
//         element.style.color = "red";
//     })

list.style.color = "green";
console.dir(listElements[0]);
listElements[0].style.color = "red";