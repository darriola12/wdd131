const travelSeasonSelect = document.querySelector("#travelSeason");
const seasonTitle = document.querySelector("#seasonTitle");
const seasonAdviceText = document.querySelector("#seasonAdvice");
const seasonStorageKey = "selectedSeason";

function updateSeasonCard(season) {
  if (!seasonTitle || !seasonAdviceText) {
    return;
  }

  if (!season || !seasonAdvice[season]) {
    seasonTitle.textContent = "Planning advice will appear here.";
    seasonAdviceText.textContent = "Choose a season above to see what to expect and which packing priorities matter most.";
    return;
  }

  seasonTitle.textContent = seasonAdvice[season].title;
  seasonAdviceText.textContent = seasonAdvice[season].advice;
}

function restoreSavedSeason() {
  if (!travelSeasonSelect) {
    return;
  }

  const savedSeason = localStorage.getItem(seasonStorageKey);
  if (savedSeason) {
    travelSeasonSelect.value = savedSeason;
    updateSeasonCard(savedSeason);
  }
}

if (travelSeasonSelect) {
  travelSeasonSelect.addEventListener("change", (event) => {
    const selectedSeason = event.target.value;
    localStorage.setItem(seasonStorageKey, selectedSeason);
    updateSeasonCard(selectedSeason);
  });
}

restoreSavedSeason();
