import {
	boolean,
	date,
	integer,
	pgEnum,
	pgTable,
	serial,
	varchar,
} from "drizzle-orm/pg-core";

export const brandEnum = pgEnum("brand", ["wd", "seagate", "dell"]);

export const drives = pgTable("drives", {
	id: serial("id").primaryKey(),
	position: integer("position"),
	createdAt: date("created_at").default("now()"),
	updatedAt: date("updated_at").default("now()"),
	brand: brandEnum("brand"),
	model: varchar("model"),
	capacity: integer("capacity"),
	image: varchar("image"),
	acqDate: date("acq_date"),
	installed: boolean("installed").default(true),
	purchaseLink: varchar("purchase_link"),
});

export type Drive = typeof drives.$inferSelect;
