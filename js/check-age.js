export default function checkOfAge(camp) {
	const newBirthday = new Date(camp.value);

	if (!validateAge(newBirthday)) {
		camp.setCustomValidity("customError");
	}
}


function validateAge(date) {
	const today = new Date();
	const legalAge = 18;
	const today18 = new Date(date.getUTCFullYear() + legalAge, date.getUTCMonth(), date.getUTCDate());

	return today >= today18;

}

function validateYear(date) {
	const currentYear = new Date().getUTCFullYear();
	const yearGiven = new Date(date.getUTCFullYear());

	return yearGiven < currentYear - 100;
}

export const validateAgeYear = {
	validateYear
}