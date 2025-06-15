const guestNameInput = document.getElementById("guestName");
const guestCategorySelect = document.getElementById("guestCategory");
const addGuestBtn = document.getElementById("addGuest");
const resetBtn = document.getElementById("resetList");
const displayBtn = document.getElementById("displayList");
const guestListUl = document.getElementById("guestList");

let guests = [];

addGuestBtn.addEventListener("click", () => {
  const name = guestNameInput.value.trim();
const category = guestCategorySelect.value;
  if (name !== "") {
    guests.push({ name, category });
    guestNameInput.value = "";
  }
});

displayBtn.addEventListener("click", () => {
  guestListUl.innerHTML = "";
  guests.forEach(guest => {
    const li = document.createElement("li");
    li.textContent = `${guest.name} - ${guest.category}`;
    guestListUl.appendChild(li);
  });
});

resetBtn.addEventListener("click", () => {
  guests = [];
  guestListUl.innerHTML = "";
});
