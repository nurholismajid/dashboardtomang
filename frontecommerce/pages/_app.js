import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { Provider } from "react-redux";
import {createWrapper} from "next-redux-wrapper";
import store from "../store/store";



function MyApp({ Component, pageProps}) {
    
 
  return(
  <Provider store={store}>  
   <Layout> 
   <Component {...pageProps} />
   </Layout>
   </Provider>
   )
}


 const makestore = ()=> store;
 const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
