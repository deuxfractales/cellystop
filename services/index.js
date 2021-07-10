const fastify = require('fastify')({
    logger: true
  })
  const autoload = require('fastify-autoload')
  const path = require('path'); 
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  const password = "adminben"
  fastify.register(require('fastify-mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    
    url: `mongodb+srv://admin:${password}@celly-stop.42ifg.mongodb.net?retryWrites=true&w=majority`
  }) 
  fastify.register(autoload, {
    dir: path.join(__dirname, 'plans')
  })

  fastify.register(autoload, {
    dir: path.join(__dirname, 'discounts')
  })
  
  const start = async () => {
    try {
      await fastify.listen(3001)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()