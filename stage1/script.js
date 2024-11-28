// Function to start the challenge and reveal the riddle section
function startChallenge() {
  // Hide the pop-up and welcome section
  document.getElementById("popUp").style.display = "none";
  document.getElementById("welcomeSection").style.display = "none"; // Optional, if you want to hide it explicitly

  // Show the riddle section by removing the 'hidden' class
  document.getElementById("riddle-section").classList.remove("hidden");
}

// Function to check the user's answer and proceed or retry
function checkAnswer() {
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  
  // Check if the answer is correct
  if (answer === "honeywell") {
    alert("Hmmm ... Kashish's smartness shouldn't be underestimated.😏 But I hope this time you didn't need to ask for anyone's help in this too😉🤣");

    // Redirect to the next page (adjust the URL as needed)
    window.location.href = "stage2.html";
  } else {
    // Provide feedback if the answer is incorrect
    alert("Now, CHATGPT can't help you.. can it 😂!");
  }
}