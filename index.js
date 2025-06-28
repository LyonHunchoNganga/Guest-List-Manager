const guestForm = document.getElementById("guestForm");
const guestName = document.getElementById("guestName");
const guestCategory = document.getElementById("guestCategory");
const guestList = document.getElementById("guestList");

const displayBtn = document.getElementById("displayBtn");
const resetBtn = document.getElementById("resetBtn");
const eraseBtn = document.getElementById("eraseBtn");

let guests = JSON.parse(localStorage.getItem("guests")) || [];

function saveGuests() {
  localStorage.setItem("guests", JSON.stringify(guests));
}

function renderGuests() {
  guestList.innerHTML = "";
  guests.forEach((guest, index) => {
    const li = document.createElement("li");
    li.textContent = `${guest.name} (${guest.category})`;
    guestList.appendChild(li);
  });
}

guestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = guestName.value.trim();
  const category = guestCategory.value;
  if (name) {
    guests.push({ name, category });
    saveGuests();
    renderGuests();
    guestForm.reset();
  }
});displayBtn.addEventListener("click", renderGuests);

resetBtn.addEventListener("click", () => {
  guests = [];
  saveGuests();
  renderGuests();
});

eraseBtn.addEventListener("click", () => {
  guests.pop();
  saveGuests();
  renderGuests();
});

// Optional: restore on load
window.addEventListener("DOMContentLoaded", renderGuests);
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});
// Optional: Set initial state based on localStorage
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  toggle.checked = true;
}