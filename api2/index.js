const fastify = require('fastify')({
  logger: true
})
//      MAIN ROUTE
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

//      CORS
fastify.register(require('fastify-cors'), {
  // put your options here
  origin: '*',
  methods: ['GET,PUT,POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
});
//      REGISTER ROUTES
fastify
  .register(require('./logic-bell.js'))
  .register(require('./db/dealerInput.js'))
  .register(require('./db/postPlanDiscountPort.js'))
  .register(require('./db/getPlans.js'))
  .register(require('./quoteTool.js'))



//      START SERVER
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

