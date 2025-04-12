
import { BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModeCard = ({ icon: Icon, title, description, items, callout, ctaText }) => (
  <div className="glass-card p-8 rounded-2xl scroll-fade-in">
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
      <Icon size={32} className="text-primary" />
    </div>
    
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-foreground/70 mb-6">{description}</p>
    
    <ul className="space-y-3 mb-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    
    {callout && (
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-lg text-sm mb-6">
        {callout}
      </div>
    )}
    
    <Link to="/features" className="button-primary w-full flex justify-center">
      {ctaText}
    </Link>
  </div>
);

const ModesOverview = () => {
  return (
    <section id="modes" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Mode</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            CGPA Skills AI offers specialized modes to help you excel in academics 
            and prepare for your professional career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ModeCard
            icon={BookOpen}
            title="Study Mode"
            description="Optimize your learning process with AI-powered study tools designed for academic success."
            items={[
              "Personalized study schedules based on your learning style",
              "Smart flashcards that adapt to your knowledge gaps",
              "AI-generated practice questions and quizzes",
              "Concept explanations tailored to your understanding"
            ]}
            callout="Students using Study Mode report a 35% improvement in test scores after just one month."
            ctaText="Explore Study Mode"
          />
          
          <ModeCard
            icon={Briefcase}
            title="Career Mode"
            description="Prepare for your professional journey with AI coaching and career development tools."
            items={[
              "Practice interviews with AI feedback and analysis",
              "Resume and cover letter optimization",
              "Industry-specific question preparation",
              "Soft skills development and assessment"
            ]}
            callout="Career Mode users are 2.5x more likely to receive job offers after interview preparation."
            ctaText="Explore Career Mode"
          />
        </div>
      </div>
    </section>
  );
};

export default ModesOverview;
