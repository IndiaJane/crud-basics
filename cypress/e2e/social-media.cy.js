describe('crud basics', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/crud-basics/crud-index.html')
    })

    //error message "Post cannot be blank" should become visible when text-area is empty.
    it('testing error message', () => {
        cy.dataTest('inputbox').should('be.visible').click()
        cy.dataTest('post-button').should('be.visible')
        cy.dataTest('error-message').should('not.be.visible')
        cy.dataTest('post-button').click()
        cy.dataTest('error-message').should('be.visible')
        cy.dataTest('error-message').contains('Post cannot be blank')
    })

    //Succefully creating a post
    it('testing input textbox functionality', () => {
        cy.dataTest('inputbox').should('be.visible').click()
        cy.dataTest('inputbox').type('testing this box to make sure it works')
        cy.dataTest('post-button').click()
        cy.dataTest('post-section').find(':nth-child(3)').invoke('text').then((text) => {
            //Template literal's add 'new lines' so we're replacing all \n globally with spaces.
            const cleanText = text.replace(/\n/g, '').trim()
            expect(cleanText).to.eql('testing this box to make sure it works')
        })
    })

    //Grabbing the first post and editing the text to 'changing this post'.
    it('testing the edit functionality', () => {
        cy.dataTest('post-section').find(':nth-child(1) > .options > .edit-button').click()
        cy.dataTest('inputbox').type('changing this post')
        cy.dataTest('post-button').click()
    })

    it('checking the delete functionality', () => {
        cy.dataTest('post-section').find(':nth-child(1) > .options > .trash-button').click()
        cy.dataTest('post-section').find(':nth-child(1) > .options > .trash-button').click()
    })

})