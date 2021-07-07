async function quoteTool (fastify, options){
    let client = null 
    fastify.addHook('onRequest', async (req, reply) => {
  
        const password = "adminben"
        const MongoClient = require('mongodb').MongoClient;
        const uri = `mongodb+srv://admin:${password}@celly-stop.42ifg.mongodb.net?retryWrites=true&w=majority`;
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to dB")
        })

    
    fastify.get('/quote', async (req, reply) => {
        let 
        try {
            await client.connect()
            const database = client.db('Providers')
            const collection = database.collection('Bell')

            const query = {}
            const exclude = {_id:0}
        
            const docs = await collection.find().project(exclude)
            await docs.forEach(doc => {
              //console.log(doc)  
              plans.push(doc)
            
            })
            console.log(plans)
        } catch (error) {
           console.log(error) 
        } finally {
            await client.close()
        }
        return plan
        
    })
}

module.exports = quoteTool