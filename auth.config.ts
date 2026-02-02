import { defineConfig } from 'auth-astro';
import type { Provider } from '@auth/core/providers';

// Custom Steam OpenID provider
// Steam doesn't have an official OAuth provider in Auth.js yet
// This is a placeholder configuration - you'll need to implement Steam OpenID manually
// or wait for official support

export default defineConfig({
  providers: [
    // Steam OpenID would go here
    // For now, this is disabled until you add a proper Steam provider
    // You can use a custom provider or wait for Auth.js to add Steam support
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
      if (token && session.user) {
        // @ts-ignore - Custom properties
        session.user.steamId = token.steamId as string;
        // @ts-ignore - Custom properties
        session.user.username = token.username as string;
        // @ts-ignore - Custom properties
        session.user.avatar = token.avatar as string;
        // @ts-ignore - Custom properties
        session.user.profileUrl = token.profileUrl as string;
      }
      return session;
    },
  },
});
