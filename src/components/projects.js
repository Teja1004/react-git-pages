import React, { useEffect, useState } from 'react';
import './projects.css';
import Img1 from '../images/h1.jpeg';
import Img2 from '../images/h2.jpeg';
import Img3 from '../images/h3.jpeg'
import AnkuraHomesLogo from '../images/Ankura_Homes.png';
import AnkuraEnclave from '../images/ankura enclave.png';
import Enclave1 from '../images/Ankura-enclave1.jpeg';
import Enclave2 from '../images/Ankura-enclave2.jpeg';
import Enclave3 from '../images/Ankura-enclave3.jpeg';
import Enclave4 from '../images/Ankura-enclave4.jpeg';
import Enclave5 from '../images/Ankura-enclave5.jpeg';
import Enclave6 from '../images/Ankura-enclave6.jpeg';
import MapImg from '../images/map.png';
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
  const [hoverCard, setHoverCard] = useState(null);

  const PROJECTS_DATA = {
    '1': {
      title: 'Ankura Pride — Luxury Apartments',
      img: Img1,
      description: 'Ankura Pride – Luxury Apartments with Unmatched Lifestyle Amenities. Ankura Pride offers spacious and elegantly designed 2 BHK and 3 BHK apartments within a well-planned residential structure. The project provides access to 15 premium lifestyle amenities with modern facilities designed for comfort and convenience. All homes are Vaastu-compliant with efficient designs that maximize space, ventilation, and functionality. Ankura Pride is strategically located close to IT hubs, reputed schools, colleges, hospitals, malls, and the metro station, offering the perfect mix of connectivity and urban convenience. Step into the world of Ankura Pride, where luxury is redefined through contemporary design, façade lighting, and lush landscapes that create a tranquil and sophisticated ambiance. Each home is crafted with attention to detail, featuring spacious layouts and modern interiors that reflect elegance and practicality. With world-class amenities and beautifully designed residences, Ankura Pride stands as a testament to luxurious living and a comfortable lifestyle. Ankura Pride is located at Abdullapurmet, Pedda Amberpet, Hyderabad, Telangana, India. Spread over 0.14 acres, this premium residential community offers an extraordinary living experience with 15 meticulously designed 2 BHK and 3 BHK apartments for families seeking quality, comfort, and convenience.',

      logos: [

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
    '2': {
      title: 'Ankura Homes — 2 BHK Luxury Apartments @ Hayathnagar',
      img: Img2,
      description: 'Ankura Homes is a premium residential project located in Hayathnagar, offering modern and well-designed 2 BHK luxury apartments. The project is built with a focus on privacy, comfort, and contemporary living, featuring thoughtfully planned interiors with no shared walls. It includes dedicated car parking, quality construction, and efficient space utilization to meet urban lifestyle needs. The architectural design blends aesthetics with functionality to create a peaceful community environment. Ankura Homes aims to provide a high-standard living experience for families seeking a secure and serene home. The project reflects a commitment to quality, modern amenities, and customer-centric design.',
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
    '3': {
      title: 'Ankura Enclave — 2 BHK Apartments',
      img: Enclave1,
      description: 'Ankura Enclave is an exclusive residential project offering thoughtfully designed 2 BHK apartments focused on privacy and modern living. The project features homes with no shared walls, ensuring a peaceful and independent lifestyle for residents. It includes essential amenities such as dedicated car parking, CCTV with 24x7 security, power backup, and rainwater harvesting. The apartments are Vaastu-compliant with good cross-ventilation and quality construction standards. Designed to create a joyful and comfortable environment, the project blends functionality with contemporary aesthetics. Ankura Enclave delivers a perfect personal space for families seeking safety, comfort, and long-term value.',

      logos: [{ src: AnkuraEnclave, caption: 'Ankura Enclave — Project mark' }],
      specs: [
        { title: 'Foundation & Structure', text: 'R.C.C framed Structure with seismic-resistant design.' },
        { title: 'Superstructures', text: 'Red Clay brick work in cement mortar.' },
        { title: 'PAINTING', text: 'Internal: Asian emulsion paint with roller finishing over putty finish. External: ACE paint (Asian Paints).' },
        {
          title: 'ELECTRICAL', items: [
            'Concealed Copper wiring with Finolex / V Guard',
            'Power outlets for air conditioners in all bedrooms',
            'Power outlets for geysers in all bathrooms',
            'Three phase supply for each unit & individual meter boards',
            'One Miniature Circuit breakers (MCB) for each room at the main distribution box',
            'Elegant designer modular electrical switches',
            'Metered connections for consumption of Electricity for each flat'
          ]
        },
        { title: 'PLASTERING', text: 'Internal: Double-coat cement plastering finish with putty. External: Double-coat cement plastering putty or texture for elevation side.' },
        { title: 'Flooring', text: 'Vitrified tiles or 30"×30" size for hall, dining, bedrooms, kitchen and balcony. Corridors: Granite/Tiles. Staircases: Granite.' },
        { title: 'Kitchen', text: 'Granite platform with stainless steel sink. Provision for fixing exhaust fan and chimney.' },
        { title: 'DOORS', text: 'Main Door: Teak wood door frame & flush shutter with veneer, melamine polish and all fittings. Internal Door: Engineered door frame & flush shutter with all fixtures. Windows: UPVC system with plain glass and mosquito mesh track. Grills: MS grills with enamel paint finish.' },
        { title: 'Tile Cladding', text: 'Kitchen: Glazed ceramic tile dado up to 2 ft above platform. Bathrooms: Glazed ceramic tile dado up to 7 ft. Utilities: Tile dado up to 4 ft height.' },
        { title: 'Extra Cost', text: 'Car parking, lift and generator.' },
        { title: 'CABLE / INTERNET / LIFTS', text: 'Cable TV provision in all bedrooms and living room. Internet provision in living room for each flat. Lifts: Standard passenger lifts and service lift with rescue device with V3F.' },
        { title: 'Security / BMS', text: 'Panic button & intercom provided in lifts connected to the security room. Surveillance cameras at the main security, corridor and entrance.' },
      ],
      interior: [
        // { src: Enclave1, caption: 'Project Brochure' },
        // { src: Enclave2, caption: 'Parking Plan' },
        { src: Enclave5, caption: 'Typical Floor Plan' },
        // { src: Enclave6, caption: 'Neighborhood & Approach' },
      ],
      plans: [
        { src: Enclave2, caption: 'Parking Plan' }
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
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)' }}
                />
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
            {detailId === '3' && (
              <div className="row g-4 mt-4">
                <div className="col-lg-6 d-flex">
                  <div className="my-auto">
                    <h3 className="h5 fw-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Thoughtfully Planned Living</h3>
                    <p className="text-secondary mb-2">Experience privacy-first homes with efficient layouts, bright interiors, and ventilation-focused planning. Materials and finishes are selected for long-term reliability and everyday comfort.</p>
                    <ul className="small text-secondary mb-0">
                      <li className="mb-1">No shared walls for enhanced privacy</li>
                      <li className="mb-1">Vaastu-aligned planning and natural airflow</li>
                      <li className="mb-1">Dedicated car parking and essential power backup</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src={Enclave4}
                    alt="Ankura Enclave — exterior view"
                    loading="lazy"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                  />
                </div>
              </div>
            )}
            {/* {detailId === '3' && (
              <div className="row g-4 mt-4">
                <div className="col-12">
                  <img
                    src={Enclave1}
                    alt="Ankura Enclave"
                    loading="lazy"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                  />
                </div>
              </div>
            )} */}
            {detailId === '3' && d.specs && d.specs.length > 0 && (
              <div className="mt-4">
                <h3 className="h5 fw-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Specifications</h3>
                <div className="d-flex flex-column gap-2">
                  {d.specs.map((s, i) => (
                    <div key={i} className="p-3 bg-white rounded-3 shadow-sm border-start border-4" style={{ borderColor: 'var(--primary-color)' }}>
                      <h4 className="h6 fw-semibold mb-1" style={{ color: 'var(--primary-color)' }}>{s.title}</h4>
                      {Array.isArray(s.items) && s.items.length ? (
                        <ul className="small text-secondary mb-0 ps-3">
                          {s.items.map((li, idx) => (
                            <li key={idx} className="mb-1">{li}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="small text-secondary mb-0">{s.text}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!!(d.interior && d.interior.length) && (
              <div className="row g-4 mt-4">
                {detailId === '2' && (
                  <div className="col-12">
                    <h3 className="h5 fw-semibold text-dark mb-2">Interior Design</h3>
                  </div>
                )}
                {detailId === '3' && (
                  <div className="col-12">
                    <h3 className="h5 fw-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Floor & parking plans</h3>
                  </div>
                )}
                {detailId === '3'
                  ? (
                    <>
                      {/* Floor Plan (from Enclave5 in interior) */}
                      <div className="col-12 col-md-6 col-lg-6">
                        <figure className="m-0">
                          <img
                            src={Enclave5}
                            alt="Typical Floor Plan"
                            loading="lazy"
                            className="img-fluid rounded-3 shadow-sm"
                            style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                          />
                          <figcaption className="small text-muted mt-2 text-center">Typical Floor Plan</figcaption>
                        </figure>
                      </div>
                      {/* Parking Plan (from plans[0]) */}
                      {Array.isArray(d.plans) && d.plans[0] && (
                        <div className="col-12 col-md-6 col-lg-6">
                          <figure className="m-0">
                            <img
                              src={d.plans[0].src}
                              alt={d.plans[0].caption || 'Parking Plan'}
                              loading="lazy"
                              className="img-fluid rounded-3 shadow-sm"
                              style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                            />
                            {d.plans[0].caption && <figcaption className="small text-muted mt-2 text-center">{d.plans[0].caption}</figcaption>}
                          </figure>
                        </div>
                      )}
                    </>
                  ) : (
                    d.interior.map((item, idx) => (
                      <div key={idx} className="col-12 col-md-6 col-lg-6">
                        <figure className="m-0">
                          <img
                            src={item.src}
                            alt={item.caption || `Interior ${idx + 1}`}
                            loading="lazy"
                            className="img-fluid rounded-3 shadow-sm"
                            style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                          />
                          {item.caption && <figcaption className="small text-muted mt-2 text-center">{item.caption}</figcaption>}
                        </figure>
                      </div>
                    ))
                  )}
              </div>
            )}

            {!!(d.plans && d.plans.length) && detailId !== '3' && (
              <div className="row g-4 mt-4">
                <div className="col-12">
                  <h3 className="h5 fw-semibold text-dark mb-2">Our Plans</h3>
                </div>
                {d.plans.map((p, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-6">
                    <figure className="m-0">
                      <img
                        src={p.src}
                        alt={p.caption || `Plan ${idx + 1}`}
                        loading="lazy"
                        className="img-fluid rounded-3 shadow-sm"
                        style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                      />
                      {p.caption && <figcaption className="small text-muted mt-2 text-center">{p.caption}</figcaption>}
                    </figure>
                  </div>
                ))}
              </div>
            )}

            {detailId === '2' && (
              <div className="row g-4 mt-4">
                <div className="col-12">
                  <h3 className="h5 fw-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Location</h3>
                </div>
                <div className="col-12">
                  <img
                    src={MapImg}
                    alt="Location"
                    loading="lazy"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                  />
                </div>
              </div>
            )}

            {detailId === '3' && (
              <div className="row g-4 mt-4">
                <div className="col-12">
                  <h3 className="h5 fw-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Location</h3>
                </div>
                <div className="col-12">
                  <img
                    src={Enclave6}
                    alt="Location"
                    loading="lazy"
                    className="img-fluid rounded-3 shadow-sm"
                    style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                  />
                </div>
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
              <div
                className="project-card p-4"
                style={{ position: 'relative' }}
                onClick={() => { window.location.hash = '#/projects?detail=2'; }}
                onMouseEnter={() => setHoverCard('2')}
                onMouseLeave={() => setHoverCard(null)}
              >
                <span className="project-details">Ongoing</span>
                <h4 className="h5 fw-semibold mb-2">Ankura Homes</h4>
                <p className="text-muted mb-1">2 BHK Luxury Apartments @ Hayathnagar</p>
                <p className="text-muted small mb-0">Modern amenities and enhanced privacy with no common walls.</p>
                {hoverCard === '2' && (
                  <span style={{ position: 'absolute', right: 12, bottom: 8, fontSize: 14, fontWeight: 700, color: 'var(--primary-color)', background: 'rgba(255,255,255,0.95)', padding: '2px 8px', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>View details →</span>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="project-card p-4"
                style={{ position: 'relative' }}
                onClick={() => { window.location.hash = '#/projects?detail=1'; }}
                onMouseEnter={() => setHoverCard('1')}
                onMouseLeave={() => setHoverCard(null)}
              >
                <span className="project-details">Completed</span>
                <h4 className="h5 fw-semibold mb-2">Ankura Pride</h4>
                <p className="text-muted mb-1">4 BHK Independent Villa · Hayathnagar</p>
                <p className="text-muted small mb-0">Double‑height living with Vaastu‑aligned planning.</p>
                {hoverCard === '1' && (
                  <span style={{ position: 'absolute', right: 12, bottom: 8, fontSize: 14, fontWeight: 700, color: 'var(--primary-color)', background: 'rgba(255,255,255,0.95)', padding: '2px 8px', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>View details →</span>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="project-card p-4"
                style={{ position: 'relative' }}
                onClick={() => { window.location.hash = '#/projects?detail=3'; }}
                onMouseEnter={() => setHoverCard('3')}
                onMouseLeave={() => setHoverCard(null)}
              >
                <span className="project-details">Completed</span>
                <h4 className="h5 fw-semibold mb-2">Ankura Enclave</h4>
                <p className="text-muted mb-1">Custom 3 BHK Residence</p>
                <p className="text-muted small mb-0">Excellent cross‑ventilation and efficient space planning.</p>
                {hoverCard === '3' && (
                  <span style={{ position: 'absolute', right: 12, bottom: 8, fontSize: 14, fontWeight: 700, color: 'var(--primary-color)', background: 'rgba(255,255,255,0.95)', padding: '2px 8px', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>View details →</span>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card p-4">
                <span className="project-details">Ongoing</span>
                <h4 className="h5 fw-semibold mb-2">Ankura Arcade</h4>
                <p className="text-muted mb-1">Commercial Tower · Ongoing</p>
                <p className="text-muted small mb-0">Flexible floor plates, ample parking.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card p-4">
                <span className="project-details">Completed</span>
                <h4 className="h5 fw-semibold mb-2">Green Meadows Villas</h4>
                <p className="text-muted mb-1">20‑Villa Gated Community</p>
                <p className="text-muted small mb-0">Clubhouse, kids play, landscaped avenues.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="project-card p-4">
                <span className="project-details">Completed</span>
                <h4 className="h5 fw-semibold mb-2">Smart Residence</h4>
                <p className="text-muted mb-1">Contemporary 3 BHK with Smart Features</p>
                <p className="text-muted small mb-0">Smart lighting, security, storage.</p>
              </div>
            </div>
          </div>
          {detailId === '3' && (
            <div className="row g-4 mt-4">
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <h3 className="h5 fw-semibold mb-2" style={{ color: 'var(--primary-color)' }}>Thoughtfully Planned Living</h3>
                  <p className="text-secondary mb-2">Experience privacy-first homes with efficient layouts, bright interiors, and ventilation-focused planning. Materials and finishes are selected for long-term reliability and everyday comfort.</p>
                  <ul className="small text-secondary mb-0">
                    <li className="mb-1">No shared walls for enhanced privacy</li>
                    <li className="mb-1">Vaastu-aligned planning and natural airflow</li>
                    <li className="mb-1">Dedicated car parking and essential power backup</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={Enclave4}
                  alt="Ankura Enclave — exterior view"
                  loading="lazy"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '12px' }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
