import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Doctor } from "@shared/schema";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm p-4 md:p-6">
      <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
        <img 
          src={doctor.imageUrl} 
          alt={doctor.name} 
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded-sm mx-auto sm:mx-0"
        />

        <div className="flex-1 space-y-2 w-full">
          <h3 className="font-semibold text-primary text-sm md:text-base">{doctor.name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{doctor.specialty}</p>
          <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{doctor.description}</p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Button variant="link" size="sm" className="text-xs px-0 h-8">
              Doctor Profile
            </Button>
            <Button size="sm" className="bg-[#384766] hover:bg-[#2d3a52] text-xs h-8 whitespace-nowrap">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}