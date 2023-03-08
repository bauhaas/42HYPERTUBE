describe('routes', () => {
  it('go to settings page', () => {
    cy.visit('/settings');
    cy.url().should('include', '/settings');
  });

  it('go to home', () => {
    cy.visit('/home');
    cy.url().should('include', '/home');
  });

  it('go to signup page', () => {
    cy.visit('/signup');
    cy.url().should('include', '/signup');
  });

  it('go to user/1 page', () => {
    cy.visit('/user/1');
    cy.url().should('include', '/user');
  });

  it('go to non-existant page', () => {
    cy.visit('/foiezhf');
    cy.url().should('include', '/unknown');
  });

  it('go to movie/1', () => {
    cy.visit('/movie/1');
    cy.url().should('include', '/movie');
  });
});
