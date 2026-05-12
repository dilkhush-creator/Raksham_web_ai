import { Menu, X, ChevronDown, ArrowRight, Shield } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#100b29] z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[88px] items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative flex items-center justify-center">
              <Shield size={38} className="text-[#a78bfa]" strokeWidth={1.5} />
              {/* Inner details of the dummy shield */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-[3px] py-2">
                <div className="w-4 h-[2px] bg-white/60 rounded-full transform -rotate-12"></div>
                <div className="w-5 h-[2px] bg-white/60 rounded-full transform -rotate-12"></div>
                <div className="w-4 h-[2px] bg-white/60 rounded-full transform -rotate-12"></div>
              </div>
            </div>
            <span className="text-3xl font-bold text-white tracking-wide ml-1 font-sans">Raksham</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 items-center ml-8">
            <a href="#home" className="text-white bg-[#251e44] px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Home
            </a>
            <div className="relative group">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                Products <ChevronDown size={16} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-[#1a153a] border border-white/10 py-2 z-50">
                  <a href="#web" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Raksham Web</a>
                  <a href="#staff" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Staff App</a>
                  <a href="#guard" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Guard App</a>
                </div>
              )}
            </div>
            <a href="#about" className="text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">About</a>
            <a href="#pricing" className="text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">Pricing</a>
            <a href="#blogs" className="text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">Blogs</a>
            <a href="#contact" className="text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-auto">
            <button className="bg-[#6366f1] hover:bg-[#5a5ce6] text-white px-6 py-2.5 rounded-lg text-[15px] font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              Login/Signup <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#100b29] border-t border-white/10 p-4 flex flex-col space-y-2 shadow-2xl h-screen">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-white bg-[#251e44] px-4 py-3 rounded-lg font-medium">Home</a>
          <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="text-left text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium flex justify-between items-center">
            Products <ChevronDown size={18} className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
          </button>
          {isProductsOpen && (
            <div className="flex flex-col pl-8 space-y-2 pb-2">
              <a href="#web" className="text-gray-400 hover:text-white py-2">Raksham Web</a>
              <a href="#staff" className="text-gray-400 hover:text-white py-2">Staff App</a>
              <a href="#guard" className="text-gray-400 hover:text-white py-2">Guard App</a>
            </div>
          )}
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium">About</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium">Pricing</a>
          <a href="#blogs" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium">Blogs</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium">Contact</a>
          <div className="pt-6">
            <button className="w-full bg-[#6366f1] text-white px-4 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2">
              Login/Signup <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
