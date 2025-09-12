import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, User, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Bangalore');

  const cities = [
    'Bangalore'
  ]; {/*, 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad' */}

  const services = [
    'Home Loans', 'Legal Services', 'Interior Design'
  ]; {/*'Property Management', 'Property Valuation' */}

  const resources = [
'Investment Guide', 'EMI Calculator', 'Property Tax'
  ];    {/*'Market Reports', 'Property News' */}

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
                  <span>Projects</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/projects/luxury">Luxury Projects</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/projects/affordable">Affordable Projects</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/projects/eoi">EOI Projects</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/projects/ready-to-move">Ready to Move</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/projects/under-construction">Under Construction</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/projects/resale">Resale Properties</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Apartments</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/properties?type=apartment">View All Apartments</a>
                </DropdownMenuItem>
                <DropdownMenuItem>1 BHK Apartments</DropdownMenuItem>
                <DropdownMenuItem>2 BHK Apartments</DropdownMenuItem>
                <DropdownMenuItem>3 BHK Apartments</DropdownMenuItem>
                <DropdownMenuItem>4+ BHK Apartments</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Villas</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/properties?type=villa">View All Villas</a>
                </DropdownMenuItem>
                <DropdownMenuItem>Independent Villas</DropdownMenuItem>
                <DropdownMenuItem>Villa Communities</DropdownMenuItem>
                <DropdownMenuItem>Luxury Villas</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Plots</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/properties?type=plot">View All Plots</a>
                </DropdownMenuItem>
                <DropdownMenuItem>Residential Plots</DropdownMenuItem>
                <DropdownMenuItem>Commercial Plots</DropdownMenuItem>
                <DropdownMenuItem>BMRDA Approved</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Builders</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/builders">Top Builders</a>
                </DropdownMenuItem>
                <DropdownMenuItem>Featured Developers</DropdownMenuItem>
                <DropdownMenuItem>New Builders</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
              <a href="/partner">Partner with us</a>
            </Button>
            
            <Button variant="ghost" size="icon" title="Favorites" asChild>
              <Link to="/favorites">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" title="Profile" asChild>
              <Link to="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            <Button asChild>
              <a href="/login">Login</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;