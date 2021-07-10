async function quoteTool (fastify, options){
   const axios = require('axios') 
    const providers = ["Bell"]
    let foundPlans = []
    let foundDiscounts = []
    

    fastify.get('/quote', async (req, reply) => {
        let ct =  req.query.ct
        
        
        try {
            const urlBuilder = (a,x) => {
                return new Promise ((resolve, reject) =>{

                axios.get(`http://localhost:3001/${a}/${x}`)
                .then(function(response) {
                   resolve(response.data)
                })
                .catch(function(error){
                    console.log(error)
                })
                })
            }

            providers.forEach(async (x) => {
                
                let a = "plans"
                await urlBuilder(a,x)
                .then((response) => {
                    foundPlans = response
                    //console.log(foundPlans)
                })
                a = "discounts"
                await urlBuilder(a,x)
                .then((response) => {
                    foundDiscounts = response
                })

                if(foundDiscounts != null){
                    console.log("buidling plans")
                }

            })


        } catch (error) {
           console.log(error) 

        } finally {

        }
        
       return (foundPlans)
    })
}

module.exports = quoteTool