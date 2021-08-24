<script>
import { h, ref } from "vue";
import axios from "axios";
import dayjs from "dayjs"
import _ from "lodash";

export default {
  setup() {
    const rows = ref();
    const selectedTemp = ref([]);
    //const stepNumer = ref(1)
    //const selected = ref([]);
    const getFormInfo = () => {
      axios
        .get("http://localhost:3001/assets/dealer-form")
        .then(function (response) {
          //console.log(response.data)
          rows.value = response.data;
          //console.log(rows.value)
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getFormInfo();

     const checkArray = (selectedObject) => {
       let arrLength = selectedTemp.value.length;
       let x = selectedTemp.value
       let y = selectedObject
      for (let i = 1; i < arrLength; i++){
        if(x[i-1].name === y.name){
          _.remove(x, function(n) {
            return n.time < y.time
          })  
        }
      }
      //console.log(selectedTemp.value) 
     };

      const setStyles = (selectedObject) => {
        let pID = selectedObject.idOfParent
        let cID = selectedObject.id
        document.getElementById(pID).style.backgroundColor = "grey"
        document.getElementById(cID).style.color = "green"
      }

    return () =>
      h("div", {}, [
        h("div", [
          rows.value?.map((row,index) => {
            //console.log(index)
            let y = [];
            for (const option in row.options) {
              y.push(row.options[option]);
            }
            //console.log(y);
            return h("div",{id:`parent${index}`}, [
              h("h1", row.title),

              //h("div",{class: "option"},[row.options])
              h("div", [
                y.map((option,index) => {
                  return h(
                    "div",
                    { id:`${index}${option}`,
                      onClick: (event) => {
                        let selectedObject = {
                          name: event.path[2].children[0].innerHTML,
                          value: event.target.innerHTML,
                          time: dayjs().unix(),
                          idOfParent: event.path[2].id,
                          id: event.target.id 
                        };
                        selectedTemp.value.push(selectedObject);
                        checkArray(selectedObject)
                        setStyles(selectedObject)
                      },
                    },
                    option
                  );
                }),
              ]),
            ]);
          }),
        ]),
      ]);
  },
};
</script>

<style scoped>
.option {
  margin: 30px;
}
</style>
