import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const postgresUrl = process.env.POSTGRES_URL ?? "";
export default {
	schema: "./src/db/schema.ts",
	out: "./src/db/drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: postgresUrl,
	},
} satisfies Config;
