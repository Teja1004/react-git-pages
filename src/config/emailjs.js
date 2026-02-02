// Centralized EmailJS configuration. Values come exclusively from environment variables.
// Ensure these are defined in your .env and restart the dev server after changes.

const EMAILJS = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

// Development aid: log values and warn if missing
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.debug('EmailJS env loaded:', {
    serviceId: EMAILJS.serviceId,
    templateId: EMAILJS.templateId,
    publicKey: EMAILJS.publicKey ? `${EMAILJS.publicKey.slice(0, 4)}…` : undefined,
  });
  if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
    // eslint-disable-next-line no-console
    console.warn('EmailJS: One or more env vars are missing. Check your .env and restart the dev server.');
  }
}

export default EMAILJS;
