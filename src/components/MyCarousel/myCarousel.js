import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const MyCarousel = () => {
  const options = {
    items: 2, // Number of items to display
    loop: true, // Enable infinite loop
    nav: true, // Display navigation buttons
    margin: 10, // Space between items
    autoplay: true, // Auto-play the carousel
    autoplayTimeout: 10000, // Auto-play interval in milliseconds (8 seconds in this case)
    responsive: {
        0: {
            items: 1 // Number of items to display on small screens
        },
        768: {
            items: 1 // Number of items to display on medium screens
        },
        992: {
            items: 1 // Number of items to display on large screens
        }
    }
};
  return (
    <div className="container-fluid p-0 pb-5">
      <div className="container-fluid p-0 pb-5">
        <OwlCarousel className="owl-carousel header-carousel position-relative mb-5" {...options}>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="assets/img/carousel-1.jpg" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(6, 3, 21, .5)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Transport & Logistics Solution</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Logistics</span> Solution</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="./" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="./" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="assets/img/carousel-2.jpg" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(6, 3, 21, .5)"}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-lg-8">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Transport & Logistics Solution</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Transport</span> Solution</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="./" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="./" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </div>
    </div>
  );
};



export default MyCarousel;
