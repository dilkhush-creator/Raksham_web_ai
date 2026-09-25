import type { ReactNode } from 'react';
import Rise from './motion/Rise';

type Props = {
  /** Short product-style label above the title, e.g. "Pricing". */
  label?: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
};

/** Light, centred intro shared by every inner page (Apple product-page style). */
const PageHero = ({ label, title, subtitle, children }: Props) => (
  <section className="relative overflow-hidden bg-surface pt-32 pb-16 md:pt-44 md:pb-24">
    <Rise className="relative max-w-5xl mx-auto px-4 text-center">
      {label && <p className="text-lg md:text-xl font-semibold text-primary">{label}</p>}
      <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold text-ink tracking-[-0.03em] leading-[1.03]">
        {title}
      </h1>
      <p className="mt-6 mx-auto max-w-[44ch] text-lg md:text-2xl text-body leading-snug">{subtitle}</p>
      {children && <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">{children}</div>}
    </Rise>
  </section>
);

export default PageHero;
