class Homepage{

    //Locators
    constructor() {
        // Define the selectors for elements on the homepage
        this.amDropDownList = '.user-profile-name';
        this.logOutChoiceOfAmDropDownList = ".fa.fa-sign-out.pull-right";
        this.languageDropDownList = "#localeDropDown";
        this.englishChoiceOfLanguageDropDownList= "#enLocale";
        this.userManualGuideOfCentralMenu= ".fa.fa-file-pdf-o";
        this.studentDataOfCentralMenu= ".ic.ic-student";
        this.thesesOfCentralMenu= ".ic.ic-work-experience";
        this.gradesOfCentralMenu= ".ic.ic-grades-alt3";
        this.myBoardChoiceOfGradesOptionOfCentralMenu= ".ic-md.ic-grades";
        this.allGradesChoiceOfGradesOptionOfCentralMenu= ".ic-md.ic-grades-alt2";
        this.byExamPeriodChoiceOfGradesOptionOfCentralMenu= ".ic-md.ic-terms";
        this.examsOptionOfCentralMenu= "em.ic.ic-grades-alt1";
        this.centralMenuToggle= "#menu_toggle";
        this.signOutButtonOfCentralMenu= 'a[data-original-title="Αποσύνδεση"]';
      }

  //Retrieve locators
  getAmDropDownList() {
    return cy.get(this.amDropDownList);
  }

  getlogOutChoiceOfAmDropDownList() {
    return cy.get(this.logOutChoiceOfAmDropDownList);
  }

  getLanguageDropDownList() {
    return cy.get(this.languageDropDownList);
  }

  getEnglishChoiceOfLanguageDropDownList() {
    return cy.get(this.englishChoiceOfLanguageDropDownList);
  }

  getUserManualOfCentralMenu() {
    return cy.get(this.userManualGuideOfCentralMenu);
  }

  getStudentDataOfCentralMenu() {
    return cy.get(this.studentDataOfCentralMenu);
  }

  getThesisOfCenralMenu() {
    return cy.get(this.thesesOfCentralMenu);
  }
  getGradesOfCentralMenu() {
    return cy.get(this.gradesOfCentralMenu);
  }

  getMyBoardOptionOfGradesOfCentralMenu() {
    return cy.get(this.myBoardChoiceOfGradesOptionOfCentralMenu);
  }
  getAllGradesOptionOfGradesOptionOfCentralMenu() {
    return cy.get(this.allGradesChoiceOfGradesOptionOfCentralMenu);
  }
  getByExamPeriodOptionOfGradesOptionOfCentralMenu() {
    return cy.get(this.byExamPeriodChoiceOfGradesOptionOfCentralMenu);
  }

  getExamsOptionOfCentralMenu() {
    return cy.get(this.examsOptionOfCentralMenu);
  }

  getCentralMenuToggle() {
    return cy.get(this.centralMenuToggle);
  }

  getSignOutButtonOfCentralMenu() {
    return cy.get(this.signOutButtonOfCentralMenu);
  }

  //Actions
  clickAmDropDownList() {
    this.getAmDropDownList().click();
  }
  clickLogOutChoiceOfAmDropDownList() {
    this.getlogOutChoiceOfAmDropDownList().click();
  }
  clickLanguageDropDownList() {
    this.getLanguageDropDownList().click();
  }
  clickEnglishChoiceOfLanguageDropDownList() {
    this.getEnglishChoiceOfLanguageDropDownList().click();
  }
  scrollIntoUserManualGuide() {
    this.getUserManualOfCentralMenu().scrollIntoView();
  }
  clickUserManualGuideOfCentralMenu() {
    this.getUserManualOfCentralMenu().click();
  }
  clickStudentDataOfCentralMenu() {
    this.getStudentDataOfCentralMenu().click();
  }
  clickThesisOfCentralMenu() {
    this.getThesisOfCenralMenu().click();
  }
  clickGradesOfCentralMenu() {
    this.getGradesOfCentralMenu().click();
  }
  clickMyBoardOptionOfGradesOfCentralMenu() {
    this.getMyBoardOptionOfGradesOfCentralMenu().click();
  }
  clickAllGradesOptionOfGradesOptionOfCentralMenu() {
    this.getAllGradesOptionOfGradesOptionOfCentralMenu().click();
  }
  clickByExamsPeriodOptionOfGradesOptionOfCentralMenu() {
    this.getByExamPeriodOptionOfGradesOptionOfCentralMenu().click();
  }

  clickExamsOptionOfCentralMenu() {
    this.getExamsOptionOfCentralMenu().click();
  }

  clickCentralMenuToggle() {
    this.getCentralMenuToggle().click();
  }

  scrollDownToLogOutButtonOfCentralMenu() {
    this.getCentralMenuToggle().scrollIntoView();
  }

  //Assertions
  verifyThatLogOutButtonOfCentralMenuIsVisible(){
    this.getSignOutButtonOfCentralMenu().should('be.visible');
  }

  verifyThatLanguageIsChangedToEnglish() {
    cy.url().should('eq', 'https://uniportal.ihu.gr/?p=A43D7DAF-2AC1-4D15-9560-2AF3BCCB1CF06CE3C38F-D3FD-404E-8333-293309E7D1BE&lang=en');
  }

  verifyAllOptionsOfGradesAreVisible(){
    if(this.getMyBoardOptionOfGradesOfCentralMenu().should('be.visible') && this.getAllGradesOptionOfGradesOptionOfCentralMenu().should('be.visible')
    && this.getByExamPeriodOptionOfGradesOptionOfCentralMenu().should('be.visible')){
      return true;
    }
    else{
      return false;
    }
  }


}


export default Homepage;