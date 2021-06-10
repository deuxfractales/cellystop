const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
fastify.register(require('./logic-bell.js'))

const start = async () => {
  try {
    await fastify.listen(3020)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

