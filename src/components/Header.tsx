import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to hash when location changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Nova<span className="logo-accent">App</span></Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/#features" onClick={() => setIsMenuOpen(false)}>Características</Link></li>
            <li><Link to="/integrations" onClick={() => setIsMenuOpen(false)}>Integraciones</Link></li>
            <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Precios</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</Link></li>
            <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonios</Link></li>
            <li><Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
          </ul>
          <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary nav-cta" style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>Empezar</Link>
        </nav>
      </div>
    </header>
  );
}