/// <reference types="Cypress" />

describe('Logout', () => {
    beforeEach(() => cy.login()) //Antes de cada teste da suíte logout, irá fazer o login

    it('successfully', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`) // Concatenando a baseUrl do cypress.json com users/sign_in
    })
})