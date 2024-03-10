"use server";
import db from "@/db/drizzle";
import { drives } from "@/db/schema";
import type { Drive } from "@/db/schema";
import { eq, sum } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// SELECT * FROM drives
export const getDrives = async () => {
	const data = await db.select().from(drives);
	return data;
};

// SELECT * FROM drives WHERE id = x
export const getDrive = async (id: number) => {
	const data = await db.select().from(drives).where(eq(drives.id, id));
	return data;
};

// SELECT SUM(capacity) FROM drives WHERE installed = true
export const getTotalSize = async () => {
	const data = await db
		.select({ value: sum(drives.capacity).as("value") })
		.from(drives)
		.where(eq(drives.installed, true));
	return data;
};

// SELECT * FROM drives WHERE position = x
export const getDrivesPos = async (position: number) => {
	const data = await db
		.select()
		.from(drives)
		.where(eq(drives.position, position));

	return data;
};

// INSERT INTO drives (name, capacity, installed) VALUES (x, y, z)
export const addDrive = async (drive: Drive) => {
	const data = await db.insert(drives).values(drive);
	return data;
};

// UPDATE drives SET name = x, capacity = y, installed = z WHERE id = x
export const editDrive = async (drive: Drive) => {
	await db.update(drives).set(drive).where(eq(drives.id, drive.id));

	revalidatePath("/");
};

// DELETE FROM drives WHERE id = x
export const deleteDrive = async (id: number) => {
	await db.delete(drives).where(eq(drives.id, id));

	revalidatePath("/");
};
