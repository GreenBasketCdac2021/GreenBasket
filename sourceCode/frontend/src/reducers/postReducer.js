import { FETCH_PRODUCTS/*,NEW_POST*/  } from "../actions/types";

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
        default:
            return state;
    }
}