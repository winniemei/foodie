import React from 'react'
import AllIngredients from './Ingredients'
import { BrowserRouter } from 'react-router-dom'

describe('<AllIngredients />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllIngredients />
      </BrowserRouter>)
  });

  it('button clicks', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllIngredients />
      </BrowserRouter>)

    cy.get("button").click();
  });

  it('checkboxes check', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllIngredients />
      </BrowserRouter>)

    cy.get('[type="checkbox"]').check();

  });

  it('checkboxes uncheck', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllIngredients />
      </BrowserRouter>)

    cy.get('[type="checkbox"]').uncheck()

  });

  it('check salmon box', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllIngredients />
      </BrowserRouter>)

    cy.get('[type="checkbox"]').check('salmon')


  });

})