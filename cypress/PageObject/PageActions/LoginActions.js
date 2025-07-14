class loginActions {


    getUrl(){

        cy.visit("https://www.saucedemo.com/v1/");

    }

    getUsername(){

       return cy.get("#user-name")

    }


    getPassword(){
      return  cy.get("#password")


    }

    getloginbutton(){

      return  cy.get("#login-button")
    }

    login(email,password){
        this.getUsername().type(email)
        this.getPassword().type(password)
         this.getloginbutton().click()


    }

} export default new loginActions();

