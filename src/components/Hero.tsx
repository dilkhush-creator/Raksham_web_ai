import { ArrowRight, MessageCircle } from 'lucide-react';
import laptopFirst from '../assets/Laptop_first.png';

const Hero = () => {
  return (
    <>
      <section id="home" className="pt-36 pb-24 relative overflow-hidden bg-[#100b29]">
        {/* Subtle background waves/blobs (simulated) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
          
          <h1 className="text-5xl md:text-[64px] font-bold text-white mb-6 tracking-tight max-w-5xl leading-[1.1]">
            Optimize Workforce, Accelerate<br />
            Business Growth With <span className="text-[#6366f1]">Raksham</span>
          </h1>

           <h1 className="text-5xl md:text-[64px] font-bold text-white mb-6 tracking-tight max-w-5xl leading-[1.1]">
            Create Your Own <span className="text-[#6366f1]"> COMMAND CENTER</span>
          </h1>
          
        
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl font-light">
            Manage workforce and track attendance effortlessly with Raksham. Streamline employee visibility and simplify operations using our platform.
          </p>
          
          <button className="bg-[#6366f1] text-white px-8 py-3.5 rounded-lg font-medium text-lg flex items-center justify-center hover:bg-[#5a5ce6] transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            Book Free Demo <ArrowRight className="ml-2" size={20} />
          </button>

          {/* Laptop Image */}
          <div className="mt-20 w-full max-w-5xl mx-auto relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-[#6366f1]/10 blur-[80px] rounded-full scale-90 -translate-y-8"></div>
            <img 
              src={laptopFirst} 
              alt="Raksham Dashboard Preview" 
              className="relative z-10 w-full rounded-2xl shadow-[0_20px_80px_rgba(99,102,241,0.25)] border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Fixed Side Buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end gap-4 z-50">
        <button className="bg-[#6366f1] hover:bg-[#5a5ce6] text-white text-sm font-semibold px-4 py-2 rounded-l-lg shadow-lg transition-transform hover:-translate-x-1">
          Book Demo
        </button>
        <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-l-full shadow-lg flex items-center justify-center mr-0 transition-transform hover:-translate-x-1">
          <MessageCircle size={32} />
        </button>
      </div>
    </>
  );
};

export default Hero;
