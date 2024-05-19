class uses {
	returnHomePage = ".btn.btn-primary";

	scrollToTop() {
		return cy.scrollTo("top");
	}

	waitSomeTime(timer) {
		return cy.wait(timer);
	}

	scrolltoElementCssSelector(element) {
		return cy
			.get(element)
			.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center",
			});
	}

	goToHomePageAgain() {
		return cy.get(this.returnHomePage).click();
	}

	goToBackPage(){
		return cy.go(-1);;
	}
}

export default new uses();
