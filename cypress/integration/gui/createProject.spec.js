/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Project', () => {
    beforeEach(() => cy.login())

    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`, // Atribuindo uma ID aleatória a partir do faker
            description: faker.random.words(5) // 5 palavras
        }
        
        cy.gui_createProject(project) // function

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})