import { FETCH_PRODUCTS/*,NEW_POST*/ } from "./types";

export const fetchProducts=()=>dispatch=>{
    fetch("http://localhost:8080/user/product")
        .then((response) => response.json())
        .then((responseJson) => dispatch({
            type:FETCH_PRODUCTS,
            payload:responseJson
        }))
        .catch((error) => {
            console.error(error);
        })
}
