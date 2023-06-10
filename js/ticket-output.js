const userName = document.querySelector("[data-name]");
const userSector = document.querySelector("[data-sector]");

window.addEventListener('load', () => {
    const userData = JSON.parse(localStorage.getItem("register"));
    userName.innerHTML = userData.nome;
    userSector.innerHTML = userData.ticket;
})
