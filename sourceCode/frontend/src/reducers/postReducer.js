import { FETCH_PRODUCTS/*,NEW_POST*/,LOGIN_AUTH  } from "../actions/types";

const initialState={
    auth:{},
    products:[],
    product:{}
}
export default function postReducer(state= initialState,action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        //case NEW_POST:
        case LOGIN_AUTH:
            return{
                ...state,
                auth:action.auth
            }
        default:
            return state;
    }
}