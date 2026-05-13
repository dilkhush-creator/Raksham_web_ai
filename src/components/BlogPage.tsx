import { ArrowRight } from 'lucide-react';
import Transform from './Transform';

const blogs = [
  {
    title: 'Boost Productivity with Smart Shift Management',
    excerpt:
      'Learn how smart shift management tools streamline employee scheduling, improve task delegation, and boost overall productivity. Discover strategies to optimize shift planning and ensure efficient workforce management for businesses of all sizes.',
    imgLeft: true,
    imgBg: 'from-indigo-200 to-purple-200',
    label: 'Shift Management',
  },
  {
    title: 'Optimize Employee Attendance with Real-Time Tracking',
    excerpt:
      'Explore the benefits of real-time attendance tracking for field and in-office employees. Improve accountability, monitor work hours, and enhance operational efficiency with advanced tracking tools designed to simplify workforce management.',
    imgLeft: false,
    imgBg: 'from-blue-200 to-teal-200',
    label: 'Attendance',
  },
  {
    title: 'Streamline Payroll with Automated Workforce Tools',
    excerpt:
     'Discover how automating payroll processes reduces errors, saves time, and ensures compliance. Learn how Raksham\'s payroll tools integrate seamlessly with attendance and shift data for accurate and timely payments.',
    imgLeft: true,
    imgBg: 'from-violet-200 to-pink-200',
    label: 'Payroll',
  },
];

const PlaceholderImg = ({ gradient }: { gradient: string }) => (
  <div className={`w-full h-full min-h-[280px] rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
    <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
      <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  </div>
);

const BlogPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-0 bg-[#100b29] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 pb-20">
            {/* Left text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl md:text-[56px] font-bold text-white mb-6 leading-[1.1]">
                Optimize Your Workforce with Insights
              </h1>
              <p className="text-gray-300 text-lg font-light leading-relaxed max-w-md">
                Discover expert tips and strategies for managing shifts, tracking attendance, and enhancing workforce efficiency.
              </p>
            </div>
            {/* Right image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <PlaceholderImg gradient="from-indigo-300 to-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Slanted bottom */}
        <div
          className="w-full h-20 bg-[#f3f4ff]"
          style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
        ></div>
      </section>

      {/* Intro */}
      <section className="bg-[#f3f4ff] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-10">
            <h2 className="text-4xl md:text-[44px] font-bold text-[#111827] leading-tight md:w-1/2">
              Enhance Workforce Management Effortlessly
            </h2>
            <p className="text-gray-600 text-[17px] leading-relaxed md:w-1/2 md:pt-3">
              Explore proven methods to simplify employee scheduling, real-time tracking, and attendance management, boosting productivity and operational efficiency.
            </p>
          </div>
          <div className="border-t border-gray-300"></div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="bg-[#f3f4ff] py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${blog.imgLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <PlaceholderImg gradient={blog.imgBg} />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">
                  {blog.label}
                </span>
                <h3 className="text-3xl md:text-[34px] font-bold text-[#111827] mb-4 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6">{blog.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#6366f1] font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Transform />
    </>
  );
};

export default BlogPage;
