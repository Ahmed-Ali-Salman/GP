import { useQuery } from "@tanstack/react-query";
import { type Doctor } from "@shared/schema";
import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AppointmentBanner from "@/components/appointment-banner";
import DoctorCard from "@/components/doctor-card";

export default function DoctorProfile() {
  const { id } = useParams();

  const { data: doctors = [] } = useQuery<Doctor[]>({ 
    queryKey: ["/api/doctors"]
  });

  const doctor = doctors.find(d => d.id === Number(id));
  const otherDoctors = doctors.filter(d => d.id !== Number(id)).slice(0, 3);

  if (!doctor) {
    return <div className="container py-8">Doctor not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-[#384766]/5 py-4">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-sm breadcrumbs text-muted-foreground mb-2">
            <span>Home</span> / <span>Healthcare Experts</span> / <span>Doctor Profile</span>
          </div>
          <h1 className="font-bold text-2xl">{doctor.name}</h1>
        </div>
      </div>

      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
          alt="Hospital Building"
          className="w-full h-[200px] md:h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container max-w-[1200px] mx-auto py-8 px-4">
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

            <div className="bg-white shadow-sm">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
                  <TabsTrigger 
                    value="profile" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
                  >
                    Profile
                  </TabsTrigger>
                  <TabsTrigger 
                    value="expertise" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
                  >
                    Expertise
                  </TabsTrigger>
                  <TabsTrigger 
                    value="certificates" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
                  >
                    Certificates/Other
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="profile" className="p-6">
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold mb-4">Professional Background</h3>
                    <p>Dr. {doctor.name} is a highly experienced {doctor.specialty} specialist with extensive training and expertise in the field.</p>
                    <p className="mt-4">Their commitment to patient care and continuous professional development has earned them recognition in the medical community.</p>
                  </div>
                </TabsContent>
                <TabsContent value="expertise" className="p-6">
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold mb-4">Areas of Expertise</h3>
                    <ul>
                      <li>Specialized treatments in {doctor.specialty}</li>
                      <li>Advanced diagnostic procedures</li>
                      <li>Patient-centered care approach</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="certificates" className="p-6">
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold mb-4">Certifications</h3>
                    <ul>
                      <li>Board Certified in {doctor.specialty}</li>
                      <li>Advanced Life Support Certification</li>
                      <li>Various professional memberships</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Booking Availability</h3>
            <div className="border rounded p-4 mb-4">
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="font-medium p-2">{day}</div>
                ))}
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

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Other Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>

      <AppointmentBanner />
      <Footer />
    </div>
  );
}