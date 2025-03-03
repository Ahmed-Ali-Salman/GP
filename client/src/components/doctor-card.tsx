import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { type Doctor } from "@shared/schema";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden border shadow-sm p-4">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-32 w-32 rounded-full mb-4">
          <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
          <AvatarFallback>{doctor.name[0]}</AvatarFallback>
        </Avatar>

        <div className="space-y-2 w-full">
          <h3 className="font-bold text-lg text-primary">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          <p className="text-sm line-clamp-2">{doctor.description}</p>

          <div className="pt-4 space-y-2">
            <p className="text-xs text-muted-foreground">Languages: {doctor.language}</p>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full">Doctor Profile</Button>
              <Button size="sm" className="w-full bg-[#384766] hover:bg-[#2d3a52]">Book Appointment</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}