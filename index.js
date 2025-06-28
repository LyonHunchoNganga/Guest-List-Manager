const guestForm = document.getElementById("guestForm");
const guestName = document.getElementById("guestName");
const guestCategory = document.getElementById("guestCategory");
const guestList = document.getElementById("guestList");

// Use IDs for buttons
const displayBtn = document.getElementById("displayBtn");
const resetBtn = document.getElementById("resetBtn");
const eraseBtn = document.getElementById("eraseBtn");

let guests = [];

// Render function
function renderGuests() {
  guestList.innerHTML = "";
  guests.forEach((guest, index) => {
    const li = document.createElement("li");
    li.textContent = `${guest.name} (${guest.category}) — ${guest.timestamp}`; // Fixed template string
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => {
      guests.splice(index, 1);
      renderGuests();
    };
    li.appendChild(delBtn);
    guestList.appendChild(li);
  });
}

// Handle submit
guestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = guestName.value.trim();
  const category = guestCategory.value;
  if (name) {
    guests.push({
      name,
      category,
      timestamp: new Date().toLocaleString()
    });
    guestName.value = "";
    renderGuests();
  }
});

// Display list
displayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  renderGuests();
});

// Reset list
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  guests = [];
  renderGuests();
});

// Erase last guest
eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  guests.pop();
  renderGuests();
});
