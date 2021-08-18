import * as types from "../types";
const initialState ={
    options: [],
    option: {},
    loading: false,
    error: null
}

export const optionReducer = (state =  initialState, action) =>{
    switch(action.type){
        case types.GET_OPTIONS:
            return{
                ...state,
                options: action.payload,
                loading: false,
                error: null
            }
            default:
                return state
    } 
}