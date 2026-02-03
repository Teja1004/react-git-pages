import React from 'react';
import FooterLogo from '../images/ankura_black-bg.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <img src={FooterLogo} alt="Sri Ankura Developers" className="footer-logo" />
            <p>
              Sri Ankura Developers is your trusted partner for quality construction services. We bring your vision to
              life with precision, innovation, and dedication to excellence.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/about">About Us</a>
              </li>
              <li>
                <a href="#/projects">Projects</a>
              </li>
              <li>
                <a href="#/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact Info</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2" /> H.No.4-8-110/SN/159, Road No 5,
              <br /> Suryanagar Colony,
              <br /> Hayath Nagar,
              <br /> Hyderabad – 501505
            </p>
            <p>
              <i className="fas fa-phone me-2" /> +91 9696239999
              <br />
              <i className="fas fa-phone me-2" /> +91 8801969696
              <br />
              <i className="fas fa-phone me-2" /> +91 8688916999
            </p>
            <p>
              <i className="fas fa-envelope me-2" /> sriankuradevelopers@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Sri Ankura Developers. All Rights Reserved. Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
