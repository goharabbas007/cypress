export class SearchPage{
    search_field = '.TK-Tag-Input'
    search_btn = '.TK-Tag-Input-Button'
    search_result = '#js-results-wrapper > .TK-Search-Results-List-Wrapper > .TK-Search-Results-List > :nth-child(1) > .TK-Search-Results-List-Item-H > a'

    searchBar(searchData){
        cy.get(this.search_field).clear().type(searchData)
        cy.get(this.search_btn).click()
    }
    searchResult(){
        cy.get(this.search_result).click()
    }
}