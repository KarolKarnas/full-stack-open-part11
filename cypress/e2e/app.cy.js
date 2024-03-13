/* eslint-disable no-undef */
describe('Anecdote App', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Anecdotes')
  })
  it('renders anecdotes', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Any fool can write code that a computer can understand. Good programmers write code that humans can understand')
    cy.contains('Adding manpower to a late software project makes it later!')
  })
})