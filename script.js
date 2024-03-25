const container = document.querySelector(".anime-container");
const addButton = document.querySelector(".add-anime");
const hider = document.querySelector(".hide"); // gets important elements


let animes = []; // empty array for animes

class Anime {
  constructor(name, author, episodes, isWatched) {
    this.name = name;
    this.author = author;
    this.episodes = episodes;
    this.isWatched = isWatched;
  }
} // anime class for anime objects

function getInputValues() {
  return {
    name: document.getElementById("animeNameInput").value,
    author: document.getElementById("animeAuthorInput").value,
    episodes: parseInt(document.getElementById("animeEpisodesInput").value),
    isWatched: document.getElementById("animeIswatched").checked,
  };
} // get input values and saves them for later use

function createAnimeCard(anime) {
  const card = document.createElement("div");
  card.classList.add("card");

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  card.appendChild(itemContainer);

  const animeName = document.createElement("p");
  animeName.textContent = anime.name;

  const animeAuthor = document.createElement("p");
  animeAuthor.textContent = anime.author;

  const animeEpisodes = document.createElement("p");
  animeEpisodes.textContent = anime.episodes;

  const isWatched = document.createElement("p");
  isWatched.textContent = anime.isWatched ? "Watched" : "Haven't Watched";

  itemContainer.appendChild(animeName);
  itemContainer.appendChild(animeAuthor);
  itemContainer.appendChild(animeEpisodes);
  itemContainer.appendChild(isWatched);

  return card;
} // creates an anime card in a very straightforward way

function renderAnimes() {
  container.innerHTML = "";

  animes.forEach((anime) => {
    const card = createAnimeCard(anime);
    container.appendChild(card);
  });

  updateAnimeCount();
} // renders animes :D , uses the createAnimeCard function and then appends them to the container by using forEach to go over all the animes in the animes array

function updateAnimeCount() {
  const animeCount = document.querySelector("h1");
  animeCount.textContent = animes.length;
} // gets array length and updates it in the counter

function handleAddClick() {
  hider.style.display = "block";
}

function handleCancelClick() {
  hider.style.display = "none";
}

function saveToLocalStorage() {
  localStorage.setItem("animes", JSON.stringify(animes));
}

// handles click events for the modal
function handleSaveClick() {
  const inputValues = getInputValues(); // using the getInputValues function to get the input values
  const newAnime = new Anime(
    inputValues.name,
    inputValues.author,
    inputValues.episodes,
    inputValues.isWatched
  ); // creating a new anime object by passing the input values to the constructor
  animes.push(newAnime); // pushes the new made anime into the empty array that we are rendering

  renderAnimes();

  saveToLocalStorage();
  hider.style.display = "none"; // closes modal
}

addButton.addEventListener("click", handleAddClick);

const cancelButton = document.getElementById("cancelAnimeBtn");
cancelButton.addEventListener("click", handleCancelClick);

const saveButton = document.getElementById("saveAnimeBtn");
saveButton.addEventListener("click", handleSaveClick);
// just a bunch of event listeners for the modal
// lol refactored the whole script
function getItemsFromLocalStorage() {
  const storedItems = localStorage.getItem("animes");
  if (storedItems) {
    return JSON.parse(storedItems);
  } else {
    return [];
  }
}

function init () {
  animes = getItemsFromLocalStorage();
  renderAnimes();
}
init();