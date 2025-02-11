import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import home from "../images/home.png" 
import galleryIcon from "../images/gallary.png"
import exhibitionsIcon from "../images/exibution.png"
import aboutIcon from "../images/about.png"
import './header.css'

const Header = () => {
    return (
        <header className="sticky-top">
            <div className="px-3 py-2 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <img src={logo} alt="Logo" width="50" height="40" className="me-2" style={{ borderRadius:"5px"}} />
                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link to="/" className="nav-link text-white">
                                    <img src={home} alt="Home" width="24" height="24" className="d-block mx-auto mb-1" style={{  borderRadius: "5px" }} />
                                    Home
                                </Link>
                            </li>
                            <li>
                               <Link to="/gallary" className="nav-link text-white">
                                     <img src={galleryIcon} alt="Gallery" width="24" height="24" className="d-block mx-auto mb-1" style={{ borderRadius: "5px"}} />
                                    Gallery
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/exibution" className="nav-link text-white">

                                    <img src={exhibitionsIcon} alt="Exhibitions" width="24" height="24" className="d-block mx-auto mb-1" style={{ borderRadius: "5px"}}/>
                                    Exhibitions
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link text-white">

                                    <img src={aboutIcon} alt="About Us" width="24" height="24" className="d-block mx-auto mb-1" style={{  borderRadius: "5px" }}/>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;