/// <reference types="Cypress" />

describe('Login', () => {
    it('successfully', () => {
        cy.login();

        cy.get('img[class]').should('exist');
    })
})