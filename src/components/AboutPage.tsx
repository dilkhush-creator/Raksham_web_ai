import { Target, Eye, Handshake, Lightbulb, TrendUp } from '@phosphor-icons/react';
import { m } from 'motion/react';
import laptopFirst from '../assets/Laptop_first.png';
import PageHero from './PageHero';
import Transform from './Transform';
import Section from './motion/Section';
import CountUp from './motion/CountUp';
import ScrollStatement from './motion/ScrollStatement';

const stats = [
  { value: 200, suffix: '+', label: 'clients' },
  { value: 21, suffix: '', label: 'cities' },
  { value: 19000, suffix: '+', label: 'staff and guards' },
];

const values = [
  {
    icon: Handshake,
    title: 'Operational excellence',
    body: 'We give businesses the tools and support to streamline workforce management and run efficiently every day.',
  },
  {
    icon: Lightbulb,
    title: 'Growth for people and business',
    body: 'Better tools for the workforce create room for the business to grow. We build for both.',
  },
  {
    icon: TrendUp,
    title: 'Sustainable success',
    body: 'We focus on long-term solutions that keep delivering growth and efficiency, not quick fixes.',
  },
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        label="About Raksham"
        title="Smarter workforce solutions for growing businesses."
        subtitle="We build tools that boost productivity and keep operations running smoothly."
      />

      {/* Stats */}
      <Section className="bg-surface pb-24 md:pb-32">
        <dl className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-lg text-muted">{s.label}</dt>
              <dd className="text-6xl md:text-8xl font-semibold text-ink tracking-[-0.04em] leading-none">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Story statement */}
      <Section className="bg-surface-2 py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollStatement
            text="From tracking employee activity to running daily operations, Raksham helps businesses work more efficiently, see progress in real time and grow sustainably."
            className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.1]"
          />
        </div>
      </Section>

      {/* Who we are / vision / mission */}
      <Section className="bg-surface-2 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-4">
          <article className="lg:col-span-3 lg:row-span-2 relative overflow-hidden rounded-3xl bg-tile-accent p-10 md:p-14 flex flex-col">
            <h3 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight">Who we are.</h3>
            <p className="mt-4 max-w-[40ch] text-body text-lg md:text-xl leading-snug">
              Raksham builds workforce management software that helps businesses streamline operations and boost productivity.
            </p>
            <img
              src={laptopFirst}
              alt="Raksham dashboard"
              loading="lazy"
              className="mt-10 -mb-16 md:-mb-24 w-full max-w-xl self-center"
            />
          </article>

          <article className="lg:col-span-2 rounded-3xl bg-surface p-10">
            <Eye size={36} className="text-primary" />
            <h3 className="mt-5 text-3xl font-semibold text-ink tracking-tight">Our vision</h3>
            <p className="mt-3 text-lg text-body leading-snug">
              To be the global leader in workforce management, helping businesses get the most from their teams.
            </p>
          </article>

          <article className="lg:col-span-2 rounded-3xl bg-surface p-10">
            <Target size={36} className="text-primary" />
            <h3 className="mt-5 text-3xl font-semibold text-ink tracking-tight">Our mission</h3>
            <p className="mt-3 text-lg text-body leading-snug">
              To simplify workforce management with intuitive tools that drive growth.
            </p>
          </article>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-ink tracking-tight">What we stand for.</h2>
          <p className="mt-4 text-center text-lg md:text-xl text-muted">Integrity, innovation and customer focus.</p>

          <ul className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 border-t border-line pt-12">
            {values.map(({ icon: Icon, title, body }, i) => (
              <m.li
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon size={36} className="text-primary" />
                <h3 className="mt-5 text-2xl font-semibold text-ink tracking-tight">{title}</h3>
                <p className="mt-2 text-lg text-body leading-snug">{body}</p>
              </m.li>
            ))}
          </ul>
        </div>
      </Section>

      <Transform />
    </>
  );
};

export default AboutPage;
