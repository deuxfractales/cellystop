async function addPlans(fastify, options) {
    fastify.post('/addPlans/:provider', async(request, reply) => {
        //console.log(request.body[0])
        provider = request.params.provider
        db = fastify.mongo.client.db('Providers')
        const collection = db.collection(provider) 
        
        let formArray = request.body
        let y = [] 
        formArray.forEach(el => { 
            let x = []
            x.push(Object.values(el)[0], Object.values(el)[1])
            y.push(x)
        })
        const plan = Object.fromEntries(y)
        //console.log(plan)

        try {
            const result = await collection.insertOne(plan);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
        } catch (error) {
            console.log(error)
        } finally {
            await fastify.close
        }

        
        return ("Got Plan")
    })
}

module.exports = addPlans