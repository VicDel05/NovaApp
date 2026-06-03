import { Zap, Shield, Smartphone } from 'lucide-react';
import './Features.css';

const featuresList = [
  {
    icon: <Zap size={32} className="feature-icon" />,
    title: 'Rendimiento Ultrarrápido',
    description: 'Optimizado para cargar en milisegundos, ofreciendo la mejor experiencia a tus usuarios y mejorando tu SEO.'
  },
  {
    icon: <Shield size={32} className="feature-icon" />,
    title: 'Seguridad de Grado Bancario',
    description: 'Tus datos y los de tus clientes están protegidos con los estándares de encriptación más rigurosos del mercado.'
  },
  {
    icon: <Smartphone size={32} className="feature-icon" />,
    title: 'Diseño Mobile-First',
    description: 'Adaptación perfecta a cualquier dispositivo. Una interfaz impecable tanto en smartphones como en monitores ultrawide.'
  }
];

export function Features() {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Todo lo que necesitas, <span className="text-accent">sin complicaciones</span></h2>
          <p>Hemos destilado las mejores herramientas en una plataforma fácil de usar.</p>
        </div>
        
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
