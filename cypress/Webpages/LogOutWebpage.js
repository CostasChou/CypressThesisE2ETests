class LogOutWebpage{
  //Locators
    constructor() {
        this.logOutLabel = '.banner-heading';
      }
    //Retrieve Locators
    getLabelLogOut(){
        return cy.get(this.logOutLabel);
    }

    //Assertions
    validateLogOut() {
        this.getLabelLogOut().should('contain', 'Logout successful');
      }
}

export default LogOutWebpage;