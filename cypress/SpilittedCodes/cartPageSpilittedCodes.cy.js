import uses from "../e2e/ReusableCodes/againUses.cy";

class CartPage {
	cartProducts = "//p[@class='text-end']/a[1]";
	CartProductList = "td[class$='text-start text-wrap'] a";
	checkoutButton = "a.btn.btn-primary";

	goToCartProductListPage() {
		return cy.xpath(this.cartProducts).should("be.visible").click();
	}

	getProductElements() {
		return cy.get(this.CartProductList);
	}
	goToCheckoutPage() {
		uses.scrolltoElementCssSelector(this.checkoutButton);

		cy.get(this.checkoutButton).should("be.visible").click();
	}
}
export default new CartPage();
