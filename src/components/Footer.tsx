import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">Nova<span className="logo-accent">App</span></a>
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
                <li><a href="#">Características</a></li>
                <li><a href="#">Integraciones</a></li>
                <li><a href="#">Precios</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Compañía</h4>
              <ul>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Carreras</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacidad</a></li>
                <li><a href="#">Términos</a></li>
                <li><a href="#">Seguridad</a></li>
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
