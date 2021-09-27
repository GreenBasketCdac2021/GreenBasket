import { FETCH_PRODUCTS,ADD_PRODUCT,LOGIN_CUST_AUTH,LOGIN_ADMIN_AUTH,RESET_STORE,ADD_PRODUCT_TO_CART,DELETE_PRODUCT_BY_ID} from "./types";
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


export const addProduct=(reqBody)=>dispatch=>{
    axios.post("http://localhost:8080/user/product/",reqBody)
    .then(auth=>{
        console.log(auth);
        return dispatch({
            type:ADD_PRODUCT,
            auth:auth.data
        })}).catch((err) => {
            console.log("ERROR")
        console.error(err);
    })
}

export const updateProduct=(reqBody)=>dispatch=>{
    axios.post("http://localhost:8080/user/product/",reqBody)
    .then(auth=>{
        console.log(auth);
        return dispatch({
            type:ADD_PRODUCT,
            auth:auth.data
        })}).catch((err) => {
            console.log("ERROR")
        console.error(err);
    })
}


export const checkLogin=(reqBody)=>dispatch=>{
    axios.post("http://localhost:8080/customer/login",reqBody)
    .then(auth=>{
            var login_status=false;
            if(auth.data.id!==undefined)
            {
                login_status=true;
            }
            else{
                alert("Invalid Credentials")
            }
            dispatch({
            type:LOGIN_CUST_AUTH,
            auth:auth.data,
            login_status:login_status
        })
        
    }).catch((err) => {
        console.error(err);
    })
}

export const checkAdminLogin=(reqBody)=>dispatch=>{
    axios.post("http://localhost:8080/user/admin/login",reqBody)
    .then(auth=>{
            var login_status=false;
            if(auth.data.id!==undefined)
            {
                login_status=true;
            }
            else{
                alert("Invalid Credentials")
            }
            dispatch({
            type:LOGIN_ADMIN_AUTH,
            auth:auth.data,
            login_status:login_status
        })
        
    }).catch((err) => {
        console.error(err);
    })
}

export const resetStore=()=>dispatch=>dispatch({
        type:RESET_STORE
})




export const deleteProductByID=(product_id)=>dispatch=>{
    console.log('http://localhost:8080/user/deleteProduct/'+product_id)
    axios.delete('http://localhost:8080/user/deleteProduct/'+product_id)
    .then(product=>{
            if(typeof product===typeof ""){
            dispatch({
            type:DELETE_PRODUCT_BY_ID,
        })}
        else{
            alert("Product Not Found")
        }
        
    }).catch((err) => {
        console.error(err);
    })
}



export const addProductToCart=(product)=>dispatch=>{
    axios.post(/**url to add product to cart */'',product)
    .then(product=>{
            dispatch({
            type:ADD_PRODUCT_TO_CART,
            cart:product.data,
        })
        
    }).catch((err) => {
        console.error(err);
    })
}