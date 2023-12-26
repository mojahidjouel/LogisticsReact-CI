import React, { useState, useEffect } from 'react';
import Header from '../Header/header';

import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';



const Price = props => {
    const [priceData, setPriceData] = useState([]);

   
    return (
        <div>

    <Header />

    {/* <!-- Page Header Start --> */}

    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">Pricing</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/home"}><a className="text-white" href="./">Home</a></Link></li>
                    <li className="breadcrumb-item"><Link to={"/pages"}><a className="text-white" href="./">Pages</a></Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Pricing</li>
                </ol>
            </nav>
        </div>
    </div>

    {/* <!-- Page Header End --> */}

    {/* <!-- Pricing Start --> */}

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-secondary text-uppercase">Pricing Plan</h1>
                <h6 className="mb-5">Perfect Pricing Plan</h6>
            </div>
            <div className="row g-4">

            
                
                {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Standard Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>99.00<small
                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                            <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                            <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                            <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                            <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                            <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                            <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="price-item">
                        <div className="border-bottom p-4 mb-4">
                            <h5 className="text-primary mb-1">Advanced Plan</h5>
                            <h1 className="display-5 mb-0">
                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>149.00<small
                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                            </h1>
                        </div>
                        <div className="p-4 pt-0">
                            <p><i className="fa fa-check text-success me-3"></i>HTML5 & CSS3</p>
                            <p><i className="fa fa-check text-success me-3"></i>Bootstrap v5</p>
                            <p><i className="fa fa-check text-success me-3"></i>FontAwesome Icons</p>
                            <p><i className="fa fa-check text-success me-3"></i>Responsive Layout</p>
                            <p><i className="fa fa-check text-success me-3"></i>Cross-browser Support</p>
                            <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span >Order Now</span></a>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>

    {/* <!-- Pricing End --> */}
        


        <Footer />

        </div>
        )
    }
    
    export default Price