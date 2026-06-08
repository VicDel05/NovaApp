import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { GenericPage } from './pages/GenericPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrations" element={<GenericPage title="Integraciones" />} />
            <Route path="/pricing" element={<GenericPage title="Precios" />} />
            <Route path="/changelog" element={<GenericPage title="Changelog" />} />
            <Route path="/about" element={<GenericPage title="Sobre Nosotros" />} />
            <Route path="/blog" element={<GenericPage title="Blog" />} />
            <Route path="/careers" element={<GenericPage title="Carreras" />} />
            <Route path="/privacy" element={<GenericPage title="Privacidad" />} />
            <Route path="/terms" element={<GenericPage title="Términos" />} />
            <Route path="/security" element={<GenericPage title="Seguridad" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;