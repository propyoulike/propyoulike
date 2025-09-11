import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBuilders = () => {
  const builders = [
    {
      id: 1,
      name: "Prestige Group",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop&crop=center",
      rating: 4.8,
      projects: 45,
      locations: 12,
      yearEstablished: 1986,
      description: "Leading real estate developer in South India with premium residential and commercial projects.",
      featured: true
    },
    {
      id: 2,
      name: "Brigade Group",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=120&fit=crop&crop=center",
      rating: 4.7,
      projects: 38,
      locations: 8,
      yearEstablished: 1995,
      description: "Trusted name in Bangalore real estate with innovative and sustainable development.",
      featured: true
    },
    {
      id: 3,
      name: "Sobha Limited",
      logo: "https://images.unsplash.com/photo-1560472354-af33c92cd8cd?w=120&h=120&fit=crop&crop=center",
      rating: 4.9,
      projects: 52,
      locations: 15,
      yearEstablished: 1995,
      description: "Award-winning developer known for quality construction and timely delivery.",
      featured: true
    },
    {
      id: 4,
      name: "Godrej Properties",
      logo: "https://images.unsplash.com/photo-1560472355-a9a6c8866ff2?w=120&h=120&fit=crop&crop=center",
      rating: 4.6,
      projects: 31,
      locations: 9,
      yearEstablished: 1990,
      description: "Part of the Godrej Group, delivering sustainable and innovative living spaces.",
      featured: false
    },
    {
      id: 5,
      name: "Shriram Properties",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=120&fit=crop&crop=center",
      rating: 4.5,
      projects: 29,
      locations: 7,
      yearEstablished: 2000,
      description: "Focused on affordable and mid-segment housing with excellent connectivity.",
      featured: false
    },
    {
      id: 6,
      name: "Puravankara Limited",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop&crop=center",
      rating: 4.4,
      projects: 26,
      locations: 6,
      yearEstablished: 1975,
      description: "Pioneer in Bangalore real estate with focus on quality and customer satisfaction.",
      featured: false
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Top Builders in Bangalore
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Discover Bangalore's most trusted real estate developers. These builders have established 
            their reputation through quality construction, timely delivery, and exceptional customer service.
          </p>
        </div>

        {/* Featured Builders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {builders.map((builder) => (
            <Card 
              key={builder.id} 
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                builder.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {builder.featured && (
                <Badge className="absolute top-4 right-4 z-10">Featured</Badge>
              )}
              
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={builder.logo}
                    alt={builder.name}
                    className="w-16 h-16 rounded-lg object-cover border-2 border-border"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{builder.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <span>Est. {builder.yearEstablished}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{builder.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {builder.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <Building className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{builder.projects}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{builder.locations}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Locations</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1" size="sm" asChild>
                    <a href="/builders">View Builders</a>
                  </Button>
                  <Button className="flex-1" size="sm">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/builders">
            <Button variant="outline" size="lg">
              View All Builders
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBuilders;