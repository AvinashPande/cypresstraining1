class dashboardHeader{


    getLogo1(){

      return  cy.get("#header_container")

    }


    getCart(){

        //return  cy.get('[data-icon="shopping-cart"]')

        return cy.get(".shopping_cart_link")

   }
   getCartCount(number){
     this.getCart(number)

        

   }




}export default new dashboardHeader();
