import { FETCH_PRODUCTS/*,NEW_POST*/,LOGIN_CUST_AUTH,RESET_STORE,CUSTOMER_CART,LOGIN_ADMIN_AUTH } from "../actions/types";

const initialState={
    auth:{
        object:{
            role:'Customer'
        },
        login_status:false,
    },
    role:'Customer',
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
        //case NEW_POST:
        case LOGIN_CUST_AUTH:
            return{
                ...state,
                auth:{
                    object:action.auth,
                    login_status:action.login_status,
                    role:"Customer"
                },
                role:"Customer"
            }
        case LOGIN_ADMIN_AUTH:
                return{
                    ...state,
                    auth:{
                        object:action.auth,
                        login_status:action.login_status,
                        role:"ADMIN"
                    },
                    role:"ADMIN"
                }
        case CUSTOMER_CART:
            return {...state};
        case RESET_STORE:
            return initialState;
        default:
            return state;
    }
}