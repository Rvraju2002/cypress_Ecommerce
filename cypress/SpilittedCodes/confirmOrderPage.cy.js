class confirmOrder {
	successMessage = 'div[id="content"] h1';

	verifyConfirmOrder(message) {
		return cy.get(this.successMessage).should("have.text", message);
	}
}
export default new confirmOrder();
