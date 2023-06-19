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
    })
    it('invalid data', ()=>{
        searchObj.searchBar('asdf')
    })
    it('empty data', ()=>{
        searchObj.searchBar(' ')
    })
    it('verify search result', ()=>{
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
    })
    it('invalid email', ()=>{
        signupObj.signupOrLoginEmail('asdfgmail.com')
    })
    it.skip('valid signup credentials', ()=>{
        signupObj.signupOrLoginEmail('validemail2@gmail.com')
        cy.wait(2000)
        signupObj.signup('password', 'first name', 'last name', 'xyz company', '090078601', 'Pakistan')
    })
})
describe('Account page', ()=>{
    beforeEach(()=>{
        cy.login('gohar.abbas@invozone.com', 'goharabbas123')
    })
    it('update profile', () => {
        cy.visit('https://www.telerik.com/account')
        accountObj.updateProfile('new nickname')
    })
    it('logout flow', ()=>{
        homeObj.navDrawerBtn()
        accountObj.logout()
    })
})
