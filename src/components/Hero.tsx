import { ArrowRight, MessageCircle } from 'lucide-react';

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
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl font-light">
            Manage workforce and track attendance effortlessly with Raksham. Streamline employee visibility and simplify operations using our platform.
          </p>
          
          <button className="bg-[#6366f1] text-white px-8 py-3.5 rounded-lg font-medium text-lg flex items-center justify-center hover:bg-[#5a5ce6] transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            Book Free Demo <ArrowRight className="ml-2" size={20} />
          </button>

          {/* Mockup Area */}
          <div className="mt-24 w-full max-w-6xl mx-auto relative h-[400px] md:h-[600px]">
            {/* Dummy Laptop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[90%] md:w-[800px] aspect-[16/10] bg-[#1a153a] rounded-t-2xl border-[12px] border-black border-b-0 shadow-2xl overflow-hidden flex flex-col">
              {/* Dummy Browser Header */}
              <div className="bg-[#2a244d] h-8 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 ml-4 bg-white/10 rounded-md h-5"></div>
              </div>
              {/* Dummy App Content */}
              <div className="flex-1 bg-white/5 flex items-center justify-center text-gray-500 font-medium">
                [Laptop Dashboard Image Area]
              </div>
            </div>
            {/* Laptop Base */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[calc(100%-12px)] md:top-[calc(800px*10/16)] w-[95%] md:w-[900px] h-4 bg-gray-400 rounded-b-xl shadow-2xl"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[calc(100%-12px+16px)] md:top-[calc(800px*10/16+16px)] w-[150px] h-1 bg-gray-500 rounded-b-lg"></div>

            {/* Dummy Mobile Phone */}
            <div className="hidden md:flex absolute bottom-12 right-[10%] w-[220px] h-[450px] bg-[#1a153a] rounded-[2.5rem] border-[10px] border-black shadow-2xl overflow-hidden flex-col">
               {/* Mobile Notch */}
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
               {/* Mobile App Content */}
               <div className="flex-1 bg-white/5 flex items-center justify-center text-gray-500 font-medium text-center px-4">
                 [Mobile App Image Area]
               </div>
            </div>

            {/* Floating Label - Web */}
            <div className="hidden md:flex absolute top-1/4 left-[5%] bg-[#5b4f96] text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-2xl whitespace-nowrap transform -rotate-2">
              Web Application by<br />Raksham
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#5b4f96] rotate-45"></div>
            </div>

            {/* Floating Label - Mobile */}
            <div className="hidden md:flex absolute bottom-1/4 right-[25%] bg-[#5b4f96] text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-2xl whitespace-nowrap transform rotate-2 z-20">
              Mobile Application by<br />Raksham
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#5b4f96] rotate-45"></div>
            </div>
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
