const Stats = () => {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Trusted by businesses everywhere
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="flex flex-col items-center p-4">
            <span className="text-6xl font-extrabold text-white mb-2 drop-shadow-md">50+</span>
            <span className="text-white/90 font-semibold text-lg uppercase tracking-widest">Clients</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <span className="text-6xl font-extrabold text-white mb-2 drop-shadow-md">17</span>
            <span className="text-white/90 font-semibold text-lg uppercase tracking-widest">Cities</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <span className="text-6xl font-extrabold text-white mb-2 drop-shadow-md">8000+</span>
            <span className="text-white/90 font-semibold text-lg uppercase tracking-widest">Staffs & Guards</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
