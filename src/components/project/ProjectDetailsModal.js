import React from 'react';

export default function ProjectDetailsModal({ open, data = {}, onClose }) {
  if (!open) return null;
  const { title, img, description, status, logos = [], gallery = [], info = [] } = data;
  return (
    <>
      <div className="modal fade show" style={{ display: 'block' }} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '820px' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="img-fluid rounded mb-3"
                  style={{ maxWidth: '420px', width: '100%', display: 'block', margin: '0 auto' }}
                />
              )}
              <div className="mb-3">
                {!!status && <span className="badge bg-success me-2">{status}</span>}
                <span>{description}</span>
              </div>

              {!!info.length && (
                <ul className="list-unstyled small mb-3">
                  {info.map((line, idx) => (
                    <li key={idx} className="mb-1">• {line}</li>
                  ))}
                </ul>
              )}

              {!!logos.length && (
                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                  {logos.map((logo, idx) => (
                    <img key={idx} src={logo} alt={`Logo ${idx + 1}`} style={{ height: 40 }} />
                  ))}
                </div>
              )}

              {!!gallery.length && (
                <div className="row g-3">
                  {gallery.map((item, idx) => {
                    const isObj = item && typeof item === 'object' && 'src' in item;
                    const src = isObj ? item.src : item;
                    const caption = isObj ? item.caption : '';
                    return (
                      <div className="col-6 col-md-4" key={idx}>
                        <img src={src} alt={caption || `Gallery ${idx + 1}`} className="img-fluid rounded" />
                        {caption && (
                          <div className="small text-muted mt-1">{caption}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
}
