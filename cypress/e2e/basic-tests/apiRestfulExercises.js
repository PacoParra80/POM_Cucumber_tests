describe('Api Restful Exercises', () => {


    //Level 1

    it('GET on api-restful check status in response, properties and values', () => {
        cy.request('https://api.restful-api.dev/objects/1').then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.a('object')
          expect(response.body).to.include.all.keys(["id", "name", "data"])
          expect(response.body.id).to.eq("1")
          expect(response.body.name).to.eq("Google Pixel 6 Pro")
          expect(response.body.data).to.deep.equal({
              color: "Cloudy White",
              capacity: "128 GB"              
        })
        })
      })


    // He tenido que modificar los ejercicios así porque daba error haciendo solo PUT y PATCH
    it('Create new object with POST and update it with PUT', () => {
    const originalObject = {
        name: "iPhone 15 Pro",
        data: {
        color: "Titanium",
        capacity: "256 GB"
        }
    }
    
    // 1. Crear un nuevo objeto con POST
    cy.request('POST', 'https://api.restful-api.dev/objects', originalObject)
    .then((postResponse) => {
        expect(postResponse.status).to.eq(200)
        const newId = postResponse.body.id
    
        // 2. Actualizar ese objeto con PUT 
        const updatedObject = {
        name: "iPhone 15 Ultra",
        data: {
            color: "Black Titanium",
            capacity: "512 GB"
        }
        }
    
        cy.request('PUT', `https://api.restful-api.dev/objects/${newId}`, updatedObject)
        .then((putResponse) => {
        expect(putResponse.status).to.eq(200)
        expect(putResponse.body.name).to.eq(updatedObject.name)
        expect(putResponse.body.data).to.deep.equal(updatedObject.data)
        })
    })
    })

   

    it('Create new object with POST and PATCH one value', () => {
        const originalObject = {
        name: "Samsung Galaxy S23",
        data: {
            color: "Green",
            capacity: "128 GB"
        }
        }
    
        // 1. Crear un nuevo objeto con POST
        cy.request('POST', 'https://api.restful-api.dev/objects', originalObject)
        .then((postResponse) => {
        expect(postResponse.status).to.eq(200)
        const newId = postResponse.body.id
    
        // 2. Realizar el PATCH sobre el nuevo objeto (modificando solo un valor de data)
        const updatedPartialObject = {
            data: {
            color: "Graphite"
            }
        }
    
        cy.request('PATCH', `https://api.restful-api.dev/objects/${newId}`, updatedPartialObject)
            .then((patchResponse) => {
            expect(patchResponse.status).to.eq(200)
            expect(patchResponse.body.data.color).to.eq(updatedPartialObject.data.color)
            // Comprobar que el campo capacity ya no está
            expect(patchResponse.body.data.capacity).be.undefined
            })
        })
    })





    
    //Level 2

    it('POST, GET, DELETE and verify object removal', () => {
        // 1. Crear un nuevo objeto con POST
        const newObject = {
        name: "OnePlus 11",
        data: {
            color: "Black",
            capacity: "256 GB"
        }
        }
    
        cy.request('POST', 'https://api.restful-api.dev/objects', newObject)
        .then((postResponse) => {

        // 2. Verificar que el POST se hizo bien y que el objeto tiene un ID y createdAt
        expect(postResponse.status).to.eq(200)
        expect(postResponse.body).to.have.property('id')
        expect(postResponse.body).to.have.property('createdAt')
    
        const newId = postResponse.body.id
        const createdAt = postResponse.body.createdAt
    
        // Hacer log del ID y createdAt
        cy.log('ID del producto creado:', newId)
        cy.log('createdAt del producto creado:', createdAt)
    
        // 3. Hacer GET del producto recién creado
        cy.request(`https://api.restful-api.dev/objects/${newId}`)
        .then((getResponse) => {

        // Comprobar que la respuesta del GET contiene los mismos valores que el POST
        expect(getResponse.status).to.eq(200)
        expect(getResponse.body.id).to.eq(newId)
        expect(getResponse.body.name).to.eq(newObject.name)
        expect(getResponse.body.data.color).to.eq(newObject.data.color)
        expect(getResponse.body.data.capacity).to.eq(newObject.data.capacity)
        })
    
        // 4. Hacer DELETE del producto recién creado
        cy.request('DELETE', `https://api.restful-api.dev/objects/${newId}`)
        .then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200) 
    
            // 5. Hacer GET para comprobar que el producto ya no existe
            cy.request({
                method: 'GET',
                url: `https://api.restful-api.dev/objects/${newId}`,
                failOnStatusCode: false 
            }).then((getResponseAfterDelete) => {
                expect(getResponseAfterDelete.status).to.eq(404)
                expect(getResponseAfterDelete.body.error)
                .to.eq(`Oject with id=${newId} was not found.`)
            })
  
        })
    })
})
  

})
      
      
      
      
      
      
      
      
    
    
      








    