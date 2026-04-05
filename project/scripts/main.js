const featuredContainer = document.querySelector("#featuredDestinations");
const travelTip = document.querySelector("#travelTip");
const newTipButton = document.querySelector("#newTipButton");

function createDestinationCard(destination) {
  return `
    <article class="destination-card">
      <span class="destination-card__tag">${destination.region}</span>
      <h3>${destination.name}</h3>
      <p>${destination.summary}</p>
      <p><strong>Why go:</strong> ${destination.highlight}</p>
    </article>
  `;
}

function renderFeaturedDestinations() {
  if (!featuredContainer || !Array.isArray(destinations)) {
    return;
  }

  const featured = destinations.slice(0, 3).map((destination) => createDestinationCard(destination)).join("");
  featuredContainer.innerHTML = featured;
}

function showRandomTip() {
  if (!travelTip || !Array.isArray(travelTips) || travelTips.length === 0) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * travelTips.length);
  travelTip.textContent = travelTips[randomIndex];
}

renderFeaturedDestinations();

if (newTipButton) {
  newTipButton.addEventListener("click", showRandomTip);
}
