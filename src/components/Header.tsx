import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, User, MapPin, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Bangalore');
  const location = useLocation();
  const isPropertyPage = location.pathname.startsWith('/property/');

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
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9d86baa8-1b29-4411-81b8-02d3e4527617.png" 
              alt="PropYoulike" 
              className="h-8 w-auto"
            />
            {isPropertyPage && (
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Builder Authorized Partner
                </Badge>
              </div>
            )}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/properties">Projects</Link>
            </Button>

            <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/properties?type=apartment">Apartments</Link>
            </Button>

            <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/properties?type=villa">Villas</Link>
            </Button>

            <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/properties?type=plot">Plots</Link>
            </Button>

            <Button variant="ghost" className="hover:bg-accent hover:text-accent-foreground" asChild>
              <Link to="/builders">Builders</Link>
            </Button>
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