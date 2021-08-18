import { combineReducers } from "redux";
import { optionReducer } from "./optionReducer";
import { currencyReducer } from "./currencyReducer";
export default combineReducers({
    option : optionReducer,
    currency : currencyReducer
})