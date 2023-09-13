import React from 'react'
import AllRecipes from '../Recipes'
import { BrowserRouter } from 'react-router-dom'

describe('<AllRecipes />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllRecipes />
      </BrowserRouter>)
  })

  it('search input should accept typing', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllRecipes />
      </BrowserRouter>
    )
    const typedVal = 'salmon';
    cy.get('#search').type(typedVal).should('have.value', typedVal);
  })
})