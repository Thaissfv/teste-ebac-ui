class EnderecoPage {
    editarEnderecoFaturamento () {

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type('Thais')
        cy.get('#billing_last_name').clear().type('Furtado')
        cy.get('#billing_company').clear().type('Google')
        cy.get('#select2-billing_country-container').click().type('Brasil')
    }

    editarEnderecoEntrega () {

        //elementos + açoes
    }

}

export default new EnderecoPage()