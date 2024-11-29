// Check localStorage for Stage 2 progress
document.addEventListener('DOMContentLoaded', function () {
  const portal = document.getElementById('portal');
  const riddleSection = document.getElementById('riddle-section');
  const successMessage = document.getElementById('success-message');

  // Check if Stage 2 has already been completed
  if (localStorage.getItem('stage2Complete')) {
    successMessage.style.display = 'block';
  } else {
    // Make the portal clickable to reveal the riddle
    portal.addEventListener('click', function () {
      portal.style.display = 'none'; // Hide the portal
      riddleSection.style.display = 'block'; // Show the riddle section
    });
  }

  // Handle answer submission
  document.getElementById('submit-answer').addEventListener('click', function () {
    const answer = document.getElementById('answer').value.trim().toLowerCase();

    // Correct answer validation
    if (answer === 'u') { // Adjust based on the riddle
      localStorage.setItem('stage2Complete', true); // Save progress
      riddleSection.style.display = 'none'; // Hide the riddle
      successMessage.style.display = 'block'; // Show success message
    } else {
      alert("Try again! The clue is in the reflection...");
    }
  });

  // Handle navigation to the next stage
  document.getElementById('next-stage').addEventListener('click', function () {
    window.location.href = 'stage3.html'; // Adjust the URL for the next stage
  });
});
