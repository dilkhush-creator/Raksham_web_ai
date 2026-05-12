import { CheckSquare, ArrowRight, LayoutDashboard, CalendarDays } from 'lucide-react';

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
            <div className="w-full md:w-1/2 bg-[#f0f7fb] rounded-3xl p-8 relative flex items-center justify-center min-h-[400px]">
              {/* Dummy Laptop */}
              <div className="relative w-full max-w-[400px] aspect-[16/10] bg-white rounded-t-xl border-[6px] border-black border-b-0 shadow-lg flex flex-col z-10">
                <div className="bg-gray-100 h-4 flex items-center px-2 gap-1 border-b border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-gray-50 flex items-center justify-center text-xs text-gray-400">
                  [Web Dashboard Image]
                </div>
              </div>
              {/* Laptop base */}
              <div className="absolute top-[calc(50%+120px)] w-full max-w-[440px] h-3 bg-gray-300 rounded-b-lg shadow-xl z-10"></div>
              
              {/* Floating Tooltips */}
              <div className="absolute top-1/4 right-[5%] bg-[#6a5cdb] text-white text-[10px] sm:text-xs px-3 py-2 rounded-md shadow-lg z-20 max-w-[150px]">
                Real-time employee status
                <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#6a5cdb] rotate-45"></div>
              </div>
              <div className="absolute bottom-1/3 left-[5%] bg-[#6a5cdb] text-white text-[10px] sm:text-xs px-3 py-2 rounded-md shadow-lg z-20 max-w-[180px]">
                Interactive multi-location geo-fencing
                <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#6a5cdb] rotate-45"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-6">
                <CheckSquare className="text-[#38bdf8]" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">Raksham Web</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                <strong className="text-gray-900">Raksham's</strong> Web allows organizations to monitor employee activity and track live progress, ensuring real-time insights into productivity and performance for better workforce management and operational efficiency.
              </p>
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

            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-[#f8fafc] rounded-3xl p-8 relative flex items-center justify-center min-h-[400px]">
              {/* Dummy Mobile */}
              <div className="relative w-[200px] h-[400px] bg-white rounded-[2rem] border-[8px] border-black shadow-xl flex flex-col z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl"></div>
                <div className="flex-1 bg-gray-50 flex items-center justify-center text-xs text-gray-400 mt-5">
                  [Staff App Image]
                </div>
              </div>

              {/* Floating Tooltips */}
              <div className="absolute bottom-1/4 left-[5%] bg-[#6a5cdb] text-white text-[10px] sm:text-xs px-4 py-3 rounded-lg shadow-lg z-20 max-w-[180px]">
                Start your work shift by logging in effortlessly.
                <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#6a5cdb] rotate-45"></div>
              </div>
              <div className="absolute bottom-[10%] right-[5%] bg-[#6a5cdb] text-white text-[10px] sm:text-xs px-4 py-3 rounded-lg shadow-lg z-20 max-w-[200px]">
                View and manage your shift schedule with real-time updates.
                <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#6a5cdb] rotate-45"></div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Guard App Row */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-[#f0fdf4] rounded-3xl p-8 relative flex items-center justify-center min-h-[400px]">
              {/* Dummy Mobile */}
              <div className="relative w-[200px] h-[400px] bg-white rounded-[2rem] border-[8px] border-black shadow-xl flex flex-col z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl"></div>
                <div className="flex-1 bg-gray-50 flex items-center justify-center text-xs text-gray-400 mt-5">
                  [Guard App Image]
                </div>
              </div>

              {/* Floating Tooltips */}
              <div className="absolute bottom-1/4 right-[5%] bg-[#6a5cdb] text-white text-[10px] sm:text-xs px-4 py-3 rounded-lg shadow-lg z-20 max-w-[180px]">
                Get randomize sleep alert.
                <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#6a5cdb] rotate-45"></div>
              </div>
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
