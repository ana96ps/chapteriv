/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()



// Mocha ->  É o Test Runner do cypress
// describe, context, it

describe('CadastroAleatorio', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')

        // Inputs do tipo nome, endereço e e-mail (textbox) -> type()
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        // Inputs do tipo RadioButton e CheckBox -> check()
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Livros')

        // Inputs do tipo ComboBox -> type()

        cy.get('select#countries').select('Dinamarca', {force: true})
        cy.get('select#years').select('1996', {force: true})
        cy.get('select#months').select('Fevereiro', {force: true})
        cy.get('select#days').select('6', {force: true})


        // Inputs de senha -> type

        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')

        // Inputs do tipo button -> Click()
        cy.get('button#submitbtn').click()

        // Espero que a minha aplicação seja direcionada para a listagem
        // url
        // deve estar ou conter a palavra listagem

        cy.url().should('contain', 'listagem')




    });
});