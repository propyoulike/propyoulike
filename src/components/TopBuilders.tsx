import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
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

        {/* Builder Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {builders.map((builder) => (
            <Link 
              key={builder.id}
              to={`/builder/${builder.id}`}
              className="group flex flex-col items-center space-y-3 p-4 rounded-xl transition-all hover:shadow-lg hover:bg-muted/50"
            >
              <div className="relative">
                {builder.featured && (
                  <Badge className="absolute -top-2 -right-2 z-10 text-xs">Featured</Badge>
                )}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-border group-hover:border-primary transition-colors shadow-sm">
                  <img
                    src={builder.logo}
                    alt={builder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                  {builder.name}
                </h3>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-muted-foreground">{builder.rating}</span>
                </div>
              </div>
            </Link>
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