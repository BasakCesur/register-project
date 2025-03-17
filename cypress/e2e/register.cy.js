import { errorMessages } from "../../src/components/Register";
describe("Register Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("Error Message", () => {
  it('name input throws error for 2 chars', () => {
    //cy.visit('http://localhost:5175/');
    cy.get('[data-cy=ad-input]').type('em');
    cy.contains(errorMessages.ad);
  })
   it('Surname input throws error for 2 chars', () => {
   //cy.visit('http://localhost:5175/');
    cy.get('[data-cy=soyad-input]').type('şa');
    cy.contains(errorMessages.soyad);
  })
  it('Email input throws error for 2 chars', () => {
    //cy.visit('http://localhost:5175/');
    cy.get('[data-cy=email-input]').type('emre@wit');
    cy.contains(errorMessages.email);
  })
  it('Password input throws error for 2 chars', () => {
    //cy.visit('http://localhost:5175/');
    cy.get('[data-cy=password-input]').type('1234');
    cy.contains(errorMessages.password);
  })
  it('Button is disabled for unvalidated inputs', () => {
    //cy.visit('http://localhost:5175/');
    cy.get('[data-cy=password-input]').type('1234');
    cy.get('[data-cy=buton-input]').should('be.disabled');
  })
  
})
describe(" Form inputs validated", () => {
  it('button enabled for validated inputs', () => {
    //cy.visit('http://localhost:5175/');
    cy.get('[data-cy=ad-input]').type('Emre');
    cy.get('[data-cy=soyad-input]').type('Şahiner');
    cy.get('[data-cy=email-input]').type('emre@wit.com');
    cy.get('[data-cy=password-input]').type('1234Aa**');
    cy.get('[data-cy=buton-input]').should('not.be.disabled');
    
  })
   
  
})
})