import React from 'react'
import LogIn from '../LogIn'
import { BrowserRouter } from 'react-router-dom'

describe('<LogIn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>)
  });

  it('should autofocus on the username input', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>)

    cy.focused().should('have.id', 'username');
  });

  it('checks that there is an h1 with text login', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>)

    cy.get('h1').contains('Log In');
  });

  it('username input should accept typing', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    )
    const typedVal = 'winnie';
    cy.get('#username').type(typedVal).should('have.value', typedVal);
  })

})