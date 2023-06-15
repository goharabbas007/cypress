// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (login_email, login_password)=>{
    cy.session('loginSession', ()=>{
        cy.visit('https://www.telerik.com/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#js-tlrk-nav-drawer-button').click()
        cy.get('#js-tlrk-nav-not-auth-container > .TK-Aside-Menu-Button').click()
        cy.get('#email').type(login_email)
        cy.get('.btn').click()
        cy.get('#password').type(login_password)
        cy.get('.btn').click()
    }),
    {
        validate(){
        cy.get(':nth-child(1) > .link-button').should('exist')
        }
    }
    // {
    //     cacheAcrossSpecs: true
    // }
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })