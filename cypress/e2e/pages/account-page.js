export class AccountPage{
    your_account = '#js-tlrk-nav-auth-container > .TK-Aside-Menu-Button > .TK-Aside-Menu-Button-Text'
    logout_link = '.TK-Dropdown-Link-Spacer'
    profile_link = ':nth-child(1) > .link-button'
    nick_name = '#nick_name'
    update_profile_btn = '.u-cf > .btn'
    success_popup = '.notification-body > .ng-star-inserted'
    menu_btn = '.TK-Products-Menu-Item-Button'
    product = '[href="/teststudio"]'
    buy_now_btn = '#ContentPlaceholder1_C699_Col01 > .Btn'
    buy_now_btn2 = '.Complete > .u-tac > .Btn--ghost'
    continue_btn = '.btn-content'
    continue_btn2 = '.btn-accent > .btn-content'
    fname = '#biFirstName'
    lname = '#biLastName'
    email = '#biEmail'
    company = '#biCompany'
    phone = '#biPhone'
    address = '#biAddress'
    country = '.k-searchbar'
    city = '#biCity'
    continue_btn3 = '.btn-accent'
    click = '.k-select'
    agree_checkmark = '#licenseAgreementLabel'
    continue_to_payment = '.ng-untouched > .btn > .btn-content'
    payment_detail = '.single_secure'
    logout_assert = '.progress-steps-label'

    logout(){
        cy.get(this.your_account).click()
        cy.get(this.logout_link).click()
        cy.get(this.logout_assert).should('be.visible')
    }
    updateProfile(nickname){
        cy.get(this.profile_link).click()
        cy.get(this.nick_name).clear().type(nickname)
        cy.get(this.update_profile_btn).click()
        cy.get(this.success_popup).should('have.text', 'Profile successfully saved.')
    }
    addToCart(fname, lname, email, company, phone, address, country, city){
        cy.get(this.menu_btn).click()
        cy.get(this.product).click()
        cy.get(this.buy_now_btn).click()
        cy.get(this.buy_now_btn2).click()
        cy.get(this.continue_btn).click()
        cy.get(this.continue_btn2).click()
        cy.get(this.continue_btn3).should('be.visible')
        cy.get(this.fname).type(fname)
        cy.get(this.lname).type(lname)
        cy.get(this.email).type(email)
        cy.get(this.company).type(company)
        cy.get(this.phone).type(phone)
        cy.get(this.address).type(address)
        cy.get(this.country).type(country)
        cy.get(this.click).click()
        cy.get(this.city).type(city)
        cy.get(this.continue_btn3).click()
        cy.get(this.agree_checkmark).click()
        cy.get(this.continue_to_payment).click()
        cy.get(this.payment_detail).should('be.visible')
    }
}