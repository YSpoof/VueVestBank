import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import Database from "better-sqlite3";

const sqlite = new Database(process.env.DB_PATH || "db.sqlite");

export const db = drizzle(sqlite, {
  schema: {
    ...schema,
  },
});

// seedDatabase().then(() => {
//   seedAdditionalProducts(150);
// });
