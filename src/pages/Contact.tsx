
import { useState } from 'react';
import { Mail, Instagram, MessageSquare, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import PageLayout from '../components/PageLayout';

const ContactCard = ({ icon: Icon, title, value, link }) => (
  <a href={link} className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-foreground/70">{value}</p>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Our team is ready to help with any inquiries about our platform.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <ContactCard 
              icon={Mail}
              title="Email Us"
              value="hello@cgpaskills.ai"
              link="mailto:hello@cgpaskills.ai"
            />
            <ContactCard 
              icon={Instagram}
              title="Instagram"
              value="@cgpaskillsai"
              link="https://instagram.com"
            />
            <ContactCard 
              icon={MessageSquare}
              title="Discord"
              value="CGPA Skills Community"
              link="https://discord.com"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 -z-10 rounded-3xl blur-3xl opacity-50"></div>
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="button-primary flex items-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            We're located in the heart of San Francisco's tech district. If you're in the area, we'd be happy to meet in person.
          </p>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="aspect-video rounded-lg bg-muted mb-4">
              {/* Placeholder for map */}
              <div className="h-full w-full flex items-center justify-center text-foreground/50">
                Interactive Map Coming Soon
              </div>
            </div>
            <p className="text-foreground/70">
              123 Innovation Street, Suite 400<br />
              San Francisco, CA 94103<br />
              United States
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
