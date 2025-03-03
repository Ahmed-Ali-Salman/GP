import Header from "@/components/header";
import Hero from "@/components/hero";
import DoctorGrid from "@/components/doctor-grid";
import TeamSection from "@/components/team-section";
import WaitlistForm from "@/components/waitlist-form";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    specialty: "all",
    gender: "all",
    language: "all"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onSearch={setSearchFilters} />
        <DoctorGrid searchFilters={searchFilters} />
        <TeamSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}