import { ArrowRight } from 'lucide-react';

const Transform = () => {
  return (
    <section className="relative bg-[#100b29] pt-28 pb-32 overflow-hidden">
      {/* Decorative background shapes mimicking the image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-[20%] top-[20%] w-[50%] h-[150%] bg-[#1a153a]/50 rounded-[4rem] transform -rotate-12 blur-[2px]"></div>
        <div className="absolute -right-[20%] top-[10%] w-[50%] h-[150%] bg-[#1a153a]/50 rounded-[4rem] transform rotate-12 blur-[2px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-[44px] font-bold text-white mb-6 leading-tight tracking-tight">
          Transform Your Workforce<br />
          Management – Start Using<br />
          Raksham Today!
        </h2>
        <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Unlock the full potential of your workforce with Raksham's powerful tools for seamless management and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button className="bg-[#6366f1] hover:bg-[#5a5ce6] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            View Pricing
          </button>
          <a href="#contact" className="text-white font-semibold flex items-center hover:text-gray-300 transition-colors border-b-2 border-white pb-1 group">
            Contact Sales <ArrowRight size={20} className="ml-2 transform transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Slanted Bottom Edge integrating with Footer */}
      <div 
        className="absolute bottom-0 left-0 w-full h-16 bg-[#f8fafc]" 
        style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
      ></div>
    </section>
  );
};

export default Transform;
