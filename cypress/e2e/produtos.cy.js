/// <reference types="cypress"/>

var faker = require('faker');

describe('Funcionalidade para lista de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar o produto ao carrinho', () => {
        var quan = 10
        
        cy.get('[class="product-block grid"]')
            .contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quan)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quan)
        cy.get('.woocommerce-message').should('contain' , quan + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')


    });

    it('Deve adicionar produtos ao carrinho - Usando Comandos customizados', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 3)
        
    });

    it('Deve adicionar produtos ao carrinho - Usando Comandos customizados', () => {
        cy.addProdutos('Atlas Fitness Tank', 'S', 'Blue', 5)
        
    });



});

