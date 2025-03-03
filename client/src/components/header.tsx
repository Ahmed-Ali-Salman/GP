import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="font-bold text-xl">
                SAIFEE HOSPITAL
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium">HOME</a>
            <a href="#" className="text-sm font-medium">SPECIALITIES</a>
            <a href="#" className="text-sm font-medium">PATIENT SERVICES</a>
            <a href="#" className="text-sm font-medium">HEALTHCARE EXPERTS</a>
            <a href="#" className="text-sm font-medium">FACILITIES</a>
            <a href="#" className="text-sm font-medium">INTERNATIONAL PATIENTS</a>
            <a href="#" className="text-sm font-medium">BLOG</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4"/>
            <span className="text-sm">022-6757-0111</span>
          </div>

          <Button variant="outline" className="bg-white">
            Book an Appointment
          </Button>
        </div>
      </div>
    </header>
  );
}