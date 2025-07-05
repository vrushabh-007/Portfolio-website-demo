import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark-green text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-brand-bright-green">GlobalTrade Co.</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in international trade, connecting global markets 
              with premium pulses, grains, and spices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-brand-bright-green transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-bright-green transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-bright-green transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-bright-green transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Premium Pulses</li>
              <li>Exotic Grains</li>
              <li>Aromatic Spices</li>
              <li>Organic Options</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@globaltradeco.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Trade Center<br />International City, IC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-bright-green/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 GlobalTrade Co. All rights reserved. | Connecting global markets with quality products.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
