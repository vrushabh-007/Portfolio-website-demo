import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-light-green to-brand-pale-green">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get In <span className="text-brand-dark-green">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your import/export journey? Contact us today 
            to discuss your requirements and get a personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="animate-scale-in bg-white/80 backdrop-blur-sm border-brand-light-green">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark-green">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-brand-light-green focus:border-brand-bright-green"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-brand-light-green focus:border-brand-bright-green"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-brand-light-green focus:border-brand-bright-green"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="border-brand-light-green focus:border-brand-bright-green"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-dark-green hover:bg-brand-bright-green hover:text-black text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-white/80 backdrop-blur-sm border-brand-light-green">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-dark-green mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-brand-bright-green flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-black">Address</h4>
                      <p className="text-gray-600">123 Trade Center, Global District<br />International City, IC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-brand-bright-green flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-black">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-brand-bright-green flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-black">Email</h4>
                      <p className="text-gray-600">info@globaltradeco.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-brand-bright-green flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-black">Business Hours</h4>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-brand-dark-green to-brand-dark-purple text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Trade?</h3>
                <p className="mb-6">Join hundreds of satisfied clients who trust us with their import/export needs.</p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-brand-dark-green transition-all duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Explore Our Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
