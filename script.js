const container = document.querySelector(".anime-container");

let Animes = [

]

const addButton = document.querySelector(".add-anime");
const saveButton = document.getElementById("saveAnimeBtn");
const hider = document.querySelector(".hide");


addButton.addEventListener('click', () => {
    hider.style.display = "block";
});

const cancelButton = document.getElementById("cancelAnimeBtn");

cancelButton.addEventListener('click', () =>{
    hider.style.display = "none";
})


function Anime(name, author, episodes, isWatched) {
    this.name = name;
    this.author = author;
    this.episodes = episodes;
    this.isWatched = isWatched;
  }


saveButton.addEventListener('click', () => {
    const nameInput = document.getElementById("animeNameInput").value;
    const authorInput = document.getElementById("animeAuthorInput").value;
    const episodesInput = parseInt(document.getElementById("animeEpisodesInput").value);
    const isWatchedInput = document.getElementById("animeIswatched").checked;

    const newAnime = new Anime(nameInput,authorInput,episodesInput,isWatchedInput);
    Animes.push(newAnime);

    container.innerHTML = "";

    for (let i = 0; i < Animes.length; i++) {
    
    let card = document.createElement("div");
    card.classList.add("card");
    
    
    let animeName = document.createElement("p");
    animeName.textContent = Animes[i].name;
    
    let animeAuthor = document.createElement("p");
    animeAuthor.textContent = Animes[i].author;
    
    let animeEpisodes = document.createElement('p');
    animeEpisodes.textContent = Animes[i].episodes;
    
    let isWatched = document.createElement("p");
    isWatched.textContent = Animes[i].isWatched ? "Watched" : "Haven't Watched";
    
    card.appendChild(animeName);
    card.appendChild(animeAuthor);
    card.appendChild(animeEpisodes);
    card.appendChild(isWatched);
    
    container.appendChild(card);
    }
    



    hider.style.display = "none";
})

  