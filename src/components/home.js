import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './home.css';
import EMAILJS from '../config/emailjs';
import Img1 from '../images/home-page-workers.jpg';
import Img2 from '../images/h1.jpeg';
import Img3 from '../images/h2.jpeg';
import Img4 from '../images/Ankura-enclave4.jpeg';
import Img6 from '../images/villa.png'
import Img7 from '../images/interior.jpg'
import Img10 from '../images/commercial-building.jpg'
import Img11 from '../images/google.png'
import Img12 from '../images/googlename.png'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function Home() {
  const WA_NUMBER = '919696239999';
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    const handleAnchorClick = e => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#/')) return;
      if (!href || !href.startsWith('#') || href === '#' || href.length <= 1) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = target.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleAnchorClick);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Reviews carousel state and behavior
  const [reviewIndex, setReviewIndex] = useState(0);
  const [slideStep, setSlideStep] = useState(33.3333); // % per slide (3 per view on desktop)

  // Social circle hover text
  const [socialText, setSocialText] = useState('Connect with WhatsApp');



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

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setSendError('');

    const form = e.currentTarget;
    const full_name = form.full_name?.value?.trim();
    const mobile = form.mobile?.value?.trim();
    const requirement = form.requirement?.value;
    const location = form.location?.value?.trim();

    // Basic validation: name and 10-digit mobile required
    const mobileOk = /^\d{10}$/.test(mobile || '');
    // reset invalid classes
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
      console.log("res", res);

      if (!res.ok) throw new Error(`Failed to send (status ${res.status})`);
      setSent(true);
      form.reset();

    } catch (err) {
      setSendError(err.message || 'Failed to send');
    } finally {
      setSending(false);
    }
  };



  // Responsive slide step
  useEffect(() => {
    const updateStep = () => {
      if (window.innerWidth >= 992) {
        setSlideStep(33.3333); // 3 per view
      } else {
        setSlideStep(100); // 1 per view on small screens
      }
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  // Auto-advance
  useEffect(() => {
    const totalSlides = 6; // 3 unique + 3 duplicates
    const perView = slideStep === 100 ? 1 : 3;
    const maxIndex = Math.max(totalSlides - perView, 0);
    const id = setInterval(() => {
      setReviewIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [slideStep]);

  const totalSlides = 6;
  const perView = slideStep === 100 ? 1 : 3;
  const maxIndex = Math.max(totalSlides - perView, 0);
  const handlePrev = () => setReviewIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  const handleNext = () => setReviewIndex(prev => (prev >= maxIndex ? 0 : prev + 1));

  const goToProjectDetail = (id) => {
    window.location.hash = `#/projects?detail=${id}`;
  };

  return (
    <>
      <Header active="home" />

      <section className="hero-section">
        <div className="hero-background" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content">
                <h1 className="hero-title">Building Dreams Into Reality</h1>
                <p className="hero-subtitle">
                  Expert construction services with a commitment to quality, innovation, and excellence. Your trusted
                  partner for residential and commercial projects.
                </p>
                <a href="#/contact" className="btn-custom">
                  Get Started
                </a>
                <a href="#/projects" className="btn-custom btn-outline-custom">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="section about-preview" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image">
                <img
                  src={Img1}
                  alt="About Sri Ankura Developers"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h3>Who We Are</h3>
                <p>
                  Sri Ankura Developers is a leading construction company dedicated to transforming visions into reality.
                  With years of expertise in residential and commercial construction, we deliver projects that exceed
                  expectations.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer satisfaction has made us one of the most trusted
                  names in the construction industry.
                </p>
                <ul className="feature-list">
                  <li>
                    <i className="fas fa-check-circle" /> Expert Team of Engineers & Architects
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Premium Quality Materials
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> On-Time Project Delivery
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> Transparent Pricing & Communication
                  </li>
                </ul>
                <a href="#/about" className="btn-custom mt-3">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section" id="office">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Office</h2>
            <p className="section-subtitle">A glimpse of our workspace where ideas become reality</p>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="about-image">
                <img className='office-image' src={Img8} alt="Sri Ankura Developers Reception Area" />
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="about-image">
                <img className='office-image' src={Img9} alt="Sri Ankura Developers Meeting Room" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section" id="features">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Features</h2>
            <p className="section-subtitle">Key benefits you get with us</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="h-100 p-4 text-center border rounded shadow-sm">
                <div className="display-6 mb-3" style={{ color: 'var(--primary-color)' }}><i className="fas fa-video" /></div>
                <h5 className="mb-2">CCTV with 24x7 Security</h5>
                <p className="mb-0 small text-muted">Round-the-clock surveillance in common areas to keep your community safe and secure.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="h-100 p-4 text-center border rounded shadow-sm">
                <div className="display-6 mb-3" style={{ color: 'var(--primary-color)' }}><i className="fas fa-compass" /></div>
                <h5 className="mb-2">Vaastu-Compliant</h5>
                <p className="mb-0 small text-muted">Homes planned per Vaastu principles for harmony, balance, and well‑being.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="h-100 p-4 text-center border rounded shadow-sm">
                <div className="display-6 mb-3" style={{ color: 'var(--primary-color)' }}><i className="fas fa-bolt" /></div>
                <h5 className="mb-2">Power Back-up Generator</h5>
                <p className="mb-0 small text-muted">Reliable backup power for essential services ensuring uninterrupted daily life.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="h-100 p-4 text-center border rounded shadow-sm">
                <div className="display-6 mb-3" style={{ color: 'var(--primary-color)' }}><i className="fas fa-tint" /></div>
                <h5 className="mb-2">Rainwater Harvesting Pit</h5>
                <p className="mb-0 small text-muted">Eco-friendly water conservation system designed for sustainable living.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="our-projects">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">Explore our latest construction projects and achievements</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card" onClick={() => goToProjectDetail('2')}>
                <img
                  src={Img2}
                  alt="Luxury Villa Project"
                />
                <div className="project-card-body">
                  <h4>Ankura Homes</h4>
                  <p>2 BHK Luxury Apartments @ Hayathnagar</p>
                  <p>Modern amenities and enhanced privacy with no common walls.</p>
                  <a href="#/projects?detail=2" className="project-link">
                    View Details <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card" onClick={() => goToProjectDetail('1')}>
                <img
                  src={Img3}
                  alt="Commercial Complex"
                />
                <div className="project-card-body">
                  <h4>Ankura Pride</h4>
                  <p>4 BHK Independent Villa · Hayathnagar</p>
                  <p>Double‑height living with Vaastu‑aligned planning.</p>
                  <a href="#/projects?detail=1" className="project-link">
                    View Details <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card" onClick={() => goToProjectDetail('3')}>
                <img
                  src={Img4}
                  alt="Apartment Building"
                />
                <div className="project-card-body">
                  <h4>Ankura Enclave</h4>
                  <p>Custom 3 BHK Residence</p>
                  <p>Excellent cross‑ventilation and efficient space planning.</p>
                  <a href="#/projects?detail=3" className="project-link">
                    View Details <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#/projects" className="btn-custom">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section className="section section-bg" id="services">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive construction solutions tailored to your needs</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <img
                  src={Img6}
                  alt="Residential Construction"
                />
                <div className="service-card-body">
                  <h4>Residential Construction</h4>
                  <p>
                    Premium residential projects designed for modern living with comfort, style, and functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <img
                  src={Img10}
                  alt="Commercial Buildings"
                />
                <div className="service-card-body">
                  <h4>Commercial Buildings</h4>
                  <p>Functional and aesthetic commercial spaces designed to drive business success and growth.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-card">
                <img
                  src={Img7}
                  alt="Renovation"
                />
                <div className="service-card-body">
                  <h4>Interior Design</h4>
                  <p>Create elegant, functional interiors with bespoke layouts, smart space planning, and premium finishes tailored to your style and budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Clients Say <span className="highlight">About Us</span></h2>
            <p className="section-subtitle">Over 200 families have entrusted us with the construction of their homes.</p>
          </div>

          <div className="row align-items-stretch g-4">
            {/* Rating Summary */}
            <div className="col-lg-3">
              <div className="rating-summary">
                <h4>Excellent</h4>
                <div className="stars" aria-label="5 star rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="review-count">Based on <strong>84 reviews</strong></div>
                <img className="google-badge" src={Img12} alt="Google" />
              </div>
            </div>

            {/* Review Cards Carousel */}
            <div className="col-lg-9">
              <div className="reviews-carousel">
                <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous reviews">
                  <i className="fas fa-chevron-left" />
                </button>
                <div className="reviews-viewport">
                  <div className="reviews-track" style={{ transform: `translateX(-${reviewIndex * slideStep}%)` }}>
                    <div className="review-slide">
                      <div className="review-card">
                        <div className="review-header">
                          <div className="avatar">D</div>
                          <div className="meta">
                            <div className="name">Rupesh Singh <img className="g-icon" src={Img11} alt="G" /></div>
                            <div className="date">June 16, 2020</div>
                          </div>
                        </div>
                        <div className="stars small">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="review-text">Best in the town for your home construction; excellent work for my home construction and planning.</p>
                      </div>
                    </div>
                    <div className="review-slide">
                      <div className="review-card">
                        <div className="review-header">
                          <div className="avatar">M</div>
                          <div className="meta">
                            <div className="name">Vikranth <img className="g-icon" src={Img11} alt="G" /></div>
                            <div className="date">August 18, 2021</div>
                          </div>
                        </div>
                        <div className="stars small">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="review-text">Done really good work for our home construction design.</p>
                      </div>
                    </div>
                    <div className="review-slide">
                      <div className="review-card">
                        <div className="review-header">
                          <div className="avatar">G</div>
                          <div className="meta">
                            <div className="name">Ramesh Rao <img className="g-icon" src={Img11} alt="G" /></div>
                            <div className="date">January 16, 2022</div>
                          </div>
                        </div>
                        <div className="stars small">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="review-text">Team professionalism and clear communication were the best for keeping me informed and involved at every stage.</p>
                      </div>
                    </div>
                    {/* duplicates for continuous sliding */}
                    <div className="review-slide">
                      <div className="review-card">
                        <div className="review-header">
                          <div className="avatar">D</div>
                          <div className="meta">
                            <div className="name">Devendra Arya <img className="g-icon" src={Img11} alt="G" /></div>
                            <div className="date">November 28, 2023</div>
                          </div>
                        </div>
                        <div className="stars small">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="review-text">Best in the town for your home construction; excellent work for my home construction and planning.</p>
                      </div>
                    </div>
                    <div className="review-slide">
                      <div className="review-card">
                        <div className="review-header">
                          <div className="avatar">M</div>
                          <div className="meta">
                            <div className="name">Shubham Jadhaw <img className="g-icon" src={Img11} alt="G" /></div>
                            <div className="date">September 19, 2024</div>
                          </div>
                        </div>
                        <div className="stars small">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="review-text">Done really good work for our home construction design.</p>
                      </div>
                    </div>
                    <div className="review-slide">
                      <div className="review-card">
                        <div className="review-header">
                          <div className="avatar">G</div>
                          <div className="meta">
                            <div className="name">Goutam Vishwakarma <img className="g-icon" src={Img11} alt="G" /></div>
                            <div className="date">October 23, 2025</div>
                          </div>
                        </div>
                        <div className="stars small">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="review-text">Team professionalism and clear communication were the best for keeping me informed and involved at every stage.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-btn next" onClick={handleNext} aria-label="Next reviews">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section contact-info-section" id="quick-contact">
        <div className="container">
          <div className="row align-items-stretch g-4">
            {/* Left: Social connect circle */}
            <div className="col-lg-6 social-col">
              <div className="social-circle">
                <h5>
                  <a
                    className="wa-text-link"
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi Sri Ankura Developers, I am interested in your construction services. Could you please provide more information?')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialText}
                  </a>
                </h5>
                <a
                  className="social-badge fb"
                  href="#"
                  aria-label="Facebook"
                  onMouseEnter={() => setSocialText('Connect with Facebook')}
                  onMouseLeave={() => setSocialText('Connect with WhatsApp')}
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="social-badge yt"
                  href="#"
                  aria-label="YouTube"
                  onMouseEnter={() => setSocialText('Connect with YouTube')}
                  onMouseLeave={() => setSocialText('Connect with WhatsApp')}
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  className="social-badge wa"
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi Sri Ankura Developers, I am interested in your construction services. Could you please provide more information?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  onMouseEnter={() => setSocialText('Connect with WhatsApp')}
                  onMouseLeave={() => setSocialText('Connect with WhatsApp')}
                >
                  <i className="fab fa-whatsapp" />
                  <span className="wa-annotation">WhatsApp</span>
                </a>
                <a
                  className="social-badge ig"
                  href="#"
                  aria-label="Instagram"
                  onMouseEnter={() => setSocialText('Connect with Instagram')}
                  onMouseLeave={() => setSocialText('Connect with WhatsApp')}
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="social-badge li"
                  href="#"
                  aria-label="LinkedIn"
                  onMouseEnter={() => setSocialText('Connect with LinkedIn')}
                  onMouseLeave={() => setSocialText('Connect with WhatsApp')}
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            {/* Right: Contact card */}
            <div className="col-lg-6">
              <div className="contact-card">
                <div className="contact-card-header">
                  <h4>Contact Information</h4>
                  <p>Fill up the form and our team will get back to you</p>
                  <ul className="mini-contact list-unstyled">
                    <li><i className="fas fa-phone" /> +91 9696239999</li>
                    <li><i className="fas fa-envelope" /> sriankuradevelopers@gmail.com</li>
                    <li><i className="fas fa-map-marker-alt" /> Hayath Nagar, Hyderabad</li>
                  </ul>
                </div>
                <form className="contact-card-body" onSubmit={handleContactSubmit}>
                  {sent && (
                    <div className="alert alert-success py-2 mb-2" role="alert">
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  {!!sendError && (
                    <div className="alert alert-danger py-2 mb-2" role="alert">
                      {sendError}
                    </div>
                  )}
                  <div className="mb-3">
                    <label className="form-label">Full Name <span className="text-danger">*</span></label>
                    <input name="full_name" type="text" className="form-control" placeholder="Enter Your Full Name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile Number <span className="text-danger">*</span></label>
                    <input name="mobile" type="tel" className="form-control" placeholder="Enter Your 10 Digit Mobile No." required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Requirement</label>
                    <select name="requirement" className="form-select">
                      <option>Construction plan</option>
                      <option>Residential construction</option>
                      <option>Commercial buildings</option>
                      <option>Renovation & Remodeling</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Location Preference</label>
                    <input name="location" type="text" className="form-control" placeholder="Location Preference" />
                  </div>
                  <button type="submit" className="btn-build" disabled={sending}>
                    {sending ? 'Sending…' : "Let's Build It"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's build something extraordinary together. Get in touch with us today!</p>
          <a href="#/contact" className="btn-cta">
            Contact Us Now
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
