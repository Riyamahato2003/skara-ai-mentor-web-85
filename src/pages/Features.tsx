
import { useEffect } from 'react';
import { Brain, GraduationCap, Video, Users } from 'lucide-react';
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

  const features = [
    {
      icon: Brain,
      title: "Smart Study Planner",
      description: "Our AI analyzes your learning style and creates optimized study plans tailored to your goals and schedule.",
      items: [
        {
          title: "Study Agent",
          description: "Personal AI assistant that adapts to your learning pace and focuses on areas where you need more practice."
        },
        {
          title: "Smart Calendar",
          description: "Optimizes your study sessions based on spaced repetition and your peak productivity hours."
        },
        {
          title: "Quiz Generator",
          description: "Creates custom quizzes that adapt to your knowledge gaps and learning progression."
        },
        {
          title: "Content Summarizer",
          description: "Transforms lengthy textbooks and articles into concise, easy-to-understand summaries."
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "AI Interview Coach",
      description: "Practice for job interviews with an AI that analyzes your responses and helps you improve your presentation.",
      items: [
        {
          title: "Voice Analysis",
          description: "Provides feedback on your tone, pace, clarity, and confidence during mock interviews."
        },
        {
          title: "Resume Review",
          description: "AI-powered analysis of your resume with suggestions for improvements and keyword optimization."
        },
        {
          title: "Mock Interviews",
          description: "Realistic interview simulations for different industries with personalized feedback."
        },
        {
          title: "Answer Library",
          description: "Access to model answers for common interview questions in your field of study."
        }
      ]
    },
    {
      icon: Video,
      title: "AI Video Lessons",
      description: "Custom video explanations that break down complex concepts into easy-to-understand visual lessons.",
      items: [
        {
          title: "Concept Explainers",
          description: "AI-generated videos that visualize difficult concepts from your coursework."
        },
        {
          title: "Step-by-Step Tutorials",
          description: "Visual walkthroughs of problem-solving processes tailored to your learning style."
        },
        {
          title: "Micro-Lessons",
          description: "Bite-sized video content focused on specific concepts that you're struggling with."
        },
        {
          title: "Interactive Examples",
          description: "Videos with built-in quizzes and interactive elements to enhance retention."
        }
      ]
    },
    {
      icon: Users,
      title: "Collaboration Features",
      description: "Connect with peers and study more effectively together, even when you're physically apart.",
      items: [
        {
          title: "Group Study",
          description: "Virtual study rooms with shared materials and AI-facilitated discussions."
        },
        {
          title: "Shared Flashcards",
          description: "Create and share smart flashcard decks that adapt to the group's learning needs."
        },
        {
          title: "Doubt Solver",
          description: "Get instant help on difficult questions from AI or route them to peers who can assist."
        },
        {
          title: "Progress Tracking",
          description: "Monitor individual and group progress with detailed analytics and insights."
        }
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Your Full Potential</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            CGPA Skills AI brings powerful learning tools to help you excel in your academics and prepare for your professional career.
          </p>
        </div>
      </div>
      
      <div className="bg-background">
        {features.map((feature, index) => (
          <FeatureSection 
            key={index} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
            items={feature.items}
            className={index % 2 === 1 ? "bg-muted/20" : ""}
          />
        ))}
      </div>
      
      <CallToAction />
    </PageLayout>
  );
};

export default Features;
