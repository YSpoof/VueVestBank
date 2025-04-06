import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./server/db/schema.ts",
  dialect: "sqlite",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: process.env.DB_PATH || "db.sqlite",
  },
});
