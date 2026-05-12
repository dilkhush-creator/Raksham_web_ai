import simplifyImg from '../assets/Simplify.png';

const Simplify = () => {
  return (
    <section className="py-24 bg-[#0e0a2b] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-[44px] font-bold text-white mb-6 leading-[1.2]">
              Simplify Workforce<br />Management with<br />Raksham
            </h2>
            <p className="text-gray-300 text-[17px] leading-relaxed mb-14 max-w-lg font-light">
              Raksham simplifies workforce management with powerful tools for tracking attendance, managing payroll, and maintaining employee records, all while ensuring compliance and efficiency, so you can focus on growing your business effortlessly.
            </p>
            
            <div className="flex items-center gap-16">
              <div>
                <div className="text-[56px] font-bold text-[#8b5cf6] mb-1 tracking-tighter leading-none">89%</div>
                <div className="text-white font-medium text-lg">Error Reduction</div>
              </div>
              <div>
                <div className="text-[56px] font-bold text-[#22d3ee] mb-1 tracking-tighter leading-none">96%</div>
                <div className="text-white font-medium text-lg">Efficiency Boost</div>
              </div>
            </div>
          </div>

          {/* Illustration Area */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] bg-[#6366f1]/15 rounded-full blur-[80px]"></div>
            </div>
            <img 
              src={simplifyImg} 
              alt="Simplify Workforce Management" 
              className="relative z-10 w-full max-w-[480px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(99,102,241,0.3)]"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Simplify;
