import { useQuery } from "@tanstack/react-query";
import { type Doctor } from "@shared/schema";
import DoctorCard from "./doctor-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DoctorGrid() {
  const { data: doctors, isLoading } = useQuery<Doctor[]>({ 
    queryKey: ["/api/doctors"]
  });

  if (isLoading) {
    return <div className="container py-8">Loading...</div>;
  }

  return (
    <section className="container py-8">
      <div className="space-y-6">
        {doctors?.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" className="min-w-[40px]">1</Button>
        <Button variant="outline" className="min-w-[40px]">2</Button>
        <Button variant="outline" className="min-w-[40px]">3</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}