class LogInWebpage{

    // Define the selectors for elements on the homepage
    constructor() {
        this.textFieldUsername = "#username";
        this.textFieldPassword = "#password";
        this.butonLogIn = "[name='submit']";
        this.errorMessageAboutMissingCredentials = ".banner.banner-danger.banner-dismissible"
      }

    
    //Actions
    setUsername(username){
        cy.get(this.textFieldUsername).type(username);
    }

    setPassword(password){
        cy.get(this.textFieldPassword).type(password);
    }

    clickLogInButton(){
        cy.get(this.butonLogIn).click();
    }
    
    //Retrieve Locator
    getErrorMessageAboutMissingCredentials(){
        return cy.get(this.errorMessageAboutMissingCredentials);
    }

    //Assertions
    userIsLoggedIn(){
        cy.get('.user-profile-name').should('exist');
    }

    userIsNotLoggedIn(){
        cy.get('.user-profile-name').should('not.exist');
    }

    verifyThatErrorAboutMissingUsernameIsDisplayed(){
        this.getErrorMessageAboutMissingCredentials().should('contain', 'Username is a required field.');
    }

    verifyThatErrorAboutMissingPasswordIsDisplayed(){
        this.getErrorMessageAboutMissingCredentials().should('contain', 'Password is a required field.');
    }

    verifyThatErrorAboutWrongUsernameIsDisplayed(){
        this.getErrorMessageAboutMissingCredentials().should('contain', 'Your account is not recognized and cannot login at this time.');
    }

    verifyThatErrorAboutWrongPasswordIsDisplayed(){
        this.getErrorMessageAboutMissingCredentials().should('contain', 'Authentication attempt has failed, likely due to invalid credentials. Please verify and try again.');
    }
    
}

export default LogInWebpage;