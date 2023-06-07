import checkOfAge from "./check-age.js";
import { validateAgeYear } from "./check-age.js";
import { buttonControls } from "./button-control.js";

const form = document.querySelector("[data-form");
const formCamp = document.querySelectorAll("[required]");
const submitBtn = document.querySelector("[data-submit]");

submitBtn.addEventListener("mouseover", () => {
	submitBtn.focus();
	validateForm();
})

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const responseList = {
		"nome": e.target.elements["name"].value,
		"email": e.target.elements["email"].value,
		"ticket": e.target.elements["ticket"].value,
		"birthday": e.target.elements["birthday"].value
	}

	localStorage.setItem("register", JSON.stringify(responseList));

	window.location.href = "./ticket-output.html";
})

window.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		e.preventDefault();
		submitBtn.focus();
		validateForm();
	}

})

const errorTypes = [
	"valueMissing",
	"patternMismatch",
	"tooShort",
	"typeMismatch",
	"customError",
]

const messages = {
	name: {
		valueMissing: "O campo de nome não pode estar vazio.",
		patternMismatch: "Por favor, preencha um nome válido.",
		tooShort: "Por favor, preencha um nome válido."
	},
	email: {
		valueMissing: "O campo de e-mail não pode estar vazio.",
		typeMismatch: "Por favor, preencha um email válido.",
		tooShort: "Por favor, preencha um e-mail válido."
	},
	birthday: {
		valueMissing: 'O campo de data de nascimento não pode estar vazio.',
		customError: 'Você deve ser maior que 18 anos para se cadastrar.',
	}
}

formCamp.forEach((camp) => {
	camp.addEventListener("blur", () => checkCamp(camp));
	camp.addEventListener("invalid", e => e.preventDefault());
})

function checkCamp(camp) {
	let message = "";
	camp.setCustomValidity("");

	if (camp.name == "birthday" && camp.value != "") {
		checkOfAge(camp);
	}

	const messageError = camp.parentNode.querySelector(".form__error");
	const inputValidity = camp.checkValidity();

	errorTypes.forEach((type) => {
		if (camp.validity[type]) {
			message = messages[camp.name][type];
		}
	})

	if (!inputValidity) {
		messageError.innerHTML = message;
		camp.style.border = "2px solid rgb(255, 41, 41)";
		buttonControls.deactivateButton(submitBtn);

	} else if (validateAgeYear.validateYear(new Date(camp.value))) {
		messageError.innerHTML = "Por favor, insira uma data de nascimento válida.";
		camp.style.border = "2px solid rgb(255, 41, 41)";
		buttonControls.deactivateButton(submitBtn);
	} else {
		messageError.innerHTML = "";
		camp.style.border = "none";
	}

	if (form.checkValidity() && !validateAgeYear.validateYear(new Date(camp.value))) {
		buttonControls.activeButton(submitBtn);
	}
}

function validateForm() {
	formCamp.forEach((camp) => {
		checkCamp((camp));
	})
}