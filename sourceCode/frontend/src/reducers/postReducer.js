import { FETCH_PRODUCTS,ADD_PRODUCT,LOGIN_CUST_AUTH,RESET_STORE,CUSTOMER_CART,LOGIN_ADMIN_AUTH,DELETE_PRODUCT_BY_ID,UPDATE_PRODUCT, ADD_PRODUCT_TO_CART,GET_CART_ITEM } from "../actions/types";

const initialState={
    auth:{
        object:{},
        login_status:false,
        role:'Customer',
    },
    
    products:[],
    product:{},
    cart:[],
    cartItems:[]
}
export default function postReducer(state=initialState,action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT:
            return {...state}
        case LOGIN_CUST_AUTH:
            return{
                ...state,
                auth:{
                    object:action.auth,
                    login_status:action.login_status,
                    role:"Customer"
                },
                
            }
        case LOGIN_ADMIN_AUTH:
                var role;
                if(action.auth.role==="ADMIN")
                    role="ADMIN"
                else
                    role="DELIVERYBOY"
                delete action.auth[role]; 
                return{
                    ...state,
                    auth:{
                        object:action.auth,
                        login_status:action.login_status,
                        role:role
                    },
                }
        case ADD_PRODUCT_TO_CART:
            var newArray=state.cartItems
            newArray.push(action.data)
            return {
                ...state,
                cartItems:newArray
            }
        case GET_CART_ITEM:
            return {
                ...state,
                cartItems:action.data
            }
        case DELETE_PRODUCT_BY_ID:
            return {...state}
        case UPDATE_PRODUCT:
            return {...state}
        case CUSTOMER_CART:
            return {...state};
        case RESET_STORE:
            return initialState;
        default:
            return {...state};
    }
}