import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

const randomPixiKey = () => {
  return Math.random().toString(36).slice(2, 9);
};

export const clientsTable = sqliteTable("clients_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const accountsTable = sqliteTable("accounts_table", {
  id: int().primaryKey({ autoIncrement: true }),
  clientId: integer()
    .notNull()
    .references(() => clientsTable.id, { onDelete: "cascade" }),
  pixiKey: text().default(randomPixiKey()).unique(),
  isSuspended: int({ mode: "boolean" }).notNull().default(false),
  balance: int().notNull().default(0),
});

export const transactionsTable = sqliteTable("transactions_table", {
  id: int().primaryKey({ autoIncrement: true }),
  senderAccountId: integer()
    .notNull()
    .references(() => accountsTable.id, { onDelete: "cascade" }),
  senderPixiKey: text()
    .notNull()
    .references(() => accountsTable.pixiKey, { onDelete: "cascade" }),
  receiverAccountId: integer()
    .notNull()
    .references(() => accountsTable.id, { onDelete: "cascade" }),
  receiverPixiKey: text()
    .notNull()
    .references(() => accountsTable.pixiKey, { onDelete: "cascade" }),
  amount: int().notNull(),
  createdAt: text()
    .notNull()
    .default(sql`(current_timestamp)`),
});
