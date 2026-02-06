import React, { useEffect } from 'react';
import Logo from '../../images/Ankura_dev_edited1.png';

export default function Header({ active = 'home' }) {
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

  const isActive = (key) => (active === key ? 'nav-link active' : 'nav-link');

  return (
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
              <a className={isActive('home')} href="#/">Home</a>
            </li>
            <li className="nav-item">
              <a className={isActive('about')} href="#/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className={isActive('projects')} href="#/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className={isActive('contact')} href="#/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
