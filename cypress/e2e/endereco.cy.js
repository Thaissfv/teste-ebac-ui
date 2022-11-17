/// <reference types="cypress"/>

import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flavio', 'Aramba', 'Yahoo', 'Brasil', 'Av. Brasil', '2', 'Sobral', 'Paraná', '24987-908', '21444345643', 'ledamsf@eds.com')
        cy.get('.woocommerce-message').should ('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        let loc = '2'
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[loc].nome,
            dadosEndereco[loc].sobrenome,
            dadosEndereco[loc].empresa,
            dadosEndereco[loc].pais,
            dadosEndereco[loc].endereco,
            dadosEndereco[loc].numero,
            dadosEndereco[loc].cidade,
            dadosEndereco[loc].estado,
            dadosEndereco[loc].cep,
            dadosEndereco[loc].telefone,
            dadosEndereco[loc].email
            )
        cy.get('.woocommerce-message').should ('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve editar endereço de entrega com sucesso - Usando arquivo de dados', () => {
        let loc = '2'
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[loc].nome,
            dadosEndereco[loc].sobrenome,
            dadosEndereco[loc].empresa,
            dadosEndereco[loc].pais,
            dadosEndereco[loc].endereco,
            dadosEndereco[loc].numero,
            dadosEndereco[loc].cidade,
            dadosEndereco[loc].estado,
            dadosEndereco[loc].cep,
            dadosEndereco[loc].telefone,
            dadosEndereco[loc].email
            )
        cy.get('.woocommerce-message').should ('contain', 'Endereço alterado com sucesso.')
    });
});

