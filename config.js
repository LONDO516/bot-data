// config.js untuk VERCEL
const config = {
    // ... config lain
    
    // VERCEL akan provide PORT otomatis
    PORT: process.env.PORT || 3000,
    
    // BASE_URL: dapat dari Vercel deployment URL
    BASE_URL: process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}` 
        : "https://your-app-name.vercel.app",
    
    // Atau hardcode URL Vercel Anda
    // BASE_URL: "https://smm-bot-telegram.vercel.app",
};
