
import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import HeroSection from '../components/HeroSection';
import FeaturesPreview from '../components/FeaturesPreview';
import ModesOverview from '../components/ModesOverview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

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
    <PageLayout>
      <HeroSection />
      <ModesOverview />
      <FeaturesPreview />
      <Testimonials />
      <CallToAction />
    </PageLayout>
  );
};

export default Index;
