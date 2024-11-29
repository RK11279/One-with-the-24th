document.addEventListener('DOMContentLoaded', function() {
  // Check if stage 1 is already completed (via localStorage)
  if (localStorage.getItem('stage1Complete') === 'true') {
    // Redirect to stage 2 if stage 1 is already completed
    window.location.href = 'stage2.html';
  }

  // Start the challenge and reveal the riddle
  const startBtn = document.getElementById("start-btn");
  const answerInput = document.getElementById("answer");

  startBtn.addEventListener("click", function() {
    // Show the riddle section
    document.getElementById("riddle-section").classList.remove("hidden");
    document.querySelector(".welcome-section").style.display = "none";
  });

  // Check the answer and move to the next stage
  document.getElementById("check-btn").addEventListener("click", function() {
    const answer = answerInput.value.trim().toLowerCase();

    if (answer === "honeywell") {
      alert("Hmmm ... Kashish's smartness shouldn't be underestimated.😏 But I hope this time you didn't need to ask for anyone's help in this too😉🤣");

      // Mark stage 1 as complete and redirect to Stage 2
      localStorage.setItem('stage1Complete', true);
      window.location.href = 'stage2.html';  // Redirect to Stage 2
    } else {
      alert("Now, CHATGPT can't help you.. can it 😂!");
    }
  });
});
