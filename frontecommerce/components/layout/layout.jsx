import React from 'react';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {fetchoptions} from "../../store/actions/optionAction";
import {fetchcurrencys} from "../../store/actions/currencyAction";
import {useEffect} from 'react';
import {useDispatch } from "react-redux";

function layout({children}) {
  const dispatch = useDispatch();  
    useEffect(()=>{
      dispatch(fetchcurrencys());  
      dispatch(fetchoptions());    
    });
    
  return (
        <>
        <div id="main">
        <Header/>
          {children}
        <Footer/>
        </div>  
        </>
    );
}

export default layout;