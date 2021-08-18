import Axios from 'axios';
import baseURL from "./baseURL";
export default Axios.create({
baseURL : baseURL
})