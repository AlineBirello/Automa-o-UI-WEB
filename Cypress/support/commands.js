Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('selecProduto', (tamanho, cor, quantidade) => {
    cy.get('.post-3111 > .product-block')
    .contains('Aero Daily Fitness Tee')
    .click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.plus').click(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('data-product-id="3217"')
    .contains('Zoltan Gym tee')
    .click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.plus').click(quantidade)
    cy.get('.single_add_to_cart_button').click()
})