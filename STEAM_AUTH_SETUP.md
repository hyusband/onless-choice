# Steam Authentication Setup Guide

This project includes Steam authentication using Auth.js and AstroDB. Follow these steps to set it up.

## 🔑 Prerequisites

1. **Steam API Key**: Get your API key from [https://steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)
2. **Domain**: You need a domain for Steam OpenID to work (localhost won't work for production)

## 📦 Installation

Dependencies are already installed:

- `@astrojs/db` - Database integration
- `auth-astro` - Authentication for Astro
- `@auth/core` - Core authentication library

## ⚙️ Configuration

### 1. Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Steam API Key from https://steamcommunity.com/dev/apikey
STEAM_API_KEY=your_steam_api_key_here

# Generate with: openssl rand -base64 32
AUTH_SECRET=your_random_secret_here

# Set to true for development
AUTH_TRUST_HOST=true
```

### 2. Database Setup

Initialize the database:

```bash
# For local development
npm run astro db push

# For production (Astro Studio)
npm run astro db push --remote
```

This will create the following tables:

- **User**: Stores Steam user information
- **Session**: Manages user sessions
- **DownloadLink**: Stores customizable download links

### 3. Steam OpenID Configuration

When registering your Steam API key, set your domain:

- **Development**: `http://localhost:4321` (may not work with Steam)
- **Production**: `https://yourdomain.com`

Steam will redirect to: `https://yourdomain.com/api/auth/callback/steam`

## 🚀 Usage

### Login Flow

1. User clicks "Login with Steam" button in navbar
2. Redirected to Steam OpenID
3. User authorizes the application
4. Redirected back with Steam profile data
5. Session created and stored in database

### Logout

Click the "Logout" button in the navbar when logged in.

### Accessing Session Data

In any `.astro` file:

```astro
---
import { getSession } from 'auth-astro/server';

const session = await getSession(Astro.request);

if (session) {
  console.log('User:', session.user);
  console.log('Steam ID:', session.user.steamId);
}
---
```

## 📝 Customizing Download Links

### For Forkers

The download link in the Download section is fetched from the database. To change it:

#### Method 1: Edit Seed File (Recommended for initial setup)

1. Edit `db/seed.ts`:

```typescript
await db.insert(DownloadLink).values([
  {
    id: "default",
    url: "YOUR_DOWNLOAD_LINK_HERE", // Change this
    description: "Your custom description",
    isActive: true,
  },
]);
```

2. Push to database:

```bash
npm run astro db push
```

#### Method 2: Direct Database Update (For production)

Create an admin page or use Astro Studio to update the `DownloadLink` table directly.

## 🗄️ Database Schema

### User Table

- `id` (text, primary key)
- `steamId` (text, unique)
- `username` (text)
- `avatar` (text)
- `profileUrl` (text)
- `createdAt` (date)

### Session Table

- `id` (text, primary key)
- `userId` (text, foreign key)
- `expiresAt` (date)

### DownloadLink Table

- `id` (text, primary key)
- `url` (text) - The download URL
- `description` (text, optional)
- `isActive` (boolean)
- `createdAt` (date)
- `updatedAt` (date)

## 🔧 Troubleshooting

### Steam Login Not Working

1. **Check API Key**: Ensure `STEAM_API_KEY` is set correctly
2. **Domain Issues**: Steam OpenID requires a valid domain (not localhost in production)
3. **Callback URL**: Verify `/api/auth/callback/steam` is accessible
4. **AUTH_SECRET**: Generate a strong secret with `openssl rand -base64 32`

### Database Errors

```bash
# Reset local database
npm run astro db push --force-reset

# Check database status
npm run astro db verify
```

### Session Not Persisting

1. Check `AUTH_SECRET` is set
2. Verify `AUTH_TRUST_HOST=true` in development
3. Clear browser cookies and try again

## 📚 Resources

- [Auth.js Documentation](https://authjs.dev/)
- [Astro DB Documentation](https://docs.astro.build/en/guides/astro-db/)
- [Steam Web API Documentation](https://steamcommunity.com/dev)
- [Steam OpenID](https://steamcommunity.com/dev)

## 🎮 Features

- ✅ Steam OpenID authentication
- ✅ User session management
- ✅ Database-driven download links
- ✅ Easy customization for forkers
- ✅ Secure session handling
- ✅ Responsive login UI

---

**Need help?** Check the [Auth.js Discord](https://discord.gg/authjs) or [Astro Discord](https://astro.build/chat)
