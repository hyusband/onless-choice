# Steam Authentication & Database Setup - Summary

## ✅ What Was Added

### 1. **AstroDB Integration**

- Installed `@astrojs/db` package
- Created database schema in `db/config.ts`:
  - **User** table: Stores Steam user data
  - **Session** table: Manages authentication sessions
  - **DownloadLink** table: Customizable download links
- Created seed file in `db/seed.ts` with default download link

### 2. **Auth.js Steam Authentication**

- Installed `auth-astro` and `@auth/core` packages
- Created `auth.config.ts` with Steam OpenID provider
- Created API route: `pages/api/auth/[...astroauth].ts`
- Updated Astro config to include auth integration

### 3. **UI Components**

- **Navbar**: Added Steam login/logout button
  - Shows user avatar and name when logged in
  - "Login with Steam" button when logged out
- **DownloadSection**:
  - Now fetches download link from database
  - Added forker instructions in comments and UI
  - Shows notice for forkers to edit `db/seed.ts`

### 4. **Configuration Files**

- `.env.example`: Template for environment variables
- `STEAM_AUTH_SETUP.md`: Comprehensive setup guide
- Updated `README.md` with Steam auth info

### 5. **Updated Astro Config**

- Changed output to `server` mode (required for auth)
- Added `db()` and `auth()` integrations

## 📝 Setup Instructions for You

### Step 1: Get Steam API Key

1. Go to https://steamcommunity.com/dev/apikey
2. Register your domain (use your production domain)
3. Copy your API key

### Step 2: Create Environment File

```bash
cp .env.example .env
```

Edit `.env` and add:

```env
STEAM_API_KEY=your_actual_steam_api_key
AUTH_SECRET=$(openssl rand -base64 32)
AUTH_TRUST_HOST=true
```

### Step 3: Initialize Database

```bash
# For local development (creates local SQLite file)
npm run astro db push

# For production with Astro Studio
npm run astro db push --remote
```

### Step 4: Customize Download Link (Optional)

Edit `db/seed.ts` and change the URL:

```typescript
url: 'YOUR_CUSTOM_DOWNLOAD_LINK',
description: 'Your description',
```

Then run: `npm run astro db push` again

### Step 5: Test

```bash
npm run dev
```

Visit the site and click "Login with Steam" in the navbar.

## 🎯 How It Works

### Authentication Flow

1. User clicks "Login with Steam"
2. Redirected to Steam OpenID (`/api/auth/signin/steam`)
3. User authorizes on Steam
4. Redirected back to `/api/auth/callback/steam`
5. Session created and stored in database
6. User info displayed in navbar

### Download Link System

1. Download link stored in `DownloadLink` table
2. `DownloadSection.astro` fetches active link from database
3. Forkers can easily change link by editing `db/seed.ts`
4. No need to modify component code

## 🔧 For Forkers

When someone forks this project, they can:

1. **Change Download Link**:
   - Edit `db/seed.ts`
   - Update the `url` field
   - Run `npm run astro db push`

2. **Setup Their Own Steam Auth**:
   - Get their own Steam API key
   - Add to `.env` file
   - Initialize database

3. **Deploy**:
   - All environment variables work on Vercel, Netlify, etc.
   - Database can be local (SQLite) or remote (Astro Studio)

## 📦 Files Created/Modified

### New Files

- `db/config.ts` - Database schema
- `db/seed.ts` - Seed data
- `auth.config.ts` - Auth configuration
- `pages/api/auth/[...astroauth].ts` - Auth API route
- `.env.example` - Environment template
- `STEAM_AUTH_SETUP.md` - Setup guide

### Modified Files

- `astro.config.mjs` - Added db and auth integrations
- `components/Navbar.astro` - Added login/logout button
- `components/DownloadSection.astro` - Database-driven download link
- `README.md` - Added Steam auth documentation
- `package.json` - Added dependencies

## ⚠️ Important Notes

### Steam OpenID Limitations

- **Localhost**: Steam OpenID may not work on `localhost` in production mode
- **Domain Required**: You need a real domain for production
- **Callback URL**: Must be `https://yourdomain.com/api/auth/callback/steam`

### Database Options

- **Local**: SQLite file (good for development)
- **Remote**: Astro Studio (recommended for production)
- **Custom**: Can use Turso, Planetscale, etc.

### Server Mode

- Changed from `static` to `server` output
- This is required for authentication
- Deployment needs Node.js server (Vercel, Netlify, etc.)

## 🚀 Next Steps

1. **Get Steam API Key** and add to `.env`
2. **Initialize Database**: `npm run astro db push`
3. **Test Locally**: `npm run dev`
4. **Deploy**: Push to Vercel/Netlify with environment variables

## 📚 Resources

- [Steam Web API Docs](https://steamcommunity.com/dev)
- [Auth.js Documentation](https://authjs.dev/)
- [Astro DB Documentation](https://docs.astro.build/en/guides/astro-db/)
- [Full Setup Guide](./STEAM_AUTH_SETUP.md)

---

**¡Todo listo para que configures Steam Auth!** 🎮
