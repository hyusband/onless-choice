# One Less Choice - Landing Page

🎮 **Official landing page for the psychological horror game One Less Choice**

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 About

One Less Choice is a psychological horror game that combines Russian Roulette with Rock-Paper-Scissors in a deadly duel. This landing page showcases the game with a dark, atmospheric design featuring custom animations and Steam integration.

**[Play on Steam →](https://store.steampowered.com/app/4193250/One_Less_Choice/)**

## ✨ Features

- ⚡ **Lightning Fast**: Built with Astro for optimal performance
- 🎨 **Industrial Horror Theme**: Custom animations and atmospheric effects
- 📱 **Fully Responsive**: Mobile-first design
- 🔍 **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- 🎮 **Steam Integration**: Dynamic content from Steam CDN
- 🔐 **Steam Authentication**: Login with Steam OpenID (Auth.js)
- 🗄️ **Database-Driven**: AstroDB for customizable download links
- 🚀 **Production Ready**: Tested and verified
- 🔧 **Fork-Friendly**: Easy customization for your own projects

## 🛠️ Tech Stack

- [Astro 5.x](https://astro.build/) - Static Site Generator
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [AstroDB](https://docs.astro.build/en/guides/astro-db/) - Database integration
- [Auth.js](https://authjs.dev/) - Steam authentication
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- Custom CSS Animations - Horror effects

## 🔐 Steam Authentication Setup

This project includes Steam login functionality. To set it up:

1. **Get Steam API Key**: [https://steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)
2. **Copy environment file**: `cp .env.example .env`
3. **Add your credentials** to `.env`:
   ```env
   STEAM_API_KEY=your_steam_api_key
   AUTH_SECRET=generate_with_openssl_rand_base64_32
   AUTH_TRUST_HOST=true
   ```
4. **Initialize database**: `npm run astro db push`

📖 **Full setup guide**: See [STEAM_AUTH_SETUP.md](./STEAM_AUTH_SETUP.md)

## 🔧 For Forkers: Customizing Download Links

The download link is stored in the database. To change it:

1. Edit `db/seed.ts` and update the `url` field
2. Run `npm run astro db push` to apply changes

See the forker notice in the Download section of the page for more details.

## 📁 Project Structure

```
├── components/          # Astro components
│   ├── Navbar.astro
│   ├── HeroSection.astro
│   ├── GallerySection.astro
│   ├── MechanicsSection.astro
│   ├── TerminalSection.astro
│   ├── DownloadSection.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro     # Main layout with SEO
├── pages/
│   └── index.astro      # Landing page
├── styles/
│   └── global.css       # Custom animations
└── public/              # Static assets
```

## 🎨 Design Features

### Custom Animations

- CRT scanlines and film grain
- Blood drip effects
- Glitch and chromatic aberration
- Neon pulse effects
- Terminal typewriter
- Heartbeat animations

### Color Palette

- Primary: `#8b0000` (Dark Red)
- Accent: `#ff4444` (Bright Red)
- Background: `#050505` (Near Black)
- Text: `#d1d1d1` (Light Gray)

## 🌐 Deployment

Deploy to your favorite platform:

```bash
# Vercel
vercel deploy

# Netlify
netlify deploy

# Cloudflare Pages
# Connect repository in dashboard
```

## 📄 License

MIT © 2026 Hyusband

## 🔗 Links

- [Steam Store Page](https://store.steampowered.com/app/4193250/One_Less_Choice/)
- [Developer: Hyusband](https://github.com/hyusband)

---

**THE TABLE AWAITS.**
