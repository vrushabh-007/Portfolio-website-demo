import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-pale-green to-brand-light-green">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
          Premium
          <span className="text-brand-dark-green block">Import & Export</span>
          Solutions
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Connecting global markets with the finest pulses, grains, and spices. 
          Your trusted partner in international trade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact} 
            className="bg-brand-dark-green hover:bg-brand-bright-green hover:text-black text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
            className="border-brand-dark-green text-brand-dark-green hover:bg-brand-dark-green hover:text-white px-8 py-3 text-lg transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      </div>
    </section>
  );
};

export default Hero;