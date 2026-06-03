import './CTA.css';

export function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>¿Listo para llevar tu equipo al siguiente nivel?</h2>
          <p>Únete a miles de profesionales que ya están optimizando su flujo de trabajo. Empieza hoy mismo, sin tarjeta de crédito.</p>
          <div className="cta-form">
            <input type="email" placeholder="Tu correo electrónico" className="cta-input" />
            <button className="btn-primary cta-btn">Comenzar Gratis</button>
          </div>
          <span className="cta-note">Prueba gratuita de 14 días. Cancela en cualquier momento.</span>
        </div>
      </div>
    </section>
  );
}
