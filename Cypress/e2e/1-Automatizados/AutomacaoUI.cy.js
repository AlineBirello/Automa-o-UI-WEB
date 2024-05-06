/// <reference types="cypress" />

import produtosPage from "../../support/page_objects/produtos.page"
context('4.5.1	Automação de UI', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Crie uma pasta chamada UI para os testes WEB da História de Usuário [US-0001] – Adicionar item ao carrinho
        Na automação deve adicionar pelo menos 3 produtos diferentes e validar se os itens foram adicionados com sucesso */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('birello.teste@teste.com.br', 'teste123')
        cy.visit('produtos')
                    
    })

    it('Quero fazer pedido', () => {
        cy.get('.post-3111 > .product-block').should('contain', 'Aero Daily Fitness Tee')
        cy.selecProduto('S', 'Black')  
        cy.get('.post-2559 > .product-block').should('contain', 'Abominable Hoodie')
        cy.selecProduto1('S', 'Blue')
        cy.get('.post-3073 > .product-block').should('contain', 'Aether Gym Pant')
        cy.selecProdut('33', 'Blue')
    });
  })
