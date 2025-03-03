import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-primary/5">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Saifee Hospital</h3>
            <p className="text-sm text-muted-foreground">
              Providing world-class healthcare services since 1975
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+1 (555) 123-4567</li>
              <li>contact@saifeehospital.com</li>
              <li>123 Medical Center Drive</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>General Medicine</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Pediatrics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 8am - 8pm</li>
              <li>Saturday: 9am - 5pm</li>
              <li>Sunday: Emergency Only</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-sm text-muted-foreground text-center">
          © 2024 Saifee Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
