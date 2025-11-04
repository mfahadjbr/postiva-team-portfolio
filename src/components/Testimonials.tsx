import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "The experience of deal with Postiva was seamlessly aseptically easy a walk yand run a long run unt they have been extremely professional since the work hello work with them again, looking forward to work with them again. Looking forward to the future journey to work with them which will be much work.",
    author: "Client Name",
    role: "CEO, Company",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  },
  {
    text: "The experience of deal with Postiva was seamlessly aseptically easy a walk yand run a long run unt they have been extremely professional since the work hello work with them again, looking forward to work with them again. Looking forward to the future journey to work with them which will be much work.",
    author: "Client Name",
    role: "CEO, Company",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-primary">Testimonials</span>
          </h2>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-muted/50 border-border animate-fade-in-up">
                  <CardContent className="p-6 sm:p-8 md:p-12">
                    <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-primary"
                      />
                      
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed italic px-2">
                        "{testimonial.text}"
                      </p>

                      <div>
                        <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.author}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="flex -left-2 sm:-left-12 border-[#196659] text-[#196659] hover:text-white hover:bg-[#196659]" 
            style={{ 
              borderColor: '#196659',
              color: '#196659'
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#196659'; }}
          />
          <CarouselNext 
            className="flex -right-2 sm:-right-12 border-[#196659] text-[#196659] hover:bg-[#196659] hover:text-white"
            style={{ 
              borderColor: '#196659',
              color: '#196659'
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#196659'; }}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
