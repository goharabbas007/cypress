/// <reference types="Cypress" />

// importing classes 
import { HomePage } from "./pages/home-page"
import { SearchPage } from "./pages/search-page"
import { SignupPage } from "./pages/signup-login-page"
import { AccountPage } from "./pages/account-page"

// creating objects for each classes
const homeObj = new HomePage()
const searchObj = new SearchPage()
const signupObj = new SignupPage()
const accountObj = new AccountPage()

describe('Verify header links', ()=>{
    before(()=>{
        cy.visit('https://www.telerik.com/')
    })
    it('Tob bar "Sign up" link', ()=>{
        homeObj.topbarSignup()
    })
    it('Logo link', ()=>{
        homeObj.headerLogo()
    })
})

describe('Verify Search bar', ()=>{
    before(()=>{
        cy.visit('https://www.telerik.com/')
        homeObj.navDrawerBtn()
        homeObj.searchLink()
    })
    it('valid data', ()=>{
        searchObj.searchBar('Types of Test Studio load tests')
        cy.get('.TK-Search-Results-Query').should('have.text', 'Types of Test Studio load tests')
    })
    it('invalid data', ()=>{
        searchObj.searchBar('asdfjkl;')
        cy.get('.TK-Search-Results-Zero > p').should('be.visible')
    })
    it('empty data', ()=>{
        searchObj.searchBar(' ')
        cy.get(':nth-child(1) > .TK-Search-Results-List-Item-H').should('have.text', 'Telerik DevCraft')
    })
    it.only('verify search result', ()=>{
        searchObj.searchBar('Types of Test Studio load tests')
        searchObj.searchResult()
    })
})

describe('Verify Sign up', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.telerik.com/')
        homeObj.navDrawerBtn()
        homeObj.loginLink()
    })
    it('empty email', ()=>{
        signupObj.signupOrLoginEmail(' ')
        cy.get('.btn-accent').should('be.disabled')
    })
    it('invalid email', ()=>{
        signupObj.signupOrLoginEmail('asdfgmail.com')
        cy.get('.btn-accent').should('be.disabled')
    })
    it.skip('valid signup credentials', ()=>{
        signupObj.signupOrLoginEmail('some@gmail.com')
        cy.get('#password').should('be.empty')
        cy.wait(2000)
        signupObj.signup('password', 'first name', 'last name', 'xyz company', '090078601', 'Pakistan')
        cy.get('.u-mb20').should('have.text', "We've Sent You an Account Activation Email")
    })
})

describe('Account page', ()=>{
    beforeEach(()=>{
        cy.login('gohar.abbas@invozone.com', 'goharabbas123')
        cy.visit('https://www.telerik.com/account')
    })
    it('update profile', () => {
        accountObj.updateProfile('new nickname')
    })
    it('select product & add to cart, checkout process', () => {
        accountObj.addToCart('ali', 'abbas', 'email@gmail.com', 'company', '0900', 'address 123', 'Pakistan', 'Isb')
    })
    it('logout', ()=>{
        homeObj.navDrawerBtn()
        accountObj.logout()
    })
})
