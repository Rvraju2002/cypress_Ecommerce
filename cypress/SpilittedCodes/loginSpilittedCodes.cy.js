import signUp from "./signInSpilittedCode.cy";

class login {
	goToLoginPage = "//a[normalize-space()='Login']";
	EmailTextbox = "input[name='email']";
	PasswordTextbox = "input[name='password']";
	loginForm = "button[type='submit']";

	goLoginPage() {
		const sign = new signUp();
		sign.myAccountPage();
		return cy.xpath(this.goToLoginPage).should("be.visible").click();
	}

	fillUpCredential(emailAddress, password) {
		return cy
			.get(this.EmailTextbox)
			.type(emailAddress)
			.then(() => cy.get(this.PasswordTextbox).type(password));
	}

	submitForm() {
		return cy.get(this.loginForm).should("be.visible").click();
	}

	loginFunction() {
		return this.goLoginPage()
			.then(() => this.fillUpCredential("Vignesh@ngfot.com", "1234567"))
			.then(() => this.submitForm());
	}
}
export default new login();
