it ('google search', function(){
    cy.visit('https://google.com')
    cy.wait(2000)
    cy.get('#APjFqb').type('Gohar Abbas sqa engineer{enter}')
    //cy.contains('google').click()
    //cy.get('.FPdoLc > center > .gNO89b').click()
})