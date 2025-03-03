import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface HeroProps {
  onSearch: (filters: {
    name: string;
    specialty: string;
    gender: string;
    language: string;
  }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState<string>("all");
  const [gender, setGender] = useState<string>("all");
  const [language, setLanguage] = useState<string>("all");

  const handleSearch = () => {
    onSearch({ name, specialty, gender, language });
  };

  return (
    <section className="py-8 px-4 bg-primary/5">
      <div className="container max-w-[1200px] mx-auto">
        <div className="text-sm breadcrumbs text-muted-foreground mb-6">
          <span>Home</span> / <span>Healthcare Experts</span>
        </div>

        <h1 className="text-2xl font-bold mb-8">
          DOCTOR DIRECTORY / HEALTHCARE EXPERTS
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Input 
            placeholder="Search By Name"
            className="w-[200px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
            </SelectContent>
          </Select>

          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>

          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="gujarati">Gujarati</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            className="bg-[#384766] hover:bg-[#2d3a52]"
            onClick={handleSearch}
          >
            <Search className="h-4 w-4 mr-2" />
            SEARCH
          </Button>
        </div>
      </div>
    </section>
  );
}