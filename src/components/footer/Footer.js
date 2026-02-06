import React from 'react';
import FooterLogo from '../../images/ankura_black-bg.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-4 col-md-6 mb-1">
            <img src={FooterLogo} alt="Sri Ankura Developers" className="footer-logo" />
            <p className="mb-2 small">
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

          <div className="col-lg-4 col-md-6 mb-1 text-center">
            <h5 className="mt-4 mb-1">Quick Links</h5>
            <ul className="footer-links d-inline-block text-start m-0 mt-4 p-0 lh-sm">
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

          <div className="col-lg-4 col-md-6 mb-1">
            <h5 className="mt-4 mb-1">Contact Info</h5>
            <p className="mb-2 small mt-4">
              <i className="fas fa-map-marker-alt me-2" /> H.No.4-8-110/SN/159, Road No 5,
              <br /> Suryanagar Colony,
              <br /> Hayath Nagar,
              <br /> Hyderabad – 501505
            </p>
            <p className="mb-2 small">
              <i className="fas fa-phone me-2" /> +91 9696239999
              <br />
              <i className="fas fa-phone me-2" /> +91 8801969696
              <br />
              <i className="fas fa-phone me-2" /> +91 8688916999
            </p>
            <p className="mb-0 small">
              <i className="fas fa-envelope me-2" /> sriankuradevelopers@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom py-0">
          <p className="small mb-0">&copy; 2026 Sri Ankura Developers. All Rights Reserved. Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
