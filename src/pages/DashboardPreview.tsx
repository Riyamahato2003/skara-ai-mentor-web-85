
import { Calendar, BookOpen, MessageSquare, SquareStack, Mic, PieChart } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const DashboardPreview = () => {
  return (
    <PageLayout className="bg-muted/10">
      <div className="py-8 md:py-16 container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Dashboard Preview</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            This is a preview of what your CGPA Skills AI dashboard will look like. 
            All features shown are currently in development and will be available upon full launch.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-2xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Study Plan Calendar</h2>
              <p className="text-foreground/70">Your personalized study schedule</p>
            </div>
          </div>
          
          <div className="glass p-4 rounded-xl">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="text-center text-sm font-medium">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, i) => {
                const isToday = i === 9;
                const hasTask = [3, 7, 12, 16, 20, 23].includes(i);
                const taskType = hasTask ? ['bg-skara-blue/30', 'bg-skara-lavender/30', 'bg-skara-mint/30', 'bg-skara-coral/30'][i % 4] : '';
                
                return (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm ${
                      isToday ? 'bg-primary text-primary-foreground' : hasTask ? taskType : 'bg-white/20'
                    }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-skara-blue/70"></div>
                <span className="text-sm">Study Session - Algorithms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-skara-lavender/70"></div>
                <span className="text-sm">Practice Interview</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-skara-mint/70"></div>
                <span className="text-sm">Flashcard Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-skara-coral/70"></div>
                <span className="text-sm">Quiz Session</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Chat with AI Tutor</h2>
                <p className="text-foreground/70">Get answers to your questions</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-skara-blue/50 flex-shrink-0"></div>
                <div className="glass p-3 rounded-xl max-w-[80%]">
                  <p className="text-sm">Can you explain how blockchain technology works?</p>
                </div>
              </div>
              
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary/50 flex-shrink-0"></div>
                <div className="glass p-3 rounded-xl max-w-[80%]">
                  <p className="text-sm">
                    Blockchain is a decentralized digital ledger that records transactions across multiple computers. Each block contains a timestamp and transaction data, and is linked to the previous block using cryptography, creating a chain of blocks.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-skara-blue/50 flex-shrink-0"></div>
                <div className="glass p-3 rounded-xl max-w-[80%]">
                  <p className="text-sm">Can you explain that in simpler terms?</p>
                </div>
              </div>
              
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary/50 flex-shrink-0"></div>
                <div className="glass p-3 rounded-xl max-w-[80%]">
                  <p className="text-sm">
                    Think of blockchain like a digital notebook that many people have copies of. When someone writes in it, everyone's copy gets updated. No one person controls it, and once something is written, it can't be erased or changed – making it secure and trustworthy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask any question..." 
                  className="w-full px-4 py-3 pr-12 rounded-xl glass border border-white/20 focus:border-primary focus:outline-none transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <MessageSquare size={20} className="text-primary" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <SquareStack size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Flashcard Grid</h2>
                <p className="text-foreground/70">Smart flashcards adapting to your knowledge gaps</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { front: "What is Big O notation?", back: "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity" },
                { front: "Define 'HTTP'", back: "HyperText Transfer Protocol: the foundation of data communication on the World Wide Web" },
                { front: "What does SQL stand for?", back: "Structured Query Language: used to communicate with and manipulate databases" },
                { front: "What is recursion?", back: "A method where the solution to a problem depends on solutions to smaller instances of the same problem" },
                { front: "Define 'API'", back: "Application Programming Interface: a set of rules that allow programs to talk to each other" },
                { front: "What is a constructor?", back: "A special method used to initialize objects in object-oriented programming" }
              ].map((card, index) => (
                <div key={index} className="glass h-32 rounded-xl p-4 flex items-center justify-center text-center hover:bg-white/30 transition-all cursor-pointer">
                  <p className="text-sm">{index % 2 === 0 ? card.front : card.back}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between">
              <button className="px-4 py-2 glass rounded-lg hover:bg-white/30 transition-all text-sm">
                Previous Set
              </button>
              <button className="px-4 py-2 glass rounded-lg hover:bg-white/30 transition-all text-sm">
                Next Set
              </button>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mic size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Voice Analysis Summary</h2>
              <p className="text-foreground/70">Feedback on your latest practice interview</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <PieChart size={18} />
                Clarity Score
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-skara-blue/20 flex items-center justify-center text-xl font-bold">
                  85%
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Your speech is very clear and articulate, with good pronunciation.</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <PieChart size={18} />
                Confidence Score
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-skara-lavender/20 flex items-center justify-center text-xl font-bold">
                  72%
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Your tone shows confidence, but try to reduce filler words like "um" and "like".</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <PieChart size={18} />
                Content Score
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-skara-mint/20 flex items-center justify-center text-xl font-bold">
                  91%
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Excellent answers with relevant examples and clear structure.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 glass p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-3">Key Improvements</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 bg-skara-blue rounded-full mt-2"></div>
                <span>Practice maintaining a consistent speaking pace throughout your answers.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 bg-skara-lavender rounded-full mt-2"></div>
                <span>Work on reducing filler words like "um" and "like" which appeared 14 times in your answers.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 bg-skara-mint rounded-full mt-2"></div>
                <span>Continue using the STAR method for behavioral questions - your structured responses are effective.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 bg-skara-coral rounded-full mt-2"></div>
                <span>Consider pausing briefly after making key points to let them resonate with the interviewer.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DashboardPreview;
