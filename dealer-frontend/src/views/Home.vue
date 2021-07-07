<template>
  <div>
    <div class="header">CELLYSTOP-ADMIN
      <select v-model="provider">
        <option disabled value="">Please select one</option>
        <option>Bell</option>
        <option>Telus</option>
        <option>Rogers</option>
      </select>
    </div>
    <div class="content-holder">
      <div class="w-layout-grid grid">
        <button v-on:click="switchPage(1)">
          <h1
            id="w-node-_9d781db9-f266-fb33-1392-8b1b6db03460-4b061c7c"
            class="h1"
          >
            ADD-A-PLAN/DISCOUNT
          </h1>
        </button>
        <button v-on:click="switchPage(2)">
          <h1
            id="w-node-_04327146-d7ca-0df9-4f6a-a9c12290a1a1-4b061c7c"
            class="h1"
          >
            PLANS
          </h1>
        </button>
      </div>
    </div>
    <div class="content-holder">
      <div v-if="this.page == 1">
    <div class="form">
      <div class="w-layout-grid leftgridcolumn">
        <div class="griddata" v-for="field in fields" :key="field">
          {{field}}
        </div>
      </div>
      <div class="w-layout-grid rightgridcolumn">
        <div class="griddata">
          <select v-model="s1">
            <option disabled value="">Please select one</option>
            <option v-for="options in entryType" :key="options">{{options}}</option>
          </select>
        </div>
        <div class="griddata">
          <select v-model="s2">
            <option disabled value="">Please select one</option>
            <option v-for="options in customerType" :key="options">{{options}}</option>
          </select>
        </div>
        <div class="griddata">
          <select v-model="s3">
            <option disabled value="">Please select one</option>
            <option v-for="options in planType" :key="options">{{options}}</option>
          </select>
        </div>
        <div class="griddata">
          <select v-model="s4">
            <option disabled value="">Please select one</option>
            <option v-for="options in termType" :key="options">{{options}}</option>
          </select>
        </div>
        <div class="griddata">
          <select v-model="s5" >
            <option disabled value="">Please select one</option>
            <option v-for="options in features" :key="options">{{options}}</option>
          </select>
        </div>
        <div class="griddata">
          <select v-model="s6">
            <option disabled value="">Please select one</option>
            <option v-for="options in dataType" :key="options">{{options}}</option>
          </select>
        </div>

      </div>
    </div>
    </div>
    <div v-else class="planholder"> 
      <div class="plandata" v-for="plan in plans" :key="plan">
        
        <ul>
        <li>{{plan.entryType}}</li>
        <li>{{plan.customerType}}</li>
        <li>{{plan.planType}}</li>
        <li>{{plan.termType}}</li>
        <li>{{plan.features}}</li>
        <li>{{plan.dataType}}</li>
        </ul>
         
      </div>
    </div>
  </div>
    <!--<h2>Customer Type</h2>-->
    <!--<h2>Customer Type</h2>-->
  </div>
</template>

<script>
import axios from "axios"
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      s1:null,
      s2:null,
      s3:null,
      s4: null,
      s5: null,
      s6: null,
      page: null,
      fields: [],
      entryType: [],
      customerType: [],
      planType: [],
      termType: [],
      features:[],
      dataType: [],
      plans: null,
      provider: null
    };
  },
  watch: {
    s6(){
      if(this.s1 == "Plan"){
        console.log("sending new plan to database")

      }else if(this.s1 == "Discount"){
        console.log("sedning new discount to database")
      }else(
        console.log("sending new Port Credit to database")
      )
      this.sendData();
    },
    page() {
      if(this.page == 2){
        this.getPlans();
      }
    }
  },
  methods: {
    switchPage(pageNumber) {
      this.page = pageNumber;
      this.populateForm()
    },
    populateForm() {
        axios
          .get('http://localhost:3000/assets/dealerInput')
          .then(response => {
            const allOptions = Object.entries(response.data)
            const optionText = Object.keys(response.data)
            optionText.forEach(text => {
              this.fields.push(text)
            })

            this.entryType = allOptions[0][1]
            this.customerType = allOptions[1][1]
            this.planType = allOptions[2][1]
            this.termType = allOptions[3][1]
            this.features = allOptions[4][1]
            this.dataType = allOptions[5][1]
          })
          .catch(function(error){
            console.log(error)
          })
        
    },
    getPlans() {
      axios.get(`http://localhost:3000/db/getPlans/${this.provider}`)
      .then(response => {
        this.plans = response.data
        console.log(this.plans)
      })
    },
    sendData() {
      let postData = {
        entryType: this.s1,
        customerType: this.s2,
        planType: this.s3,
        termType: this.s4,
        features: this.s5,
        dataType: this.s6
      }
      axios
      .post(`http://localhost:3000/db/postPDP/${this.provider}`, postData)
      .then(response => {
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
    }
      
  },
};
</script>
<style>
@import "../assets/cellystop-admin.webflow.css" @import "../assets/webflow.css";
</style>
