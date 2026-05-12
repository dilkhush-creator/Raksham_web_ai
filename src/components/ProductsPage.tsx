import { CheckSquare, ArrowRight, LayoutDashboard, CalendarDays } from 'lucide-react';
import laptopFirst from '../assets/Laptop_first.png';
import phoneFirst from '../assets/Phone_first.png';
import rakshamWebSec from '../assets/Raksham_web_sec.png';
import phoneGuard from '../assets/Phone_gard_image.png';
import Features from './Features';

const ProductsPage = () => {
  return (
    <>
      {/* ── Dark Hero Banner ── */}
      <section className="bg-[#100b29] pt-36 pb-24 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-[64px] font-bold text-white mb-6 leading-tight tracking-tight">
            Our products
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Raksham empowers businesses with seamless workforce management, enabling smoother
            operations, better collaboration, and improved overall efficiency for long-term growth.
          </p>
        </div>
      </section>

      {/* ── Revolutionize Section ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column heading + description */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-[1.15]">
                Revolutionize Your<br />Workforce<br />Management
              </h2>
            </div>
            <div className="md:w-1/2 flex items-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong className="text-gray-900">Raksham</strong> offers a comprehensive solution for
                managing your workforce. Our platform simplifies operations, improves communication, and
                boosts efficiency, helping businesses stay organised and focused on growth. With Raksham,
                you can seamlessly manage teams and ensure smooth day-to-day operations.
              </p>
            </div>
          </div>

          {/* Device mockup card */}
          <div className="relative bg-[#f4f2ff] rounded-3xl px-6 pt-12 pb-0 overflow-hidden shadow-[0_8px_40px_rgba(99,102,241,0.08)]">
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              <div className="w-[60%] h-[40%] bg-[#6366f1]/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative flex items-end justify-center">
              {/* Laptop */}
              <div className="relative w-full max-w-4xl">
                {/* Web App label */}
                <div className="absolute top-4 left-6 z-20 bg-[#6366f1] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg leading-snug">
                  Web Application by<br />Raksham
                </div>
                <img
                  src={laptopFirst}
                  alt="Raksham Web Application"
                  className="relative z-10 w-full drop-shadow-[0_30px_60px_rgba(99,102,241,0.2)]"
                />
              </div>

              {/* Phone overlay */}
              <div className="absolute right-4 md:right-10 lg:right-20 bottom-0 z-20 flex flex-col items-center">
                <img
                  src={phoneFirst}
                  alt="Raksham Mobile Application"
                  className="h-[200px] md:h-[260px] lg:h-[320px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(99,102,241,0.3)]"
                />
                <div className="bg-[#6366f1] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg text-center mb-5 leading-snug">
                  Mobile Application by<br />Raksham
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Products Cards Section ── */}
      <section id="our-products" className="py-24 bg-[#f0eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">Our products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A wide selection of tailored products to simplify staff management, payroll,<br />
              and compliance, customized for your business needs.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 border border-gray-100 flex flex-col gap-24">

            {/* Raksham Web */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2 bg-[#f4f4f8] rounded-3xl p-6 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[300px] h-[200px] bg-[#6366f1]/8 rounded-full blur-[60px]" />
                </div>
                <img
                  src={rakshamWebSec}
                  alt="Raksham Web Dashboard"
                  className="relative z-10 w-full h-auto rounded-xl object-contain drop-shadow-[0_20px_40px_rgba(106,92,219,0.2)]"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-6">
                  <CheckSquare className="text-[#38bdf8]" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">Raksham Web</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  <strong className="text-gray-900">Raksham's</strong> Web allows organisations to monitor
                  employee activity and track live progress, ensuring real-time insights into productivity
                  and performance for better workforce management and operational efficiency.
                </p>
                <a href="#" className="inline-flex items-center text-[#6366f1] font-semibold text-lg hover:underline decoration-2 underline-offset-4">
                  Explore Raksham Web <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Staff App */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 bg-[#f3e8ff] rounded-2xl flex items-center justify-center mb-6">
                  <LayoutDashboard className="text-[#a855f7]" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">Staff App</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  <strong className="text-gray-900">Raksham's</strong> staff app enables employees to track
                  their tasks, update progress, and stay connected in real-time, offering a seamless way to
                  manage daily activities and boost overall productivity.
                </p>
                <a href="#" className="inline-flex items-center text-[#6366f1] font-semibold text-lg hover:underline decoration-2 underline-offset-4">
                  Explore Staff App <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
              <div className="w-full md:w-1/2 bg-[#f4f4f8] rounded-3xl p-6 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[250px] h-[250px] bg-[#6366f1]/10 rounded-full blur-[60px]" />
                </div>
                <img
                  src={phoneFirst}
                  alt="Raksham Staff App"
                  className="relative z-10 h-[420px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(106,92,219,0.3)]"
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Guard App */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2 bg-[#f4f4f8] rounded-3xl p-6 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[250px] h-[250px] bg-[#6366f1]/10 rounded-full blur-[60px]" />
                </div>
                <img
                  src={phoneGuard}
                  alt="Raksham Guard App"
                  className="relative z-10 h-[420px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(106,92,219,0.25)]"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-16 h-16 bg-[#ccfbf1] rounded-2xl flex items-center justify-center mb-6">
                  <CalendarDays className="text-[#14b8a6]" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">Guard App</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  <strong className="text-gray-900">Raksham</strong> provides a complete workforce management
                  solution, offering real-time shift scheduling, attendance tracking, incident reporting, OT
                  and leave management, and random sleep alerts to ensure employee alertness and operational
                  efficiency.
                </p>
                <a href="#" className="inline-flex items-center text-[#6366f1] font-semibold text-lg hover:underline decoration-2 underline-offset-4">
                  Explore Guard App <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <Features />
    </>
  );
};

export default ProductsPage;
