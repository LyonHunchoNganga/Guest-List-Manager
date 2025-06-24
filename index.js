// Get references to DOM elements
const guestNameInput = document.getElementById("guestName");
const guestCategorySelect = document.getElementById("guestCategory");
const guestForm = document.getElementById("guestForm");
const resetBtn = document.getElementById("resetList");
const displayBtn = document.getElementById("displayList");
const guestListUl = document.getElementById("guestList");

let guests = [];

// Add guest on form submit
guestForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form reload

  const name = guestNameInput.value.trim();
  const category = guestCategorySelect.value;

  if (name !== "") {
    const timestamp = new Date().toLocaleString();
    guests.push({ name, category, timestamp });
    guestNameInput.value = "";
  }
});

// Display guest list
displayBtn.addEventListener("click", function () {
  renderGuestList();
});

// Reset guest list
resetBtn.addEventListener("click", function () {
  guests = [];
  renderGuestList();
});

// Reusable function to show guest list
function renderGuestList() {
  guestListUl.innerHTML = "";

  guests.forEach((guest, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${guest.name}</strong> - ${guest.category}<br>
      <small>Added: ${guest.timestamp}</small>
      <button class="deleteBtn" data-index="${index}">Delete</button>
    `;
    guestListUl.appendChild(li);
  });

  // Add delete functionality
  document.querySelectorAll(".deleteBtn").forEach(btn => {
    btn.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      guests.splice(index, 1);
      renderGuestList();
    });
  });
}
