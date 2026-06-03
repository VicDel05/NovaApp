import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ana García",
    role: "Directora de Operaciones",
    company: "TechSolutions",
    content: "Desde que implementamos esta plataforma, nuestra productividad ha aumentado un 40%. La interfaz es tan intuitiva que la adopción por parte del equipo fue inmediata."
  },
  {
    name: "Carlos Mendoza",
    role: "Fundador",
    company: "StartupLab",
    content: "Lo mejor es el soporte técnico y la rapidez con la que cargan los reportes. Nos ha ahorrado horas de trabajo manual cada semana. Totalmente recomendado."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Con la confianza de <span className="text-accent">equipos innovadores</span></h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="star-icon" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
