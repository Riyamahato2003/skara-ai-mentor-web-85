
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ModesOverview from '../components/ModesOverview';
import AiInAction from '../components/AiInAction';
import SmartFeatures from '../components/SmartFeatures';
import DashboardShowcase from '../components/DashboardShowcase';
import Testimonials from '../components/Testimonials';
import PrivacySection from '../components/PrivacySection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import FloatingAssistant from '../components/FloatingAssistant';
import { useEffect } from 'react';

const Index = () => {
  // Handle scroll animations
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.scroll-fade-in');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    // Trigger once on load
    setTimeout(handleScrollAnimation, 300);

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ModesOverview />
        <AiInAction />
        <SmartFeatures />
        <DashboardShowcase />
        <Testimonials />
        <PrivacySection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingAssistant />
    </div>
  );
};

export default Index;
