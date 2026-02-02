import React, { useEffect, useState } from 'react';
import './projects.css';
import Logo from '../images/Ankura_dev_edited1.png';
import FooterLogo from '../images/ankura_black-bg.png';
import Img1 from '../images/h1.jpeg';
import Img2 from '../images/h2.jpeg';
import Img3 from '../images/h3.jpeg';
import Img4 from '../images/h4.jpeg';
import Img5 from '../images/h5.jpeg';

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', img: '', description: '', status: '' });

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData({ title: '', img: '', description: '', status: '' });
    document.body.classList.remove('modal-open');
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
    return () => window.removeEventListener('scroll', handleScroll);
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
                <a
                  className="nav-link dropdown-toggle active"
                  href="#/projects"
                  id="projectsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
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
                <a className="nav-link active" href="#/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="page-header">
        <div className="container">
          <h1>Projects</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#/">Home</a>
              </li>
              <li className="breadcrumb-item active">Projects</li>
            </ol>
          </nav>
        </div>
      </section>

      {modalOpen && (
        <>
          <div className="modal fade show" style={{ display: 'block' }} role="dialog" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '720px' }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalData.title}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <img
                    src={modalData.img}
                    alt={modalData.title}
                    className="img-fluid rounded mb-3"
                    style={{ maxWidth: '420px', width: '100%', display: 'block', margin: '0 auto' }}
                  />
                  <p className="mb-1">
                    {modalData.status && (
                      <span className="badge bg-success me-2">{modalData.status}</span>
                    )}
                    {modalData.description}
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
        </>
      )}

      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-subtitle">
              Explore our projects showcasing quality and innovation
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <span className="project-details">Completed</span>
                <img
                  src={Img1}
                  alt="Premium Residence - Hayath Nagar"
                  role="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal({
                    title: 'Premium Residence - Hayath Nagar',
                    img: Img1,
                    description: 'Modern 4BHK independent villa with contemporary elevation',
                    status: 'Completed'
                  })}
                />
                <div className="project-overlay">
                  <h4>Premium Residence - Hayath Nagar</h4>
                  <p>Modern 4BHK independent villa with contemporary elevation</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <span className="project-details">Completed</span>
                <img
                  src={Img2}
                  alt="Residential Complex - Gated Community"
                  role="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal({
                    title: 'Residential Complex',
                    img: Img2,
                    description: 'Apartment block with landscaped courts and amenities',
                    status: 'Completed'
                  })}
                />
                <div className="project-overlay">
                  <h4>Residential Complex</h4>
                  <p>Apartment block with landscaped courts and amenities</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <span className="project-details">Completed</span>
                <img
                  src={Img3}
                  alt="Independent House - Custom Design"
                  role="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal({
                    title: 'Independent House',
                    img: Img3,
                    description: 'Custom designed 3BHK home with efficient space planning',
                    status: 'Completed'
                  })}
                />
                <div className="project-overlay">
                  <h4>Independent House</h4>
                  <p>Custom designed 3BHK home with efficient space planning</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <span className="project-details">Ongoing</span>
                <img
                  src={Img4}
                  alt="Commercial Tower - Ongoing"
                  role="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal({
                    title: 'Commercial Tower',
                    img: Img4,
                    description: '10-story commercial building in prime location',
                    status: 'Ongoing'
                  })}
                />
                <div className="project-overlay">
                  <h4>Commercial Tower</h4>
                  <p>10-story commercial building in prime location</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <span className="project-details">Completed</span>
                <img
                  src={Img5}
                  alt="Villa Estate - Luxury Villas"
                  role="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal({
                    title: 'Villa Estate',
                    img: Img5,
                    description: 'Gated community with 20 luxury villas',
                    status: 'Completed'
                  })}
                />
                <div className="project-overlay">
                  <h4>Villa Estate</h4>
                  <p>Gated community with 20 luxury villas</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <span className="project-details">Completed</span>
                <img
                  src={Img1}
                  alt="Modern Home - Smart Features"
                  role="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal({
                    title: 'Modern Home',
                    img: Img1,
                    description: 'Contemporary design with smart home features',
                    status: 'Completed'
                  })}
                />
                <div className="project-overlay">
                  <h4>Modern Home</h4>
                  <p>Contemporary design with smart home features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
