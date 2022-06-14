describe('Login Page', () => {
    beforeEach(function(){
       
       cy.visit('https://www.saucedemo.com/')
      
   })

    it ('Verifikasi user tidak dapat masuk ke sistem tanpa username dan password', () => {
            
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })
   
    it('Verifikasi user tidak dapat masuk ke sistem tanpa password', () => {     
       cy.get('[data-test=username]').type('standard_user')
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })

    it ('Verifikasi user tidak dapat masuk ke sistem tanpa username', () => {      
       cy.get('[data-test=password]').type('secret_sauce')
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })

    it ('Verifikasi user tidak dapat masuk ke sistem dengan username invalid', () => {       
       cy.get('[data-test=username]').type('standard_user1')
       cy.get('[data-test=password]').type('secret_sauce')
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })

    it ('Verifikasi user tidak dapat masuk ke sistem dengan passworrd invalid', () => {       
       cy.get('[data-test=username]').type('standard_user')
       cy.get('[data-test=password]').type('secret_sauce1')
       cy.get('#login-button').click()
       cy.get('[data-test=error]')
       
      })

    it ('Tampilkan situs', () => {   
        cy.get('[data-test=username]').type('standard_user').should ('have.value', 'standard_user')
        cy.get('[data-test=password]').type('secret_sauce').should ('have.value', 'secret_sauce')
        cy.get('#login-button').click()
    
   })

   
})