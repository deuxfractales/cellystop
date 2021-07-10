async function getPlans (fastify, options) {

  fastify.get('/plans/:provider', async (request, reply) => {
    provider = request.params.provider
    db = fastify.mongo.client.db('Providers')
    const collection = db.collection(provider)
    plans = []
    
    try {
        const query = {
            entryType: "Plan",
            // customerType: req.params.customerType
        }
        const exclude = {_id:0}
        const docs = await collection.find(query).project(exclude)
        await docs.forEach(doc => {
          //console.log(doc)  
          plans.push(doc)
        
        })    
    } catch (error) {
        
    } finally {
        await fastify.close
    }
    return plans
  })
}

module.exports = getPlans