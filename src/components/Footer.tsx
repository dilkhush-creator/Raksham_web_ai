import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray/30 pb-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-primary mb-6">Raksham</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Simplifying workforce management with reliable tools for attendance, payroll, and employee records.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Products</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Raksham Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Staff App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guard App</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start">
                <Phone className="mr-4 text-primary mt-1" size={20} />
                <span>+91-8660319788</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-4 text-primary mt-1" size={20} />
                <span>contact@raksham.ai</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-4 text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-sm">Awfis Vista Pixel, 4th Floor, 8/2B and 8, 2nd C Main Rd, Jakkuru Layout, Bengaluru, Karnataka 560092</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>Copyright © 2026, all rights reserved by NammaRaksham AI Private Limited.</p>
          <p className="mt-4 md:mt-0">Developed & Managed By Static Consultancy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
