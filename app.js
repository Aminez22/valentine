document.addEventListener("DOMContentLoaded", () => {
    const letterPage = document.getElementById("letter-page");
    const questionPage = document.getElementById("question-page");
    const successPage = document.getElementById("success-page");

    const continueBtn = document.getElementById("continue-btn");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    // PAGE 1 → PAGE 2
    continueBtn.addEventListener("click", () => {
        letterPage.classList.remove("active");
        questionPage.classList.add("active");
    });

    // PAGE 2 → PAGE 3
    yesBtn.addEventListener("click", () => {
        questionPage.classList.remove("active");
        successPage.classList.add("active");
    });

    // Bouton NO (desktop + mobile fallback)
    let shrinkLevel = 0;

    // Desktop (mouseenter)
    noBtn.addEventListener("mouseenter", () => {
        const container = questionPage.querySelector(".container");
        const rect = container.getBoundingClientRect();

        const x = Math.random() * (rect.width - noBtn.offsetWidth);
        const y = Math.random() * (rect.height - noBtn.offsetHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Mobile (tap)
    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        shrinkLevel++;

        noBtn.style.transform = `scale(${Math.max(0, 1 - shrinkLevel * 0.2)})`;

        const texts = [
            "No 😶",
            "Wait 😳",
            "Hmm 🤔",
            "Are you sure? 😬",
            "Ok maybe… 🫣",
            "😢"
        ];

        noBtn.textContent = texts[Math.min(shrinkLevel, texts.length - 1)];
    });
});
