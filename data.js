import { RGB_Rd } from "./randomChoice";
const user = index=>{
    return {    
        id:index,
        prd:null,
        hs:[],
        isPlay:false,
        style:{
            backgroundColor: RGB_Rd(),
            width: "80%",
            opacity: 0.5
            
        }
    }
}

const data = [];
for(let i=0; i<10; i++){
    data.push(user(i))
}
export {data};