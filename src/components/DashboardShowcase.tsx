
const DashboardShowcase = () => {
  return (
    <section id="dashboard" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Study Command Center</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Skara's intuitive dashboard gives you a complete view of your learning journey,
            with all the tools you need to succeed in one place.
          </p>
        </div>

        <div className="glass-card rounded-xl p-3 md:p-6 overflow-hidden">
          {/* Dashboard Mockup */}
          <div className="relative bg-gradient-to-br from-skara-blue/5 via-skara-lavender/5 to-skara-mint/5 p-4 md:p-8 rounded-lg">
            {/* Top Bar */}
            <div className="glass mb-6 rounded-xl p-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-skara-blue/80"></div>
                <span className="font-medium">Skara Dashboard</span>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-skara-blue"></div>
                </div>
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-skara-lavender"></div>
                </div>
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-skara-mint"></div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Progress */}
              <div className="glass p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Study Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Computer Science</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full">
                      <div className="h-2 bg-skara-blue rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Data Structures</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full">
                      <div className="h-2 bg-skara-lavender rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>AI Fundamentals</span>
                      <span>42%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full">
                      <div className="h-2 bg-skara-mint rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="glass mt-4 p-3 rounded-lg bg-gradient-to-r from-skara-blue/10 to-transparent">
                  <div className="flex justify-between text-sm">
                    <span>Weekly Goal</span>
                    <span>14/20 hours</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full mt-1">
                    <div className="h-2 bg-skara-blue/80 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
              
              {/* Middle Column - Chat Interface */}
              <div className="glass p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">AI Study Assistant</h3>
                <div className="space-y-3">
                  <div className="glass p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Can you explain how binary trees work?</p>
                  </div>
                  <div className="glass p-3 rounded-lg ml-auto max-w-[80%] bg-gradient-to-r from-skara-blue/20 to-skara-lavender/20">
                    <p className="text-sm">
                      A binary tree is a hierarchical data structure where each node has at most two children, 
                      referred to as the left and right child. Would you like me to explain its implementation?
                    </p>
                  </div>
                  <div className="glass p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Yes, and show a visualization please</p>
                  </div>
                  <div className="glass p-3 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-skara-blue rounded-full animate-pulse"></div>
                    <p className="text-sm">Skara is typing...</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Video Lessons */}
              <div className="glass p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Video Lessons</h3>
                <div className="space-y-4">
                  <div className="glass p-2 rounded-lg">
                    <div className="h-24 rounded-md bg-gradient-to-r from-skara-blue/30 to-skara-lavender/30 mb-2 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-skara-blue border-b-[7px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <p className="text-sm font-medium">Introduction to Binary Trees</p>
                  </div>
                  <div className="glass p-2 rounded-lg">
                    <div className="h-24 rounded-md bg-gradient-to-r from-skara-mint/30 to-skara-coral/30 mb-2 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-skara-mint border-b-[7px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <p className="text-sm font-medium">Advanced Sorting Algorithms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
