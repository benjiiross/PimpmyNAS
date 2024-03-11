import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const postgresUrl = process.env.POSTGRES_URL ?? "";
const queryClient = postgres(postgresUrl);
console.log("postgresUrl", postgresUrl);
const db = drizzle(queryClient);

export default db;
