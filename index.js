function openRules() {
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopupButton = document.getElementById("closePopup");
    const ruleButton = document.getElementById("ruleButton");
    ruleButton.addEventListener("click", () => {
        popupOverlay.style.display = "block";
    });
    closePopupButton.addEventListener("click", () => {
        popupOverlay.style.display = "none";
    });
    popupOverlay.addEventListener("click", (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    })
}

openRules();


function clickStartGame() {
    document.getElementById('startButton').addEventListener('click', () => {
        window.location.href = 'game.html';
    });
}

clickStartGame();