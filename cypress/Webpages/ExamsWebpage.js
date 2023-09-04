class ExamsWebpage{

    //Locators
    constructor() {
        this.myExamsOfExamsOfCentralMenu= "em.ic-md.ic-grades-alt1";
        this.examsCalendarOfExamsOfCentralMenu= 'a[href="student/course_syllabus_exam/scheduler?p=A43D7DAF-2AC1-4D15-9560-2AF3BCCB1CF06CE3C38F-D3FD-404E-8333-293309E7D1BE"]';
        this.syllabusDropDownList = '#studentCourseSyllabusExamSyllabus';
        this.monthAndYearLabelOfAcademicYear = '.k-lg-date-format';
      }
  
    //Retrieve locators
    getMyExamsOfExamsOfCentralMenu() {
        return cy.get(this.myExamsOfExamsOfCentralMenu);
    }
  
    getExamsCalendarOfExamsOfCentralMenu() {
        return cy.get(this.examsCalendarOfExamsOfCentralMenu);
    }
  
    getSyllabusDropDownList() {
        return cy.get(this.syllabusDropDownList);
    }

    getMonthAndYearLabelOfAcademicYear() {
        return cy.get(this.monthAndYearLabelOfAcademicYear);
    }

    //Actions
    clickMyExamsOfExamsOfCentralMenu() {
        this.getMyExamsOfExamsOfCentralMenu().click();
    }
  
    clickExamsCalendarOfExamsOfCentralMenu() {
        this.getExamsCalendarOfExamsOfCentralMenu().click();
    }
  
    //2018-2019 academic year
    select2018_2019AcademicYearFromSyllabusDropDownList() {
        this.getSyllabusDropDownList().select(2);
    }

    //Assertions
    verifyThatAllOptionsOfExamsOfCentralMenuAreVisible() {
      if(this.getMyExamsOfExamsOfCentralMenu().should('be.visible') && this.getExamsCalendarOfExamsOfCentralMenu().should('be.visible')){
        return true;
      }
      else{
        return false;
      }
    }

    verifyThatTheProperMonthAndYearLabelIsDisplayed(){
        this.getMonthAndYearLabelOfAcademicYear().invoke('text').should('include', '2018');
    }
  
  
  }
  
  export default ExamsWebpage;