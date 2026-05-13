import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rakshamLogo from '../assets/Raksham_logo.png';

const LOGIN_URL = 'https://app.raksham.in/auth/login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Hide when scrolling down past 80px, show when scrolling up
      if (y > lastScrollY.current && y > 80) {
        setNavHidden(true);
        setIsOpen(false); // close mobile menu on hide
      } else {
        setNavHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const isHome = location.pathname === '/';
  const isProducts = location.pathname === '/products';
  const isAbout = location.pathname === '/about';
  const isPricing = location.pathname === '/pricing';
  const isBlog = location.pathname === '/blog';
  const isContact = location.pathname === '/contact';

  return (
    <nav className={`fixed top-0 w-full bg-[#100b29] z-50 border-b border-white/5 transition-transform duration-300 ease-in-out ${navHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[88px] items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={rakshamLogo} alt="Raksham Logo" className="h-[46px]" />
            <span className="text-3xl font-bold text-white tracking-wide ml-1 font-sans">Raksham</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 items-center ml-8">
            <Link to="/" className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${isHome ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/products"
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${isProducts ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}
              >
                Products <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Hover dropdown */}
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="w-56 rounded-xl shadow-2xl bg-[#1a153a] border border-white/10 py-2 z-50">
                  <Link to="/products#our-products" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Raksham Web</Link>
                  <Link to="/products#our-products" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Staff App</Link>
                  <Link to="/products#our-products" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Guard App</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${isAbout ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>About</Link>
            <Link to="/pricing" className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${isPricing ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>Pricing</Link>
            <Link to="/blog" className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${isBlog ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>Blogs</Link>
            <Link to="/contact" className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${isContact ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-auto">
            <a
              href={LOGIN_URL}
              className="bg-[#6366f1] hover:bg-[#5a5ce6] text-white px-6 py-2.5 rounded-lg text-[15px] font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Login/Signup <ArrowRight size={18} strokeWidth={2.5} />
            </a>
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
          <Link to="/" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg font-medium ${isHome ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>Home</Link>
          <div className="flex justify-between items-center">
            <Link to="/products" onClick={() => setIsOpen(false)} className={`text-left px-4 py-3 rounded-lg font-medium flex-1 ${isProducts ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>
              Products
            </Link>
            <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="text-gray-300 hover:text-white px-4 py-3 rounded-lg">
              <ChevronDown size={18} className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          {isProductsOpen && (
            <div className="flex flex-col pl-8 space-y-2 pb-2">
              <Link to="/products#our-products" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white py-2">Raksham Web</Link>
              <Link to="/products#our-products" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white py-2">Staff App</Link>
              <Link to="/products#our-products" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white py-2">Guard App</Link>
            </div>
          )}
          <Link to="/about" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg font-medium ${isAbout ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>About</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg font-medium ${isPricing ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>Pricing</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg font-medium ${isBlog ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg font-medium ${isContact ? 'text-white bg-[#251e44]' : 'text-gray-300 hover:text-white'}`}>Contact</Link>
          <div className="pt-6">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#6366f1] text-white px-4 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              Login/Signup <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
