import { FETCH_PRODUCTS/*,NEW_POST*/,LOGIN_CUST_AUTH} from "./types";
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
        type:LOGIN_CUST_AUTH,
        auth:auth.data
    })).catch((err) => {
        console.error(err);
    })
}
