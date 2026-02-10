const reviewForm = document.getElementById("reviewForm");
const reviewMessage = document.getElementById("reviewMessage");
const nationality = document.getElementById("nationality").value;

reviewForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("reviewerName").value,
    email: document.getElementById("email").value,
    nationality: nationality,
    review: document.getElementById("reviewText").value,
    rating: document.getElementById("rating").value
  };

  console.log("Review Data:", data);

  reviewMessage.textContent = `Thank you, ${data.name}! Your review was submitted.`;
  reviewForm.reset();
});
