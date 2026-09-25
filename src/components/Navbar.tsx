import { List, X, CaretDown, ArrowRight } from '@phosphor-icons/react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rakshamLogo from '../assets/Raksham_logo.png';
import ThemeToggle from './ThemeToggle';

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
    <nav className={`fixed top-0 w-full bg-navy/75 backdrop-blur-xl backdrop-saturate-150 z-50 border-b border-white/10 transition-transform duration-300 ease-in-out ${navHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={rakshamLogo} alt="" className="h-7" />
            <span className="text-lg font-semibold text-white tracking-tight">Raksham</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 items-center ml-8">
            <Link to="/" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isHome ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/products"
                className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors flex items-center gap-1.5 ${isProducts ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}
              >
                Products <CaretDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Hover dropdown */}
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="w-52 rounded-2xl shadow-2xl bg-navy/95 backdrop-blur-xl border border-white/10 py-2 z-50">
                  <Link to="/products#products" className="block px-5 py-2 text-[13px] text-white/75 hover:text-white hover:bg-white/5 transition-colors">Raksham Web</Link>
                  <Link to="/products#products" className="block px-5 py-2 text-[13px] text-white/75 hover:text-white hover:bg-white/5 transition-colors">Staff App</Link>
                  <Link to="/products#products" className="block px-5 py-2 text-[13px] text-white/75 hover:text-white hover:bg-white/5 transition-colors">Guard App</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isAbout ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>About</Link>
            <Link to="/pricing" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isPricing ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>Pricing</Link>
            <Link to="/blog" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isBlog ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>Blogs</Link>
            <Link to="/contact" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isContact ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <a
              href={LOGIN_URL}
              className="bg-primary hover:bg-primary-hover text-white px-4 py-1.5 rounded-full text-[13px] transition-all flex items-center gap-1.5 active:scale-[0.98]"
            >
              Login/Signup <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} className="text-white/75 hover:text-white p-2">
              {isOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 p-4 flex flex-col space-y-1 h-[calc(100dvh-3.5rem)] overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isHome ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>Home</Link>
          <div className="flex justify-between items-center">
            <Link to="/products" onClick={() => setIsOpen(false)} className={`text-left px-4 py-3 rounded-xl text-lg flex-1 ${isProducts ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>
              Products
            </Link>
            <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="text-white/75 hover:text-white px-4 py-3 rounded-lg">
              <CaretDown size={18} className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          {isProductsOpen && (
            <div className="flex flex-col pl-8 space-y-2 pb-2">
              <Link to="/products#products" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white py-2">Raksham Web</Link>
              <Link to="/products#products" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white py-2">Staff App</Link>
              <Link to="/products#products" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white py-2">Guard App</Link>
            </div>
          )}
          <Link to="/about" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isAbout ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>About</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isPricing ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>Pricing</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isBlog ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isContact ? 'text-white bg-white/10' : 'text-white/75 hover:text-white'}`}>Contact</Link>
          <div className="pt-6">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-white px-4 py-3.5 rounded-full flex items-center justify-center gap-2"
            >
              Login/Signup <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
