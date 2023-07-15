const featuresButton = document.getElementById("features-btn");
// const featuresDropdown = document.getElementById("dropdown-features");
const featuresContent = document.getElementById("dropdown-features-content");

featuresButton.addEventListener("click", () => {
  featuresContent.classList.toggle("hidden");
});
