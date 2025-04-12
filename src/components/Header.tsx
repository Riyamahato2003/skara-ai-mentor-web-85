
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Skara
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
          <a href="#modes" className="text-foreground/70 hover:text-foreground transition-colors">Modes</a>
          <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">Features</a>
          <button className="button-primary">Try It Free</button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-6 items-center text-lg">
            <a 
              href="#about" 
              className="w-full text-center py-3 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#modes" 
              className="w-full text-center py-3 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Modes
            </a>
            <a 
              href="#how-it-works" 
              className="w-full text-center py-3 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="w-full text-center py-3 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <button 
              className="button-primary w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Try It Free
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
