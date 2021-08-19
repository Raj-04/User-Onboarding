describe('Advanced Form Management', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    const name = () => cy.get('input[name="name"]');
    const email = () => cy.get('input[name="email"]');
    const password = () => cy.get('input[name="password"]');
    const role = () => cy.get('select[name="role"]');
    const terms = () => cy.get('input[name="tosCheck"]');
    const button = () => cy.get('button').contains('Submit');
  
    it('Sanity Test to make sure that tests work', () => {
       // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({}) // equal ie ===
        expect({}).to.eql({}) // eql ie ==
    });
  
    it('Element Test', () => {
      name().should('exist')
      email().should('exist')
      password().should('exist')
      role().should('exist')
      terms().should('exist')
      button().should('exist')
      // cy.contains(/^(Submit)$/i);
    });
  
    it('Chain Test', () => {
  
      name()
        .should('have.value', '')
        .type('Test')
        .should('have.value', 'Test');
      button().should('be.disabled');
  
      email()
        .should('have.value', '')
        .type('email@gmail.com')
        .should('have.value', 'email@gmail.com');
      button().should('be.disabled');
  
      password()
        .should('have.value', '')
        .type('Password123')
        .should('have.value', 'Password123');
      button().should('be.disabled');
  
      role()
        .should('have.value', '')
        .select('Engineer')
        .should('have.value', 'Engineer');
      button().should('be.disabled');
  
      terms()
        // .should('have.value', 'false')
        .check()
        .uncheck()
    //     .should('have.value', 'true');
    //   button().should('not.be.disabled');
  
    });
  
    it('Validation Test', () => {
  
      name()
        .should('have.value', '')
        .type('Test')
        .should('not.have.value', '');
      button().should('be.disabled');
  
      email()
        .should('have.value', '')
        .type('email@gmail.com')
        .should('not.have.value', '');
      button().should('be.disabled');
  
      password()
        .should('have.value', '')
        .type('Password123')
        .should('not.have.value', '');
      button().should('be.disabled');
  
      role()
        .should('have.value', '')
        .select('Engineer')
        .should('not.have.value', '');
      button().should('be.disabled');
  
      terms()
    //     .should('have.value', 'false')
        .check()
        .uncheck()
    //     .should('not.have.value', 'false');
    //   button().should('not.be.disabled');
  
    });

    it('can submit form if required fields completed', () => {
        button()
            .should("be.disabled")
            name().type("John")
            email().type("john@aol.com")
            password().type("abcpass")
            terms().check()
            button().should("be.disabled")

    })

    it('confirm submit button is disabled', () => {
        button()
            .should("be.disabled")
    })
  
  });