async function getPlans (fastify, options){
    let client = null 
    fastify.addHook('onRequest', async (req, reply) => {
  
        const password = "adminben"
        const MongoClient = require('mongodb').MongoClient;
        const uri = `mongodb+srv://admin:${password}@celly-stop.42ifg.mongodb.net?retryWrites=true&w=majority`;
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to dB")
        })

    fastify.get('/db/getPlans/:provider', async (req, reply)=>{
        let plans = []
        console.log(req.params)
        let provider = req.params.provider
        try {
            await client.connect()
            const database = client.db('Providers')
            const collection = database.collection(provider)

            const query = {}
            const exclude = {_id:0}
        
            const docs = await collection.find().project(exclude)
            await docs.forEach(doc => {
              //console.log(doc)  
              plans.push(doc)
            
            })
            
        } catch (error) {
           console.log(error) 
        } finally {
            await client.close()
        }
        return plans
    })
}

module.exports = getPlans