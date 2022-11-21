// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const teamMeamber = [
    {
        "nameMember" : "Wayne Burnett",
        "role" : "Fouder & CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nameMember" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nameMember" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "nameMember" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nameMember" : "Scott Estrada",
        "role" : "Developer",
        "image" : "img/scott-estrada-developer.jpg"
    },
    {
        "nameMember" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "img/barbara-ramos-graphic-designer.jpg"
    }
]
console.log(teamMeamber);

cards();
function cards () {

    for (let i = 0; i< teamMeamber.length; i++){

        let nuovacard = `
        <div class="scheda">
            <img src="${teamMeamber[i].image}" alt="">
            <div id="persona">
                <div>${teamMeamber[i].nameMember}</div>
                <div>${teamMeamber[i].role}</div>
            </div>
        </div>
        `

        const container = document.querySelector("#container-schede").innerHTML += nuovacard;
    }
}



document.querySelector("#container-schede").appendChild

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe









// function createElementFromHTML(htmlString) {
//     div.innerHTML = htmlString.trim();
// }

// const addToDom = function render(){
//     nameMember,
//     role
//     {return createElementFromHTML(`
    
//         <div class="nome${nameMember}">
//         <div class="ruolo${role}">
//     `)}
// }

// const scheda1 = function render() {
//     addToDom(teamMeamber);
// }