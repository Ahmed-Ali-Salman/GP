import { type Doctor, type InsertDoctor, type Waitlist, type InsertWaitlist } from "@shared/schema";

export interface IStorage {
  getDoctors(): Promise<Doctor[]>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
}

export class MemStorage implements IStorage {
  private doctors: Doctor[];
  private waitlist: Waitlist[];
  private waitlistId: number;

  constructor() {
    this.doctors = [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        language: "English",
        imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7",
        description: "Experienced cardiologist specializing in preventive care",
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurology",
        language: "English, Mandarin",
        imageUrl: "https://images.unsplash.com/photo-1605684954998-685c79d6a018",
        description: "Board-certified neurologist with focus on stroke prevention",
      },
      // Add more doctors with the provided stock photos
    ];
    this.waitlist = [];
    this.waitlistId = 1;
  }

  async getDoctors(): Promise<Doctor[]> {
    return this.doctors;
  }

  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const waitlistEntry: Waitlist = {
      id: this.waitlistId++,
      ...entry,
      createdAt: new Date(),
    };
    this.waitlist.push(waitlistEntry);
    return waitlistEntry;
  }
}

export const storage = new MemStorage();
