<template>
<div>
    <select v-model="selectedProvider">
        <option v-for="provider in providerList" :key="provider">
            {{ provider }}
        </option>
    </select>
    <DealerForm />
</div>
</template>

<script>
import axios from "axios"
import {ref} from "vue"
import DealerForm from "@/components/Dealer-Form"

export default {
    components:{DealerForm},
    setup () {
        const selectedProvider = ref({})
        const providerList = ref("providerList")
        const getProviders = () => {
            axios.get("http://localhost:3001/providers")
            .then(function(response){
                
                providerList.value = response.data
            })
            .catch(function(error) {
                console.log(error)
            })
        }
        getProviders()
        
        
        return {
           providerList,
           selectedProvider 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>