import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { WhatsappLogo } from '@phosphor-icons/react';
import { m, useScroll, useTransform } from 'motion/react';
import laptopFirst from '../assets/Laptop_first.png';
import Rise from './motion/Rise';
import { PillLink, ChevronLink } from './ui';

const WHATSAPP_URL = 'https://wa.me/918660319788';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  // Product shot grows from 88% to full size and settles as the hero scrolls away
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.88, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <>
      <section ref={ref} id="home" className="relative overflow-hidden bg-navy pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="hero-backdrop pointer-events-none absolute inset-0" />

        <Rise className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold text-white tracking-[-0.03em] leading-[1.02]">
            Your workforce.
            <br />
            <span className="text-primary">One command center.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-[40ch] text-lg md:text-2xl text-white/70 leading-snug">
            Attendance, staff, guards and payroll for every site, in one platform.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <PillLink to="/contact">Book a demo</PillLink>
            <ChevronLink to="/products" className="text-indigo-300">See products</ChevronLink>
          </div>
        </Rise>

        <m.div style={{ scale, y }} className="relative mt-14 md:mt-20 max-w-6xl mx-auto px-4">
          <img
            src={laptopFirst}
            alt="Raksham dashboard showing live attendance and staff activity"
            className="w-full"
          />
        </m.div>
      </section>

      {/* Fixed side actions */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 z-40">
        <Link
          to="/contact"
          className="bg-primary hover:bg-primary-hover text-white text-sm px-4 py-2 rounded-l-full shadow-lg transition-transform hover:-translate-x-1"
        >
          Book a demo
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-l-full shadow-lg flex items-center justify-center transition-transform hover:-translate-x-1"
        >
          <WhatsappLogo size={28} weight="fill" />
        </a>
      </div>
    </>
  );
};

export default Hero;
