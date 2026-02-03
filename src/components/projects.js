import React, { useEffect, useState } from 'react';
import './projects.css';
import Logo from '../images/Ankura_dev_edited1.png';
import FooterLogo from '../images/ankura_black-bg.png';
import Img1 from '../images/h1.jpeg';
import Img2 from '../images/h2.jpeg';
import Img3 from '../images/h3.jpeg';
import Img4 from '../images/h4.jpeg';
import Img5 from '../images/h5.jpeg';
import AnkuraHomesLogo from '../images/Ankura_Homes.png';
import Interior1 from '../images/interior1.png';
import Interior2 from '../images/interior2.png';
import Interior3 from '../images/interior3.png';
import Plan1 from '../images/plan1.png';
import Plan2 from '../images/plan2.png';
import Footer from './Footer';
import Header from './Header';
import FloatingWhatsApp from './FloatingWhatsApp';
// Modal component removed; details are URL-driven

export default function Projects() {
  const [detailId, setDetailId] = useState(null);

  const PROJECTS_DATA = {
    '1': {
      title: 'Premium Residence — 4 BHK Villa, Hayathnagar',
      img: Img1,
      description: 'Spacious 4 BHK independent villa featuring a double‑height living room, Vaastu‑aligned planning, premium finishes, and dedicated car parking.',
      status: 'Completed',
      info: [
        '4 BHK independent villa in Hayathnagar',
        'Double‑height living room with abundant daylight',
        'Vaastu‑aligned planning and efficient layouts',
        'Premium materials and meticulous detailing',
        'Dedicated car parking within the premises',
        'Landscaped surroundings and serene neighborhood'
      ],
      logos: [],
      interior: [
        { src: Interior2, caption: 'Bedroom — calm interiors with ample storage' },
        { src: Interior3, caption: 'Kitchen — modular design with functional workflow' }
      ],
      plans: [
        { src: Plan1, caption: 'Site plan — integrated private parking within villa plot' },
        { src: Plan2, caption: 'Parking Plan' }
      ]
    },
    '2': {
      title: 'Ankura Homes — 2 BHK Luxury Apartments @ Hayathnagar',
      img: Img2,
      description: 'Exclusive 2 BHK apartments designed for comfort and privacy with modern amenities and dedicated car parking in a well-connected location.',
      // status: 'Completed',
      info: [
        '2 BHK Apartments · Hayathnagar',
        'Modern amenities with premium finishes',
        'No common walls for enhanced privacy',
        'Vaastu‑aligned planning and efficient layouts',
        'Dedicated car parking and secure premises',
        'Well‑connected location near daily conveniences'
      ],
      logos: [
        { src: AnkuraHomesLogo, caption: 'Ankura Homes — Project mark' }
      ],
      interior: [
        { src: Interior2, caption: 'Master bedroom — functional design with ample storage' },
        { src: Interior3, caption: 'Modular kitchen — efficient workspace with modern fittings' }
      ],
      plans: [
        { src: Plan1, caption: 'Typical floor plan — optimized 2 BHK layout' },
        { src: Plan2, caption: 'Parking Plan' }
      ]
    },
  };

  // Modal removed; navigation is handled via URL hash params
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

  // Parse detail id from hash query (?detail=1)
  useEffect(() => {
    const readDetailFromHash = () => {
      const hash = window.location.hash || '';
      const qIndex = hash.indexOf('?');
      if (qIndex === -1) { setDetailId(null); return; }
      const qs = hash.substring(qIndex + 1);
      const params = new URLSearchParams(qs);
      const id = params.get('detail');
      setDetailId(id);
    };
    window.addEventListener('hashchange', readDetailFromHash);
    readDetailFromHash();
    return () => window.removeEventListener('hashchange', readDetailFromHash);
  }, []);
  // Detail page view
  if (detailId && PROJECTS_DATA[detailId]) {
    const d = PROJECTS_DATA[detailId];
    return (
      <>
        <Header active="projects" />
        <section className="page-header">
          <div className="container">
            <h1>Project Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                <li className="breadcrumb-item"><a href="#/projects">Projects</a></li>
                <li className="breadcrumb-item active">Details</li>
              </ol>
            </nav>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="mb-4 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                {!!(d.logos && d.logos.length) && (
                  <img src={(d.logos[0] && d.logos[0].src) ? d.logos[0].src : d.logos[0]} alt="Project Logo" style={{ height: 72 }} />
                )}
                <h1 className="h3 fw-semibold text-dark m-0">{d.title}</h1>
              </div>
              <button className="btn btn-outline-secondary" onClick={() => { window.location.hash = '#/projects'; }}>Back</button>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <img src={d.img} alt={d.title} loading="lazy" className="img-fluid rounded-3 shadow-sm" style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} />
              </div>
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <p className="mb-2 text-secondary">{d.status && <span className="badge bg-success me-2">{d.status}</span>} {d.description}</p>
                  {!!(d.info && d.info.length) && (
                    <ul className="list-unstyled small text-secondary mb-0">
                      {d.info.map((it, idx) => <li className="mb-1" key={idx}>• {it}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            {!!(d.interior && d.interior.length) && (
              <div className="row g-4 mt-4">
                <div className="col-12">
                  <h3 className="h5 fw-semibold text-dark mb-2">Interior Design</h3>
                </div>
                {d.interior.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <figure className="m-0">
                      <img src={item.src} alt={item.caption || `Interior ${idx + 1}`} loading="lazy" className="img-fluid rounded-3 shadow-sm" style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover' }} />
                      {item.caption && <figcaption className="small text-muted mt-2">{item.caption}</figcaption>}
                    </figure>
                  </div>
                ))}
              </div>
            )}

            {!!(d.plans && d.plans.length) && (
              <div className="row g-4 mt-4">
                <div className="col-12">
                  <h3 className="h5 fw-semibold text-dark mb-2">Our Plans</h3>
                </div>
                {d.plans.slice(0, 2).map((p, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <figure className="m-0">
                      <img src={p.src} alt={p.caption || `Plan ${idx + 1}`} loading="lazy" className="img-fluid rounded-3 shadow-sm" style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'contain', background: '#fff' }} />
                      {p.caption && <figcaption className="small text-muted mt-2">{p.caption}</figcaption>}
                    </figure>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  return (
    <>
      <Header active="projects" />

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

      {/* Modal removed */}

      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title display-6 fw-semibold text-dark mb-2">Our Portfolio</h2>
            <p className="section-subtitle lead text-secondary mb-0">Explore our projects showcasing quality and innovation</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="project-card" onClick={() => { window.location.hash = '#/projects?detail=2'; }}>
                <span className="project-details">Completed</span>
                <img
                  src={Img2}
                  alt="Ankura Homes - 2 BHK Luxury Apartments @ Hayathnagar"
                  role="button"
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ cursor: 'pointer', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
                />
                <div className="project-overlay">
                  <h4 className="h5 fw-semibold mb-1">Ankura Homes</h4>
                  <p className="small mb-0">2 BHK Luxury Apartments @ Hayathnagar</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card">
                <span className="project-details">Completed</span>
                <img
                  src={Img1}
                  alt="Premium Residence - Hayath Nagar"
                  role="button"
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ cursor: 'pointer', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
                />
                <div className="project-overlay">
                  <h4 className="h5 fw-semibold mb-1">Premium Residence</h4>
                  <p className="small mb-0">4 BHK Independent Villa · Hayathnagar</p>
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
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ cursor: 'pointer', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
                // onClick={() => openModal({
                //   title: 'Signature Home — Custom 3 BHK Residence',
                //   img: Img3,
                //   description: 'Custom 3 BHK residence with airy balconies, excellent cross‑ventilation, efficient space planning, and low‑maintenance materials for long‑term value.',
                //   status: 'Completed'
                // })}
                />
                <div className="project-overlay">
                  <h4 className="h5 fw-semibold mb-1">Signature Home</h4>
                  <p className="small mb-0">Custom 3 BHK Residence</p>
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
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ cursor: 'pointer', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
                // onClick={() => openModal({
                //   title: 'Ankura Arcade — Commercial Tower',
                //   img: Img4,
                //   description: 'Ongoing Grade‑A commercial tower with flexible floor plates, ample parking, and modern building services in a prime, well‑connected location.',
                //   status: 'Ongoing'
                // })}
                />
                <div className="project-overlay">
                  <h4 className="h5 fw-semibold mb-1">Ankura Arcade</h4>
                  <p className="small mb-0">Commercial Tower · Ongoing</p>
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
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ cursor: 'pointer', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
                // onClick={() => openModal({
                //   title: 'Green Meadows Villas — Gated Enclave',
                //   img: Img5,
                //   description: 'Gated enclave of 20 villas with landscaped avenues, clubhouse, children’s play area, and 24×7 security for a safe, community‑centric lifestyle.',
                //   status: 'Completed'
                // })}
                />
                <div className="project-overlay">
                  <h4 className="h5 fw-semibold mb-1">Green Meadows Villas</h4>
                  <p className="small mb-0">20‑Villa Gated Community</p>
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
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ cursor: 'pointer', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }}
                // onClick={() => openModal({
                //   title: 'Smart Residence — Contemporary 3 BHK',
                //   img: Img1,
                //   description: 'Contemporary 3 BHK with smart lighting and security, inverter backup, modular kitchen, and thoughtfully planned storage solutions.',
                //   status: 'Completed'
                // })}
                />
                <div className="project-overlay">
                  <h4 className="h5 fw-semibold mb-1">Smart Residence</h4>
                  <p className="small mb-0">Contemporary 3 BHK with Smart Features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating feature rows */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="row align-items-center g-4 mb-4">
            <div className="col-lg-6">
              <img src={Img1} alt="Ankura Homes — Exterior view" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-lg-6">
              <h3 className="mb-2">Ankura Homes</h3>
              <p className="mb-2 text-muted">2 BHK Luxury Apartments @ Hayathnagar</p>
              <ul className="list-unstyled small mb-0">
                <li className="mb-1">• Modern amenities with premium finishes</li>
                <li className="mb-1">• Dedicated car parking and secure premises</li>
                <li className="mb-1">• Excellent connectivity and prime neighborhood</li>
              </ul>
            </div>
          </div>

          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-lg-2">
              <img src={Img2} alt="Premium Residence — Facade" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h3 className="mb-2">Premium Residence</h3>
              <p className="mb-2 text-muted">4 BHK Independent Villa · Hayathnagar</p>
              <ul className="list-unstyled small mb-0">
                <li className="mb-1">• Double‑height living with Vaastu‑aligned planning</li>
                <li className="mb-1">• Premium materials and meticulous detailing</li>
                <li className="mb-1">• Private parking and landscaped surroundings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
