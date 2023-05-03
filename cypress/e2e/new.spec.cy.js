/// <reference types="cypress" />

describe('API Testing of Meduim', () => {
  beforeEach('passes', () => {
    cy.visit('https://medium.com/')
  })

  it('Sign up', () => {
    cy.get('span > .ax > .bu').click()
    cy.contains('button', 'Sign up with email').click()
  })

  // it('get api', () => {
  //   cy.request({
  //     method : 'POST',
  //     url : 'https://medium.com/_/graphql',
  //     body : {
  //       "user": {
  //         "email": "admin"
  //       }
  //     }
  //   }).then(response => {

  //     expect(response.status).to.equal(200)
  //     // cy.log(JSON.stringify(response))

  //     token = response.body.user.token
  //   })
  // })
})