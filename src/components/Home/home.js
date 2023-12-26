import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/header';
import MyCarousel from '../MyCarousel/myCarousel';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';
import { CityList } from '../../api/CityList';
import { ServiceApplyCreate } from '../../api/ServiceApply';
import Footer from '../Footer/footer';
import './home.css';
import { Servicesapp } from '../../api/servicesapp';

import { Expertapp } from '../../api/expertapp';

import Service_Apply from '../Admin/Service_Apply/service_apply';


const Home = () => {

    const [servicesData, setServicesData] = useState([]);
    const [City, setCity] = useState([]);
    const [inputs, setInputs] = useState([]);
    const fetchCity = async () => {
        const data = await CityList();
        setCity(data);
    };
    const fetchService = async () => {
        try {
            const data = await Servicesapp();
            setServicesData(data);

        } catch (error) {
            console.error(error.message);
        }
    };
    useEffect(() => {
        fetchCity();
        fetchService();
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
       
    }
    
    const getPrice = (v,n) => {
        let from_city=false;
        let to_city=false;
        let product_weight=0;
        if(n=='from_city'){
             from_city=v;
        }else if(inputs.from_city){
             from_city=inputs.from_city;
        }else{
            return false;
        }
        if(n=='to_city'){
             to_city=v;
        }else if(inputs.to_city){
             to_city=inputs.to_city;
        }else{
            return false;
        }
        if(n=='product_weight'){
            product_weight=v?v:0;
        }else if(inputs.product_weight){
            product_weight=inputs.product_weight;
        }else{
            return false;
        }

        axios.get(`${global.config.apiUrl}price/get_price/${from_city}/${to_city}/${product_weight}`).then(function(response) {
            
            setInputs(values => ({...values,"id":"","unit_price": response.data.data.unitprice, "base_price": response.data.data.base_price, "shipping_cost": response.data.data.shipping_cost}))
            
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await ServiceApplyCreate(inputs);
            if(data==1)
                alert("Your request has been successfully send. Our delivery man will contact you soon");
            window.location.reload();
        } catch (error) {
            console.error(error.message);
        }
    };
        

        const [expertData, setExpertData] = useState([]);
        
            useEffect(() => {
                const fetchData = async () => {
                    try {
                        const data = await Expertapp();
                        setExpertData(data);
        
                    } catch (error) {
                        console.error(error.message);
                    }
                };
        
                fetchData();
            }, []);
    
    return (
        <div>

    <Header />

    <MyCarousel />
    
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


    {/* <!-- Service Start --> */}

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-secondary text-uppercase">Our Services</h1>
                <h6 className="mb-5">Explore Our Services</h6>
            </div>
            <div className="row g-4">
            {servicesData.map((services, index) => (

            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s" key={index}>
                <div className="service-item p-4">
                 <div className="overflow-hidden mb-4">
            <img className="img-fluid" src={global.config.apiUrl + services.image} />
        </div>
        <h4 className="mb-3">{services.name}</h4>
        <p>{services.description}</p>
        <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
    </div>
                     
    </div>
    ))}
            </div>
        </div>
    </div>

    {/* <!-- Service End --> */}

    {/* <!-- Feature Start --> */}

    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="text-secondary text-uppercase mb-3">Our Features</h1>
                    <h4 className="mb-5">We Are Trusted Logistics Company Since 1990</h4>
                    <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                        <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>Worldwide Service</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div>
                    <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>On Time Delivery</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div>
                    <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                        <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>24/7 Telephone Support</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="assets/img/feature.jpg" style={{objectFit: "cover"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Feature End --> */}


    {/* <!-- Pricing Start --> */}

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-secondary text-uppercase">Apply For Shipping Service</h1>
                <h4 className="mb-5 text-success">Perfect Shipping Service</h4>
            </div>
            <div className="row g-4">

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Sender Name:</h5></label>
                            <input type="text" className="form-control border-3 " name="contact_name" value={inputs.contact_name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Sender Contact:</h5></label>
                            <input type="text" className="form-control border-3" name="contact_number" value={inputs.contact_number} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Product Weight:</h5></label>
                            <input type="text" className="form-control border-3" name="product_weight" value={inputs.product_weight} onChange={(e) =>{handleChange(e); getPrice(e.target.value,e.target.name);}}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Product Name:</h5></label>
                            <input type="text" className="form-control border-3" name="product_name" value={inputs.product_name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Product Description:</h5></label>
                            <textarea className="form-control border-3" name="product_description" value={inputs.product_description} onChange={handleChange} ></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Receiver Address:</h5></label>
                            <textarea className="form-control border-3" name="receiver_address" value={inputs.receiver_address} onChange={handleChange} ></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Sender Address:</h5></label>
                            <textarea className="form-control border-3" name="sender_address" value={inputs.sender_address} onChange={handleChange} ></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>From City:</h5></label>
                            <select className="form-control border-3" name="from_city" id="from_city" onChange={(e) =>{handleChange(e); getPrice(e.target.value,e.target.name);}}>
                                <option value="" key="">Select City</option>
                                {City.map((d, key) =>
                                    <option selected={d.id == inputs.from_city} value={d.id} key={key}>{d.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>To City:</h5></label>
                            <select className="form-control border-3" name="to_city" id="to_city"  onChange={(e) =>{handleChange(e); getPrice(e.target.value,e.target.name);}}>
                                <option value="" key="">Select City</option>
                                {City.map((d, key) =>
                                    <option selected={d.id == inputs.to_city} value={d.id} key={key}>{d.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Base Price:</h5></label>
                            <input type="text" className="form-control border-3" name="base_price" value={inputs.base_price}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h5>Unit Price:</h5></label>
                            <input type="text" className="form-control border-3" name="unit_price" value={inputs.unit_price}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label className="form-label"><h4>Total Cost:</h4></label>
                            <input type="text" className="form-control border-3" name="shipping_cost" value={inputs.shipping_cost}/>
                        </div>
                    </div>

                    <div className="col-sm-12 d-grid gap-2">
                        <button type="submit" className="btn btn-info w-100 py-3">Submit</button>
                    </div>
                </div>
            </form>

            </div>

        </div>
    </div>

    {/* <!-- Pricing End --> */}


    {/* <!-- Quote Start --> */}

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="text-secondary text-uppercase mb-3">Get A Quote</h1>
                    <h6 className="mb-5">Request A Free Qoute!</h6>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                    <div className="d-flex align-items-center">
                        <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                        <div className="ps-4">
                            <h6>Call for any query!</h6>
                            <h3 className="text-primary m-0">+88 01814 415108</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height: "55px"}}>
                                        <option selected>Select A Freight</option>
                                        <option value="1">Freight 1</option>
                                        <option value="2">Freight 2</option>
                                        <option value="3">Freight 3</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Quote End --> */}

    {/* <!-- Team Start --> */}
    
    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-secondary text-uppercase">Our Team</h1>
                <h6 className="mb-5">Expert Team Members</h6>
            </div>
            <div className="row g-4">

                {expertData.map((expert, index) => (
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" key={index}>
                        <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src={expert.image} />
                        </div>
                        <h5 className="mb-0">{expert.name}</h5>
                        <p>{expert.description}</p>
                        <div className="btn-slide mt-1">
                            <i className="fa fa-share"></i>
                            <span>
                                <a href="./"><i className="fab fa-facebook-f"></i></a>
                                <a href="./"><i className="fab fa-twitter"></i></a>
                                <a href="./"><i className="fab fa-instagram"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>
    </div>

    {/* <!-- Team End --> */}


    {/* <!-- Testimonial Start --> */}


    <TestimonialCarousel />

    {/* <!-- Testimonial End --> */}


    <Footer />


    {/* <!-- Back to Top --> */}
    
    <a href="./" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up"></i></a>



    </div>
        )
    }
    
    export default Home;
