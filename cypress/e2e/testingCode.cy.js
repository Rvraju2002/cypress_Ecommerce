import login from "../SpilittedCodes/loginSpilittedCodes.cy";
import homePage from "../SpilittedCodes/HomePageSpilittedCodes.cy";
import uses from "./ReusableCodes/againUses.cy";


describe("endToEndFlow", function () {
	it("e2eCodes", function () {
		login.loginFunction();
        cy.wait(1000);
        homePage.goToDesktopPage();
        homePage.gotoProductsPage();
        cy.wait(1000);
        //
        const productName = ["iPhone","HTC Touch HD", "iPod Classic", "MacBook Air"];

        const specialProducts = ["Apple Cinema 30","Product 8","Canon EOS 5D","HP LP3065"];

        // Add regular products first
        cy.get('div.content h4').then($productList => {
            for (let i = 0; i < $productList.length; i++) {
                const productNameText = $productList.eq(i).text().trim();
                
                if (productName.includes(productNameText)) {
                    cy.get('div.content h4').eq(i).scrollIntoView();
                    cy.wait(1000);
                    cy.xpath(`//div[@class="button-group"]/button[1]`).eq(i).click();
                }
            }
        });

        // Add special products
        cy.get('div.content h4').then($productList => {
            for (let i = 0; i < $productList.length; i++) {
                const productNameText = $productList.eq(i).text().trim();

                if (specialProducts.includes(productNameText)) {
                    cy.get('div.content h4').eq(i).scrollIntoView();
                    cy.wait(1000);

                    if (productNameText === "Apple Cinema 30") {
                        // Special action for Apple Cinema 30"
                        cy.xpath(`//div[@class="button-group"]/button[1]`).eq(i).click();
                        cy.get("input[id$='input-option-value-5']").click();
                        cy.get("input[id$='input-option-value-8']").click();
                        cy.get("select[id$='input-option-217']").select(2);
                        cy.get("#input-option-209").type('hello');
                       
                        
                       
                        cy.get('#button-upload-222').click();
                        const fileName = 'cypressImage.jpeg';
                        cy.fixture(fileName).then(fileContent => {
                            cy.get('input[type="file"]').attachFile({
                              fileContent,
                              fileName,
                              mimeType: 'image/jpeg'
                            
                            });
                          });
                        
                         // Wait for the alert to be called
                        //  cy.get('@alertStub').click()
                        cy.get('button[id="button-cart"]').should("be.visible").click();
                        cy.wait(1000);
                        cy.go(-1);

                    } else if (productNameText === "Canon EOS 5D") {
                        // Special action for Canon EOS 5D
                        cy.xpath(`//div[@class="button-group"]/button[1]`).eq(i).click();
                        cy.get("#input-option-226").select(1);
                        cy.get("#button-cart").click();
                        cy.go(-1);

                    } else if (productNameText === "HP LP3065") {
                        // Special action for HP LP3065
                        cy.xpath(`//div[@class="button-group"]/button[1]`).eq(i).click();
                        cy.get("#button-cart").click();
                        cy.go(-1);
                    } else if (productNameText === "Product 8") {
                        // Special action for Product 8
                        cy.xpath(`//div[@class="button-group"]/button[1]`).eq(i).click();
                        cy.get("#input-option-224").select(2);
                        cy.get("#button-cart").click();
                        cy.go(-1);
                    }
                }
            }
        });

        // Scroll to the top of the page
        cy.scrollTo('top');
        cy.wait(3000);

        // Click on the cart icon
        cy.xpath('//div[@id="header-cart"]/div[1]').click();

        // Click on the checkout button
        cy.xpath("//p[@class='text-end']/a[1]").click();

        // Get the list of added product elements
        cy.get('td[class$="text-start text-wrap"] a').then($listOfAddedProductElements => {
            for (let i = 0; i < $listOfAddedProductElements.length; i++) {
                const viewCardPageProductList = $listOfAddedProductElements.eq(i).text();
                const products = viewCardPageProductList.split(", ");

                for (let j = 0; j < products.length; j++) {
                    if (productName.concat(specialProducts).includes(products[j])) {
                        // Product found in the cart
                        break; // Exit the loop if product is found
                    }
                }
            }
        });

        // Scroll to the element
        cy.get('a.btn.btn-primary').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        cy.wait(1000);

        // Click on the element
        cy.get('a.btn.btn-primary').click();

        // Wait for the address form to appear
        cy.get('#input-shipping-address').then($address => {
            if ($address.is(':visible')) {
                cy.get('#input-shipping-address').select(1);
            } else {
                // Fill out the shipping address form
                cy.get('#input-shipping-firstname').type('Vignesh');
                cy.get('#input-shipping-lastname').type('raju');
                cy.get('#input-shipping-address-1').type('raju');
                cy.get('#input-shipping-city').type('raju');
                cy.wait(1000);
                cy.get('#input-shipping-postcode').type('raju');
                cy.get('#input-shipping-country').select('India');
                cy.get('#input-shipping-zone').select('Tamil Nadu');
                cy.get('#button-shipping-address').click();
            }
        });

        cy.scrollTo('top');
        cy.wait(1000);

        // Continue with payment and confirmation steps
        cy.get('#button-shipping-methods').click();
        cy.get('#input-shipping-method-flat-flat').click();
        cy.get('#button-shipping-method').click();
        cy.get('#button-payment-methods').click();
        cy.get('#input-payment-method-cod-cod').click();
        cy.get('#button-payment-method').click();
        cy.scrollTo(0, 500);
        cy.wait(1000);
        cy.get('#button-confirm').click();

        // Assert success message
        cy.get('div[id="content"] h1').should('have.text', 'Your order has been placed!');
        uses.goToHomePageAgain();
	});
});