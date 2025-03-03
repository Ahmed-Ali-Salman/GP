import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  const teams = [
    {
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      title: "Expert Medical Team",
      description: "Our team of specialists work together to provide comprehensive care"
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      title: "Modern Facilities",
      description: "State-of-the-art medical facilities and equipment"
    },
    {
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f",
      title: "Patient-First Approach",
      description: "Dedicated to providing personalized care for every patient"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((team, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={team.image} 
                  alt={team.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{team.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{team.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
