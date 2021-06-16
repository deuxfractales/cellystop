<template>
  <div>
    <div class="header">CELLYSTOP-ADMIN</div>
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
    <div class="form">
      <div class="input-form-holder">
        <ul>  
        <li v-for="field in fields" :key="field">
          {{field}}
        </li> 
        </ul>
        <!--<h2>Customer Type</h2>-->
        <!--<h2>Customer Type</h2>-->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
const axios = require("axios").default;
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      page: null,
      fields: [],
      inputValues: []
    };
  },
  methods: {
    switchPage(pageNumber) {
      this.page = pageNumber;
      console.log(this.page);
      this.populateData();
    },
    populateData() {
      //const reply = () => {}
      if (this.page == 1) {
        //reply()

        axios
          .get("http://127.0.0.1:3000/assets/dealerInput")
          .then((r) => {
            //this.reply = r.dat
            let reply = r.data
            this.fields = Object.keys(reply)
            this.inputValues = Object.values(reply)
            console.log(this.fields, this.inputValues)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style>
@import "../assets/cellystop-admin.webflow.css" @import "../assets/webflow.css";
</style>
