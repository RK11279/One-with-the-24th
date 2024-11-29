document.getElementById("accept").addEventListener("click", function () {
    localStorage.setItem('acceptComplete', true);
window.location.href = 'stage1.html'; // Redirect to Stage 1
});

document.getElementById("reject").addEventListener("click", function () {
    alert("So you rejected? Guess you don't have the guts for this challenge! 😏 Maybe next time...");
window.location.href = "https://youtu.be/V4RRBFFkkJA?si=y-bAAhsW8Bx01UJY";
});
