
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This helped me go from 6.8 to 8.4 CGPA! The AI tutor understood exactly where I was struggling and tailored explanations just for me.",
      name: "Ananya",
      college: "NITK",
      image: "https://placehold.co/100x100/f8f8ff/a5c8ff"
    },
    {
      quote: "Best interview prep tool I've used. The mock interviews felt so realistic, and the feedback helped me land my dream internship at Microsoft.",
      name: "Rajat",
      college: "SRM",
      image: "https://placehold.co/100x100/f8f8ff/d8c5ff"
    },
    {
      quote: "Skara's flashcard system helped me memorize complex algorithms in half the time it usually takes. The spaced repetition is incredibly effective!",
      name: "Priya",
      college: "IIT Bombay",
      image: "https://placehold.co/100x100/f8f8ff/c2f2d3"
    },
    {
      quote: "The AI interview coach pointed out verbal habits I wasn't aware of and helped me sound much more confident. Game changer for placements!",
      name: "Vikram",
      college: "Manipal University",
      image: "https://placehold.co/100x100/f8f8ff/ff9b8f"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Feedback</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Hear what students have to say about their experience with Skara.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Carousel */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              return (
                <div 
                  key={index}
                  className={`glass-card p-6 rounded-xl ${offset === 1 ? 'transform scale-110 z-10 shadow-lg' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonials[index].image} 
                        alt={testimonials[index].name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonials[index].name}</h3>
                      <p className="text-sm text-foreground/60">{testimonials[index].college}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonials[index].quote}"</p>
                </div>
              );
            })}
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-foreground/60">{testimonials[currentIndex].college}</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"{testimonials[currentIndex].quote}"</p>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/80 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/80 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-5' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
