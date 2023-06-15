export class HomePage{
    // defining locators
    home_accept_cookies_btn = '#onetrust-accept-btn-handler'
    topbar_signup_link = 'span > a'
    header_logo = '.TK-TLRK-Logo'
    nav_drawer_btn ='#js-tlrk-nav-drawer-button'
    search_link = '#js-tlrk-nav-search-link'
    login_link = '#js-tlrk-nav-not-auth-container > .TK-Aside-Menu-Button'

    acceptCookies(){
        cy.get(this.home_accept_cookies_btn).click()
    }
    topbarSignup(){
        cy.get(this.topbar_signup_link).click()
    }
    headerLogo(){
        cy.get(this.header_logo).click()
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