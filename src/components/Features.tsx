import { CalendarCheck, ListChecks, Wallet } from '@phosphor-icons/react';
import { m } from 'motion/react';
import Section from './motion/Section';
import ScrollStatement from './motion/ScrollStatement';

const features = [
  {
    icon: CalendarCheck,
    title: 'Attendance',
    body: 'Real-time attendance with geo-fencing, shift monitoring and automated alerts.',
  },
  {
    icon: ListChecks,
    title: 'Tasks',
    body: 'Assign, track and monitor tasks as they happen, so every job has an owner.',
  },
  {
    icon: Wallet,
    title: 'Payroll',
    body: 'Calculated from attendance and overtime, paid on time and compliant with labour laws.',
  },
];

const Features = () => {
  return (
    <Section id="features" className="bg-surface py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Key features</h2>
        {/* Words light up one by one as the visitor scrolls */}
        <ScrollStatement
          text="Raksham brings attendance, tasks and payroll into one live system, so every site, every shift and every salary is accounted for."
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.1]"
        />

        <ul className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 border-t border-line pt-12">
          {features.map(({ icon: Icon, title, body }, i) => (
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
  );
};

export default Features;
