import uses from "../e2e/ReusableCodes/againUses.cy";
class checkout {
	getAddressElements = "#input-shipping-address";

	firstNameFieldTextbox = "#input-shipping-firstname";
	lastNameFieldTextbox = "#input-shipping-lastname";
	addressfield1 = "#input-shipping-address-1";
	chooseCity = "#input-shipping-city";
	postalCode = "#input-shipping-postcode";
	shippingCountry = "#input-shipping-country";
	shippingZone = "#input-shipping-zone";
	shippingAddress = "#button-shipping-address";

	chooseShipping = "#button-shipping-methods";
	flatOffer = "#input-shipping-method-flat-flat";
	confirmShipping = "#button-shipping-method";
	paymentChoose = "#button-payment-methods";
	paymentdetails = "#input-payment-method-cod-cod";
	paymentConfirm = "#button-payment-method";
	orderConfirm = "#button-confirm";

	setAddresswithDetials(
		firstName,
		LastName,
		addressbar1,
		city,
		postalcode,
		country,
		zone
	) {
		cy.get(this.getAddressElements).then(($address) => {
			if ($address.is(":visible")) {
				// Select an address
				cy.get(this.getAddressElements).select(1);
			} else {
				// Fill out the shipping address form
				cy.get(this.firstNameFieldTextbox).type(firstName);
				cy.get(this.lastNameFieldTextbox).type(LastName);
				cy.get(this.addressfield1).type(addressbar1);
				cy.get(this.chooseCity).type(city);
				// cy.window().scrollBy(0, 500);
				// uses.waitSomeTime(1000);
				cy.get(this.postalCode).type(postalcode);
				cy.get(this.shippingCountry).select(country);
				cy.get(this.shippingZone).select(zone);
				return cy
					.get(this.shippingAddress)
					.should("be.visible")
					.click();
			}
		});
	}
	setShippingMethods() {
		uses.scrollToTop();
		uses.waitSomeTime(1000);
		return cy.get(this.chooseShipping).click();
	}
	chooseFlatOffer() {
		uses.waitSomeTime(2000);
		return cy.get(this.flatOffer).should("be.enabled").click();
	}

	ConfirmShippingMethod() {
		uses.waitSomeTime(1000);
		return cy.get(this.confirmShipping).should("be.visible").click();
	}

	setPayment() {
		return cy.get(this.paymentChoose).should("be.enabled").click();
	}
	setPaymentDetails() {
		
		return cy.get(this.paymentdetails).should("be.visible").click();
	}
	confirmPayment() {
		uses.waitSomeTime(1000);
		return cy.get(this.paymentConfirm).should("be.visible").click();
	}

	confirmOrder() {
		return cy.get(this.orderConfirm).should("be.visible").click();
	}
}
export default new checkout();
