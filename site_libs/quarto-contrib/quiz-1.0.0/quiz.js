document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz").forEach((quiz) => {
    const options = quiz.querySelectorAll(".quiz-option");
    const choose = (opt) => {
      options.forEach((o) => o.classList.remove("quiz-chosen"));
      opt.classList.add("quiz-chosen", "quiz-tried");
      opt.classList.add(opt.dataset.correct === "true" ? "quiz-right" : "quiz-wrong");
    };
    options.forEach((opt) => {
      opt.addEventListener("click", () => choose(opt));
      opt.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(opt); }
      });
    });
  });
});
