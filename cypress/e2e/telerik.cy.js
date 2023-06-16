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

// cypress hook used, this block of code will run before all the tests on this page
// because it is used outside the describe block
// beforeEach(()=>{
//     cy.visit('https://www.telerik.com/')
//     homeObj.acceptCookies()
//     homeObj.navDrawerBtn()
// })

// describe('Verify header links', ()=>{
//     it('Tob bar "Sign up" link', ()=>{
//         homeObj.topbarSignup()
//     })
//     it('Logo link', ()=>{
//         homeObj.headerLogo()
//     })
// })

// describe('Verify Search bar', ()=>{
//     beforeEach(()=>{
//         homeObj.searchLink()
//     })
//     it('valid data', ()=>{
//         searchObj.searchBar('Types of Test Studio load tests')
//     })
//     it('invalid data', ()=>{
//         searchObj.searchBar('asdf')
//     })
//     it('empty data', ()=>{
//         searchObj.searchBar(' ')
//     })
//     it('correct search result', ()=>{
//         searchObj.searchBar('Types of Test Studio load tests')
//         searchObj.searchResult()
//     })
// })

// describe('Verify Sign up and login', ()=>{
//     beforeEach(()=>{
//         homeObj.loginLink()
//     })
//     it('invalid email', ()=>{
//         signupObj.signupOrLoginEmail('asdfgmail.com')
//     })
//     it('empty email', ()=>{
//         signupObj.signupOrLoginEmail(' ')
//     })
//     it('valid signup credentials', ()=>{
//         signupObj.signupOrLoginEmail('validemail2@gmail.com')
//         cy.wait(2000)
//         signupObj.signup('password', 'first name', 'last name', 'xyz company', '090078601', 'Pakistan')
//     })
//     it.only('valid email/login', ()=>{
//         signupObj.signupOrLoginEmail('gohar.abbas@invozone.com')
//         signupObj.loginPassword('goharabbas123')
//     })
// })

describe('Account page', ()=>{
    beforeEach(()=>{
        cy.login('youremail@gmail.com', 'password123')
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
