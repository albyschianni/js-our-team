// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const teamMeamber = [
    {
        "nameMember" : "Wayne Burnett",
        "role" : "Fouder & CEO",
        "image" : "image-wayne"
    },
    {
        "nameMember" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "image-angela"
    },
    {
        "nameMember" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "image-walter"
    },
    {
        "nameMember" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "image-angela L"
    },
    {
        "nameMember" : "Scott Estrada",
        "role" : "Developer",
        "image" : "image-scott"
    },
    {
        "nameMember" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "image-barbara"
    }
]
console.log(teamMeamber);

function createElementFromHTML(htmlString) {
    div.innerHTML = htmlString.trim();
}

const addToDom = function ({
    nameMember,
    role,
    image
}) {

function render (){
    return createElementFromHTML(`
    
        <div class="nome${nameMember}">
        <div class="ruolo${role}">
    `)
}
}
document.querySelector("#container-schede").appendChild(render())

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe