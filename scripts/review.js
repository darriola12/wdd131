const reviewCountElement = document.querySelector("#reviewCount");
const storageKey = "reviewCount";

if (reviewCountElement) {
  const currentCount = Number(localStorage.getItem(storageKey)) || 0;
  const updatedCount = currentCount + 1;

  localStorage.setItem(storageKey, updatedCount);
  reviewCountElement.textContent = updatedCount;
}
