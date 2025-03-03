import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 text-center bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Find Your Perfect Doctor
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Access world-class healthcare professionals and specialized medical care
        </p>
        
        <div className="mt-8 flex items-center max-w-md mx-auto">
          <Input 
            placeholder="Search doctors by name or specialty"
            className="rounded-r-none"
          />
          <Button size="icon" className="rounded-l-none">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
