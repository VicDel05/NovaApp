import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">Nova<span className="logo-accent">App</span></a>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Características</a></li>
            <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonios</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
          <button className="btn-primary nav-cta">Empezar</button>
        </nav>
      </div>
    </header>
  );
}
