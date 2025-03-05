import { useQuery } from "@tanstack/react-query";
import { type Doctor } from "@shared/schema";
import { useParams } from "wouter";
import { Button } from "@/components/ui/button";

export default function DoctorProfile() {
  const { id } = useParams();
  
  const { data: doctors = [] } = useQuery<Doctor[]>({ 
    queryKey: ["/api/doctors"]
  });

  const doctor = doctors.find(d => d.id === Number(id));

  if (!doctor) {
    return <div className="container py-8">Doctor not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-[#384766]/5 py-4">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-sm breadcrumbs text-muted-foreground mb-2">
            <span>Home</span> / <span>Healthcare Experts</span> / <span>Doctor Profile</span>
          </div>
          <h1 className="font-bold text-2xl">{doctor.name}</h1>
        </div>
      </div>

      <div className="container max-w-[1200px] mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
          <div>
            <div className="bg-white p-6 shadow-sm mb-6">
              <div className="flex items-start gap-6">
                <img 
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-32 h-32 object-cover rounded-sm"
                />
                <div>
                  <h2 className="font-semibold text-lg text-primary mb-2">{doctor.name}</h2>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  <p className="text-sm mt-4">{doctor.description}</p>
                  <p className="text-sm mt-2">Languages: {doctor.language}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Profile</h3>
              <div className="prose max-w-none text-sm">
                <p>Experience and qualifications specific to {doctor.name} will be displayed here.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Booking Availability</h3>
            <div className="border rounded p-4 mb-4">
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {/* Calendar header */}
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="font-medium p-2">{day}</div>
                ))}
                {/* Calendar days */}
                {Array.from({ length: 35 }, (_, i) => (
                  <button 
                    key={i} 
                    className={`p-2 hover:bg-primary/5 ${i === 15 ? 'bg-primary text-primary-foreground' : ''}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full bg-[#384766] hover:bg-[#2d3a52]">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
