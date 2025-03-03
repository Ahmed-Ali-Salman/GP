import { useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DoctorCard from "./doctor-card";
import { type Doctor } from "@shared/schema";

export default function DoctorGrid() {
  const { data: doctors, isLoading } = useQuery<Doctor[]>({ 
    queryKey: ["/api/doctors"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-16 container">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Doctors</h2>
        
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors?.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
