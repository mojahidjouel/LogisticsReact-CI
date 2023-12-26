import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


const Contact = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/react_admin/services/contact.php', inputs).then(function(response){
            console.log(response.data);


            event.target.reset();

            navigate('/');
        });
    }
    return (
        <div>

        <Header />
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

{/* <!-- Contact Start --> */}

    <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container contact-page py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-md-6 contact-form wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="text-secondary text-uppercase">Get In Touch</h1>
                    <h6 className="mb-4">Contact For Any Query</h6>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="">Download Now</a>.</p>
                    <div className="bg-light p-4">
                        
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" name="name" onChange={handleChange} className="form-control" id="name" placeholder="Your Name"/>
                                        <label htmlFor="name">Your Name:</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" name="email" onChange={handleChange} className="form-control" id="email" placeholder="Your Email"/>
                                        <label htmlFor="email">Your Email:</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" name="subject" onChange={handleChange} className="form-control" id="subject" placeholder="Subject"/>
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" onChange={handleChange} name="message" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" >Send Message</button>
                                </div>
                            </div>
                        </form>                            
                    </div>



                </div>
                <div className="col-md-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
                    <div className="position-relative h-100">
                        <iframe className="position-absolute w-100 h-100" style={{objectFit: "cover"}}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14758.634239063222!2d91.8228798!3d22.3665177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd88616e78283%3A0x87fd9ee32c00d470!2s2%20No.%20Gate%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1695179544463!5m2!1sen!2sbd"
                        frameBorder="0" allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Contact End --> */}

    <Footer />

        </div>
        )
    }
    
    export default Contact;