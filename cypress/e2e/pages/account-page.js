export class AccountPage{
    your_account = '#js-tlrk-nav-auth-container > .TK-Aside-Menu-Button > .TK-Aside-Menu-Button-Text'
    logout_link = '.TK-Dropdown-Link-Spacer'
    profile_link = ':nth-child(1) > .link-button'
    nick_name = '#nick_name'
    update_profile_btn = '.u-cf > .btn'

    logout(){
        cy.get(this.your_account).click()
        cy.get(this.logout_link).click()
    }
    updateProfile(nickname){
        cy.get(this.profile_link).click()
        cy.get(this.nick_name).clear()
        cy.get(this.nick_name).type(nickname)
        cy.get(this.update_profile_btn).click()
    }
}