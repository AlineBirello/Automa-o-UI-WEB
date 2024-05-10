Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('selecProduto', (tamanho, cor) => {
    cy.get('.post-3111 > .product-block')
        .contains('Aero Daily Fitness Tee')
        .click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
})
Cypress.Commands.add('selecProduto1', (tamanho, cor) => {
    cy.get('.post-2559 > .product-block')
        .contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
})
    Cypress.Commands.add('selecProdut', (tamanho, cor) => {
        cy.get('.post-3073 > .product-block')
            .contains('Aether Gym Pant').click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.single_add_to_cart_button').click()  
        cy.get('.woocommerce-message > .button')  .click()    
    })
    //