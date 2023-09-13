import React from 'react'
import DeleteRecipe from '../DeleteRecipe'
import { BrowserRouter } from 'react-router-dom'

describe('<DeleteRecipe />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <DeleteRecipe />
      </BrowserRouter>)
  });

  it('button says delete recipe', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <DeleteRecipe />
      </BrowserRouter>)

    cy.get('button').contains('Delete Recipe');
  });

})