
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Computer Science Student",
    avatar: "https://placehold.co/200/fafafa/a5c8ff?text=AJ",
    content: "CGPA Skills AI completely changed how I study. The personalized study plans and AI explanations helped me grasp complex algorithms that I was struggling with for months.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Pre-Med Student",
    avatar: "https://placehold.co/200/fafafa/d8c5ff?text=SC",
    content: "I used the Interview Coach feature to prepare for my medical school interviews. The feedback on my voice tone and pacing was incredibly helpful. I got accepted to my top choice program!",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Engineering Graduate",
    avatar: "https://placehold.co/200/fafafa/c2f2d3?text=MR",
    content: "The AI-generated video lessons made complex engineering concepts so much clearer than my textbooks. I wish I had discovered this platform earlier in my studies.",
    rating: 4
  },
  {
    name: "Priya Patel",
    role: "Business Student",
    avatar: "https://placehold.co/200/fafafa/ff9b8f?text=PP",
    content: "The collaboration features allowed my study group to work together remotely during the pandemic. The shared flashcards and AI tutor kept us all on track for finals.",
    rating: 5
  }
];

const Testimonials = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainer.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.clientWidth : container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what students are saying about their experience with CGPA Skills AI.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/30 transition-colors -translate-x-4 sm:translate-x-0"
            onClick={() => scroll('left')}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/30 transition-colors translate-x-4 sm:translate-x-0"
            onClick={() => scroll('right')}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonial Carousel */}
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-6 -mx-4 scrollbar-none"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-[85%] sm:min-w-[350px] md:min-w-[400px] snap-center scroll-fade-in"
              >
                <div className="glass-card p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 flex-grow mb-4">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                        className={i < testimonial.rating ? "text-primary" : "text-foreground/30"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
