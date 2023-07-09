const cypress = require("cypress")

describe('Test Login', ()=>{

    beforeEach(()=>{
        cy.visit('/');
    });

    it('Normal login', ()=>{
        // input email and password 
        cy.visit('https://kasirdemo.belajarqa.com');
        cy.get('#email').type("fillthebelly@mailinator.com");
        cy.get('#password').type("123456");
  
        // login button
        cy.get(".chakra-button").click();
  
        // assert
        cy.url().should('include', '/dashboard');
        cy.get('h3').contains('kasirAja');
    })

     it('Login with invalid email and password, should display error message', ()=>{
        // input invalid email
        cy.get('#email').type('fillthebelly@gmail.com');
        cy.get('#password').type('123456');
        cy.get('.chakra-button').click();

        // assert | display error message
        cy.get('.chakra-alert').should('be.visible');
        cy.get('.chakra-alert').should('have.css','background-color','rgb(254, 215, 215)');
        cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah');

        // input invalid password
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('#email').type('fillthebelly@mailinator.com');
        cy.get('#password').type('123456789');
        cy.get('.chakra-button').click();

        // assert | display error message
        cy.get('.chakra-alert').should('be.visible');
        cy.get('.chakra-alert').should('have.css','background-color','rgb(254, 215, 215)');
        cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah');
    });
})

