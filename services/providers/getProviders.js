 
async function getProviders (fastify, options) {

    fastify.get('/providers', async (request, reply) => {
      let providers = []
      try {
        db = fastify.mongo.client.db('Providers')
        const docs = await db.listCollections({}, {nameOnly: true})
        await docs.forEach(doc => {
            console.log(doc.name)  
            providers.push(doc.name)
        })    
      } catch (error) {
          
      } finally {
          await fastify.close
      }
      return providers
    })
  }
  
  module.exports = getProviders