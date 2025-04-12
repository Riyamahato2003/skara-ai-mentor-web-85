
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { ArrowRight, Mail, Lock, User, Check } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import PageLayout from '../components/PageLayout';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Welcome to CGPA Skills AI!",
        description: "Your account has been created successfully.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageLayout className="bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-foreground/70">
              Join thousands of students enhancing their academic journey with AI
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-gray-800 hover:bg-gray-100 transition-colors mb-6">
              <FcGoogle size={20} />
              <span>Continue with Google</span>
            </button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background/50 px-4 text-sm text-foreground/50 backdrop-blur-sm">or continue with email</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <User size={16} />
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Lock size={16} />
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Check size={16} />
                  Confirm Password
                </label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full button-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Creating account...' : 'Sign Up'} 
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            
            <p className="mt-6 text-center text-sm text-foreground/70">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Log In
              </Link>
            </p>
          </div>
          
          <p className="mt-8 text-center text-sm text-foreground/50">
            By signing up, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignUp;
