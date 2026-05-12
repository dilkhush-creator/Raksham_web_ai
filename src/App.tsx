import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Stats from './components/Stats';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-primary-light selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Features />
        <Stats />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
