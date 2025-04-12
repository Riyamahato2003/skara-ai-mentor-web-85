
import { Link } from 'react-router-dom';
import { Brain, GraduationCap, Video, Users, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="glass-card p-6 rounded-xl scroll-fade-in">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-foreground/70 mb-4">{description}</p>
    <Link 
      to="/features" 
      className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm"
    >
      Learn more <ArrowRight size={14} />
    </Link>
  </div>
);

const FeaturesPreview = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Study Planner",
      description: "AI-powered study schedules tailored to your learning style and goals."
    },
    {
      icon: GraduationCap,
      title: "AI Interview Coach",
      description: "Practice interviews with AI feedback on your responses and presentation."
    },
    {
      icon: Video,
      title: "AI Video Lessons",
      description: "Custom video explanations for complex topics in your coursework."
    },
    {
      icon: Users,
      title: "Collaboration Features",
      description: "Connect with peers for group studying and shared resources."
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            CGPA Skills AI combines advanced technology with proven learning science to deliver 
            tools that help you excel in your academics and prepare for your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/features" className="button-primary inline-flex items-center gap-2">
            See All Features <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
