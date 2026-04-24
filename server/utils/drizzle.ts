import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { join } from 'node:path';
import * as schema from '../database/schema';

export const tables = schema;

const sqlite = new Database(join(process.cwd(), '.data/dev.db'));
export const db = drizzle(sqlite, { schema });

export type User = typeof schema.users.$inferSelect;
