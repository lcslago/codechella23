const submitContainer = document.querySelector(".submit-container");

function activeButton(btn) {
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "#4650BD";
}

function deactivateButton(btn) {
    btn.style.opacity = ".4";
    btn.style.backgroundColor = "rgb(95, 95, 95)";
    btn.style.cursor = "not-allowed";
}

export const buttonControls = {
    activeButton,
    deactivateButton
}