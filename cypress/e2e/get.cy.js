describe('GET Lista', ()=>{
    
    var datos
    before(()=>{
        cy.fixture('get.json').then((data)=>{
            datos = data
        })
    })
    
    it('get_Before',()=>{
        cy.request('https://reqres.in/api/users?page=1&per_page=5')
        .then((response)=>{
            expect (response.status).eq(200)
            expect (response.body.data[0].first_name).eq(datos.first_name)
            expect (response.body.data[1].first_name).to.be.a('string')
            expect (response.body.data[2].first_name).to.exist
            expect (response.body. data).have.length(5)
        }
    )
})




it('get_Fixture',()=>{
    cy.fixture('get.json').then((data)=>{
        var first_name1 = data.first_name
        
        cy.request ('https://reqres.in/api/users?page=1&per_page=5')
        . then ((response)=>{
            expect(response.status).eq(200)
            expect(response.body.data[0].first_name).eq(first_name1)
        }
    )
})
})


it.only('get1',()=>{

        cy.request('GET','/users?page=2&per_page=5')
        . then ((response)=>{
            expect(response.status).eq(200)
            expect(response.body.data[0].first_name).eq("George")
        }
    )
})

})