import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './GenericPage.css';

interface GenericPageProps {
  title: string;
}

export function GenericPage({ title }: GenericPageProps) {
  return (
    <div className="generic-page">
      <div className="generic-page-container">
        <h1>{title}</h1>
        <p>Esta es una página de demostración para <strong>{title}</strong>. El contenido real se agregaría aquí.</p>
        <Link to="/" className="back-link">
          <ArrowLeft size={20} className="icon-left" /> Volver al inicio
        </Link>
      </div>
    </div>
  );
}