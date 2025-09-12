import { useState } from 'react';
import { Heart, MapPin, Home, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  originalPrice?: string;
  image: string;
  type: string;
  possession: string;
  configuration: string;
  area: string;
  developer: string;
  isPromoted?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  originalPrice,
  image,
  type,
  possession,
  configuration,
  area,
  developer,
  isPromoted
}: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        {isPromoted && (
          <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
            Promoted
          </Badge>
        )}
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center text-location-text text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {location}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-price-text">{price}</span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {originalPrice}
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {configuration} | {area}
              </div>
            </div>
          </div>

          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <Home className="h-3 w-3 mr-1" />
              {developer}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {possession}
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`/property/${id}`}>View Details</Link>
            </Button>
            <Button size="sm" className="flex-1">
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;