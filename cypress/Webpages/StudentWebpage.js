class StudentWebpage{

    //Locators
    constructor() {
        this.personalDataTabOfCentralMenu= ".ic-md.ic-general-info-alt";
        this.personalDataDiv = "#studentDataEl";
      }

  //Retrieve Locators
  getPersonalDataTabOfCentralMenu() {
    return cy.get(this.personalDataTabOfCentralMenu);
  }
  getPersonalDataDiv() {
    return cy.get(this.personalDataDiv);
  }

  //Actions
  clickPersonalDataTabOfCentralMenu() {
    this.getPersonalDataTabOfCentralMenu().click();
  }

  //Assertions
  verifyThatPersonalDataInfoIsDisplayed() {
    this.getPersonalDataDiv().should('be.visible');
  }
}

export default StudentWebpage;