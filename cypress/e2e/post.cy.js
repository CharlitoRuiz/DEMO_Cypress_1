describe('POST', ()=>{
      
    it('PostTest',()=>{
        cy.fixture('post.json').then((data)=>{
            
            cy.request('POST','/login', data)
            .then((response)=>{
                expect(response.status).eq(200)
                expect(response.body).to.have.property('token')
            }
        )
    })
})
})