
import dashboardHeader from '../../PageObject/PageActions/DashboardHeader';
 import loginAction from '../../PageObject/PageActions/LoginActions'

describe("TC to verify the dashboard headers", () => {


    before(() => {

       loginAction.getUrl()
       loginAction.login("standard_user","secret_sauce")  // login function


    })
    it("Verify dashboard logo", () =>  {
       //tag: smoke

       //DashHeader.getLogo().should("have.id", "header_container")
       
       dashboardHeader.getLogo1().should('be.visible')
       .should("have.id", "header_container")
       


    })

     it("Verify dashboard Cart", () =>  {

       //
       //  dashboardHeader.getCart()

       cy.log("This is heder")

        

    })



})


