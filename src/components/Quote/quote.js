import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
const Quote = () => {
    return (
        <div>

        <Header />

    {/* <!-- Page Header Start --> */}

    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">Quote</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/home"}><a className="text-white" href="./">Home</a></Link></li>
                    <li className="breadcrumb-item"><Link to={"/pages"}><a className="text-white" href="./">Pages</a></Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Quote</li>
                </ol>
            </nav>
        </div>
    </div>

    {/* <!-- Page Header End --> */}

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
        

    <Footer />

        </div>
        )
    }
    
    export default Quote