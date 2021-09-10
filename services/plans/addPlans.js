async function addPlans(fastify, options) {
    fastify.post('/addPlans', async(request, reply) => {
        //console.log(request.body[0])
        let formArray = request.body
        let y = [] 
        formArray.forEach(el => { 
            let x = []
            x.push(Object.values(el)[0], Object.values(el)[1])
            y.push(x)
        })
        const plan = Object.fromEntries(y)
        console.log(plan)
        
        return ("Got Plan")
    })
}

module.exports = addPlans