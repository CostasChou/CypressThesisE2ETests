class ThesisWebpage{
    //Locators
  constructor() {
      this.thesisItem= ".sorting_1";
    }

  //Retrieve Locators
  getThesisWebpageItem() {
    return cy.get(this.thesisItem);
  }

  //Assertions
  verifyThatThesisItemIsDisplayed() {
    this.getThesisWebpageItem().should('be.visible');
  }
}

export default ThesisWebpage;