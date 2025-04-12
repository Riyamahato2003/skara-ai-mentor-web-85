
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <section className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50 -z-10"></div>
      <div className="absolute inset-0 pattern-dots opacity-40 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-skara-blue/30 blur-3xl -z-10 floating-element"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-skara-lavender/30 blur-3xl -z-10 floating-element animation-delay-300"></div>
      
      <div className="container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your AI-Powered Study Journey</h2>
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are achieving better grades and preparing for successful careers with Skara's AI assistance.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-full glass border-2 border-white/40 focus:border-primary focus:outline-none"
                  required
                />
                <button 
                  type="submit"
                  className="button-primary whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Join Beta <ArrowRight size={18} />
                </button>
              </div>
            </form>
          ) : (
            <div className="glass-card p-6 rounded-xl max-w-md mx-auto relative overflow-hidden">
              <div className={`${isAnimating ? 'animate-confetti' : ''} absolute inset-0 -z-10`}></div>
              <div className="w-16 h-16 rounded-full glass mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-1">Thanks for Joining!</h3>
              <p className="text-foreground/70">
                We'll email you when your beta access is ready. Get ready to transform your learning journey!
              </p>
            </div>
          )}
          
          <div className="mt-8 text-sm text-foreground/60">
            <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
            <p className="mt-2">Skara is currently in beta and spots are limited.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
