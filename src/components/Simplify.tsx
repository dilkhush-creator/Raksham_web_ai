import Section from './motion/Section';
import CountUp from './motion/CountUp';

/** The big "results" moment on the home page. */
const Simplify = () => {
  return (
    <Section className="relative overflow-hidden bg-surface-2 py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(50% 55% at 50% 100%, rgba(99,102,241,0.12), transparent 70%)' }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.08]">
          Fewer errors.
          <br />
          More done.
        </h2>
        <p className="mt-5 mx-auto max-w-[44ch] text-lg md:text-xl text-body leading-snug">
          Attendance, payroll and employee records in one place, kept compliant, so you can focus on growing the business.
        </p>

        <dl className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6">
          {/* flex-col-reverse: <dt> comes first in the markup but shows under the number */}
          <div className="flex flex-col-reverse">
            <dt className="mt-3 text-lg text-link">Error reduction</dt>
            <dd className="text-7xl md:text-[120px] font-semibold text-ink tracking-[-0.04em] leading-none">
              <CountUp to={89} suffix="%" />
            </dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="mt-3 text-lg text-link">Efficiency boost</dt>
            <dd className="text-7xl md:text-[120px] font-semibold text-ink tracking-[-0.04em] leading-none">
              <CountUp to={96} suffix="%" />
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
};

export default Simplify;
