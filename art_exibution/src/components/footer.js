import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>About Us</h5>
                        <p>
                            Discover and support local artists through our dynamic platform. 
                            Attend virtual exhibitions and purchase unique artworks, all in one place.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h5>Contact Us</h5>
                        <p>Email: <a href="mailto:info@localartexhibition.com" className="text-white">info@localartexhibition.com</a></p>
                        <p>Follow us on:</p>
                        <div>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">Facebook</a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">Instagram</a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; {new Date().getFullYear()} Local Art Exhibition. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
