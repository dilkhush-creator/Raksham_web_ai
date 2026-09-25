import Section from './motion/Section';
import { PillLink, OutlinePillLink } from './ui';

/** Closing call to action used at the bottom of most pages. */
const Transform = () => {
  return (
    <Section className="bg-surface py-28 md:py-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.08]">
          Ready when you are.
        </h2>
        <p className="mt-5 mx-auto max-w-[40ch] text-lg md:text-xl text-body leading-snug">
          See attendance, tasks and payroll run from one place, set up for your sites.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <PillLink to="/contact">Book a demo</PillLink>
          <OutlinePillLink to="/pricing" className="text-link">View pricing</OutlinePillLink>
        </div>
      </div>
    </Section>
  );
};

export default Transform;
