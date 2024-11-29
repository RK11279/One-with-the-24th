// Function to start the challenge and reveal the riddle section
function startChallenge() {
  // Show the riddle section by removing the 'hidden' class
  document.getElementById("riddle-section").classList.remove("hidden");
  
  // Optionally, hide the "Welcome" section or other initial content
  document.querySelector(".welcome-section").style.display = "none";
}

// Function to check the user's answer and proceed or retry
function checkAnswer() {
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  
  // Check if the answer is correct
  if (answer === "honeywell") {
    alert("Hmmm ... Kashish's smartness shouldn't be underestimated.😏 But I hope this time you didn't need to ask for anyone's help in this too😉🤣");

    // Redirect to the next page (adjust the URL as needed)
    localStorage.setItem('stage1Complete', true);
 window.location.href = 'stage2.html'; // Redirect to Stage 2
  } else {
    // Provide feedback if the answer is incorrect
    alert("Now, CHATGPT can't help you.. can it 😂!");
  }
}

// Wait for the page to load and then add event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Select the "Begin the Quest" button
  const startBtn = document.getElementById("start-btn");
  
  // Add event listener to the button to start the challenge
  startBtn.addEventListener("click", startChallenge);
});


