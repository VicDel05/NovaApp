import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Simplifica tu trabajo, <span className="text-accent">multiplica tus resultados</span></h1>
          <p>
            La plataforma definitiva para gestionar tus proyectos con eficiencia. 
            Diseñada para equipos modernos que buscan rapidez y claridad en su día a día.
          </p>
          <div className="hero-actions">
            <Link to="/#contact" className="btn-primary btn-large" style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center'}}>
              Comenzar gratis <ArrowRight size={20} className="icon-right" />
            </Link>
            <Link to="/#features" className="btn-secondary btn-large" style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
              Ver demostración
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="placeholder-image">
            <div className="placeholder-content">
              {/* This represents a dashboard mockup or illustration */}
              <div className="mockup-header"></div>
              <div className="mockup-body">
                <div className="mockup-sidebar"></div>
                <div className="mockup-main">
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}