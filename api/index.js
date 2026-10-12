const app = require('../index.js'); // Mengimpor konfigurasi app dari file index.js utama di root

// Mengekspor app agar bisa dijalankan sebagai serverless function di Vercel
module.exports = app;