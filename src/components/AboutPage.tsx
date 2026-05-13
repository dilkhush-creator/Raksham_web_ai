import { ArrowRight, Building2, BarChart3, CheckSquare } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-[#100b29] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-[64px] font-bold text-white mb-6 leading-[1.1] max-w-4xl">
            Empowering Businesses Through Smarter Workforce Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
            At <strong className="text-white">Raksham</strong>, we simplify workforce management with innovative tools designed to boost productivity, streamline operations, and help businesses thrive in today's competitive landscape.
          </p>
        </div>
        {/* Slanted bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-[#f3f4ff]"
          style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
        ></div>
      </section>

      {/* Revolutionizing Section */}
      <section className="py-24 bg-[#f3f4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Globe visual */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[340px] h-[340px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-60"></div>
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-indigo-300/60 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-10 rounded-full border-2 border-dashed border-purple-300/40 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
                <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-14 h-14" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="#6a5cdb" strokeWidth="2" fill="#eef2ff"/>
                    <path d="M24 2C24 2 16 12 16 24C16 36 24 46 24 46" stroke="#6a5cdb" strokeWidth="1.5"/>
                    <path d="M24 2C24 2 32 12 32 24C32 36 24 46 24 46" stroke="#6a5cdb" strokeWidth="1.5"/>
                    <path d="M2 24H46" stroke="#6a5cdb" strokeWidth="1.5"/>
                    <path d="M4 16H44M4 32H44" stroke="#6a5cdb" strokeWidth="1" strokeDasharray="2 2"/>
                  </svg>
                </div>
                {/* Dots */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2.5 h-2.5 bg-indigo-400/60 rounded-full"
                    style={{
                      top: `${50 + 44 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      left: `${50 + 44 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-[42px] font-bold text-[#111827] mb-6 leading-tight">
                Revolutionizing Workforce Management for Modern Businesses
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed mb-10">
                <strong className="text-gray-900">Raksham</strong> offers cutting-edge tools designed to simplify workforce management, from tracking employee activities to optimizing daily operations. Our solutions help businesses boost efficiency, monitor progress in real-time, and drive sustainable growth, ensuring long-term success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-[#111827] mb-2">Who we are</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Raksham provides innovative workforce management solutions, helping businesses streamline operations and boost productivity.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#111827] mb-2">Our vision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">We aim to be the global leader in workforce management, enabling businesses to maximize productivity.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#111827] mb-2">Our mission</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Our mission is to simplify workforce management with intuitive tools that drive growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left: Values list */}
            <div className="w-full md:w-1/2 space-y-10">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f3f4ff] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Building2 size={28} className="text-[#6a5cdb]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Empowering Businesses to Achieve Operational Excellence</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">At <strong>Raksham</strong>, we provide the tools and support to help businesses streamline workforce management, optimize efficiency, and drive sustainable growth.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f3f4ff] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <BarChart3 size={28} className="text-[#6a5cdb]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Empowering Workforce and Business Growth</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">At <strong>Raksham</strong>, we create opportunities for businesses to thrive by providing tools that enhance workforce efficiency and productivity.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#f3f4ff] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckSquare size={28} className="text-[#6a5cdb]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Building for Sustainable Success</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">At <strong>Raksham</strong>, we focus on creating long-term solutions that drive lasting business growth and efficiency, ensuring sustainable success.</p>
                </div>
              </div>
            </div>

            {/* Right: Company values card */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-bold text-[#111827] mb-4">Company values</h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-8">
                <strong className="text-gray-900">Raksham</strong> is built on integrity, innovation, and customer focus, delivering solutions that empower businesses to succeed.
              </p>
              <div className="bg-[#f3f4ff] rounded-3xl p-8 flex justify-center">
                <img
                  src="https://illustrations.popsy.co/purple/working-vacation.svg"
                  alt="Company Values"
                  className="w-full max-w-xs"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="hidden w-full h-48 items-center justify-center">
                  <div className="text-[#6a5cdb]/30 text-center">
                    <BarChart3 size={80} className="mx-auto mb-3" />
                    <p className="font-medium text-[#6a5cdb]/60">Growth & Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#100b29] pt-28 pb-32 overflow-hidden">
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
            <a href="/#contact" className="text-white font-semibold flex items-center hover:text-gray-300 transition-colors border-b-2 border-white pb-1 group">
              Contact Sales <ArrowRight size={20} className="ml-2 transform transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-[#f8fafc]"
          style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
        ></div>
      </section>
    </>
  );
};

export default AboutPage;
