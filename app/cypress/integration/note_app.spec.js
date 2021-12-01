
describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'Diego',
      username: 'dfar',
      password: 'dfar98'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
  })

  it('frontpage can be opened', () => {
    cy.contains('Notes')
  })
  it('login form can be opened', () => {
    cy.contains('Show login').click()
  })
  it('user can login', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder=Username]').type('dfar')
    cy.get('[placeholder=Password]').type('dfar98')
    cy.get('#form-login-button').click()
    cy.contains('Create a new note')
  })

  it('login fails with wrong password', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder=Username]').type('dfar')
    cy.get('[placeholder=Password]').type('dfar9aa8')
    cy.get('#form-login-button').click()

    // cy.get('.error').contains('Wrong credentials')
    cy.get('.error')
      .should('contain', 'Wrong credentials')
  })

  describe('when logged in', () => {
    // usarlo de esta manera para saltarnos la UI y tener menos problemas
    beforeEach(() => {
      cy.login({ username: 'dfar', password: 'dfar98' })
    })
    it('a new note can be created', () => {
      cy.contains('New Note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('Crear nota').click()
      cy.contains('a note created by cypress')
    })

    describe('and a note exists', () => {
      beforeEach(() => {
        cy.createNote({
          content: 'A note created from cypress',
          important: false
        })
        cy.createNote({
          content: 'hola mundo',
          important: false
        })
        // cy.debug()
        cy.createNote({
          content: 'todo',
          important: false
        })
      })

      it('can be made important', () => {
        cy.get('li')
          .should('contain', 'A note created from cypress').as('theNote')

        cy
          .get('@theNote')
          .contains('make important').click()

        cy
          .get('@theNote')
          .contains('make not important')
      })
    })
  })
})
