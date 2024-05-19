class signUp {
	myAccount = "//span[normalize-space()='My Account']";
	RegisterButton = "//a[normalize-space()='Register']";
	RegisterPage = "div[id='content'] h1";
	firstNameField = "input[id='input-firstname']";
	lastNameField = "input[id$='input-lastname']";
	emailAddressField = "input[id$='input-email']";
	passwordField = "input[id$='input-password']";
	privacyPolicy = "//input[@name='agree']";
	submitButton = "button[type='submit']";
	successfullMessage = "div[id='content'] h1";
	GoToHomePage = "div[class='text-end'] a";

	firstNameErrorField = "div[id$='error-firstname']";
	lastNameErrorField = "div[id$='error-lastname']";
	emailErrorField = "div[id$='error-email']";
	passwordErrorField = "div[id$='error-password']";
	privacyErrorField = "div[id='alert']";

	myAccountPage() {
		cy.xpath(this.myAccount).should("be.visible").click();
	}

	goToRegisterPage() {
		myAccountPage();
		cy.xpath(this.RegisterButton).should("be.visible").click();
	}

	verifyRegisterPage(verify) {
		cy.get(this.RegisterPage).should("have.text", verify);
	}

	RegisterAnAccount(firstName, lastName, email) {
		cy.get(this.firstNameField).type(firstName);
		cy.get(this.lastNameField).type(lastName);
		cy.get(this.emailAddressField).type(email);
		cy.get(this.passwordField).type("12345678");
	}

	AcceptPrivacyPolicy() {
		cy.xpath(this.privacyPolicy).should("be.visible").check();
	}

	SignintoApplication() {
		cy.get(this.submitButton).should("be.visible").click();
	}

	verifySuccessfullMessage(RegsiterSuccessFullMessage) {
		cy.get(this.successfullMessage).should(
			"have.text",
			RegsiterSuccessFullMessage
		);
	}

	wayToHomePage() {
		cy.get(this.GoToHomePage).should("be.visible").click();
	}

	verifyErrorMessaggeIfNoDataFilledUp(
		firstNameFieldError,
		LastNameFieldError,
		EMailAddressfieldError,
		PasswordFieldError,
		PrivacypolicyfiledError
	) {
		cy.get(this.firstNameErrorField).should(
			"have.text",
			"First Name must be between 1 and 32 characters!"
		);
		cy.get(this.lastNameErrorField).should(
			"have.text",
			"Last Name must be between 1 and 32 characters!"
		);
		cy.get(this.emailErrorField).should(
			"have.text",
			"E-Mail Address does not appear to be valid!"
		);
		cy.get(this.passwordErrorField).should(
			"have.text",
			"Password must be between 4 and 20 characters!"
		);
		cy.get(this.privacyErrorField).should(
			"have.text",
			" Warning: You must agree to the Privacy Policy! "
		);
	}
}
export default signUp;
