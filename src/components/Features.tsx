import { BarChart3, Wallet, Download } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[44px] font-bold text-[#111827] mb-6">Key features</h2>
          <p className="text-[17px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gray-900">Raksham's</strong> key features—Activity Monitoring, Task Management, and<br className="hidden md:block" />
            Geo-Tracking—streamline operations and boost workforce efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-[1.5rem] flex items-center justify-center mb-8 shadow-[0_10px_40px_rgb(106,92,219,0.15)]">
              <BarChart3 size={36} className="text-[#6a5cdb]" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Attendance Management</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Track employee attendance in real-time<br className="hidden lg:block" />with geo-fencing, shift monitoring, and<br className="hidden lg:block" />automated alerts for seamless<br className="hidden lg:block" />management.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-[1.5rem] flex items-center justify-center mb-8 shadow-[0_10px_40px_rgb(106,92,219,0.15)]">
              <Wallet size={36} className="text-[#6a5cdb]" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Task Management</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Assign, track, and monitor tasks in real-<br className="hidden lg:block" />time, ensuring efficient completion and<br className="hidden lg:block" />workforce accountability.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-[1.5rem] flex items-center justify-center mb-8 shadow-[0_10px_40px_rgb(106,92,219,0.15)]">
              <Download size={36} className="text-[#6a5cdb]" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Payroll Management</h3>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Automate payroll based on attendance<br className="hidden lg:block" />and overtime, ensuring accurate, timely<br className="hidden lg:block" />payments and compliance with labor<br className="hidden lg:block" />laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
