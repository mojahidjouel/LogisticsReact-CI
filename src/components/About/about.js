// import React, { useState, useEffect } from 'react';
import React from 'react';
import Header from '../Header/header';
// import { Expertapp } from '../../api/expertapp';
import Footer from '../Footer/footer';



const About = () => {
    return (
        <div>

       <Header /> 
       {/* <!-- Page Header Start --> */}

    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white text-center mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="./">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="./">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

    {/* <!-- About Start --> */}

    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="assets/img/about.jpg" style={{objectFit: "cover"}} />
                    </div>
                </div>
                <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h1 className="text-secondary text-uppercase mb-3">About Us</h1>
                    <h6 className="mb-5">Quick Transport and Logistics Solutions</h6>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row g-4 mb-5">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-globe fa-3x text-primary mb-3"></i>
                            <h5>Global Coverage</h5>
                            <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
                            <h5>On Time Delivery</h5>
                            <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                        </div>
                    </div>
                    <a href="" className="btn btn-primary py-3 px-5">Explore More</a>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- About End --> */}

    {/* <!-- Fact Start --> */}

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="text-secondary text-uppercase mb-3">Some Facts</h1>
                    <h6 className="mb-5">#1 Place To Manage All Of Your Shipments</h6>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                        <div className="ps-4">
                            <h6>Call for any query!</h6>
                            <h3 className="text-primary m-0">+88 01814 415108</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row g-4 align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-primary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                                <i className="fa fa-users fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Happy Clients</p>
                            </div>
                            <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-ship fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Complete Shipments</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                                <i className="fa fa-star fa-2x text-white mb-3"></i>
                                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                <p className="text-white mb-0">Customer Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Fact End --> */}


 
 <Footer /> 

        </div>
        )
    }
    
    export default About
    