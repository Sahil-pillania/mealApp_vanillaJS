const mealAdd = document.getElementById("mealAdd");
const mealSearch = document.getElementById("mealSearch");
const add = document.getElementById("add");
const search = document.getElementById("search");
// ids for adding the meal
const inputData = document.getElementById("inputData");
const submitData = document.getElementById("submitData");
const list = document.getElementById("list");
// ids for search tab
const searchInput = document.getElementById("searchInput");
const searchList = document.getElementById("searchList");
const searchVal = document.getElementById("searchVal");

var array = [];

// toggling the tabs
mealAdd.addEventListener("click", function () {
  this.classList.add("active");
  mealSearch.classList.remove("active");
  add.classList.add("active", "show");
  search.classList.remove("active", "show");
});
mealSearch.addEventListener("click", function () {
  this.classList.add("active");
  mealAdd.classList.remove("active");
  add.classList.remove("active", "show");
  search.classList.add("active", "show");
});

// adding the meal data
submitData.addEventListener("click", () => {
  if (inputData.value == "") {
    alert("Please input something...");
    return;
  }

  array.push(inputData.value);

  inputData.value = "";
  refreshItems();
});

// refreshing the items into the list
function refreshItems() {
  // var ul = document.createElement("ul");
  list.innerHTML = "";

  for (i = 0; i <= array.length - 1; i++) {
    var li = document.createElement("li");
    li.innerHTML = array[i];
    list.appendChild(li);
  }
}
refreshItems();

// Searching the items
searchVal.addEventListener("click", function () {
  let inputValue = searchInput.value;
  console.log("clicked item " + inputValue);

  searchList.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    // Check if the current word in the array contains the input value
    if (array[i].includes(inputValue) && inputValue != "") {
      console.log("inputValue", inputValue);
      var li = document.createElement("li");
      li.innerHTML = array[i];
      searchList.appendChild(li);
    }

    if (searchList.children.length == 0) {
      var li = document.createElement("li");
      li.innerHTML = "No items to display.";
      searchList.appendChild(li);
    }
  }
});
