import Header from "@/components/header";
import Hero from "@/components/hero";
import DoctorGrid from "@/components/doctor-grid";
import TeamSection from "@/components/team-section";
import WaitlistForm from "@/components/waitlist-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DoctorGrid />
        <TeamSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
