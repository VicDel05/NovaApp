# NovaApp Landing Page Demo

Este proyecto es una demostración base (template) para una landing page moderna, minimalista y responsiva. Su propósito es servir como un punto de partida rápido para ofrecer productos o servicios digitales, capturar leads y mostrar características clave.

## 🚀 Características Principales

- **Diseño Mobile-First:** Completamente adaptable a cualquier tamaño de pantalla, desde teléfonos móviles hasta monitores ultrawide.
- **Paleta de Colores Armónica:** Utiliza una combinación de tres colores (`Deep Navy`, `Off-White`, y `Soft Coral`) para transmitir confianza, limpieza y llamados a la acción claros.
- **Componentes Modulares:** Secciones divididas en componentes lógicos y reutilizables.
- **Sin Dependencias Pesadas de UI:** Estilos escritos en CSS puro (Vanilla CSS) utilizando variables CSS, Flexbox y CSS Grid.

## 🛠️ Tecnologías Usadas

- **[React](https://react.dev/)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción súper rápida y servidor de desarrollo.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para un código más robusto y seguro.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de iconos SVG hermosos y consistentes.
- **Vanilla CSS**: Hojas de estilo puras y módulos por componente.

## 📁 Estructura del Proyecto

```text
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes de la interfaz de usuario
│   ├── Header       # Navegación y logo
│   ├── Hero         # Sección principal con CTA
│   ├── Features     # Grid de características destacadas
│   ├── Testimonials # Prueba social y opiniones
│   ├── CTA          # Llamado a la acción final / Formulario
│   └── Footer       # Enlaces, redes sociales y legal
├── App.tsx          # Contenedor principal que ensambla las secciones
├── index.css        # Estilos globales y variables de color
└── main.tsx         # Punto de entrada de la aplicación React
```

## 💻 Cómo ejecutar en entorno local

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (preferiblemente versión 18 o superior) y el gestor de paquetes **pnpm**. Si no tienes pnpm, puedes instalarlo globalmente usando:
```bash
npm install -g pnpm
```

### Instrucciones

1. **Clonar o descargar el repositorio**
2. **Navegar al directorio del proyecto:**
   ```bash
   cd demoLanding
   ```
3. **Instalar las dependencias:**
   ```bash
   pnpm install
   ```
4. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm run dev
   ```
5. **Ver la aplicación:**
   Abre tu navegador y visita `http://localhost:5173` (o el puerto que te indique la terminal).

## 📦 Construcción para Producción

Para compilar la aplicación para producción, ejecuta:
```bash
pnpm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.
