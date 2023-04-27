const form = document.querySelector(".form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    createTicket(evento.target.elements['nome'].value, evento.target.elements['email'].value, evento.target.elements['date'].value);
})

function createTicket(name, email, date) {
    if (name && email && date) {
        console.log("validado");
    } else {
        console.log("não validado");
    }
}
