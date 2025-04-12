
import { Github, Instagram, MessageSquare } from 'lucide-react';

const Footer = () => {
  const handleEasterEgg = () => {
    const input = document.getElementById('easter-egg-input') as HTMLInputElement;
    if (input && input.value.toLowerCase() === 'study hack') {
      alert('Study Hack: The Pomodoro Technique increases focus by breaking study sessions into 25-minute blocks with short breaks!');
    }
  };
  
  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Skara</h2>
            <p className="text-foreground/70 mb-6 max-w-md">
              An intelligent learning and career coach for college students, powered by advanced AI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#modes" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
            
            {/* Easter Egg Input */}
            <div className="mt-6">
              <input 
                id="easter-egg-input"
                type="text" 
                placeholder="Type a secret phrase..." 
                className="w-full px-3 py-2 rounded-lg glass border border-white/20 text-sm"
                onKeyUp={(e) => e.key === 'Enter' && handleEasterEgg()}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-foreground/60">
          <p>© {new Date().getFullYear()} Skara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
