import * as types from "../types";
const initialState ={
    currencys: [],
    currency: {},
    loading: false,
    error: null
}

export const currencyReducer = (state =  initialState, action) =>{
    switch(action.type){
        case types.GET_CURRENCYS:
            return{
                ...state,
                currencys: action.payload,
                loading: false,
                error: null
            }
            default:
                return state
    } 
}