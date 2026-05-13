import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import Features from './components/Features';
import Simplify from './components/Simplify';
import Clients from './components/Clients';
import Faq from './components/Faq';
import Transform from './components/Transform';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <Simplify />
      <Clients />
      <Faq />
      <Transform />
    </>
  );
}

function ScrollManager() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Instant scroll to top on every route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Page-enter animation on the main wrapper
    const main = document.getElementById('main-content');
    if (main) {
      main.classList.remove('page-enter');
      void main.offsetWidth; // force reflow
      main.classList.add('page-enter');
    }

    // Observe all sections and reveal them as they enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger siblings for a cascade effect
            const siblings = Array.from(
              entry.target.parentElement?.querySelectorAll('section') ?? []
            );
            const idx = siblings.indexOf(entry.target as HTMLElement);
            (entry.target as HTMLElement).style.transitionDelay = `${idx * 60}ms`;
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    // Small delay so the DOM is fully settled after route change
    const timer = setTimeout(() => {
      document.querySelectorAll('section').forEach((s) => {
        s.classList.remove('in-view');
        (s as HTMLElement).style.transitionDelay = '';
        observer.observe(s);
      });
    }, 30);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <ScrollManager />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
