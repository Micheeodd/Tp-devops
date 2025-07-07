describe('Formulaire HTML', () => {
  it('Soumet le formulaire et affiche la soumission', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name="name"]').type('TestUser');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('button').click();

    cy.url().should('include', '/submissions');
    cy.contains('TestUser');
    cy.contains('testuser@example.com');
  });
});
