
import { Video, MessageCircle, Users, ActivitySquare } from 'lucide-react';

const SmartFeatures = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8 text-skara-blue" />,
      title: "AI-Generated Video Lessons",
      description: "Watch personalized video explanations that focus on areas where you need the most help."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-skara-lavender" />,
      title: "Custom GPT Q&A Tutor",
      description: "Get instant answers to your questions with explanations tailored to your learning style."
    },
    {
      icon: <Users className="h-8 w-8 text-skara-coral" />,
      title: "Peer Collaboration",
      description: "Study with friends in virtual rooms and get AI-facilitated group learning support. (Coming Soon)"
    },
    {
      icon: <ActivitySquare className="h-8 w-8 text-skara-mint" />,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and personalized insights."
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Smart Features Students Love</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Our AI-powered tools are designed specifically for the needs of college students,
            helping you learn more effectively and prepare for your future career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl flex gap-4 scroll-fade-in appear"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;
