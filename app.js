const noBtn = document.getElementById("no-btn");
const container = document.querySelector(".container");

let shrinkLevel = 0;

// --- DESKTOP : le bouton fuit la souris ---
noBtn.addEventListener("mouseenter", () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// --- MOBILE / TOUCH : si elle arrive à cliquer ---
noBtn.addEventListener("click", (e) => {
    e.preventDefault();

    shrinkLevel++;

    const scale = Math.max(0.3, 1 - shrinkLevel * 0.2);
    noBtn.style.transform = `scale(${scale})`;

    const labels = [
        "No 😶",
        "Wait… 😳",
        "Hmm… 🤔",
        "Are you sure? 😬",
        "Ok maybe… 🫣",
        "This is embarrassing 😭",
        "Fine… 😔"
    ];

    noBtn.textContent =
        labels[Math.min(shrinkLevel, labels.length - 1)];

    // Après trop de tentatives : disparition
    if (shrinkLevel >= 6) {
        noBtn.style.opacity = "0";
        noBtn.style.pointerEvents = "none";
    }
});
