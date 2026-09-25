import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jump to the #section in the URL if there is one, otherwise to the top
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    // reducedMotion="user": every Motion animation goes static for visitors who ask for less motion
    // LazyMotion + `m` components: loads only the DOM animation features we use (smaller bundle)
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen flex flex-col font-sans bg-surface selection:bg-indigo-100 selection:text-indigo-900">
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
    </MotionConfig>
    </LazyMotion>
  );
}

export default App;
