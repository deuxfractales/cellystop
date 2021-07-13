
<script>
import {h, ref} from "vue"
import axios from "axios"
// import _ from "lodash"
export default {
    setup () {
        const rows = ref()
        const getFormInfo = () =>{
            axios.get("http://localhost:3001/assets/dealer-form")
            .then(function(response){
                
                //console.log(response.data)
            rows.value = response.data 
            console.log(rows.value)
            rows.value.forEach(row => console.log(row.title))
            })
            .catch(function(error) {console.log(error)})
            
        }
        getFormInfo()
        
        // const createDivs = () =>{
        //     let rawRows = rows.value
        //     rawRows.forEach(row => console.log(row))
        // }
        //createDivs()
        return () => h("div", {}, "Hello")
    }
}
</script>

<style lang="scss" scoped>

</style>