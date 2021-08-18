import * as types from "../types";
import API from "../../services/services";
import baseURL from "../../services/baseURL";
export const fetchcurrencys = () => async dispatch => {
    
    await API.get('/web-setting')
  .then(res => {
        const currencys = res.data;
        dispatch({
            type: types.GET_CURRENCYS,
            payload: currencys["Currency"]
        })

    })
    
}