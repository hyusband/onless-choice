import { defineConfig } from 'auth-astro';
import Steam from '@auth/core/providers/steam';
import type { Provider } from '@auth/core/providers';

// https://authjs.dev/reference/core/providers/steam
export default defineConfig({
  providers: [
    Steam({
      clientId: process.env.STEAM_API_KEY || '',
      clientSecret: process.env.STEAM_API_KEY || '',
    }) as Provider,
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.steamId = profile.steamid;
        token.username = profile.personaname;
        token.avatar = profile.avatarfull;
        token.profileUrl = profile.profileurl;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.steamId = token.steamId as string;
        session.user.username = token.username as string;
        session.user.avatar = token.avatar as string;
        session.user.profileUrl = token.profileUrl as string;
      }
      return session;
    },
  },
});
