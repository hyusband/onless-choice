import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    steamId: column.text({ unique: true }),
    username: column.text(),
    avatar: column.text(),
    profileUrl: column.text(),
    createdAt: column.date({ default: new Date() }),
  }
});

const Session = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text({ references: () => User.columns.id }),
    expiresAt: column.date(),
  }
});

const DownloadLink = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    url: column.text(),
    description: column.text({ optional: true }),
    isActive: column.boolean({ default: true }),
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { User, Session, DownloadLink }
});
