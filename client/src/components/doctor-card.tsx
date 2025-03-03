import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Doctor } from "@shared/schema";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm p-6">
      <div className="flex items-start gap-6">
        <img 
          src={doctor.imageUrl} 
          alt={doctor.name} 
          className="w-[100px] h-[100px] object-cover rounded-sm"
        />

        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-primary">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          <p className="text-sm text-muted-foreground">{doctor.description}</p>

          <div className="flex items-center gap-2 pt-2">
            <Button variant="link" size="sm" className="text-xs px-0">
              Doctor Profile
            </Button>
            <Button size="sm" className="bg-[#384766] hover:bg-[#2d3a52]">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}