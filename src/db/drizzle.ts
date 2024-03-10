import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const postgresUrl = process.env.POSTGRES_URL ?? "";
const queryClient = postgres(postgresUrl);
console.log("postgresUrl", postgresUrl);
const db = drizzle(queryClient);

export default db;
