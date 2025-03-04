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
      {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrics",
        language: "English, Spanish",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
        description: "Dedicated pediatrician with 10+ years of experience",
      },
      {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Orthopedics",
        language: "English",
        imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
        description: "Specialist in sports medicine and joint surgery",
      },
      {
        id: 5,
        name: "Dr. Priya Patel",
        specialty: "Cardiology",
        language: "English, Hindi, Gujarati",
        imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
        description: "Expert in cardiac rehabilitation and heart health",
      },
      {
        id: 6,
        name: "Dr. David Kim",
        specialty: "Neurology",
        language: "English, Korean",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
        description: "Specialized in neurological disorders and treatment",
      },
      {
        id: 7,
        name: "Dr. Lisa Thompson",
        specialty: "Pediatrics",
        language: "English",
        imageUrl: "https://images.unsplash.com/photo-1551601651-bc60f254d532",
        description: "Focused on developmental pediatrics and child wellness",
      },
      {
        id: 8,
        name: "Dr. Ahmed Hassan",
        specialty: "Cardiology",
        language: "English, Arabic",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
        description: "Specialized in interventional cardiology",
      },
      {
        id: 9,
        name: "Dr. Maria Garcia",
        specialty: "Neurology",
        language: "English, Spanish",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
        description: "Expert in neurological rehabilitation",
      },
      {
        id: 10,
        name: "Dr. John Smith",
        specialty: "Orthopedics",
        language: "English",
        imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
        description: "Specialized in joint replacement surgery",
      },
      {
        id: 11,
        name: "Dr. Sophie Martin",
        specialty: "Pediatrics",
        language: "English, French",
        imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
        description: "Expert in pediatric emergency care",
      },
      {
        id: 12,
        name: "Dr. William Brown",
        specialty: "Cardiology",
        language: "English",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
        description: "Specialized in preventive cardiology",
      }
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