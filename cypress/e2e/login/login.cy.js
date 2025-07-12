
 import loginAction from '../../PageObject/PageActions/LoginActions'



describe('template spec', () => {

  it('passes', () => {


    loginAction.getUrl();

    //cy.get("#user-name").type("avinash")

    loginAction.login("standard_user","secret_sauce");

    cy.url().should("include", "https://www.saucedemo.com/v1/inventory.html")



  })
})