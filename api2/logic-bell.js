async function logicBell (fastify, options){

fastify.get('/logic-bell.js', async (request,reply) => {
  
  const msg = "hello"
  const password = "adminben"
  const MongoClient = require('mongodb').MongoClient;
  const uri = `mongodb+srv://admin:${password}@celly-stop.42ifg.mongodb.net?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  let finalCost = null
  try {
    await client.connect() 
    const database = client.db('Providers')
    const bell = database.collection('Bell')
    
    let userData = { 
      customer: "smb",
      plan: "v&d",
      term: "2y",
      financeType: "deviceReturn",
      data: "30",
      lines: 3
    }

    
    const queryPlan = { 
      type: "Plan", 
      customer: `${userData.customer}`
      // variable related search results based on 
      // ommited values
    }

    const queryDiscount = { 
      type: "discount", 
      customer: `${userData.customer}`
      // variable related search results based on 
      // ommited values
    }

    const queryAal = { 
      type: "aal", 
      customer: `${userData.customer}`
      // variable related search results based on 
      // ommited values
    }

    const queryPc = { 
      type: "pc", 
      customer: `${userData.customer}`
      // variable related search results based on 
      // ommited values
    }
    const plainPlan = await bell.findOne(queryPlan)
    const plainDiscount = await bell.findOne(queryDiscount)
    const plainAal = await bell.findOne(queryAal)
    const plainPc = await bell.findOne(queryPc)
   
    let mld = null

    if(plainDiscount === null){
      console.log("no discount ")
    } else {
        for(let i=0; i < plainDiscount.mld.length; i++){
          if (userData.lines == plainDiscount.mld[i][0]){
            mld = plainDiscount.mld[i][1]
            // console.log(price)
          }
        }
    }
    
    finalCost = plainPlan.cost - mld
   // console.log(plainPlan,plainDiscount,plainAal,plainPc) 
    
  } catch (e) {
    console.log(e)
  } finally {
    await client.close()
  }

  return `price per line is $${finalCost}`
})
}

module.exports = logicBell
