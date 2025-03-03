import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { type Doctor } from "@shared/schema";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
            <AvatarFallback>{doctor.name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{doctor.name}</h3>
        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
        <p className="text-sm mt-2">{doctor.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{doctor.language}</span>
          <Button variant="outline" size="sm">Book Appointment</Button>
        </div>
      </CardContent>
    </Card>
  );
}
