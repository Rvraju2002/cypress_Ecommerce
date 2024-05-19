import * as randomDataGenerator from "./ReusableCodes/randomDataGenerator.cy";
import signUp from "../SpilittedCodes/signInSpilittedCode.cy";

describe("SignupFunctionality", function () {
	it("SignupFlow", function () {
		const sign = new signUp();
		sign.goToRegisterPage();
		sign.verifyRegisterPage("Register Account");
		const email = randomDataGenerator.generateRandomEmail();
		const firstName = randomDataGenerator.generateRandomFirstName();
		const lastName = randomDataGenerator.generateRandomLastName();
		sign.RegisterAnAccount(firstName, lastName, email);
		sign.AcceptPrivacyPolicy();
		sign.SignintoApplication();
		sign.verifySuccessfullMessage("Your Account Has Been Created!");
		sign.wayToHomePage();
	});

	it("verifyErrorMessage_WithoutDetailsFillup", function () {
		const sign = new signUp();
		sign.goToRegisterPage();
		sign.verifyRegisterPage("Register Account");
		sign.SignintoApplication();
		sign.verifyErrorMessaggeIfNoDataFilledUp(
			"First Name must be between 1 and 32 characters!",
			"Last Name must be between 1 and 32 characters!",
			"E-Mail Address does not appear to be valid!",
			"Password must be between 4 and 20 characters!",
			" Warning: You must agree to the Privacy Policy! "
		);
	});
});
