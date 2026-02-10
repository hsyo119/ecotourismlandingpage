// Reservation Form
const form = document.getElementById("reservationForm");
const message = document.getElementById("message");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const peopleInput = document.getElementById("people"); 
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");
const mountainInput = document.getElementById("mountain");
const requestInput = document.getElementById("request");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: nameInput.value,
    age: ageInput.value,
    people: peopleInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    date: dateInput.value,
    mountain: mountainInput.value,
    request: requestInput.value
  };

  console.log("Reservation Data:", data);
 // Show confirmation message
  message.textContent = `Thank you! Your reservation request for ${data.people} ${
    data.people === "1" ? "person" : "people"
  } was sent.We will contact sooner.`;

  // Reset form
  form.reset();
});

// Read More / Read Less Toggle
// ---------------------------
function toggleText(mountain, button) {
  const shortText = document.getElementById(`${mountain}Short`);
  const fullText = document.getElementById(`${mountain}Full`);

  if (!shortText || !fullText) return; // safety check

  if (fullText.classList.contains('hidden')) {
    fullText.classList.remove('hidden');
    shortText.classList.add('hidden');
    button.textContent = "Read Less";
  } else {
    fullText.classList.add('hidden');
    shortText.classList.remove('hidden');
    button.textContent = "Read More";
  }
}
