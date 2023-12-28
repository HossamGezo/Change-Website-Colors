// ! ------------------------------------------- Variables
let items = document.querySelectorAll(".list-colors--item");
let head = document.querySelector(".result-head");
let body = document.querySelector(".result-body");

// ! ------------------------------------------- Events
getLocalStorage();

items.forEach(item => {
  item.addEventListener("click", function () {
    removeActive();
    addActive(this);
    let id = this.getAttribute("data-id");
    let color = this.getAttribute("data-color");
    head.style.color = color;
    body.style.backgroundColor = color;
    addToLocalStorage(color, id);
  });
});

// ! ------------------------------------------- Functions
// Remove Active Function
function removeActive() {
  items.forEach(item => {
    item.classList.remove("active");
  });
}

// Add Active Function 
function addActive(ele) {
  ele.classList.add("active");
}

// Add To LocalStorage Function
function addToLocalStorage(color, id) {
  localStorage.setItem("color", color);
  localStorage.setItem("id", id);
}

// Get LocalStorage Function
function getLocalStorage() {
  if (localStorage.color) {
    removeActive()
    let color = localStorage.getItem("color");
    head.style.color = color;
    body.style.backgroundColor = color;
    let id = localStorage.getItem("id");
    items[+id].classList.add("active");
  }
}