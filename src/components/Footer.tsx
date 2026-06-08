import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">Nova<span className="logo-accent">App</span></Link>
            <p>Simplificando el trabajo para equipos modernos en todo el mundo.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">X</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="GitHub">GH</a>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4>Producto</h4>
              <ul>
                <li><Link to="/#features">Características</Link></li>
                <li><Link to="/integrations">Integraciones</Link></li>
                <li><Link to="/pricing">Precios</Link></li>
                <li><Link to="/changelog">Changelog</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Compañía</h4>
              <ul>
                <li><Link to="/about">Sobre Nosotros</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/careers">Carreras</Link></li>
                <li><Link to="/#contact">Contacto</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacidad</Link></li>
                <li><Link to="/terms">Términos</Link></li>
                <li><Link to="/security">Seguridad</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} NovaApp Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}