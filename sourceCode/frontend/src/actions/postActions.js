import { FETCH_PRODUCTS,ADD_PRODUCT,LOGIN_CUST_AUTH,LOGIN_ADMIN_AUTH,RESET_STORE,DELETE_PRODUCT_BY_ID,UPDATE_PRODUCT,ADD_PRODUCT_TO_CART,GET_CART_ITEM,PLACE_ORDER,REGISTER_CUSTOMER} from "./types";
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
    .then(data=>{
        return dispatch({
            type:UPDATE_PRODUCT
        })}).catch((err) => {
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
export const registerUser=(reqBody)=>dispatch=>{
    axios.post("http://localhost:8080/customer/register",reqBody)
    .then(data=>{dispatch({
        type:REGISTER_CUSTOMER,
        data:data.data,
        })
        window.location.replace("/login");
    }
        
    ).catch((err) => {
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




export const deleteProductByID=(product)=>dispatch=>{
    axios.post('http://localhost:8080/cart/deleteproduct?productid='+product.productid+"&custID="+product.custID,product)
    .then(product=>{
            dispatch({
            type:DELETE_PRODUCT_BY_ID,
            data:product
        })
        
    }).catch((err) => {
        console.log("A")
        console.log(err.response.data)
        var remove=[]
        if(err.response.data.errorCode==="NOT_FOUND"||err.response.data.errorCode==="BAD_REQUEST")
        dispatch({
            type:GET_CART_ITEM,
            data:remove
        })
        console.log(err.response.data);
        console.log("Error")
    })
}



export const addProductToCart=(reqBody)=>dispatch=>{
    axios.post("http://localhost:8080/cart/addproduct?productid="+reqBody.productid+"&quantity="+reqBody.quantity+"&custID="+reqBody.custID,JSON.stringify(reqBody))
    .then(auth=>dispatch({
            type:ADD_PRODUCT_TO_CART,
            auth:auth.data
    }))
}

export const fetchCartItems=(reqBody)=>dispatch=>{
    axios.get("http://localhost:8080/cart/getcartbycustomerid?customerId="+reqBody.customerId,reqBody)
    .then(product=>dispatch({
            type:GET_CART_ITEM,
            data:product.data
        })
    ).catch(err =>console.error(err))
}

export const placeOrder=(reqBody)=>dispatch=>{
    console.log(reqBody)
    axios.post("http://localhost:8080/order/placeorder?customerId="+reqBody.customerId+"&paymentMethodId="+reqBody.paymentMethodId+"&email="+reqBody.email,reqBody)
    .then(product=>{dispatch({
            type:PLACE_ORDER,
            data:product.data
        })
        window.location.replace("/")
    }
    ).catch(err =>console.error(err))
}