const container = document.querySelector(".anime-container");

let Animes = [
    {
        name: "test",
        author: "also test",
        episodes: 12,
        isWatched: true,
    },
    {
        name: "bruh",
        author: "sfsd test",
        episodes: 656,
        isWatched: false,
    },
    {
        name: "test",
        author: "also test",
        episodes: 12,
        isWatched: true,
    },
    {
        name: "bruh",
        author: "sfsd test",
        episodes: 656,
        isWatched: false,
    },
    {
        name: "bruh",
        author: "sfsd test",
        episodes: 656,
        isWatched: false, 
    }
]


for (let i = 0; i < Animes.length; i++) {
    
    let card = document.createElement("div");
card.classList.add("card");

let animeName = document.createElement("p");
animeName.textContent = Animes[i].name;

let animeAuthor = document.createElement("p");
animeAuthor.textContent = Animes[i].author;

let animeEpisodes = document.createElement('p');
animeEpisodes.textContent = Animes[i].episodes;

card.appendChild(animeName);
card.appendChild(animeAuthor);
card.appendChild(animeEpisodes);

container.appendChild(card);
}


