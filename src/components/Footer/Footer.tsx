import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">
          © {currentYear} ORQUESTA TÍPICA DI PASQUALE
        </p>
        <nav className="footer-links">
          {/* <a href="#contacto">CONTACTO</a>
          <a href="#discografia">DISCOGRAFÍA</a>
          <a href="#videos">VIDEOS</a>
          <a href="#prensa">PRENSA</a>
          <a href="#bio">BIO</a> */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
