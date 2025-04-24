import { useEffect } from 'react';
import { Brain, Calendar, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import CallToAction from '../components/CallToAction';

const FeatureSection = ({ icon: Icon, title, description, items, className = "" }) => (
  <div className={`py-16 scroll-fade-in ${className}`} id={title.toLowerCase().replace(/\s+/g, '-')}>
    <div className="container max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3">
          <div className="w-16 h-16 glass-card flex items-center justify-center mb-6 rounded-2xl">
            <Icon size={32} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-foreground/70">{description}</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:shadow-hover transition-all duration-300 hover:translate-y-[-4px]">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Features = () => {
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

  const studyTools = [
    {
      icon: Brain,
      title: "Study Agent",
      description: "Get personalized study guidance with our AI-powered study agent that adapts to your learning style.",
      link: "/study-agent"
    },
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "Create optimized study schedules based on your availability and learning goals.",
      link: "/smart-calendar"
    },
    {
      icon: BookOpen,
      title: "Quiz Generator",
      description: "Generate custom quizzes to test your knowledge and track your progress.",
      link: "/quiz-generator"
    },
    {
      icon: FileText,
      title: "Content Summarizer",
      description: "Transform lengthy content into concise, easy-to-understand summaries.",
      link: "/content-summarizer"
    }
  ];

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Study Tools</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Enhance your learning experience with our AI-powered study tools designed to help you succeed.
          </p>
        </div>
      </div>
      
      <div className="bg-background py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyTools.map((tool, index) => (
              <Link 
                key={index}
                to={tool.link}
                className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <tool.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                <p className="text-foreground/70 mb-6">{tool.description}</p>
                <div className="button-primary inline-flex items-center">
                  Try {tool.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <CallToAction />
    </PageLayout>
  );
};

export default Features;
