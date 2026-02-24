// school.js

document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("tradeFilter");
  const cards = document.querySelectorAll(".school-card");

  // Get quiz result if it exists
  const quizResult = localStorage.getItem("quizResult");

  // Function to filter schools
  function filterSchools(trade) {
    cards.forEach(card => {
      card.style.display =
        trade === "all" || card.dataset.trade === trade
          ? "block"
          : "none";
    });
  }

  // Auto-filter based on quiz result
  if (quizResult && filter) {
    filter.value = quizResult;
    filterSchools(quizResult);
  }

  // Manual dropdown filter
  if (filter) {
    filter.addEventListener("change", () => {
      filterSchools(filter.value);
    });
  }
});
