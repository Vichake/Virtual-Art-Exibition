import React from "react";
import Header from "./header";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h1 className="text-center mb-4">About Us</h1>
        
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Welcome to the Local Art Exhibition platform! We are dedicated to creating a space where local artists can easily showcase their work to a global audience. Our platform makes art accessible to everyone, providing opportunities for artists and art lovers alike.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              We aim to support and promote local artists by providing them with a digital platform to exhibit their artwork. Whether you're an emerging artist or a seasoned professional, our goal is to help you reach a wider audience and sell your art directly online.
            </p>
          </div>

          <div className="col-md-6">
            <h3>What We Do</h3>
            <p>
              Our platform enables artists to create and manage virtual exhibitions, display their portfolios, and sell their artwork securely. Art lovers can browse, explore, and purchase art, all from the comfort of their homes.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Why Choose Us?</h3>
            <p>
              We offer a user-friendly interface, secure payment options, and a global reach for artists. Whether you're an art enthusiast looking to discover new talents or an artist wanting to expand your reach, our platform is designed to meet your needs.
            </p>
          </div>

          <div className="col-md-6">
            <h3>Join Our Community</h3>
            <p>
              By joining the Local Art Exhibition platform, you'll become part of a growing community of artists and art lovers. Together, we can promote creativity and make local art accessible worldwide.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h4>Contact Us</h4>
            <p>
              For inquiries or more information, feel free to contact us at: 
              <br />
              <strong>Email:</strong> support@localartexhibition.com
              <br />
              <strong>Phone:</strong> +91 9665419502
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
