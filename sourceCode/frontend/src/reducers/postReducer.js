import { FETCH_PRODUCTS,ADD_PRODUCT,LOGIN_CUST_AUTH,RESET_STORE,CUSTOMER_CART,LOGIN_ADMIN_AUTH } from "../actions/types";

const initialState={
    auth:{
        object:{},
        login_status:false,
        role:'Customer',
    },
    
    products:[],
    product:{},
    cart:[]
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
                return{
                    ...state,
                    auth:{
                        object:action.auth,
                        login_status:action.login_status,
                        role:"ADMIN"
                    },
                }
        case CUSTOMER_CART:
            return {...state};
        case RESET_STORE:
            return initialState;
        default:
            return {...state};
    }
}