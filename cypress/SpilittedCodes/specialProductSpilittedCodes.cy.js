import uses from "../e2e/ReusableCodes/againUses.cy";

class specialItems{

    //AppleCinema

    chooseSize="input[id$='input-option-value-5']";
    chooseCheckbox="input[id$='input-option-value-8']";
    chooseColor="select[id$='input-option-217']";
    otherDetails="#input-option-209";
    getUploadScreen='#button-upload-222';
    fileInuput='input[type="file"]';
    addToCart='button[id="button-cart"]';

    //cannon
    chooseColorCamera="#input-option-226";

    //product 9

product8Size="#input-option-224";

    setDetailsOfProductsforAppleCinema(){
        return cy.get(this.chooseSize).click()
        .then(() => {
            return cy.get(this.chooseCheckbox).click();
        })
        .then(() => {
            return cy.get(this.chooseColor).select(2);
        })
        .then(() => {
            return cy.get(this.otherDetails).type('hello');
        });
    }
    uploadImageOfProduct(uploadImagePath){
        cy.get(this.getUploadScreen).click();
        const fileName = uploadImagePath;
        cy.get(this.fileInuput).attachFile(fileName);
        uses.waitSomeTime(2000); 
    }

    addToCartSpecialProduct(){
        cy.get(this.addToCart).should("be.visible").click();
        uses.waitSomeTime(1000);
        return uses.goToBackPage();
    }

    setDetailsCanon(){
        return cy.get(this.chooseColorCamera).select(1);
    }

    setSizeProduct8(){
        return cy.get(this.product8Size).select(2);
    }
    

}
export default new specialItems();