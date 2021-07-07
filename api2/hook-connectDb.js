const fp = require('fastify-plugin')
module.exports = fp(function (fastify, options, next){
  fastify.addHook('onRequest', async (req, reply) => {
    console.log('first')
  
  const password = "adminben"
  const MongoClient = require('mongodb').MongoClient;
  const uri = `mongodb+srv://admin:${password}@celly-stop.42ifg.mongodb.net?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  })
  next()
})
