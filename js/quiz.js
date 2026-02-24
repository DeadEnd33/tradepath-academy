// quiz.js

const form = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect answers
  const answers = [
    form.q1.value,
    form.q2.value,
    form.q3.value
  ];

  // Score each trade
  const score = {};

  answers.forEach(answer => {
    score[answer] = (score[answer] || 0) + 1;
  });

  // Determine best trade
  let bestTrade = null;
  let highestScore = 0;

  for (const trade in score) {
    if (score[trade] > highestScore) {
      highestScore = score[trade];
      bestTrade = trade;
    }
  }

  // Save result for later use (schools page, trade pages, etc.)
  localStorage.setItem("quizResult", bestTrade);

  // Display result
  resultDiv.innerHTML = `
    <h2>Your Best Match:</h2>
    <p class="trade-result">${bestTrade.toUpperCase()}</p>
    <div style="margin-top: 1rem;">
      <a href="schools.html" class="cta">Find Schools</a>
      <a href="trades/${bestTrade}.html" class="cta secondary">View Career</a>
    </div>
  `;
});
