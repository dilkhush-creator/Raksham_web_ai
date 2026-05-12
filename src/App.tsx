import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Simplify from './components/Simplify';
import Clients from './components/Clients';
import Faq from './components/Faq';
import Transform from './components/Transform';
import Footer from './components/Footer';

// Landing Page (Home)
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

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here as needed, e.g.: */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
