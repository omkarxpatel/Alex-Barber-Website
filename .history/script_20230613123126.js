document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Send appointment details to the server (you can replace this with your own server-side logic)
  // Here, we simply display a confirmation message
  document.getElementById("booking-form").reset();
  document.getElementById("confirmation-message").classList.remove("hidden");
});
