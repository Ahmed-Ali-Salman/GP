import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { type Doctor } from "@shared/schema";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-none">
      <div className="grid grid-cols-[120px,1fr] gap-4">
        <Avatar className="h-[120px] w-[120px] rounded-none">
          <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
          <AvatarFallback>{doctor.name[0]}</AvatarFallback>
        </Avatar>

        <div className="space-y-2">
          <h3 className="font-bold text-primary">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          <p className="text-sm">{doctor.description}</p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">Languages: {doctor.language}</span>
            <div className="space-x-2">
              <Button variant="outline" size="sm">Doctor Profile</Button>
              <Button size="sm" className="bg-[#384766] hover:bg-[#2d3a52]">Book Appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}