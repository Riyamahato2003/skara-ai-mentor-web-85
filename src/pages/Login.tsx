
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import PageLayout from '../components/PageLayout';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      setIsSubmitting(false);
      navigate('/dashboard-preview');
    }, 1500);
  };

  return (
    <PageLayout className="bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-foreground/70">
              Log in to continue your learning journey
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
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
                <div className="flex justify-end mt-2">
                  <Link to="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full button-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Logging in...' : 'Log In'} 
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            
            <p className="mt-6 text-center text-sm text-foreground/70">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
