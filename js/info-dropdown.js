const infoAsk = document.querySelectorAll('[data-ask]');
const infoAnswer = document.querySelectorAll('[data-answer]');
const infoArrow = document.querySelectorAll('[data-arrow]');

for (let i = 0; i < infoAsk.length; i++) {
    infoAsk[i].addEventListener('click', () => {
        if (infoAnswer[i].hidden) {
            infoAnswer[i].hidden = false;
            infoArrow[i].style.transform = 'rotate(180deg)';
        } else {
            infoAnswer[i].hidden = true;
            infoArrow[i].style.transform = 'rotate(0deg)';
        }
    })
}