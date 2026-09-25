import { List, X, CaretDown, ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rakshamLogo from '../assets/Raksham_logo.png';

const LOGIN_URL = 'https://app.raksham.in/auth/login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProducts = location.pathname === '/products';
  const isAbout = location.pathname === '/about';
  const isPricing = location.pathname === '/pricing';
  const isBlog = location.pathname === '/blog';
  const isContact = location.pathname === '/contact';

  // Always visible (Apple-style); frosted so content shows softly through it
  return (
    <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-xl backdrop-saturate-150 z-50 border-b border-line/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={rakshamLogo} alt="" className="h-7" />
            <span className="text-lg font-semibold text-ink tracking-tight">Raksham</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 items-center ml-8">
            <Link to="/" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isHome ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/products"
                className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors flex items-center gap-1.5 ${isProducts ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}
              >
                Products <CaretDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Hover dropdown */}
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                <div className="w-52 rounded-2xl shadow-2xl bg-surface/95 backdrop-blur-xl border border-line py-2 z-50">
                  <Link to="/products#products" className="block px-5 py-2 text-[13px] text-body hover:text-ink hover:bg-ink/5 transition-colors">Raksham Web</Link>
                  <Link to="/products#products" className="block px-5 py-2 text-[13px] text-body hover:text-ink hover:bg-ink/5 transition-colors">Staff App</Link>
                  <Link to="/products#products" className="block px-5 py-2 text-[13px] text-body hover:text-ink hover:bg-ink/5 transition-colors">Guard App</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isAbout ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>About</Link>
            <Link to="/pricing" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isPricing ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>Pricing</Link>
            <Link to="/blog" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isBlog ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>Blogs</Link>
            <Link to="/contact" className={`px-3.5 py-1.5 rounded-full text-[13px] transition-colors ${isContact ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-auto">
            <a
              href={LOGIN_URL}
              className="bg-primary hover:bg-primary-hover text-white px-4 py-1.5 rounded-full text-[13px] transition-all flex items-center gap-1.5 active:scale-[0.98]"
            >
              SignIn <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} className="text-body hover:text-ink p-2">
              {isOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-line p-4 flex flex-col space-y-1 h-[calc(100dvh-3.5rem)] overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isHome ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>Home</Link>
          <div className="flex justify-between items-center">
            <Link to="/products" onClick={() => setIsOpen(false)} className={`text-left px-4 py-3 rounded-xl text-lg flex-1 ${isProducts ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>
              Products
            </Link>
            <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="text-body hover:text-ink px-4 py-3 rounded-lg">
              <CaretDown size={18} className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          {isProductsOpen && (
            <div className="flex flex-col pl-8 space-y-2 pb-2">
              <Link to="/products#products" onClick={() => setIsOpen(false)} className="text-muted hover:text-ink py-2">Raksham Web</Link>
              <Link to="/products#products" onClick={() => setIsOpen(false)} className="text-muted hover:text-ink py-2">Staff App</Link>
              <Link to="/products#products" onClick={() => setIsOpen(false)} className="text-muted hover:text-ink py-2">Guard App</Link>
            </div>
          )}
          <Link to="/about" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isAbout ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>About</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isPricing ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>Pricing</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isBlog ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl text-lg ${isContact ? 'text-ink bg-ink/5' : 'text-body hover:text-ink'}`}>Contact</Link>
          <div className="pt-6">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-white px-4 py-3.5 rounded-full flex items-center justify-center gap-2"
            >
              SignIn <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
