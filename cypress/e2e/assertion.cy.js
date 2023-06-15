it('pass', ()=>{
  cy.visit('https://example.cypress.io')
  cy.contains('get').click()
  cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')

    expect(true).to.be.true

    assert.equal(4, '4', 'NOT Equal')
    // the above assert will pass even one is number and one is string
    
    assert.strictEqual(4, 5, 'NOT Equal')
})