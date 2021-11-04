// Passi logici:

// creo un array di oggetti
    // ogni oggetto contiene le informazioni per ciascun membro del team (nome, ruolo, percorso dell'immagine)
// scorro l'array di oggetti
    // con le informazioni dell'oggetto, stampo in pagina la sua card, replicando la struttura html di partenza
        // creo un div team-card
        // creo un div card-image
            // al suo interno inserisco l'immagine col percorso e il nome presi dall'oggetto
        // creo un div card-text
            // al suo interno inserisco nome e ruolo presi dall'oggetto
        // inserisco card-image e card-text all'interno di team-card
        // stampo in pagina il div team-card con tutti i suoi elementi
// al click del pulsante add
    // salvo gli input inseriti dall'utente in delle variabili
    // creo un nuovo oggetto con gli input inseriti dall'utente
    // aggiungo il nuovo oggetto all'array dei membri del team
    // aggiorno ciò che viene visualizzato in pagina, così da poter vedere anche il nuovo membro aggiunto


// creo un array di oggetti
const listaMembri = [

    // ogni oggetto contiene le informazioni per ciascun membro del team
    // (nome, ruolo, percorso dell'immagine)
    {
        "nomeMembro": "Wayne Barnett",
        "ruoloMembro": "Founder & CEO",
        "percorsoImmagine": "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nomeMembro": "Angela Caroll",
        "ruoloMembro": "Chief Editor",
        "percorsoImmagine": "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nomeMembro": "Walter Gordon",
        "ruoloMembro": "Office Manager",
        "percorsoImmagine": "img/walter-gordon-office-manager.jpg"
    },

    {
        "nomeMembro": "Angela Lopez",
        "ruoloMembro": "Social Media Manager",
        "percorsoImmagine": "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nomeMembro": "Scott Estrada",
        "ruoloMembro": "Developer",
        "percorsoImmagine": "img/scott-estrada-developer.jpg"
    },

    {
        "nomeMembro": "Barbara Ramos",
        "ruoloMembro": "Graphic Designer",
        "percorsoImmagine": "img/barbara-ramos-graphic-designer.jpg"
    }
];

// funzione che compone la pagina con le card dei membri
generaPaginaMembri();

// al click del pulsante add
document.getElementById("addMemberButton").addEventListener("click", function() {

    // salvo gli input inseriti dall'utente in delle variabili
    let nuovoNome = document.getElementById("name").value;
    let nuovoRuolo = document.getElementById("role").value;
    let nuovaImmagine = document.getElementById("image").value;
    console.log(nuovoNome);
    console.log(nuovoRuolo);
    console.log(nuovaImmagine);

    // creo un nuovo oggetto con gli input inseriti dall'utente
    const nuovoOggetto = {
        "nomeMembro": nuovoNome,
        "ruoloMembro": nuovoRuolo,
        "percorsoImmagine": nuovaImmagine
    }

    console.log(nuovoOggetto);

    // aggiungo il nuovo oggetto all'array dei membri del team
    listaMembri.push(nuovoOggetto);

    // aggiorno ciò che viene visualizzato in pagina, così da poter vedere anche il nuovo membro aggiunto
    generaPaginaMembri();

    // finite le operazione di aggiornamento, pulisco i campi di input
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("image").value = "";

});
    
function generaPaginaMembri() {

    document.querySelector(".team-container").innerHTML = "";
    
    for (let i = 0; i < listaMembri.length; i++) {

        // con le informazioni dell'oggetto, stampo in pagina la sua card, replicando la struttura html di partenza
        document.querySelector(".team-container").innerHTML += 
        `<div class="team-card">
        <div class="card-image">
          <img
            src="${listaMembri[i].percorsoImmagine}"
            alt="${listaMembri[i].nomeMembro}"
          />
        </div>
        <div class="card-text">
          <h3>${listaMembri[i].nomeMembro}</h3>
          <p>${listaMembri[i].ruoloMembro}</p>
        </div>
      </div>`;
    }
}