import type { Config } from "drizzle-kit";

const postgresUrl = process.env.POSTGRES_URL ?? "";
export default {
	schema: "./src/db/schema.ts",
	out: "./src/db/drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: postgresUrl,
	},
} satisfies Config;
