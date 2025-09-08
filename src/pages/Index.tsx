import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertyListings from '@/components/PropertyListings';
import TopBuilders from '@/components/TopBuilders';
import ProjectsByStage from '@/components/ProjectsByStage';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PropertyListings />
        <TopBuilders />
        <ProjectsByStage />
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
