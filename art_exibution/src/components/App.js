import './App.css';
import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"

function App() {
  return (
    <div>
      <Header/>
      
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ maxHeight: '700px'}}>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src={image1} className="d-block w-100" alt="First Slide" style={{ height: '500px', objectFit: '100%' }} />
                <div className="carousel-caption d-none d-md-block">
                  
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="20000">
                <img src={image2} className="d-block w-100" alt="Second Slide" style={{ height: '500px', objectFit: '100%' }} />
                <div className="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="30000">
                <img src={image3} className="d-block w-100" alt="Third Slide" style={{ height: '500px', objectFit: '100%' }} />
                <div className="carousel-caption d-none d-md-block">
                </div>
            </div>
            
            <div className="carousel-item" data-bs-interval="40000">
                <img src={image4} className="d-block w-100" alt="Third Slide" style={{ height: '500px', objectFit: '100%' }} />
                <div className="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="jumbotron text-center" style={{ backgroundColor: '#f8f9fa', padding: '3rem 1rem', borderRadius: '0.5rem' }}>
            <h1 className="display-4" style={{ color: '#343a40' }}>Explore Art from Home</h1>
            <p className="lead" style={{ color: '#6c757d' }}>Showcasing Local Talent</p>
            <a className="btn btn-primary btn-lg" href="/" role="button" style={{ backgroundColor: '#2e4466', borderColor: '#007bff' }}>Browse Artworks</a>
            <Link className="btn btn-secondary btn-lg" to="/Register" role="button" style={{ backgroundColor: '#1f2124', borderColor: '#6c757d', marginLeft: '10px' }}>Join as an Artist</Link>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
