import users from '../fixtures/users.json';

describe('/test page', () => {
  beforeEach(() => {
    cy.visit('/test');
  });

  // it('get users list', () => {
  //   cy.visit('/test');

  //   cy.contains('type').click();

  //   // Should be on a new URL which
  //   // includes '/commands/actions'
  //   cy.url().should('include', '/commands/actions');

  //   // Get an input, type into it
  //   cy.get('.action-email').type('fake@email.com');

  //   //  Verify that the value has been updated
  //   cy.get('.action-email').should('have.value', 'fake@email.com');
  // });

  it('validates email', () => {
    cy.get('[data-cy="email"]')
      .type('john.doe@gmail.com')
      .should('have.value', 'john.doe@gmail.com')
      .and('have.attr', 'required');
  });

  it('validates password', () => {
    cy.get('[data-cy="password"]')
      .type('admin')
      .should('have.value', 'admin')
      .and('have.attr', 'required');
  });

  it('fill forms with invalid fields', () => {
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

  it('fill forms and retrieve data', () => {
    cy.intercept('GET', 'http://localhost:3000/users', {
      fixture: 'users.json',
    }).as('getUsers');

    cy.get('[data-cy="email"]').type('john.doe@gmail.com');

    cy.get('[data-cy="password"]').type('admin123A!');

    cy.get('form').submit();

    cy.wait('@getUsers').its('response.statusCode').should('eq', 200);

    cy.get('@getUsers')
      .its('response.body')
      .should('have.length', 3)
      .each((user) => {
        expect(user).to.have.property('firstName');
        expect(user).to.have.property('lastName');
        expect(user).to.have.property('id');
      });

    cy.fixture('users').then((usersFixture) => {
      expect(users, 'the same data').to.deep.equal(usersFixture);

      cy.get('[data-cy="users-map"]')
        .children()
        .should('have.length', users.length);
    });
  });
});
