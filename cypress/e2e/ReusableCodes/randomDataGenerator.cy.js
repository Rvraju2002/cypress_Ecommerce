import login from "../SpilittedCodes/loginSpilittedCodes.cy";

// Function to generate random email
function generateRandomEmail() {
	const randomString = Math.random().toString(36).substring(2, 10);
	return `user_${randomString}@example.com`;
}

// Function to generate random first name
function generateRandomFirstName() {
	const firstNames = [
		"John",
		"Alice",
		"Michael",
		"Emily",
		"David",
		"Sarah",
		"Daniel",
		"Emma",
		"James",
		"Olivia",
	];
	return firstNames[Math.floor(Math.random() * firstNames.length)];
}

// Function to generate random last name
function generateRandomLastName() {
	const lastNames = [
		"Smith",
		"Johnson",
		"Brown",
		"Miller",
		"Davis",
		"Garcia",
		"Rodriguez",
		"Wilson",
		"Martinez",
		"Anderson",
	];
	return lastNames[Math.floor(Math.random() * lastNames.length)];
}

export { generateRandomEmail, generateRandomFirstName, generateRandomLastName };
