
const listItem = document.querySelectorAll(".lang-Item");
const langToggler = document.getElementById("langToggler");

listItem.forEach((item) => item.addEventListener("click", (event) => {
    langToggler.innerHTML = item.innerHTML;
}));