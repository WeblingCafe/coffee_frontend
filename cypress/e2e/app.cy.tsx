it('should redirect to /home on button click', () => {
  cy.visit('/');

  // click on a button to trigger router.push('/home')
  cy.get('.cypressTest')
    .click()
    .then(() => {
      cy.url().should('include', '/home');
    });
});
