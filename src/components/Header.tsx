import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, User, MapPin, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Bangalore');

  const cities = [
    'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'
  ];

  const services = [
    'Property Management', 'Home Loans', 'Legal Services', 'Property Valuation', 'Interior Design'
  ];

  const resources = [
    'Market Reports', 'Property News', 'Investment Guide', 'EMI Calculator', 'Property Tax'
  ];

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/9d86baa8-1b29-4411-81b8-02d3e4527617.png" 
              alt="PropYoulike" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{activeTab}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {cities.map((city) => (
                  <DropdownMenuItem 
                    key={city}
                    onClick={() => setActiveTab(city)}
                  >
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Buy</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Apartments</DropdownMenuItem>
                <DropdownMenuItem>Villas</DropdownMenuItem>
                <DropdownMenuItem>Plots</DropdownMenuItem>
                <DropdownMenuItem>Commercial</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Rent</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Apartments</DropdownMenuItem>
                <DropdownMenuItem>Houses</DropdownMenuItem>
                <DropdownMenuItem>PG/Hostels</DropdownMenuItem>
                <DropdownMenuItem>Commercial</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service) => (
                  <DropdownMenuItem key={service}>{service}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resources.map((resource) => (
                  <DropdownMenuItem key={resource}>{resource}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
              Intelligence
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sell or Rent Property
            </Button>
            
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;