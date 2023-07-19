const featuresButton = document.getElementById("features-btn");
const featuresContent = document.getElementById("dropdown-features-content");
const featuresArrowOpen = document.getElementById("features-arrow-open");
const featuresArrowClose = document.getElementById("features-arrow-close");
const companyButton = document.getElementById("company-btn");
const companyContent = document.getElementById("company-content");
const companyArrowOpen = document.getElementById("company-arrow-open");
const companyArrowClose = document.getElementById("company-arrow-close");
const menu = document.querySelector("#menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

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

openMenu.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("hidden");
});

const featuresButtonMenu = document.getElementById("features-btn-aside");
const featuresContentMenu = document.getElementById(
  "dropdown-features-content-aside"
);
const featuresArrowOpenMenu = document.getElementById(
  "features-arrow-open-aside"
);
const featuresArrowCloseMenu = document.getElementById(
  "features-arrow-close-aside"
);
const companyButtonMenu = document.getElementById("company-btn-aside");
const companyContentMenu = document.getElementById("company-content-aside");
const companyArrowOpenMenu = document.getElementById(
  "company-arrow-open-aside"
);
const companyArrowCloseMenu = document.getElementById(
  "company-arrow-close-aside"
);

featuresButtonMenu.addEventListener("click", () => {
  featuresContentMenu.classList.toggle("hidden");
  featuresArrowOpenMenu.classList.toggle("hidden");
  featuresArrowCloseMenu.classList.toggle("hidden");
});

companyButtonMenu.addEventListener("click", () => {
  companyContentMenu.classList.toggle("hidden");
  companyArrowOpenMenu.classList.toggle("hidden");
  companyArrowCloseMenu.classList.toggle("hidden");
});
