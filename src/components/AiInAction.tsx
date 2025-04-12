
import { Mic, Cpu, Database, MessageSquare } from 'lucide-react';

const AiInAction = () => {
  const steps = [
    {
      icon: <Mic className="h-6 w-6 text-skara-coral" />,
      title: "User Speaks",
      description: "Ask questions naturally using your voice, just like talking to a tutor."
    },
    {
      icon: <Cpu className="h-6 w-6 text-skara-blue" />,
      title: "GPT Agent",
      description: "Specialized AI agents analyze your question, including a Teaching Agent and Legal Agent."
    },
    {
      icon: <Database className="h-6 w-6 text-skara-lavender" />,
      title: "RAG",
      description: "Retrieval-Augmented Generation finds the most relevant and accurate information."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-skara-mint" />,
      title: "Response",
      description: "Receive a clear, personalized explanation with visuals when helpful."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI in Action</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Skara uses sophisticated AI technologies to understand your questions and provide helpful, 
            personalized responses that adapt to your learning needs.
          </p>
        </div>

        {/* Flow Diagram - Desktop */}
        <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4 glow">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-center text-foreground/70 max-w-[150px]">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[70px] w-[calc(100%_-_40px)] h-0.5 bg-gradient-to-r from-skara-blue/30 to-skara-lavender/30"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Flow Diagram - Mobile */}
        <div className="lg:hidden space-y-8 max-w-md mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 glow">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* AI Agents Explanation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-white to-skara-blue/10">
            <h3 className="text-xl font-semibold mb-3">Teaching Agent</h3>
            <p className="text-foreground/70">
              Specializes in breaking down complex topics into understandable concepts and adapting explanations to your learning style.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-white to-skara-lavender/10">
            <h3 className="text-xl font-semibold mb-3">Interview Coach</h3>
            <p className="text-foreground/70">
              Analyzes your interview responses and provides feedback on content, delivery, and suggestions for improvement.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-white to-skara-mint/10">
            <h3 className="text-xl font-semibold mb-3">Study Planner</h3>
            <p className="text-foreground/70">
              Creates optimized study schedules based on your goals, available time, and learning priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInAction;
