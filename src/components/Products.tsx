import { CheckSquare, ArrowRight, LayoutDashboard, CalendarDays } from 'lucide-react';
import rakshamWebSec from '../assets/Raksham_web_sec.png';
import phoneFirst from '../assets/Phone_first.png';
import phoneGuard from '../assets/Phone_gard_image.png';

const Products = () => {
  return (
    <section id="products" className="py-24 relative bg-gray-50/50">
      {/* Subtle background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px)', backgroundSize: '200px 100%' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">Our products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A wide selection of tailored products to simplify staff management, payroll,<br />
            and compliance, customized for your business needs.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 border border-gray-100 flex flex-col gap-24">
          
          {/* Raksham Web Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#eef4fb] to-[#e8f0fd] rounded-3xl p-6 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-[0_10px_40px_rgba(99,102,241,0.08)]">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[200px] bg-[#6366f1]/8 rounded-full blur-[60px]"></div>
              </div>
              <img 
                src={rakshamWebSec} 
                alt="Raksham Web Dashboard" 
                className="relative z-10 w-full h-auto rounded-xl object-contain drop-shadow-[0_20px_40px_rgba(106,92,219,0.2)]"
              />
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-6">
                <CheckSquare className="text-[#38bdf8]" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">Raksham Web</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                <strong className="text-gray-900">Raksham's</strong> Web allows organizations to monitor employee activity and track live progress, ensuring real-time insights into productivity and performance for better workforce management and operational efficiency
              </p>
              <a href="#" className="inline-flex items-center text-[#6366f1] font-semibold text-lg hover:underline decoration-2 underline-offset-4">
                Explore Raksham Web <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Staff App Row */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-[#f3e8ff] rounded-2xl flex items-center justify-center mb-6">
                <LayoutDashboard className="text-[#a855f7]" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">Staff App</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                <strong className="text-gray-900">Raksham's</strong> staff app enables employees to track their tasks, update progress, and stay connected in real-time, offering a seamless way to manage daily activities and boost overall productivity.
              </p>
              <a href="#" className="inline-flex items-center text-[#6366f1] font-semibold text-lg hover:underline decoration-2 underline-offset-4">
                Explore Staff App <ArrowRight className="ml-2" size={20} />
              </a>
            </div>

            
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#f0f0ff] to-[#e8f4fd] rounded-3xl p-6 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-[0_10px_40px_rgba(99,102,241,0.08)]">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[250px] h-[250px] bg-[#6366f1]/10 rounded-full blur-[60px]"></div>
              </div>
              <img 
                src={phoneFirst} 
                alt="Raksham Staff App" 
                className="relative z-10 h-[420px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(106,92,219,0.3)]"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Guard App Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#f0f0ff] to-[#e8f0fd] rounded-3xl p-6 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-[0_10px_40px_rgba(99,102,241,0.08)]">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[250px] h-[250px] bg-[#6366f1]/10 rounded-full blur-[60px]"></div>
              </div>
              <img 
                src={phoneGuard} 
                alt="Raksham Guard App" 
                className="relative z-10 h-[420px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(106,92,219,0.25)]"
              />
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-[#ccfbf1] rounded-2xl flex items-center justify-center mb-6">
                <CalendarDays className="text-[#14b8a6]" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">Guard App</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                <strong className="text-gray-900">Raksham</strong> provides a complete workforce management solution, offering real-time shift scheduling, attendance tracking, incident reporting, OT and leave management, and random sleep alerts to ensure employee alertness and operational efficiency.
              </p>
              <a href="#" className="inline-flex items-center text-[#6366f1] font-semibold text-lg hover:underline decoration-2 underline-offset-4">
                Explore Guard App <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
