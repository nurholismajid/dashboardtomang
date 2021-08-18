import React from 'react';

function footer() {
    return (
        <>
           <footer className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-logo">
                                    <a href="#"><img src="assets/images/logo/footer-logo.png" alt="" /></a>
                                </div>
                                <div className="about-footer">
                                    <p className="text-info">We are a team of designers and developers that create high quality HTML template</p>
                                    <div className="need-help">
                                        <p className="phone-info">
                                            Contact Person
                                            <span>
                                                (+800) 345 678 <br />
                                                (+800) 123 456
                                            </span>
                                        </p>
                                    </div>
                                    <div className="social-info">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="ion-social-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="ion-social-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="ion-social-youtube"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="ion-social-google"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="ion-social-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 mt-res-sx-30px mt-res-md-30px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Information</h4>
                                    <div className="footer-links">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Shop</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Customer Services</h4>
                                    <div className="footer-links">
                                        <ul>
                                            <li><a href="#">How to Order</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Confirm Payment</a></li>
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">My Account</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
                                <div className="single-wedge">
                                    <h4 className="footer-herading">Newsletter</h4>
                                    <div className="subscrib-text">
                                        <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
                                    </div>
                                    <div id="mc_embed_signup" className="subscribe-form">
                                        <form
                                            id="mc-embedded-subscribe-form"
                                            className="validate"
                                            target="_blank"
                                            name="mc-embedded-subscribe-form"
                                            method="post"
                                            action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                                        >
                                            <div id="mc_embed_signup_scroll" className="mc-form">
                                                <input className="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL" />
                                                <div className="mc-news" aria-hidden="true" style={{position:"absolute", left: "-5000px"}}>
                                                    <input type="text"  name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                </div>
                                                <div className="clear">
                                                    <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value="Sign Up" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="img_app">
                                        <a href="#"><img src="assets/images/icons/app_store.png" alt="" /></a>
                                        <a href="#"><img src="assets/images/icons/google_play.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <p className="copy-text">Copyright © <a href="https://hasthemes.com/"> HasThemes</a>. All Rights Reserved</p>
                            </div>
                            <div className="col-md-6 col-lg-8">
                                <img className="payment-img" src="assets/images/icons/payment.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default footer;