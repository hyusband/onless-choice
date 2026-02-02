import { db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  // @ts-ignore - DownloadLink table is defined in config.ts
  await db.insert(db.DownloadLink).values([
    {
      id: 'default',
      url: 'https://store.steampowered.com/app/4193250/One_Less_Choice/',
      description: 'Default Steam store page - EDIT THIS IN YOUR FORK',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]);
}
