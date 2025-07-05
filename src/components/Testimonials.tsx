import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "FreshMart International",
      text: "GlobalTrade Co. has been our reliable partner for over 5 years. Their quality standards and timely deliveries have helped us expand our business globally.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Asian Cuisine Exports",
      text: "The variety and authenticity of their spices are unmatched. Our customers love the premium quality products we source through GlobalTrade Co.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Organic Foods Ltd.",
      text: "Professional service, competitive pricing, and exceptional product quality. They understand our needs and always deliver beyond expectations.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Client <span className="text-brand-dark-green">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients 
            have to say about our services and products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-brand-pale-green to-white border-brand-light-green animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-bright-green text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-brand-light-green pt-4">
                  <h4 className="font-bold text-brand-dark-green text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
