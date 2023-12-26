import React from 'react'
import Header from '../Header/header'
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
const Testimonial = () => {
    return (
        <div>

        <Header />

    {/* <!-- Page Header Start --> */}

    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">Testimonial</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/home"}><a className="text-white" href="./">Home</a></Link></li>
                    <li className="breadcrumb-item"><Link to={"/pages"}><a className="text-white" href="./">Pages</a></Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>

    {/* <!-- Page Header End --> */}

    {/* <!-- Testimonial Start --> */}

    {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="text-center">
                <h6 className="text-secondary text-uppercase">Testimonial</h6>
                <h1 className="mb-0">Our Clients Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                    <div className="d-flex align-items-end mb-4">
                        <img className="img-fluid flex-shrink-0" src="assets/img/testimonial-1.jpg" style={{width: "80px", height: "80px"}}/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <p className="m-0">Profession</p>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                    <div className="d-flex align-items-end mb-4">
                        <img className="img-fluid flex-shrink-0" src="assets/img/testimonial-2.jpg" style={{width: "80px", height: "80px"}}/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <p className="m-0">Profession</p>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                    <div className="d-flex align-items-end mb-4">
                        <img className="img-fluid flex-shrink-0" src="assets/img/testimonial-3.jpg" style={{width: "80px", height: "80px"}}/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <p className="m-0">Profession</p>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item p-4 my-5">
                    <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                    <div className="d-flex align-items-end mb-4">
                        <img className="img-fluid flex-shrink-0" src="assets/img/testimonial-4.jpg" style={{width: "80px", height: "80px"}}/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <p className="m-0">Profession</p>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
            </div>
        </div>
    </div> */}

<TestimonialCarousel />

    {/* <!-- Testimonial End --> */}
        

        <Footer />

        </div>
        )
    }
    
    export default Testimonial