import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import { Expertapp } from '../../api/expertapp';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';


    const Team = props => {
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

    {/* <!-- Page Header Start --> */}

    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/home"}><a className="text-white" href="./">Home</a></Link></li>
                    <li className="breadcrumb-item"><Link to={"/pages"}><a className="text-white" href="./">Pages</a></Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                </ol>
            </nav>
        </div>
    </div>

    {/* <!-- Page Header End --> */}

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

                {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/team-2.jpg" />
                        </div>
                        <h5 className="mb-0">Full Name</h5>
                        <p>Designation</p>
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

                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/team-3.jpg" />
                        </div>
                        <h5 className="mb-0">Full Name</h5>
                        <p>Designation</p>
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

                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="assets/img/team-4.jpg" />
                        </div>
                        <h5 className="mb-0">Full Name</h5>
                        <p>Designation</p>
                        <div className="btn-slide mt-1">
                            <i className="fa fa-share"></i>
                            <span>
                                <a href="./"><i className="fab fa-facebook-f"></i></a>
                                <a href="./"><i className="fab fa-twitter"></i></a>
                                <a href="./"><i className="fab fa-instagram"></i></a>
                            </span>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>

    {/* <!-- Team End --> */}
        

        <Footer />

        </div>
        )
    }
    
    export default Team;