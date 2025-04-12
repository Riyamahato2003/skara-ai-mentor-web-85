
import { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { Sparkles, Lightbulb, Target, Zap } from 'lucide-react';

const AboutSection = ({ title, children, className = "" }) => (
  <section className={`py-16 ${className}`}>
    <div className="container max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="glass-card p-6 rounded-xl scroll-fade-in">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const MilestoneItem = ({ year, title, description }) => (
  <div className="flex gap-6 scroll-fade-in">
    <div className="w-20 h-20 shrink-0 rounded-full glass flex items-center justify-center text-xl font-bold">
      {year}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-8">{description}</p>
    </div>
  </div>
);

const About = () => {
  // Scroll animation
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
    setTimeout(handleScrollAnimation, 300);
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            At CGPA Skills AI, we're committed to making AI-powered education accessible to every student, 
            helping them excel academically and prepare for their professional careers with personalized, 
            adaptive learning tools that evolve with their needs.
          </p>
        </div>
      </div>
      
      <AboutSection title="Our Story">
        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            CGPA Skills AI began with a simple observation: despite having access to more information than ever before,
            students still struggle with effective study methods and career preparation. Our founder, a former education
            technology researcher, recognized that AI could bridge this gap by providing truly personalized learning experiences.
          </p>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            What started as a small project to help local university students quickly grew into a comprehensive
            platform that combines cutting-edge AI with proven educational methodologies. Today, we're proud to
            help thousands of students optimize their study habits and prepare confidently for their future careers.
          </p>
        </div>
      </AboutSection>
      
      <AboutSection title="Our Values" className="bg-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ValueCard 
            icon={Sparkles}
            title="Innovation-Driven"
            description="We continuously push the boundaries of what's possible in AI-assisted education, always seeking new ways to enhance the learning experience."
          />
          <ValueCard 
            icon={Lightbulb}
            title="Deeply Personalized"
            description="We believe that education should adapt to the individual, not the other way around. Our AI creates truly personalized learning paths."
          />
          <ValueCard 
            icon={Target}
            title="Results-Focused"
            description="Everything we build aims to deliver measurable improvements in academic performance and career readiness."
          />
          <ValueCard 
            icon={Zap}
            title="Accessible Excellence"
            description="We're committed to making advanced educational AI accessible to students regardless of their background or circumstances."
          />
        </div>
      </AboutSection>
      
      <AboutSection title="Our Roadmap">
        <div className="space-y-8">
          <MilestoneItem 
            year="2023"
            title="Foundation & Beta Launch"
            description="Development of core study planning and interview coaching features. Limited beta release to university partners."
          />
          <MilestoneItem 
            year="2024"
            title="Public Launch & Expansion"
            description="Official platform launch with comprehensive study tools and career preparation features. Expansion to more universities."
          />
          <MilestoneItem 
            year="2025"
            title="Global Reach & Advanced Features"
            description="International expansion with multilingual support. Introduction of advanced AI video generation and personalization."
          />
          <MilestoneItem 
            year="2026"
            title="Full Ecosystem Integration"
            description="Seamless integration with university systems, corporate recruitment platforms, and continuous learning paths for lifelong education."
          />
        </div>
      </AboutSection>
      
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on this Journey</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            We're just getting started, and we'd love to have you with us as we transform education with AI.
            Whether you're a student, educator, or institution, there's a place for you in the CGPA Skills AI community.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="button-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
