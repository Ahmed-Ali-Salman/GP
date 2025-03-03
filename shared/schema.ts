import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const doctors = pgTable("doctors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  specialty: text("specialty").notNull(),
  language: text("language").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description").notNull(),
});

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  specialty: text("specialty"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertDoctorSchema = createInsertSchema(doctors).pick({
  name: true,
  specialty: true,
  language: true,
  imageUrl: true,
  description: true,
});

export const insertWaitlistSchema = createInsertSchema(waitlist).pick({
  email: true,
  name: true,
  specialty: true,
});

export type Doctor = typeof doctors.$inferSelect;
export type InsertDoctor = z.infer<typeof insertDoctorSchema>;
export type Waitlist = typeof waitlist.$inferSelect;
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
