class GradesWebpage{

  //Locators
  constructor() {
      this.gradesEntriesDropDownList= '[name="student_grades_length"]';
      this.enriesVisible= '#student_grades_info';
    }

  //Retrieve locators
  getGradesEntriesDropDownList() {
    return cy.get(this.gradesEntriesDropDownList);
  }

  getEntriesVisible() {
    return cy.get(this.enriesVisible);
  }

  //Actions
  clickAllOptionOfGradesEntriesDropDownList() {
    this.getGradesEntriesDropDownList().select(4);
  }

  scrollDownToAllVisibleEntries() {
    this.getEntriesVisible().scrollIntoView();
  }
  
  //Assertions
  verifyThatAllEntriesAreVisible() {
    this.getEntriesVisible().should('eq', 'Εμφανίζονται 1 έως 86 από 86 εγγραφές');
  }

}

export default GradesWebpage;