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
            <button className="btn-primary btn-large">
              Comenzar gratis <ArrowRight size={20} className="icon-right" />
            </button>
            <button className="btn-secondary btn-large">
              Ver demostración
            </button>
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
