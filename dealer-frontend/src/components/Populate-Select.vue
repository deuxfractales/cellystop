<template>
    
    <div class="content-holder">
      <div class="form">
        
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
    
</template>

<script>
import axios from "axios"
import {onBerforeMount} from "vue"
export default {
    name: "Populate-Select",
    setup () {

    onBerforeMount(()=>{
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
              console.log(pair)
            }

              //console.log(this.fields)
            //console.log(reply)
          })
          .catch(function (error) {
            console.log(error);
          });
    })
    

    

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>