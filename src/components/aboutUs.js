import React, { useEffect, useState } from 'react';
import './aboutUs.css';
import Logo from '../images/Ankura_dev_edited1.png';
import FooterLogo from '../images/ankura_black-bg.png';
import construction from '../images/constructions.jpg';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function AboutUs() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navStyle = scrolled
        ? { padding: '8px 0', boxShadow: '0 4px 20px var(--shadow-color)', background: 'var(--white)' }
        : {};

    return (
        <>
            <Header active="about" />
            <style>{`
                .nav-link:hover:not(.dropdown-toggle)::after,
                .nav-link.active:not(.dropdown-toggle)::after { width: 60%; }
                .nav-link:not(.dropdown-toggle)::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 50%; width: 0; height: 2px;
                    background: var(--primary-color);
                    transform: translateX(-50%);
                    transition: width 0.3s ease;
                }
                .dropdown-toggle::after {
                    display: inline-block; margin-left: 8px; vertical-align: middle; content: '';
                    border-top: 0.4em solid currentColor;
                    border-right: 0.4em solid transparent;
                    border-left: 0.4em solid transparent;
                    border-bottom: 0;
                }
            `}</style>

            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#/">Home</a>
                            </li>
                            <li className="breadcrumb-item active">About Us</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img
                                src={construction}
                                alt="About Us"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2 className="section-title">Building Excellence Since Years</h2>
                                <p>
                                    Sri Ankura Developers is a premier construction company committed to transforming visions into
                                    reality through quality craftsmanship and innovative solutions. With extensive experience in
                                    residential and commercial construction, we have established ourselves as a trusted name in
                                    the industry.
                                </p>
                                <p>
                                    Our journey began with a simple mission: to build spaces that inspire, comfort, and stand the
                                    test of time. Today, we continue that mission with the same passion and dedication, delivering
                                    projects that exceed expectations and create lasting value for our clients.
                                </p>
                                <p>
                                    Every project we undertake reflects our commitment to excellence, attention to detail, and
                                    unwavering focus on customer satisfaction. We don't just build structures; we build relationships
                                    and communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our Mission & Vision</h2>
                        <p className="section-subtitle">Guided by purpose, driven by excellence</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="mission-vision-card">
                                <i className="fas fa-bullseye" />
                                <h3>Our Mission</h3>
                                <p>
                                    To deliver exceptional construction services that combine quality, innovation, and sustainability.
                                    We strive to exceed client expectations through transparent communication, timely delivery, and
                                    meticulous attention to detail in every project we undertake.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="mission-vision-card">
                                <i className="fas fa-eye" />
                                <h3>Our Vision</h3>
                                <p>
                                    To be recognized as the leading construction company known for architectural excellence,
                                    innovative solutions, and unwavering commitment to quality. We envision creating sustainable
                                    communities that enhance lives and contribute to a better future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p className="section-subtitle">Your trusted partner in construction excellence</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-user-tie" />
                                </div>
                                <h4>Expert Team</h4>
                                <p>Highly qualified engineers, architects, and craftsmen with years of experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-gem" />
                                </div>
                                <h4>Quality Materials</h4>
                                <p>Premium materials from trusted suppliers ensuring durability and longevity</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-compass" />
                                </div>
                                <h4>Vaastu-Compliant</h4>
                                <p>Thoughtfully planned layouts aligned with Vaastu principles for harmony and well-being.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-calendar-check" />
                                </div>
                                <h4>On-Time Delivery</h4>
                                <p>Commitment to completing projects within agreed timelines without compromise</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-video" />
                                </div>
                                <h4>CCTV with 24x7 Security</h4>
                                <p>Round-the-clock surveillance in common areas to keep your community safe and secure.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-handshake" />
                                </div>
                                <h4>Transparency</h4>
                                <p>Clear communication and no hidden costs throughout the project lifecycle</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-bolt" />
                                </div>
                                <h4>Power Back-up Generator</h4>
                                <p>Reliable backup power for essential services ensuring uninterrupted daily life.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-tint" />
                                </div>
                                <h4>Rainwater Harvesting Pit</h4>
                                <p>Eco-friendly water conservation system designed for sustainable living.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">The principles that guide everything we do</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-shield-alt" />
                                </div>
                                <h4>Integrity</h4>
                                <p>We conduct business with honesty, transparency, and ethical practices in all our dealings</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-award" />
                                </div>
                                <h4>Excellence</h4>
                                <p>We pursue the highest standards in every aspect of our work and never compromise on quality</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="why-choose-item">
                                <div className="why-choose-icon">
                                    <i className="fas fa-lightbulb" />
                                </div>
                                <h4>Innovation</h4>
                                <p>We embrace new technologies and methods to deliver cutting-edge construction solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWhatsApp />
        </>
    );
}

