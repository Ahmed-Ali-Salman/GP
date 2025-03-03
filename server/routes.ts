import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/doctors", async (_req, res) => {
    const doctors = await storage.getDoctors();
    res.json(doctors);
  });

  app.post("/api/waitlist", async (req, res) => {
    const result = insertWaitlistSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }
    
    const waitlistEntry = await storage.createWaitlistEntry(result.data);
    res.json(waitlistEntry);
  });

  return createServer(app);
}
