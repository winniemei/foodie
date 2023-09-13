import React from 'react'
import CreateRecipe from '../CreateRecipe'
import { BrowserRouter } from 'react-router-dom'

describe('<CreateRecipe />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <CreateRecipe />
      </BrowserRouter>)
  });

  it('checks that there is an h2 with text add a new recipe', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <CreateRecipe />
      </BrowserRouter>)

    cy.get('h2').contains('Add a new recipe');
  });

  it('title input should accept typing', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <CreateRecipe />
      </BrowserRouter>
    )
    const typedVal = 'fanstastic new recipe';
    cy.get('#title').type(typedVal).should('have.value', typedVal);
  })
})