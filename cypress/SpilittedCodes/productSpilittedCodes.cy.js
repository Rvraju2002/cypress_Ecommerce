import uses from "../e2e/ReusableCodes/againUses.cy";

class ProductListPage {
	productNameGet = "div[class='content'] h4";
	addProductButton = '//div[@class="button-group"]/button[1]';
	CartButton = '//div[@id="header-cart"]/div[1]';

	getProductNames() {
		return cy.get(this.productNameGet);
	}

	scrollToElement(index) {
		return this.getProductNames().eq(index).scrollIntoView();
	}

	clickButtonAtIndex(index) {
		return cy
			.xpath(this.addProductButton)
			.eq(index)
			.should("be.visible")
			.click();
	}

	goToCartPage() {
		uses.scrollToTop();
		uses.waitSomeTime(1000);
		return cy.xpath(this.CartButton).should("be.visible").click();
	}
}

export default new ProductListPage();
