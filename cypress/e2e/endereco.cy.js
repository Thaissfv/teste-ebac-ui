/// <reference types="cypress"/>

import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flavio', 'Aramba', 'Yahoo', 'Brasil', 'Av. Brasil', '2', 'Sobral', 'Paraná', '24987-908', '21444345643', 'ledamsf@eds.com')
        cy.get('.woocommerce-message').should ('contain', 'Endereço alterado com sucesso.')
    });
});

