document.addEventListener('DOMContentLoaded', function() {
  // Check if the user has already accepted
  if (localStorage.getItem('acceptComplete') === 'true') {
    // If already accepted, skip to Stage 1 or wherever the user left off
    window.location.href = 'stage1.html';  // Redirect to Stage 1 directly
  }

  // If the user accepts
  document.getElementById("accept").addEventListener("click", function () {
    // Mark the acceptance as completed
    localStorage.setItem('acceptComplete', true);
    
    // Redirect to Stage 1 after acceptance
    window.location.href = 'stage1.html';  // Redirect to Stage 1
  });

  // If the user rejects
  document.getElementById("reject").addEventListener("click", function () {
    alert("So you rejected? Guess you don't have the guts for this challenge! 😏 Maybe next time...");
    window.location.href = "https://youtu.be/V4RRBFFkkJA?si=y-bAAhsW8Bx01UJY";  // Redirect to a different link after rejection
  });
});
