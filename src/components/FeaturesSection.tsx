import { BookOpen, FlaskConical, Mic, Users, FileText, Message, Search, Video } from 'lucide-react';

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

  const interviewTools = [
    {
      icon: <Mic className="text-skara-blue h-8 w-8" />,
      title: "Voice Analysis",
      description: "Get instant feedback on your interview responses with AI-powered voice analysis.",
      link: "/voice-analysis"
    },
    {
      icon: <FileText className="text-skara-lavender h-8 w-8" />,
      title: "Resume Review",
      description: "Upload your resume for AI analysis and personalized improvement suggestions.",
      link: "/resume-review"
    },
    {
      icon: <Video className="text-skara-coral h-8 w-8" />,
      title: "Mock Interviews",
      description: "Practice with our AI interviewer across different domains and interview types.",
      link: "/mock-interviews"
    },
    {
      icon: <Search className="text-skara-mint h-8 w-8" />,
      title: "Answer Library",
      description: "Access our extensive library of interview answers and best practices.",
      link: "/answer-library"
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

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">AI Interview Coach</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
            Master your interview skills with our AI-powered coaching tools. From voice analysis to mock interviews,
            we provide comprehensive preparation for your career success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interviewTools.map((tool, index) => (
              <Link
                to={tool.link}
                key={index}
                className="glass-card p-6 rounded-xl scroll-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-foreground/70">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
