import login from "../SpilittedCodes/loginSpilittedCodes.cy";
import homePage from "../SpilittedCodes/HomePageSpilittedCodes.cy";
import productListPage from "../SpilittedCodes/productSpilittedCodes.cy";
import CartPage from "../SpilittedCodes/cartPageSpilittedCodes.cy";
import checkout from "../SpilittedCodes/checkOutSpilittedCodes.cy";
import confirmOrder from "../SpilittedCodes/confirmOrderPage.cy";
import specialItems from "../SpilittedCodes/specialProductSpilittedCodes.cy";
import uses from "./ReusableCodes/againUses.cy";

describe("endToEndFlow", function () {
	it("e2eCodes", function () {
		login.loginFunction();
		uses.waitSomeTime(1000);
		homePage.goToDesktopPage();
		homePage.gotoProductsPage();
		uses.waitSomeTime(1000);
		//
		//   
		const productName = ["iPhone","HTC Touch HD", "iPod Classic", "MacBook Air"];

        const specialProducts = ["Apple Cinema 30","Product 8","Canon EOS 5D","HP LP3065"];

		// Convert array to list
		const productList = productName;

		// Get the product list elements
		productListPage.getProductNames().then(($productList) => {
			for (let i = 0; i < $productList.length; i++) {
				const productNameText = $productList.eq(i).text().trim();

				if (productList.includes(productNameText)) {
					productListPage.scrollToElement(i);
					cy.wait(1000);
					productListPage.clickButtonAtIndex(i);
				}
			}
		});

		productListPage.getProductNames().then($productList => {
            for (let i = 0; i < $productList.length; i++) {
                const productNameText = $productList.eq(i).text().trim();

                if (specialProducts.includes(productNameText)) {
					productListPage.scrollToElement(i);
                    uses.waitSomeTime(1000);

                    if (productNameText === "Apple Cinema 30") {

                        productListPage.clickButtonAtIndex(i);
						specialItems.setDetailsOfProductsforAppleCinema();
						specialItems.uploadImageOfProduct("cypressImage.jpeg");
						specialItems.addToCartSpecialProduct();

                    } else if (productNameText === "Canon EOS 5D") {
                        // Special action for Canon EOS 5D
                        productListPage.clickButtonAtIndex(i);
                        specialItems.setDetailsCanon();
                        specialItems.addToCartSpecialProduct();
                        

                    } else if (productNameText === "HP LP3065") {
                        // Special action for HP LP3065
						productListPage.clickButtonAtIndex(i);
						specialItems.addToCartSpecialProduct();
                        
                    } else if (productNameText === "Product 8") {
                        // Special action for Product 8
						productListPage.clickButtonAtIndex(i);
                        specialItems.setSizeProduct8();
                        specialItems.addToCartSpecialProduct();
                    }
                }
            }
        });

		// Scroll to the top of the page
		productListPage.goToCartPage();

		// Click on the checkout button
		CartPage.goToCartProductListPage();

		// Get the list of added product elements
		CartPage.getProductElements().then(($listOfAddedProductElements) => {
			for (let i = 0; i < $listOfAddedProductElements.length; i++) {
				const viewCardPageProductList = $listOfAddedProductElements
					.eq(i)
					.text();
				const products = viewCardPageProductList.split(", ");

				// Check if any product name exists in the array
				let found = false;
				for (let j = 0; j < products.length; j++) {
					if (productName.includes(products[j])) {
						found = true;
						break; // Exit the loop if product is found
					}
				}
			}
		});

		CartPage.goToCheckoutPage();

		checkout.setAddresswithDetials(
			"Raju",
			"Vignesh",
			"EastStreet",
			"Virudhunagar",
			"4323",
			"India",
			"Tamil Nadu"
		);

		checkout.setShippingMethods();
		checkout.chooseFlatOffer();
		checkout.ConfirmShippingMethod();
		checkout.setPayment();
		checkout.setPaymentDetails();
		checkout.confirmPayment();
		checkout.confirmOrder();
		confirmOrder.verifyConfirmOrder("Your order has been placed!");
		uses.goToHomePageAgain();
	});
});
