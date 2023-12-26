import React, { useState } from "react";
import { Link } from "react-router-dom";


import { logout } from "../Admin/Auth/auth";

// import './assets/img/favicon.ico';
import './assets/lib/animate/animate.min.css';
import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';




function Header() {

    const [isSignedIn, setIsSignedIn] = useState(() => {
        const userLogged = localStorage.getItem("access_token");
        return userLogged || false;
      });

      const signout = () => {
        setIsSignedIn(false);
        logout();
      }

    return (
        <div>

    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary fixed-top p-0">
        <a href="./" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
            <h2 className="mb-2 text-white">Logistics</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
               <Link to={"/"} className="nav-item nav-link active">Home</Link>
                <Link to={"/about"} className="nav-item nav-link">About</Link>
                <Link to={"/services"} className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <Link to={'./'} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu fade-up m-0">
                        <Link to={"/pricing"} className="dropdown-item">Pricing Plan</Link>
                        <Link to={"/features"} className="dropdown-item">Features</Link>
                        <Link to={"/quote"} className="dropdown-item">Free Quote</Link>
                        <Link to={"/team"} className="dropdown-item">Our Team</Link>
                        <Link to={"/testimonial"} className="dropdown-item">Testimonial</Link>
                        <Link to={"/page"} className="dropdown-item">List</Link>
                    </div>
                </div>
                <Link to={"/contact"} className="nav-item nav-link">Contact</Link>
            </div>
            <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3"></i>+88 01814 415108</h4>
        </div>

        <div className={`offcanvas-menu-wrapper  "active"}`}>
                <div className="offcanvas__logo">
                    <a href="./"><img src="img/logo.png" alt="" /></a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="header__right">
                                
                                {isSignedIn ? (
                                    <div className="header__right__auth">                       
                                        <a href="./dashboard">
                                            Dashboard
                                        </a>

                                        <button className="btn btn-link" type="button" onClick={signout}>
                                        <a href="./" onClick={signout}>
                                            Sign out
                                        </a>                  
                                        </button>
                                        
                                        </div>
                                    ) : (
                        <div className="header__right__auth">
                            <a className="btn btn-link" href="./signin">
                            Sign in
                            </a>
                            <a className="btn btn-link" href="./register">
                            Register
                            </a>
                        </div>
                    )}
                   
                </div>
        </div>

    </nav>

    {/* <!-- Navbar End --> */}


        </div>
    )
}

export default Header;