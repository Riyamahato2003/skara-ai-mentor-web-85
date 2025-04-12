
import { useState } from 'react';
import { toast } from '../hooks/use-toast';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "We'll keep you updated on our latest features and launch dates.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="text-primary" size={24} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform how you learn?</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of students who are already using CGPA Skills AI to improve their academic performance and prepare for their future careers.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/signup" className="button-primary flex items-center justify-center gap-2 min-w-[180px]">
            Start For Free <ArrowRight size={18} />
          </Link>
          <Link to="/dashboard-preview" className="button-secondary flex items-center justify-center gap-2 min-w-[180px]">
            See Dashboard Demo
          </Link>
        </div>
        
        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Stay updated</h3>
          <p className="text-foreground/70 mb-4">
            Get notified when we release new features and updates.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg glass border border-white/20 focus:border-primary focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
