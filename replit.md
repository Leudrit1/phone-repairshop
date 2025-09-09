# B-repair&service Website

## Overview

B-repair&service is a professional phone repair shop website built for a Swiss repair business specializing in microsoldering and complex smartphone repairs. The project features a modern, responsive design with Swiss branding colors (professional blues and greys) and focuses heavily on microsoldering services. The website includes 5 main pages with interactive features, smooth animations, and mobile-optimized design.

## Recent Changes (September 2025)

- **Complete Website Development**: Created full website with homepage, services, gallery, about, and contact pages
- **Swiss Branding Implementation**: Applied professional color scheme with blues (#1e3a8a), greys (#64748b), and accent colors
- **Responsive Design**: Implemented mobile-first approach with breakpoints for all device sizes
- **Interactive Features**: Added gallery filtering, lightbox modals, contact form validation, and scroll animations
- **German Localization**: All content written in German for Swiss market targeting
- **Express.js Server**: Set up development server with proper routing and no-cache headers

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Architecture

### Website Pages
- **Homepage (index.html)**: Hero section, services preview, gallery showcase, and call-to-action
- **Services (services.html)**: Detailed service descriptions with emphasis on microsoldering
- **Gallery (gallery.html)**: Filterable image grid with lightbox functionality and repair statistics
- **About (about.html)**: Company story, team members, workspace, and certifications
- **Contact (contact.html)**: Contact form, business information, map integration, and emergency section

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript
- **Design Pattern**: Multi-page application with static HTML files
- **Styling Approach**: CSS custom properties for Swiss branding colors and consistent theming
- **Component Structure**: Modular CSS classes with responsive grid layouts
- **Color Scheme**: Professional blues (#1e3a8a, #3b82f6), Swiss greys (#64748b), accent orange (#f97316)

### Interactive Features
- **Navigation**: Mobile hamburger menu with smooth transitions
- **Gallery**: Category filtering with fade animations and lightbox modals
- **Forms**: Real-time validation with German error messages
- **Animations**: Scroll-triggered animations, parallax effects, and hover interactions
- **Responsive**: Mobile-first design with progressive enhancement

### Backend Architecture
- **Server Framework**: Express.js serving static files on port 5000
- **Routing Strategy**: File-based routing with fallback for client-side navigation
- **Development Setup**: No-cache headers for development with graceful shutdown handling
- **Asset Management**: Static file serving with proper MIME types and headers

### JavaScript Architecture
- **Module Pattern**: Feature-based initialization with global state management
- **Event Handling**: Debounced scroll events and throttled animations for performance
- **Interactive Features**: Gallery filtering, lightbox controls, form validation, and scroll effects
- **Error Handling**: Global error catching with graceful fallbacks for older browsers
- **Utilities**: Helper functions for animations, validation, and DOM manipulation

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family for modern typography
- **Font Awesome**: Version 6.0 for comprehensive icon set

### NPM Dependencies
- **Express.js**: ^4.18.2 - Static file server for development
- **Node.js**: >=16.0.0 - Runtime environment requirement

### Development Configuration
- **Package Management**: npm with standard scripts (start, dev)
- **Server Configuration**: Express.js with CORS support and static file serving
- **Build Process**: No build step - direct file serving for simplicity
- **Workflow**: Automated server startup on port 5000 with webview output

### Technical Features
- **Responsive Breakpoints**: Mobile (480px), tablet (768px), desktop (1024px+)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Performance**: Optimized animations, lazy loading concepts, and efficient event handling
- **Browser Support**: Modern browsers with graceful degradation for older versions