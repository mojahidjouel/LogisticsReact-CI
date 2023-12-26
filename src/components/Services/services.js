import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';
import { Servicesapp } from '../../api/servicesapp';
import Footer from '../Footer/footer';


const Services = props => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Servicesapp();
                setServicesData(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>

        <Header /> 
    
    {/* <!-- Page Header Start --> */}

    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>

    {/* <!-- Page Header End --> */} 

    {/* <!-- Service Start --> */}

    <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-secondary text-uppercase">Our Services</h1>
                <h6 className="mb-5">Explore Our Services</h6>
            </div>
            <div className="row g-4">
                
            {servicesData && servicesData.map((services, index) => (

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


                {/* <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/service-2.jpg" />
                        </div>
                        <h4 className="mb-3">Ocean Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/service-3.jpg" />
                        </div>
                        <h4 className="mb-3">Road Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/service-4.jpg" />
                        </div>
                        <h4 className="mb-3">Train Freight</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/service-5.jpg" />
                        </div>
                        <h4 className="mb-3">Customs Clearance</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/service-6.jpg" />
                        </div>
                        <h4 className="mb-3">Warehouse Solutions</h4>
                        <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                        <a className="btn-slide mt-2" href="./"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
                    </div>
                </div>
                </div> */}

            </div>
        </div>
    </div>

    {/* <!-- Service End --> */}


    

    <Footer />

        </div>
        )
    }

    
    export default Services;