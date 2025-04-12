
import { useState } from 'react';
import { MessageSquareText, X } from 'lucide-react';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass rounded-2xl w-72 sm:w-80 shadow-lg">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-skara-blue to-skara-lavender flex items-center justify-center">
                <MessageSquareText size={16} className="text-white" />
              </div>
              <span className="font-medium">Skara Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-foreground/70 hover:text-foreground"
              aria-label="Close assistant"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto">
            <div className="glass p-3 rounded-lg ml-auto max-w-[80%] mb-3 bg-gradient-to-r from-skara-blue/20 to-skara-lavender/20">
              <p className="text-sm">Hi there! I'm your Skara assistant. How can I help you today?</p>
            </div>
            
            <div className="glass p-3 rounded-lg max-w-[80%] mb-3">
              <p className="text-sm">What can Skara do for me?</p>
            </div>
            
            <div className="glass p-3 rounded-lg ml-auto max-w-[80%] bg-gradient-to-r from-skara-blue/20 to-skara-lavender/20">
              <p className="text-sm">
                Skara helps you study smarter with AI tutoring, personalized study plans, 
                flashcards, and interview prep! Would you like to learn more about a specific feature?
              </p>
            </div>
          </div>
          
          <div className="p-4 border-t border-white/10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="w-full px-4 py-2 pr-10 rounded-full glass border border-white/20"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full glass shadow-lg flex items-center justify-center hover:bg-white/80 transition-all hover:scale-110 active:scale-95"
          aria-label="Open chat assistant"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-skara-blue to-skara-lavender flex items-center justify-center">
            <MessageSquareText size={20} className="text-white" />
          </div>
        </button>
      )}
    </div>
  );
};

export default FloatingAssistant;
