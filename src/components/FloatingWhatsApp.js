import React, { useState } from 'react';

const WA_NUMBER = '919696239999';
const DEFAULT_MSG = 'Hi Sri Ankura Developers, I am interested in your construction services. Could you please provide more information?';

export default function FloatingWhatsApp({ number = WA_NUMBER, message = DEFAULT_MSG }) {
  const [hovered, setHovered] = useState(false);
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 2147483647,
        display: 'inline-block',
        textDecoration: 'none',
        transform: hovered ? 'translateY(-2px) scale(1.03)' : 'none',
        transition: 'transform 160ms ease, box-shadow 160ms ease',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ position: 'relative', display: 'inline-block' }}>
        {/* Radial glow */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            margin: 'auto',
            width: '84px',
            height: '84px',
            borderRadius: '50%',
            background: 'rgba(37, 211, 102, 0.45)',
            filter: 'blur(14px)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1.06)' : 'scale(0.9)',
            transition: 'opacity 220ms ease, transform 220ms ease',
            zIndex: -1,
          }}
        />
        <span
          style={{
            background: '#25D366',
            color: '#fff',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: hovered ? '0 16px 34px rgba(0,0,0,0.28)' : '0 12px 30px rgba(0,0,0,0.22)',
            border: '2px solid rgba(0,0,0,0.06)'
          }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '34px', lineHeight: 1 }} />
        </span>
        <span
          style={{
            position: 'absolute',
            right: 0,
            bottom: '72px',
            whiteSpace: 'nowrap',
            background: 'rgba(17,24,39,0.94)',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 600,
            padding: '8px 10px',
            borderRadius: '8px',
            boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(-4px)' : 'translateY(0px)',
            transition: 'opacity 160ms ease, transform 160ms ease',
            pointerEvents: 'none'
          }}
        >
          Chat us now
        </span>
      </span>
    </a>
  );
}
