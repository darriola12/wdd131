const destinationList = document.querySelector("#destinationList");
const favoriteDestination = document.querySelector("#favoriteDestination");
const filterButtons = document.querySelectorAll(".filter-button");
const favoriteKey = "favoriteDestination";

function buildDestinationMarkup(destination) {
  return `
    <article class="destination-card">
      <span class="destination-card__tag">${destination.region}</span>
      <h2>${destination.name}</h2>
      <p>${destination.summary}</p>
      <p><strong>Good for:</strong> ${destination.tags.join(", ")}</p>
      <p>${destination.highlight}</p>
      <button class="button" type="button" data-name="${destination.name}">Save Favorite</button>
    </article>
  `;
}

function renderDestinations(filter = "all") {
  if (!destinationList || !Array.isArray(destinations)) {
    return;
  }

  const filteredDestinations = filter === "all"
    ? destinations
    : destinations.filter((destination) => destination.tags.includes(filter) || destination.type === filter);

  destinationList.innerHTML = filteredDestinations.map((destination) => buildDestinationMarkup(destination)).join("");

  const favoriteButtons = destinationList.querySelectorAll("[data-name]");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedName = button.dataset.name;
      localStorage.setItem(favoriteKey, selectedName);
      updateFavoriteReadout();
    });
  });
}

function updateFavoriteReadout() {
  if (!favoriteDestination) {
    return;
  }

  const savedFavorite = localStorage.getItem(favoriteKey);
  favoriteDestination.textContent = savedFavorite ? savedFavorite : "None selected yet";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    renderDestinations(filter);
  });
});

renderDestinations();
updateFavoriteReadout();
