const submitContainer = document.querySelector(".submit-container");

function activeButton(btn) {
    btn.style.opacity = "1";
    btn.disabled = false;
    btn.style.cursor = "pointer";
}

function deactivateButton(btn) {
    btn.style.opacity = ".5";
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
}

export const buttonControls = {
    activeButton,
    deactivateButton
}