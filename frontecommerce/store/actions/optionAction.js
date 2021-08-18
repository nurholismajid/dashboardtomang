import * as types from "../types";
import API from "../../services/services";
import baseURL from "../../services/baseURL";
export const fetchoptions = () => async dispatch => {
    
    await API.get('/web-setting')
  .then(res => {
        const options = res.data;
        const dataoptions ={
            titleweb: options.WebTitle,
            logoweb: baseURL + options.WebLogo.url,
            messagetopbar: options.Topbar.Message,
            colortopbar: options.Topbar.ColorTopbar,
        }
        dispatch({
            type: types.GET_OPTIONS,
            payload: dataoptions
        })

    })
    
}