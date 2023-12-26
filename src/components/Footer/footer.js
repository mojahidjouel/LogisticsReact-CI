import React from 'react'

const footer = () => {
    return (
        <div>

        {/* <!-- Footer Start --> */}

    <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: "6rem"}}>
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>NVIT, 2no Gate, Chattogram, Bangladesh</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+088 01814 415108</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>mojahidjouel95@gmail.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="./"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href="./"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="./"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href="./"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Services</h4>
                    <a className="btn btn-link" href="./">Air Freight</a>
                    <a className="btn btn-link" href="./">Sea Freight</a>
                    <a className="btn btn-link" href="./">Road Freight</a>
                    <a className="btn btn-link" href="./">Logistic Solutions</a>
                    <a className="btn btn-link" href="./">Industry solutions</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="./">About Us</a>
                    <a className="btn btn-link" href="./">Contact Us</a>
                    <a className="btn btn-link" href="./">Terms & Condition</a>
                    <a className="btn btn-link" href="./">Support</a>
                    <a className="btn btn-link" href="./">Our Services</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="./">WDPF</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                       
                        Designed By <a className="border-bottom" href="./">Muhammad Mojahedul Islam</a>
                        <br />Distributed By <a className="border-bottom" href="./" target="_blank">Round-54</a>
                        </div>               
                    </div>
                </div>
            </div>
    </div>
    
    

    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}

    <a href="./" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up"></i></a>





    </div>
    )
}

export default footer