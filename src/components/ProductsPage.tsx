import { useRef } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import laptopFirst from '../assets/Laptop_first.png';
import phoneFirst from '../assets/Phone_first.png';
import PageHero from './PageHero';
import Products from './Products';
import Features from './Features';
import Transform from './Transform';
import { PillLink, ChevronLink } from './ui';

const ProductsPage = () => {
  const ref = useRef<HTMLElement>(null);
  // Laptop and phone slide together as the composition scrolls into view
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const laptopX = useTransform(scrollYProgress, [0, 1], ['-6%', '0%']);
  const phoneX = useTransform(scrollYProgress, [0, 1], ['30%', '0%']);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <>
      <PageHero
        label="Products"
        title="One platform for your whole workforce."
        subtitle="A web dashboard for managers and apps for staff and guards, all on the same live data."
      >
        <PillLink to="/contact">Book a demo</PillLink>
        <ChevronLink to="/pricing" className="text-link">Compare plans</ChevronLink>
      </PageHero>

      {/* Platform composition */}
      <section ref={ref} className="bg-surface pb-24 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <m.img
              style={{ x: laptopX }}
              src={laptopFirst}
              alt="Raksham web application on a laptop"
              className="relative w-full max-w-5xl mx-auto"
            />
            <m.img
              style={{ x: phoneX, opacity: phoneOpacity }}
              src={phoneFirst}
              alt="Raksham mobile app on a phone"
              className="absolute bottom-0 right-0 md:right-4 h-[45%] w-auto object-contain drop-shadow-[0_24px_48px_rgba(16,11,41,0.25)]"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">Web application</h2>
              <p className="mt-3 text-lg text-body leading-snug">
                For owners, managers and HR. See every site live, approve payroll and pull reports.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">Mobile apps</h2>
              <p className="mt-3 text-lg text-body leading-snug">
                For staff, guards and supervisors. Mark attendance, update tasks and report incidents on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Products showLinks={false} />
      <Features />
      <Transform />
    </>
  );
};

export default ProductsPage;
