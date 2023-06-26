export class HomePage{
    // defining locators
    home_accept_cookies_btn = '#onetrust-accept-btn-handler'
    topbar_signup_link = 'p > span > :nth-child(1)'
    header_logo = '.TK-TLRK-Logo'
    nav_drawer_btn ='#js-tlrk-nav-drawer-button'
    search_link = '#js-tlrk-nav-search-link'
    login_link = '#js-tlrk-nav-not-auth-container > .TK-Aside-Menu-Button'
    heading = 'h1 > span'
    hero_text = '#ContentPlaceholder1_C339_Col00 > .Text--b9'

    acceptCookies(){
        cy.get(this.home_accept_cookies_btn).click()
    }
    topbarSignup(){
        cy.get(this.topbar_signup_link).click()
        cy.get(this.heading).should('have.text', 'The Telerik and Kendo UI R2 2023 Release Is Here—See What’s New!')
    }
    headerLogo(){
        cy.get(this.header_logo).click()
        cy.get(this.hero_text).should('have.text', 'Modern UI Made Easy')
    }
    navDrawerBtn(){
        cy.get(this.nav_drawer_btn).click()
    }
    searchLink(){
        cy.get(this.search_link).click()
    }
    loginLink(){
        cy.get(this.login_link).click()
    }
}