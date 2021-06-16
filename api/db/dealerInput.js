async function dealerInput(fastify, options){
  
  
  let client = null
  let allFields = null
  //fastify.register(require('../hook-connectDb.js'))
  fastify.addHook('onRequest', async (req, reply) => {
  
  const password = "adminben"
  const MongoClient = require('mongodb').MongoClient;
  const uri = `mongodb+srv://admin:${password}@celly-stop.42ifg.mongodb.net?retryWrites=true&w=majority`;
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("connected to dB")
  })
  fastify.get('/assets/dealerInput',async (request,reply) => {
  try { 
    await client.connect() 
    const database = client.db('websiteAssets')
    const collection = database.collection('dealerInput')
    
    const query = {}

    const fields = await collection.findOne(query)
    console.log(fields)
    allFields = fields

  }   
    catch (e) {
    console.log(e)
  } finally {
    await client.close()
  }

  return allFields
  })
}

module.exports = dealerInput
