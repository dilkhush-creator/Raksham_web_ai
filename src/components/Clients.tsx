const Clients = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted By Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#111827] mb-6">Trusted by</h2>
          <p className="text-3xl md:text-4xl font-medium text-[#111827] max-w-4xl mx-auto leading-tight">
            <span className="text-[#6a5cdb]">50+ clients</span> across <span className="text-[#6a5cdb]">17 Cities</span> with <span className="text-[#6a5cdb]">8000+ Staffs and<br className="hidden md:block" />Guards</span>
          </p>
        </div>

        {/* Client Logos Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-32 opacity-80">
           <div className="h-20 w-48 bg-white shadow-sm rounded-xl flex items-center justify-center text-sm font-semibold text-gray-400 border border-gray-100 uppercase tracking-wider">Client Logo 1</div>
           <div className="h-20 w-48 bg-white shadow-sm rounded-xl flex items-center justify-center text-sm font-semibold text-gray-400 border border-gray-100 uppercase tracking-wider">Client Logo 2</div>
           <div className="h-20 w-48 bg-white shadow-sm rounded-xl flex items-center justify-center text-sm font-semibold text-gray-400 border border-gray-100 uppercase tracking-wider">Client Logo 3</div>
           <div className="h-20 w-48 bg-white shadow-sm rounded-xl flex items-center justify-center text-sm font-semibold text-gray-400 border border-gray-100 uppercase tracking-wider">Client Logo 4</div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#111827]">Client Testimonial</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100">
               <span className="text-xs text-gray-400 font-medium">Logo 1</span>
            </div>
            <p className="text-gray-600 leading-relaxed flex-1 mb-10 text-[15px]">
              Raksham enables efficient staff management with real-time attendance, task tracking, and performance visibility—streamlining shifts and daily operations.
            </p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=smitha`} alt="Smitha Jha" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Smitha Jha</h4>
                <p className="text-xs text-[#6a5cdb] mt-0.5">MD, Tiddly Tavern<br />Bar & Grill</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100">
               <span className="text-xs text-gray-400 font-medium">Logo 2</span>
            </div>
            <p className="text-gray-600 leading-relaxed flex-1 mb-10 text-[15px]">
              Raksham transforms security with real-time guard tracking, automated attendance, smart scheduling, and instant alerts for visibility and quick response.
            </p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=sheetal`} alt="Sheetal Kumar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Sheetal Kumar</h4>
                <p className="text-xs text-[#6a5cdb] mt-0.5">MD - SRF Security</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
            <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100">
               <span className="text-xs text-gray-400 font-medium">Logo 3</span>
            </div>
            <p className="text-gray-600 leading-relaxed flex-1 mb-10 text-[15px]">
              Raksham completely revolutionized our multi-location guard tracking, providing real-time visibility and ensuring accountability across all sites. Highly efficient and recommended!
            </p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=thejas`} alt="Thejas" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Thejas</h4>
                <p className="text-xs text-[#6a5cdb] mt-0.5">MD RapidMan</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
