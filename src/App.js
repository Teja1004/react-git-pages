
import React from 'react';
import Home from './components/home/home';
import AboutUs from './components/aboutUs/aboutUs';
import Projects from './components/project/projects';
import Contact from './components/contact/contact';

function App() {
  const [hash, setHash] = React.useState(() => window.location.hash || '#/');

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Always scroll to top when route (hash) changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash]);

  if (hash.startsWith('#/about')) {
    return <AboutUs />;
  }

  if (hash.startsWith('#/projects')) {
    return <Projects />;
  }

  if (hash.startsWith('#/contact')) {
    return <Contact />;
  }

  return <Home />;
}

export default App;

