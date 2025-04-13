
import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/6b5a8712-c0d0-44ae-bf8c-2186008868fa.png" 
            alt="Skara Logo" 
            className="h-10"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`${location.pathname === '/' ? 'text-foreground' : 'text-foreground/70'} hover:text-foreground transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`${location.pathname === '/features' ? 'text-foreground' : 'text-foreground/70'} hover:text-foreground transition-colors`}
          >
            Features
          </Link>
          <Link 
            to="/how-it-works" 
            className={`${location.pathname === '/how-it-works' ? 'text-foreground' : 'text-foreground/70'} hover:text-foreground transition-colors`}
          >
            How It Works
          </Link>
          <Link 
            to="/pricing" 
            className={`${location.pathname === '/pricing' ? 'text-foreground' : 'text-foreground/70'} hover:text-foreground transition-colors`}
          >
            Pricing
          </Link>
          <Link 
            to="/login" 
            className={`${location.pathname === '/login' ? 'text-foreground' : 'text-foreground/70'} hover:text-foreground transition-colors`}
          >
            Login
          </Link>
          <Link to="/signup" className="button-primary">
            Try It Free
          </Link>
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
            <Link 
              to="/" 
              className={`w-full text-center py-3 ${location.pathname === '/' ? 'bg-muted' : 'hover:bg-muted'} rounded-lg transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`w-full text-center py-3 ${location.pathname === '/features' ? 'bg-muted' : 'hover:bg-muted'} rounded-lg transition-colors`}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className={`w-full text-center py-3 ${location.pathname === '/how-it-works' ? 'bg-muted' : 'hover:bg-muted'} rounded-lg transition-colors`}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className={`w-full text-center py-3 ${location.pathname === '/pricing' ? 'bg-muted' : 'hover:bg-muted'} rounded-lg transition-colors`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`w-full text-center py-3 ${location.pathname === '/about' ? 'bg-muted' : 'hover:bg-muted'} rounded-lg transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`w-full text-center py-3 ${location.pathname === '/contact' ? 'bg-muted' : 'hover:bg-muted'} rounded-lg transition-colors`}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className={`w-full text-center py-3 ${location.pathname === '/login' ? 'bg-muted' : 'hover:bg-muted'} rounded-lg transition-colors`}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="button-primary w-full text-center"
            >
              Try It Free
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
