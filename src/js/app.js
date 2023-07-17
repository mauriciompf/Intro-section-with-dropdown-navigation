const featuresButton = document.getElementById("features-btn");
// const featuresDropdown = document.getElementById("dropdown-features")
const featuresContent = document.getElementById("dropdown-features-content");
const featuresArrowOpen = document.getElementById("features-arrow-open");
const featuresArrowClose = document.getElementById("features-arrow-close");
const companyButton = document.getElementById("company-btn");
const companyContent = document.getElementById("company-content");
const companyArrowOpen = document.getElementById("company-arrow-open");
const companyArrowClose = document.getElementById("company-arrow-close");

featuresButton.addEventListener("click", () => {
  featuresContent.classList.toggle("hidden");
  featuresArrowOpen.classList.toggle("hidden");
  featuresArrowClose.classList.toggle("hidden");
});

companyButton.addEventListener("click", () => {
  companyContent.classList.toggle("hidden");
  companyArrowOpen.classList.toggle("hidden");
  companyArrowClose.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  const elementClicked = e.target;
  if (featuresButton.contains(elementClicked)) {
  } else if (!featuresContent.classList.contains("hidden")) {
    if (featuresContent !== elementClicked) {
      featuresButton.click();
    }
  }
  if (companyButton.contains(elementClicked)) {
  } else if (!companyContent.classList.contains("hidden")) {
    if (companyContent !== elementClicked) {
      companyButton.click();
    }
  }
});
