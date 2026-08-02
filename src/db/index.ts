import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

let pool: Pool | undefined;
let dbInstance: ReturnType<typeof drizzle> | undefined;

if (databaseUrl) {
  pool =
    globalForDb.__arenaNextJsPostgresqlPool ??
    new Pool({
      connectionString: databaseUrl,
    });

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
  }

  dbInstance = drizzle(pool);
}

// Export a safe `db` that won't throw at import time. If no DATABASE_URL
// is provided, calls to `execute` will reject so callers can handle it.
export const db =
  dbInstance ??
  // Minimal stub matching the parts of the API the app uses.
  ({
    execute: async () => {
      throw new Error("DATABASE_URL is required at runtime");
    },
  } as unknown as ReturnType<typeof drizzle>);
