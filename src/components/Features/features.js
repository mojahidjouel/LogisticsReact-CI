import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import { Featuresapp } from '../../api/featuresapp';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';



const Features = props => {
    const [FeaturesData, setFeaturesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Featuresapp();
                setFeaturesData(data);

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
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">Features</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/home"}><a className="text-white" href="./">Home</a></Link></li>
                    <li className="breadcrumb-item"><Link to={"/pages"}><a className="text-white" href="./">Pages</a></Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Features</li>
                </ol>
            </nav>
        </div>
    </div>

    {/* <!-- Page Header End --> */}

    {/* <!-- Feature Start --> */}

    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">

            
                <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s" >
                    <h1 className="text-secondary text-uppercase mb-3">Our Features</h1>
                    <h6 className="mb-5">We Are Trusted Logistics Company Since 1990</h6>
                

                    {FeaturesData.map((features, index) => (
                    <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s" key={index}>
                        <i className={features.image}></i>
                        <div className="ms-4">
                            <h5>{features.name}</h5>
                            <p className="mb-0">{features.description}</p>
                        </div>
                    </div>
                ))}
                


                    {/* <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>On Time Delivery</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div> */}

                    {/* <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                        <i className="fa fa-headphones text-primary fa-3x flex-shrink-0"></i>
                        <div className="ms-4">
                            <h5>24/7 Telephone Support</h5>
                            <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                        </div>
                    </div> */}

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
    

        <Footer />

        </div>
        )
    }
    
    export default Features