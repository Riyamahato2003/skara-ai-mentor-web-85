
import { useState } from 'react';
import { Sparkles, Briefcase } from 'lucide-react';

const ModesOverview = () => {
  const [activeTab, setActiveTab] = useState('cgpa');

  const cgpaFeatures = [
    "AI-powered study planner that adapts to your schedule",
    "Intelligent flashcards that focus on your knowledge gaps",
    "Mock tests with detailed explanations and feedback",
    "Voice-based Q&A for interactive learning"
  ];

  const careerFeatures = [
    "Resume critique with actionable improvement suggestions",
    "AI-powered mock interviews for your specific industry",
    "Feedback on body language, tone, and response quality",
    "Interview question database tailored to your field"
  ];

  return (
    <section id="modes" className="section-padding bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Choose Your Mode</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          Skara adapts to your current goals, whether you're focusing on academic excellence or career preparation.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass inline-flex p-1.5 rounded-full">
            <button 
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeTab === 'cgpa' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'hover:bg-white/50'
              }`}
              onClick={() => setActiveTab('cgpa')}
            >
              <Sparkles size={18} />
              <span className="font-medium">CGPA Mode</span>
            </button>
            <button 
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeTab === 'career' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'hover:bg-white/50'
              }`}
              onClick={() => setActiveTab('career')}
            >
              <Briefcase size={18} />
              <span className="font-medium">Career Mode</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mode Visual */}
          <div className="order-2 lg:order-1">
            <div className={`glass p-6 rounded-2xl transition-all duration-500 ${activeTab === 'cgpa' ? 'opacity-100' : 'opacity-0 absolute'}`}>
              {activeTab === 'cgpa' && (
                <>
                  <div className="h-64 bg-gradient-to-r from-skara-blue/30 to-skara-lavender/30 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-xl font-medium text-primary">CGPA Mode Visualization</span>
                  </div>
                  <ul className="space-y-3">
                    {cgpaFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-skara-blue"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            <div className={`glass p-6 rounded-2xl transition-all duration-500 ${activeTab === 'career' ? 'opacity-100' : 'opacity-0 absolute'}`}>
              {activeTab === 'career' && (
                <>
                  <div className="h-64 bg-gradient-to-r from-skara-coral/30 to-skara-mint/30 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-xl font-medium text-accent">Career Mode Visualization</span>
                  </div>
                  <ul className="space-y-3">
                    {careerFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-skara-coral"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          
          {/* Mode Description */}
          <div className="order-1 lg:order-2">
            {activeTab === 'cgpa' ? (
              <div className="scroll-fade-in appear">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">CGPA Mode</h3>
                <p className="text-lg mb-6 text-foreground/80">
                  Boost your academic performance with AI-powered study tools designed to help you learn more efficiently and effectively.
                </p>
                <p className="text-lg mb-6 text-foreground/80">
                  Our intelligent system identifies your learning style and knowledge gaps to create a personalized study experience that adapts to your needs.
                </p>
                <div className="glass-card p-5 rounded-xl mb-6 bg-gradient-to-br from-skara-blue/10 to-skara-lavender/10">
                  <p className="text-foreground/90 italic">
                    "Skara helped me understand complex concepts by breaking them down into manageable chunks and testing my knowledge at the perfect intervals."
                  </p>
                </div>
              </div>
            ) : (
              <div className="scroll-fade-in appear">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Career Mode</h3>
                <p className="text-lg mb-6 text-foreground/80">
                  Prepare for your professional future with AI-driven interview training, resume optimization, and career planning tools.
                </p>
                <p className="text-lg mb-6 text-foreground/80">
                  Practice with realistic interview scenarios tailored to your industry and receive detailed feedback on your responses, body language, and communication style.
                </p>
                <div className="glass-card p-5 rounded-xl mb-6 bg-gradient-to-br from-skara-coral/10 to-skara-mint/10">
                  <p className="text-foreground/90 italic">
                    "After practicing with Skara's interview simulations, I felt so much more confident in my actual interviews. The feedback was incredibly helpful!"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModesOverview;
