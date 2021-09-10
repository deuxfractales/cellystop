async function addPlans(fastify, options) {
    fastify.post('/addPlans', async(request, reply) => {
        console.log("got plan")
        return ("Got Plan")
    })
}

module.exports = addPlans