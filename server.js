const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files
app.use(express.static('.', {
    setHeaders: (res, path) => {
        // Disable caching for development
        res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
    }
}));

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
    // Check if the request is for a static file
    if (req.path.includes('.')) {
        return res.status(404).send('File not found');
    }
    
    // Serve the appropriate HTML file based on the route
    let fileName = 'index.html';
    
    if (req.path.includes('services')) {
        fileName = 'services.html';
    } else if (req.path.includes('gallery')) {
        fileName = 'gallery.html';
    } else if (req.path.includes('about')) {
        fileName = 'about.html';
    } else if (req.path.includes('contact')) {
        fileName = 'contact.html';
    } else if (req.path.includes('preisliste')) {
        fileName = 'preisliste.html';
    }
    
    res.sendFile(path.join(__dirname, fileName));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 B-repair&service website running on http://0.0.0.0:${PORT}`);
    console.log(`📱 Swiss Phone Repair Shop website is ready!`);
    console.log(`🔧 Serving static files with no-cache headers for development`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Received SIGTERM. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 Received SIGINT. Shutting down gracefully...');
    process.exit(0);
});