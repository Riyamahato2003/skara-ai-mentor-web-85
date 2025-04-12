
import { BookOpen, FlaskConical, Mic, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="text-skara-blue h-8 w-8" />,
      title: "Study Planning",
      description: "AI-powered study schedules tailored to your learning style and goals."
    },
    {
      icon: <FlaskConical className="text-skara-lavender h-8 w-8" />,
      title: "Flashcards & Quizzes",
      description: "Smart flashcards that adapt to your knowledge gaps and learning pace."
    },
    {
      icon: <Mic className="text-skara-coral h-8 w-8" />,
      title: "Voice-based Q&A",
      description: "Ask questions naturally and get immediate explanations when you're stuck."
    },
    {
      icon: <Users className="text-skara-mint h-8 w-8" />,
      title: "AI Interview Coach",
      description: "Practice interviews with AI feedback on your responses and body language."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What's CGPA Skills AI?</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6">
            Skara combines advanced AI with proven learning science to help you excel in your academic journey and career preparation.
            Our platform adapts to your unique learning style, identifies knowledge gaps, and provides personalized guidance.
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Whether you're studying for exams or preparing for job interviews, Skara's AI assistants provide the support, 
            feedback, and resources you need to succeed in an increasingly competitive academic and professional landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl scroll-fade-in appear animation-delay-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
