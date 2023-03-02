describe('/signin page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('validates email', () => {
    cy.get('[data-cy="email"]')
      .type('john.doe@example.com')
      .should('have.value', 'john.doe@example.com')
      .and('have.attr', 'required');
  });

  it('validates password', () => {
    cy.get('[data-cy="password"]')
      .type('admin')
      .should('have.value', 'admin')
      .and('have.attr', 'required');
  });

  it('fill form with invalid fields', () => {
    cy.get('[data-cy="email"]')
      .type('john.doe@com')
      .should('have.value', 'john.doe@com')
      .and('have.attr', 'required');

    cy.get('[data-cy="password"]')
      .type('admin')
      .should('have.value', 'admin')
      .and('have.attr', 'required');

    cy.get('form').submit();

    cy.get('[data-cy="password"]').should('have.class', 'border-red-500');

    cy.get('[data-cy="email"]').should('have.class', 'border-red-500');
  });

  it('fill form with valid fields', () => {
    cy.get('[data-cy="email"]').type('john.doe@gmail.com');

    cy.get('[data-cy="password"]').type('admin123A!');

    cy.get('form').submit();
  });

  it('signin with 42', () => {
    cy.get('[data-cy="fortytwoAuth"]').click();
  });

  it('signin with google', () => {
    cy.get('[data-cy="googleAuth"]').click();
  });

  it('signin with github', () => {
    cy.get('[data-cy="githubAuth"]').click();
  });

  it('signin with facebook', () => {
    cy.get('[data-cy="facebookAuth"]').click();
  });
});
