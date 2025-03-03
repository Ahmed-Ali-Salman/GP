import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="font-bold text-xl">
              Saifee Hospital
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="ml-auto flex items-center space-x-4">
          <Select defaultValue="en">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
          
          <Button>Book Appointment</Button>
        </div>
      </div>
    </header>
  );
}
