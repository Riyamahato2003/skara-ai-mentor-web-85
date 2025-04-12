
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Switch } from '../components/ui/switch';
import CallToAction from '../components/CallToAction';

const PricingCard = ({ plan, isPopular = false }) => (
  <div className={`glass-card p-8 rounded-3xl relative ${isPopular ? 'border-2 border-primary/50' : ''}`}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
        Most Popular
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-2xl font-bold">{plan.name}</h3>
      <p className="text-foreground/70 mt-2">{plan.description}</p>
    </div>
    
    <div className="mb-6">
      <div className="flex items-end">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-foreground/70 ml-1 mb-1">/{plan.billingCycle}</span>
      </div>
      {plan.discount && (
        <p className="text-sm text-primary mt-1">Save ${plan.discount} with annual billing</p>
      )}
    </div>
    
    <div className="mb-8">
      <button className={`w-full py-3 rounded-xl font-medium ${plan.ctaClass}`}>
        {plan.ctaText}
      </button>
      {plan.waitlist && (
        <p className="text-sm text-center mt-2 text-foreground/50">{plan.waitlist}</p>
      )}
    </div>
    
    <div>
      <p className="font-medium mb-4">What's included:</p>
      <ul className="space-y-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check size={18} className="text-primary mt-0.5 shrink-0" />
            ) : (
              <X size={18} className="text-foreground/30 mt-0.5 shrink-0" />
            )}
            <span className={feature.included ? "" : "text-foreground/50"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingPlans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: "0",
      billingCycle: "forever",
      ctaText: "Get Started",
      ctaClass: "bg-muted text-foreground hover:bg-muted/80 transition-colors",
      features: [
        { text: "Basic Study Planner", included: true },
        { text: "5 AI Questions per day", included: true },
        { text: "Basic Flashcards", included: true },
        { text: "Community Support", included: true },
        { text: "AI Interview Coach", included: false },
        { text: "Video Lessons", included: false },
        { text: "Collaboration Tools", included: false },
        { text: "Priority Support", included: false },
      ]
    },
    {
      name: "Student",
      description: "For dedicated learners",
      price: isAnnual ? "12" : "15",
      billingCycle: isAnnual ? "month" : "month",
      discount: isAnnual ? "36" : null,
      ctaText: "Join Beta",
      ctaClass: "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
      waitlist: "Limited spots available",
      features: [
        { text: "Advanced Study Planner", included: true },
        { text: "Unlimited AI Questions", included: true },
        { text: "Smart Flashcards", included: true },
        { text: "Community Support", included: true },
        { text: "Basic AI Interview Coach", included: true },
        { text: "5 Video Lessons per month", included: true },
        { text: "Basic Collaboration Tools", included: true },
        { text: "Email Support", included: true },
      ]
    },
    {
      name: "Future Pro",
      description: "For career preparation",
      price: isAnnual ? "25" : "29",
      billingCycle: isAnnual ? "month" : "month",
      discount: isAnnual ? "48" : null,
      ctaText: "Join Waitlist",
      ctaClass: "bg-secondary/80 text-secondary-foreground hover:bg-secondary/70 transition-colors",
      waitlist: "Coming Q4 2023",
      features: [
        { text: "Premium Study Planner", included: true },
        { text: "Unlimited AI Questions", included: true },
        { text: "Advanced Flashcards", included: true },
        { text: "Priority Community Access", included: true },
        { text: "Advanced AI Interview Coach", included: true },
        { text: "Unlimited Video Lessons", included: true },
        { text: "Full Collaboration Suite", included: true },
        { text: "Priority 24/7 Support", included: true },
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans come with a 14-day satisfaction guarantee.
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`${!isAnnual ? "text-foreground" : "text-foreground/70"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`${isAnnual ? "text-foreground" : "text-foreground/70"}`}>
              Annual <span className="text-xs text-primary">(Save 20%)</span>
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index} 
                plan={plan} 
                isPopular={index === 1} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid gap-6">
            {[
              { 
                question: "Can I switch plans later?", 
                answer: "Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit toward your next billing cycle." 
              },
              { 
                question: "Is there a free trial?", 
                answer: "While we don't offer a traditional free trial for paid plans, our Free plan gives you access to core features indefinitely, allowing you to experience the platform before upgrading." 
              },
              { 
                question: "Do you offer student discounts?", 
                answer: "Yes! Students with a valid .edu email address receive an additional 15% off any paid plan. Contact our support team after signing up to apply your discount." 
              },
              { 
                question: "Can I cancel anytime?", 
                answer: "Absolutely. You can cancel your subscription at any time and you won't be charged for the next billing cycle. You'll continue to have access until the end of your current billing period." 
              },
            ].map((faq, index) => (
              <div key={index} className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </PageLayout>
  );
};

export default Pricing;
