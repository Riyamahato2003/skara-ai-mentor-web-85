
import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleCtaClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 mesh-gradient -z-10"></div>
      <div className="absolute inset-0 pattern-dots opacity-30 -z-10"></div>
      
      {/* Hero content */}
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smarter Study. Sharper Interviews. <span className="text-gradient">Powered by AI.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
              Meet Skara — your intelligent learning and career coach that helps college students study smarter and prepare for their professional journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="button-primary flex items-center gap-2"
                onClick={handleCtaClick}
              >
                Try It Free <ArrowRight size={18} />
              </button>
              <button 
                className="button-secondary flex items-center gap-2"
                onClick={handleCtaClick}
              >
                Join Beta <Sparkles size={18} />
              </button>
            </div>
            
            {/* Confetti effect (simplified) */}
            {showConfetti && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-[url('data:image/svg+xml;utf8,<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"20\" r=\"3\" fill=\"%23a5c8ff\"/></svg>'),url('data:image/svg+xml;utf8,<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"10\" width=\"10\" height=\"10\" fill=\"%23d8c5ff\" transform=\"rotate(45 15 15)\"/></svg>'),url('data:image/svg+xml;utf8,<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"16\" y=\"16\" width=\"4\" height=\"4\" fill=\"%23ff9b8f\"/></svg>')] animate-confetti"></div>
              </div>
            )}
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-skara-blue/30 via-skara-lavender/30 to-skara-mint/30 blur-2xl absolute -z-10"></div>
              
              {/* Student illustration with AI elements */}
              <div className="glass p-6 rounded-3xl max-w-md relative">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-skara-lavender/80 rounded-full blur-xl floating-element"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-skara-mint/80 rounded-full blur-xl floating-element animation-delay-300"></div>
                
                <img 
                  src="https://placehold.co/400x300/ffffff/a5c8ff?text=Student+Illustration" 
                  alt="Student with AI assistant" 
                  className="rounded-2xl mb-4"
                />
                
                <div className="glass p-3 rounded-xl flex items-center gap-3 mb-3 text-sm">
                  <div className="w-3 h-3 bg-skara-blue rounded-full"></div>
                  <p>Let me help you prepare for that interview!</p>
                </div>
                
                <div className="glass p-3 rounded-xl flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 bg-skara-mint rounded-full"></div>
                  <p>Here's a personalized study plan for your exam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
