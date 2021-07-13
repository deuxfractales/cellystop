async function getDealerForm (fastify, options){
    fastify.get('/assets/dealer-form', async (req, reply) =>{
        let formDoc = []
        try { 
             
            const db = fastify.mongo.client.db('websiteAssets')
            const collection = db.collection('dealerInput')
            
            const query = {}
            const exclude = {_id:0}

            const docs = await collection.find().project(exclude)
            await docs.forEach(doc => {
                // console.log(doc)  
                //formDoc.push(doc)
                for (const [key, value] of Object.entries(doc)) {
                    // console.log(value);
                    let row = {
                        title: key,
                        options: value
                    }
                    formDoc.push(row)
                  }
            })
            //console.log(allFields)
            //allFields = fields

        }   
        catch (e) {
            console.log(e)
        } finally {
            await fastify.close
        }
        return formDoc
    })
}

module.exports = getDealerForm