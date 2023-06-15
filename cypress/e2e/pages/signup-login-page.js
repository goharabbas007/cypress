export class SignupPage{
    signup_email = '#email'
    signup_next_btn = '.btn'
    signup_password = '#password'
    signup_fname = '#fist-name'
    signup_lname = '#last-name'
    signup_company = '#company'
    signup_phone = '#phone'
    signup_residence = 'input[class="k-input-inner"]'
    signup_create_btn = '.btn'
    login_password = '#password'
    login_btn = '.btn'

    signupOrLoginEmail(email){
        cy.get(this.signup_email).type(email)
        cy.get(this.signup_next_btn).click()
    }
    signup(password, fname, lname, company, phone, country){
        cy.get(this.signup_password).type(password)
        cy.get(this.signup_fname).type(fname)
        cy.get(this.signup_lname).type(lname)
        cy.get(this.signup_company).type(company)
        cy.get(this.signup_phone).type(phone)
        cy.get(this.signup_residence).eq(0).type(country)
        cy.get(this.signup_create_btn).click()
    }
    loginPassword(login_password){
        cy.get(this.login_password).type(login_password)
        cy.get(this.login_btn).click()
    }
}