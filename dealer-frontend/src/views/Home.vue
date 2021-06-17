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
        <div class="w-layout-grid fieldgrid">
          <div
            v-for="field in fields"
            :key="field"
            id="w-node-_2a1387f3-28b1-8967-592b-b591976d4a75-4b061c7c"
            class="fieldholder"
          >
            <h2>{{ field.field }}</h2>
          </div>
          <select v-for="field in fields" :key="field">
            <option disabled value="">Please select one</option>
            <option v-for="(row) in rows.row1" :key="row">
            {{row}}
            </option>
          </select>
        </div>
      </div>
    </div>
    <!--<h2>Customer Type</h2>-->
    <!--<h2>Customer Type</h2>-->
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
      entryType: [],
      rows :{
      row1:[1,2,3,4],
      row2:[5,6,7,8],
      row3:[9,10],
      row4:[],
      row5:[],
      row6:[],
      }
    };
  },
  methods: {
    switchPage(pageNumber) {
      this.page = pageNumber;
      //console.log(this.page);
      this.populateData();
    },
    populateData() {
      //const reply = () => {}
      if (this.page == 1) {
        //reply()

        axios
          .get("http://127.0.0.1:3000/assets/dealerInput")
          .then((r) => {
            //this.reply = r.daa
            let reply = r.data;
            console.log(reply)
            for (const line in reply) {
              
              console.log(reply[line])
              let pair = {
                field: `${line}`,
                input: reply[line]
              }
                
               
              this.fields.push(pair)
            }

              //console.log(this.fields)
            //console.log(reply)
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
