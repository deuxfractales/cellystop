async function postPlanDiscoutPort (fastify, options){
    let client = null 
    fastify.addHook('onRequest', async (req, reply) => {
  
        const password = "adminben"
        const MongoClient = require('mongodb').MongoClient;
        const uri = `mongodb+srv://admin:${password}@celly-stop.42ifg.mongodb.net?retryWrites=true&w=majority`;
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to dB")
        })

    fastify.post("/db/postPDP/:provider", async (request, reply) => {
        console.log(request.body)
        let provider = request.params.provider
        try {
            await client.connect() 
            const database = client.db('Providers')
            const collection = database.collection(provider)
            
            let result = await collection.insertOne(request.body)
            console.log(result)
        } catch (error) {
            console.log(error)
        } finally {
            await client.close()
        }
        return "hello"
    })
}

module.exports = postPlanDiscoutPort