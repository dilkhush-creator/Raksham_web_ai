import phoneGuard from '../assets/Phone_gard_image.png';
import phoneFirst from '../assets/Phone_first.png';
import rakshamWebSec from '../assets/Raksham_web_sec.png';
import PageHero from './PageHero';
import Transform from './Transform';
import Section from './motion/Section';

const blogs = [
  {
    title: 'Boost productivity with smart shift management',
    excerpt:
      'How smart shift management tools streamline scheduling, improve task delegation and keep workforce planning efficient for businesses of all sizes.',
    label: 'Shift management',
    img: phoneGuard,
    imgBg: 'bg-tile-accent',
  },
  {
    title: 'Optimize employee attendance with real-time tracking',
    excerpt:
      'The benefits of real-time attendance tracking for field and in-office employees: better accountability, accurate work hours and smoother operations.',
    label: 'Attendance',
    img: phoneFirst,
    imgBg: 'bg-tile',
  },
  {
    title: 'Streamline payroll with automated workforce tools',
    excerpt:
      "How automated payroll reduces errors, saves time and stays compliant, using Raksham's attendance and shift data for accurate, timely payments.",
    label: 'Payroll',
    img: rakshamWebSec,
    imgBg: 'bg-navy dark:ring-1 dark:ring-white/10',
  },
];

const BlogPage = () => {
  const [featured, ...rest] = blogs;

  return (
    <>
      <PageHero
        label="Blog"
        title="Insights for a better-run workforce."
        subtitle="Practical tips on managing shifts, tracking attendance and making your teams more efficient."
      />

      <Section className="bg-surface pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-ink tracking-tight mb-12">Latest articles.</h2>

          {/* Featured article */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className={`${featured.imgBg} rounded-3xl h-[320px] md:h-[440px] flex items-end justify-center overflow-hidden`}>
              <img src={featured.img} alt="" loading="lazy" className="h-[95%] w-auto object-contain object-bottom" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary">{featured.label}</p>
              <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-[1.15]">{featured.title}</h3>
              <p className="mt-4 text-lg text-body leading-relaxed max-w-[52ch]">{featured.excerpt}</p>
              <p className="mt-6 text-sm text-muted">Full article coming soon</p>
            </div>
          </article>

          {/* Other articles */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
            {rest.map((blog) => (
              <article key={blog.title}>
                <div className={`${blog.imgBg} rounded-3xl h-[300px] flex items-center justify-center overflow-hidden p-8`}>
                  <img src={blog.img} alt="" loading="lazy" className="max-h-full w-auto object-contain" />
                </div>
                <p className="mt-6 text-sm font-medium text-primary">{blog.label}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink tracking-tight leading-snug">{blog.title}</h3>
                <p className="mt-3 text-body leading-relaxed">{blog.excerpt}</p>
                <p className="mt-4 text-sm text-muted">Full article coming soon</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Transform />
    </>
  );
};

export default BlogPage;
