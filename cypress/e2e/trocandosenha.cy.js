/// <reference types="cypress" />

var faker = require ('faker');

describe('Funcionalidade trocar senha no primeiro acesso', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    it('Deve fazer pre cadastro e trocar a senha', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        
        var senha = faker.internet.password()
        var novasenha = faker.internet.password()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)

        cy.get('#password_current').type(senha)
        cy.get('#password_1').type(novasenha)
        cy.get('#password_2').type(novasenha)

        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
});