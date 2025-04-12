
import { useEffect } from 'react';
import { Mic, Cpu, Brain, Database, MessageSquare, Video } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import CallToAction from '../components/CallToAction';

const StepItem = ({ icon: Icon, title, description, index, isLast = false }) => (
  <div className="flex items-start gap-6 scroll-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
    <div className="relative">
      <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 relative glow`}>
        <Icon size={20} className="text-primary" />
      </div>
      {!isLast && (
        <div className="absolute top-12 bottom-0 left-6 w-px bg-gradient-to-b from-primary/30 to-transparent"></div>
      )}
    </div>
    <div className="pt-2 pb-12">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
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

  const steps = [
    {
      icon: Mic,
      title: "Voice Input",
      description: "Start by asking questions or requesting assistance using natural voice commands. Our system processes both voice and text inputs for maximum flexibility."
    },
    {
      icon: Cpu,
      title: "YOLO/Vosk Processing",
      description: "Your audio is processed by our state-of-the-art speech recognition system, which accurately transcribes your questions even in noisy environments."
    },
    {
      icon: Brain,
      title: "GPT Agent",
      description: "Our specialized AI agents analyze your query, understand the context, and determine the best approach to provide the assistance you need."
    },
    {
      icon: Database,
      title: "RAG (Retrieval Augmented Generation)",
      description: "The system pulls relevant information from our extensive knowledge base, including academic resources, interview guides, and educational content."
    },
    {
      icon: MessageSquare,
      title: "Personalized Response",
      description: "You receive a customized response that addresses your specific question, adapts to your learning style, and aligns with your academic goals."
    },
    {
      icon: Video,
      title: "Video/Voice Feedback",
      description: "For complex topics, our system generates visual explanations or voice responses to ensure you fully understand the material."
    }
  ];

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How CGPA Skills AI Works</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our AI-powered system combines advanced technologies to deliver personalized learning experiences and career preparation.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 -z-10 rounded-3xl blur-3xl opacity-50"></div>
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              {steps.map((step, index) => (
                <StepItem 
                  key={index} 
                  icon={step.icon} 
                  title={step.title} 
                  description={step.description} 
                  index={index}
                  isLast={index === steps.length - 1} 
                />
              ))}
            </div>
          </div>
          
          <div className="mt-16 glass p-8 rounded-3xl scroll-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Continuous Improvement</h3>
            <p className="text-foreground/70">
              Our system continuously learns from your interactions, becoming more personalized and effective over time. 
              The more you use CGPA Skills AI, the better it understands your learning patterns, 
              challenges, and goals, creating a truly customized educational experience.
            </p>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </PageLayout>
  );
};

export default HowItWorks;
