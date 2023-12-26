import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';// Import the Owl Carousel CSS

const TestimonialCarousel = () => {
  // Owl Carousel options
  const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
  };

  // Testimonial data
  const testimonials = [
    {
      name: 'Client Name 1',
      profession: 'Profession 1',
      content: 'Tempor erat elitr rebum at clita...',
      imageSrc: 'assets/img/testimonial-1.jpg',
    },
    {
      name: 'Client Name 2',
      profession: 'Profession 2',
      content: 'Tempor erat elitr rebum at clita...',
      imageSrc: 'assets/img/testimonial-2.jpg',
    },
    {
      name: 'Client Name 3',
      profession: 'Profession 3',
      content: 'Tempor erat elitr rebum at clita...',
      imageSrc: 'assets/img/testimonial-3.jpg',
    },
    {
      name: 'Client Name 4',
      profession: 'Profession 4',
      content: 'Tempor erat elitr rebum at clita...',
      imageSrc: 'assets/img/testimonial-4.jpg',
    },
  ];

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="text-center">
          <h1 className="text-secondary text-uppercase">Testimonial</h1>
          <h6 className="mb-0">Our Clients Say!</h6>
        </div>
        <OwlCarousel options={options} className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item p-4 my-5">
              <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
              <div className="d-flex align-items-end mb-4">
                <img
                  className="img-fluid flex-shrink-0"
                  src={testimonial.imageSrc}
                  style={{ width: '80px', height: '80px' }}
                  alt={`Client ${index + 1}`}
                />
                <div className="ms-4">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <p className="m-0">{testimonial.profession}</p>
                </div>
              </div>
              <p className="mb-0">{testimonial.content}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
