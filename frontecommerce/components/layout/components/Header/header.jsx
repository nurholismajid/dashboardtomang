import React from 'react';
import {useSelector} from 'react-redux';
import { useState } from 'react'; 

function header() {
    const {options} = useSelector(state =>state.option);
    const {currencys} = useSelector(state =>state.currency);
    const [currency, setcurrency] = useState(currencys);
    console.log(currency)
    return (
        <>
        <title>{options.titleweb}</title>
         <header className="main-header">
                <div className="header-top-nav" style={{background:options.colortopbar}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="left-text">
                                    <p>{options.messagetopbar}</p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 text-right">
                                <div className="header-right-nav">
                                    <div className="dropdown-navs">
                                        <ul>
                                            {/* <li className="dropdown xs-after-n">
                                                <a className="angle-icon" href="#">Settings</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                </ul>
                                            </li> */}
                                            <li className="top-10px first-child">
                                                <select>
                                                    {
                                                        currency && currency.map(i => (
                                                            <option key={i.Title} value={i.Title}>{i.Title}</option>
                                                        )) }
                                                    
                                                    
                                                </select>
                                            </li>
                                            <li className="top-10px mr-15px">
                                                <select>
                                                {
                                                        options.language && options.language.map(i => (
                                                            <option key={i.Ttitle} value={i.Title}>{i.Ttitle}</option>
                                                        )) }
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-navigation sticky-nav">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 col-sm-2">
                                <div className="logo">
                                    <a href="/"><img src={options.logoweb} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-md-10 col-sm-10">
                                <div className="main-navigation d-none d-lg-block">
                                    <ul>
                                        <li className="">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="">
                                            <a href="#">About</a>
                                        </li>
                                        <li className="">
                                            <a href="#"><span style={{color:"red"}}>Sale</span></a>
                                        </li>
                                        <li className="menu-dropdown">
                                            <a href="#">Shop <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href="#">New Arrivals</a></li>
                                                <li><a href="#">Mens</a></li>
                                                <li><a href="#">Womens</a></li>
                                                <li><a href="#">Kids</a></li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="#">Blog</a>
                                        </li>
                                        <li className="">
                                            <a href="#">Confirm Payment</a>
                                        </li>
                                        
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="header_account_area">
                                    
                                    <div className="header_account_list search_list">
                                        <a href="#"><i className="ion-ios-search-strong"></i></a>
                                        <div className="dropdown_search">
                                            <form action="#">
                                                <input name="search" placeholder="Search entire store here ..." type="text" />
                                                <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                            </form>
                                        </div>
                                    </div>
                
                                    <div className="contact-link">
                                        <div className="phone">
                                            <p>Call us:</p>
                                            <a href="tel:(+800)345678">(+800)345678</a>
                                        </div>
                                    </div>
                
                                    <div className="cart-info d-flex">
                                        <div className="mini-cart-warp">
                                            <a href="#" className="count-cart"><span>$20.00</span></a>
                                            <div className="mini-cart-content">
                                                <ul>
                                                    <li className="single-shopping-cart">
                                                        <div className="shopping-cart-img">
                                                            <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/1.jpg" /></a>
                                                            <span className="product-quantity">1x</span>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="single-product.html">Juicy Couture...</a></h4>
                                                            <span>$9.00</span>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion-android-cancel"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="single-shopping-cart">
                                                        <div className="shopping-cart-img">
                                                            <a href="single-product.html"><img alt="" src="assets/images/product-image/mini-cart/2.jpg" /></a>
                                                            <span className="product-quantity">1x</span>
                                                        </div>
                                                        <div className="shopping-cart-title">
                                                            <h4><a href="single-product.html">Water and Wind...</a></h4>
                                                            <span>$11.00</span>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion-android-cancel"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="shopping-cart-total">
                                                    <h4>Subtotal : <span>$20.00</span></h4>
                                                    <h4>Shipping : <span>$7.00</span></h4>
                                                    <h4>Taxes : <span>$0.00</span></h4>
                                                    <h4 className="shop-total">Total : <span>$27.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-btn text-center">
                                                    <a className="default-btn" href="checkout.html">checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                
                        <div className="mobile-menu-area">
                            <div className="mobile-menu">
                                <nav id="mobile-menu-active">
                                    <ul className="menu-overflow">
                                        <li className="">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="">
                                            <a href="#">About</a>
                                        </li>
                                        <li className="">
                                            <a href="#"><span style={{color:"red"}}>Sale</span></a>
                                        </li>
                                        <li className="">
                                            <a href="#">Shop <i className="ion-ios-arrow-down"></i></a>
                                            <ul className="">
                                                <li><a href="#">New Arrivals</a></li>
                                                <li><a href="#">Mens</a></li>
                                                <li><a href="#">Womens</a></li>
                                                <li><a href="#">Kids</a></li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="#">Blog</a>
                                        </li>
                                        <li className="">
                                            <a href="#">Confirm Payment</a>
                                        </li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
          
                    </div>
                </div>
          
            </header>   
            
        </>
    );
}


header.getInitialProps = async (ctx) => {
    
    return { stars: json.stargazers_count }
  }
  
  export default header;
  
