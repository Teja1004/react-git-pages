import React, { useEffect, useState } from 'react';
import './contact.css';
import Logo from '../images/Ankura_dev_edited1.png';
import FooterLogo from '../images/ankura_black-bg.png';
import EMAILJS from '../config/emailjs';

export default function Contact() {

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');


  // Auto-dismiss alerts after 5 seconds
  useEffect(() => {
    if (!sent && !sendError) return;
    const t = setTimeout(() => {
      setSent(false);
      setSendError('');
    }, 5000);
    return () => clearTimeout(t);
  }, [sent, sendError]);

  const handleEmailJsSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setSendError('');

    const form = e.currentTarget;
    const full_name = form.full_name?.value?.trim();
    const mobile = form.mobile?.value?.trim();
    const requirement = form.requirement?.value;
    const location = form.location?.value?.trim();

    // Client-side validation
    const mobileOk = /^\d{10}$/.test(mobile || '');
    // reset classes
    form.full_name?.classList.remove('is-invalid');
    form.mobile?.classList.remove('is-invalid');
    if (!full_name || !mobileOk) {
      setSending(false);
      setSendError(!full_name ? 'Please enter your full name.' : 'Please enter a valid 10 digit mobile number.');
      if (!full_name) form.full_name?.classList.add('is-invalid');
      if (!mobileOk) form.mobile?.classList.add('is-invalid');
      return;
    }

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS.serviceId,
          template_id: EMAILJS.templateId,
          user_id: EMAILJS.publicKey,
          template_params: {
            from_name: full_name,
            name: full_name,
            email: '',
            message: `Mobile: ${mobile || 'N/A'}\nRequirement: ${requirement || 'N/A'}\nLocation: ${location || 'N/A'}`,
            time: new Date().toLocaleString(),
          },
        }),
      });

      if (!res.ok) throw new Error(`Failed to send (status ${res.status})`);
      setSent(true);
      form.reset();

    } catch (err) {
      setSendError(err.message || 'Failed to send');
    } finally {
      setSending(false);
    }
  };



  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#/">
            <img src={Logo} alt="Sri Ankura Developers" style={{ height: '56px' }} />
            <span className="brand-text">Sri Ankura Developers</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/about">
                  About Us
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#/projects" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </a>
                <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                  <li>
                    <a className="dropdown-item" href="#/projects">
                      Construction Projects
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#/">Home</a>
              </li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              We'd love to hear from you. Reach out to us for any inquiries or consultations.
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h4>Visit Us</h4>
                <p>
                  H.No.4-8-110/SN/159,Road No 5,
                  <br />
                  Suryanagar Colony,
                  <br />
                  Hayath Nagar,
                  <br />
                  Hyderabad – 501505
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box">
                <div className="contact-icon">
                  <i className="fas fa-phone" />
                </div>
                <h4>Call Us</h4>
                <p>
                  +91 9696239999
                  <br />
                  +91 8801969696
                  <br />
                  +91 8688916999
                  <br />
                  <br />
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box">
                <div className="contact-icon">
                  <i className="fas fa-envelope" />
                </div>
                <h4>Email Us</h4>
                <p>
                  sriankuradevelopers@gmail.com
                  <br />
                  {/* contact@sriankuradevelopers.com
                  <br /> */}
                  <br />
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-form">
                <h3 className="mb-4">Send Us a Message</h3>
                <form id="contactForm" onSubmit={handleEmailJsSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input name="full_name" type="text" className="form-control" placeholder="Your Name *" required />
                    </div>
                    <div className="col-md-6">
                      <input name="mobile" type="tel" className="form-control" placeholder="Phone Number *" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <select name="requirement" className="form-select">
                        <option selected>Select Service</option>
                        <option value="1">Residential Construction</option>
                        <option value="2">Commercial Buildings</option>
                        <option value="3">Independent Houses</option>
                        <option value="4">Renovation & Remodeling</option>
                        <option value="5">Others</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input name="location" type="text" className="form-control" placeholder="Location Preference" />
                    </div>
                  </div>
                  {sent && (
                    <div className="alert alert-success py-2 mt-2" role="alert">Thanks! Your message has been sent.</div>
                  )}
                  {!!sendError && (
                    <div className="alert alert-danger py-2 mt-2" role="alert">{sendError}</div>
                  )}
                  <button type="submit" className="btn-submit" disabled={sending}>{sending ? 'Sending…' : 'Send Message'}</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-container">
                <iframe
                  title="Sri Ankura Developers Location"
                  src="https://www.google.com/maps?q=Hayath%20Nagar%2C%20Telangana&output=embed"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <img
                src={FooterLogo}
                alt="Sri Ankura Developers"
                className="footer-logo"
              />
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
    </>
  );
}
