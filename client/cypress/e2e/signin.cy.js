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

  it('sign in with an existing user and valid credentials', () => {
    cy.get('[data-cy="email"]').type('john.doe@example.com');

    cy.get('[data-cy="password"]').type('root123Q!');

    // cy.intercept(method, url, staticResponse)
    cy.intercept('POST', 'http://localhost:3000/auth/*', {
      statusCode: 200,
    }).as('login');

    cy.get('[data-cy="submit-form"]').click();

    cy.wait('@login').then(() => {
      cy.url().should('include', '/home');
    });
  });

  it('sign in with an existing user and invalid credentials', () => {
    cy.get('[data-cy="email"]').type('john.doe@example.com');

    cy.get('[data-cy="password"]').type('root123Q');

    // cy.intercept(method, url, staticResponse)
    cy.intercept('POST', 'http://localhost:3000/auth/*', {
      statusCode: 401,
    }).as('login');

    cy.get('[data-cy="submit-form"]').click();

    cy.wait('@login').then(() => {
      cy.get('[data-cy="alert"]').should('have.class', 'bg-red-400');
    });
  });

  it('sign in with a non-existing user', () => {
    cy.get('[data-cy="email"]').type('john.doe@non-existant.com');

    cy.get('[data-cy="password"]').type('root123Q');

    // cy.intercept(method, url, staticResponse)
    cy.intercept('POST', 'http://localhost:3000/auth/*', {
      statusCode: 401,
    }).as('login');

    cy.get('[data-cy="submit-form"]').click();

    cy.wait('@login').then(() => {
      cy.get('[data-cy="alert"]').should('have.class', 'bg-red-400');
    });
  });

  // it('signin with 42', () => {
  //   cy.get('[data-cy="fortytwoAuth"]').click();
  // });

  // it('signin with google', () => {
  //   cy.get('[data-cy="googleAuth"]').click();
  // });

  // it('signin with github', () => {
  //   cy.get('[data-cy="githubAuth"]').click();
  // });

  // it('signin with facebook', () => {
  //   cy.get('[data-cy="facebookAuth"]').click();
  // });

  it('create an account, redirect to /signup', () => {
    cy.get('[data-cy="signup"]').click();
    cy.url().should('include', '/signup');
  });
});
