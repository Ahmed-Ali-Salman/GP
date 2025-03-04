import { useQuery } from "@tanstack/react-query";
import { type Doctor } from "@shared/schema";
import DoctorCard from "./doctor-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DoctorGridProps {
  searchFilters: {
    name: string;
    specialty: string;
    gender: string;
    language: string;
  }
}

export default function DoctorGrid({ searchFilters }: DoctorGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { data: doctors = [], isLoading } = useQuery<Doctor[]>({ 
    queryKey: ["/api/doctors"]
  });

  // Filter doctors based on search criteria
  const filteredDoctors = doctors.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(searchFilters.name.toLowerCase());
    const specialtyMatch = searchFilters.specialty === 'all' || doctor.specialty.toLowerCase() === searchFilters.specialty.toLowerCase();
    const languageMatch = searchFilters.language === 'all' || doctor.language.toLowerCase().includes(searchFilters.language.toLowerCase());

    return nameMatch && specialtyMatch && languageMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDoctors = filteredDoctors.slice(startIndex, startIndex + itemsPerPage);

  if (isLoading) {
    return <div className="container py-8 text-center">Loading...</div>;
  }

  return (
    <section className="container max-w-[1200px] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => (
            <Button 
              key={i + 1}
              variant="outline" 
              className={`min-w-[40px] ${currentPage === i + 1 ? 'bg-primary text-primary-foreground' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  );
}