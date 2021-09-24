import { FETCH_PRODUCTS/*,NEW_POST*/,LOGIN_AUTH} from "./types";
import axios from 'axios';

export const fetchProducts=()=>dispatch=>{
    axios.get("http://localhost:8080/user/product")
        .then((responseJson) => dispatch({
            type:FETCH_PRODUCTS,
            payload:responseJson.data
        }))
        .catch((error) => {
            console.error(error);
        })
}

export const checkLogin=(reqBody)=>dispatch=>{
    axios.post("http://localhost:8080/customer/login",reqBody)
    .then(auth=>dispatch({
        type:LOGIN_AUTH,
        auth:auth
    })).catch((err) => {
        alert("invalid Credentials")
    })
}
