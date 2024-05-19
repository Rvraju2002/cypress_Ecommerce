class homePage {
	GoToDesktp = "//ul[@class='nav navbar-nav']/li[1]";
	goToShowAllProducts = "//ul[@class='nav navbar-nav']/li[1]/div/a";

	goToDesktopPage() {
		return cy.xpath(this.GoToDesktp).should("be.visible").click();
	}

	gotoProductsPage() {
		return cy.xpath(this.goToShowAllProducts).should("be.visible").click();
	}
}
export default new homePage();
