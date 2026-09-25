import { Check as CheckIcon, Minus } from '@phosphor-icons/react';
import PageHero from './PageHero';
import { PillLink } from './ui';
import Section from './motion/Section';

const SALES_EMAIL = 'mailto:contact@raksham.ai';

const Check = () => (
  <span className="mx-auto flex w-7 h-7 items-center justify-center rounded-full bg-primary-light">
    <CheckIcon size={16} weight="bold" className="text-primary" aria-label="Included" />
  </span>
);
const Cross = () => <Minus size={18} className="mx-auto text-muted opacity-60" aria-label="Not included" />;

const plans = [
  { name: 'Advance', blurb: 'Attendance, reports, timeline and live tracking for every site.' },
  { name: 'Ultimate', blurb: 'Everything in Advance, plus distance dashboards, tasks and supervisor access.' },
];

type RowItem = { label: string; advance: boolean; ultimate: boolean };
type Section = { heading: string; rows: RowItem[] };

const sections: Section[] = [
  {
    heading: 'Attendance Automation',
    rows: [
      { label: 'Real-time attendance sync', advance: true, ultimate: true },
      { label: 'Track-in Track-out time of attendance', advance: true, ultimate: true },
      { label: 'Selfie & Location based Attendance', advance: true, ultimate: true },
    ],
  },
  {
    heading: 'Employee Database',
    rows: [
      { label: 'Store Employee Documents', advance: true, ultimate: true },
    ],
  },
  {
    heading: 'Attendance Reports',
    rows: [
      { label: 'Punch In Punch Out Report', advance: true, ultimate: true },
      { label: 'Punch Report', advance: true, ultimate: true },
      { label: 'Staff Details', advance: true, ultimate: true },
      { label: 'Work Report', advance: true, ultimate: true },
      { label: 'Daily Attendance Report', advance: true, ultimate: true },
      { label: 'Muster Roll Report', advance: true, ultimate: true },
    ],
  },
  {
    heading: 'Actionable Dashboard',
    rows: [
      { label: 'Attendance summary: present, absent and on-leave employees', advance: true, ultimate: true },
    ],
  },
  {
    heading: 'Operational Dashboard',
    rows: [
      { label: 'View important reports', advance: true, ultimate: true },
      { label: 'Download Reports', advance: true, ultimate: true },
    ],
  },
  {
    heading: 'Timeline',
    rows: [
      { label: "Bird's Eye view of path travelled by employee", advance: true, ultimate: true },
      { label: 'See when an outage occurs due to location and/or internet disabling', advance: true, ultimate: true },
      { label: 'Detailed and Summary view of employee activity on the field', advance: true, ultimate: true },
      { label: 'Access historic paths travelled by employees', advance: true, ultimate: true },
    ],
  },
  {
    heading: 'Live Tracking',
    rows: [
      { label: 'Track all your employees from a single place', advance: true, ultimate: true },
      { label: 'Zoom in on the map to see specific employees', advance: true, ultimate: true },
      { label: 'See battery percentage of an employee', advance: true, ultimate: true },
    ],
  },
  {
    heading: 'Dashboard',
    rows: [
      { label: 'Dedicated time and distance based metrics cards', advance: false, ultimate: true },
      { label: 'Daily distance travelled reports', advance: false, ultimate: true },
    ],
  },
  {
    heading: 'Tasks',
    rows: [
      { label: 'Configure Task Templates', advance: false, ultimate: true },
      { label: 'Allow staff to record details of the task completed', advance: false, ultimate: true },
      { label: 'Download task reports based on task templates', advance: false, ultimate: true },
    ],
  },
  {
    heading: 'Supervisor Access',
    rows: [
      { label: 'Mark attendance of all your site employees from a single phone', advance: false, ultimate: true },
    ],
  },
];

const PricingPage = () => {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Plans that grow with you."
        subtitle="Get the features you need without paying for the ones you don't."
      >
        <PillLink to={SALES_EMAIL}>Contact sales</PillLink>
        <span className="text-muted">for enterprise pricing</span>
      </PageHero>

      {/* Plans */}
      <Section className="bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`rounded-3xl p-10 md:p-12 flex flex-col ${i === 1 ? 'bg-navy text-white dark:ring-1 dark:ring-white/10' : 'bg-surface-2'}`}
            >
              <div className="flex items-center justify-between">
                <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight ${i === 1 ? 'text-white' : 'text-ink'}`}>{plan.name}</h2>
                {i === 1 && <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">Most complete</span>}
              </div>
              <p className={`mt-3 flex-1 text-lg leading-snug ${i === 1 ? 'text-gray-300' : 'text-body'}`}>{plan.blurb}</p>
              <a
                href={SALES_EMAIL}
                className={`mt-10 inline-flex justify-center rounded-full px-6 py-3 text-[17px] transition-all active:scale-[0.98] ${
                  i === 1 ? 'bg-primary hover:bg-primary-hover text-white' : 'bg-surface text-link border border-current hover:bg-primary hover:border-primary hover:text-white'
                }`}
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section className="bg-surface py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl md:text-5xl font-semibold text-ink tracking-tight mb-14">Compare plans.</h2>

          {/* Sticky header sits just below the 56px navbar */}
          <div className="sticky top-14 z-20 grid grid-cols-[1fr_96px_96px] sm:grid-cols-[1fr_140px_140px] border-b border-line bg-surface/90 backdrop-blur">
            <div className="py-4 text-sm font-medium text-muted">Attendance and report features</div>
            <div className="py-4 text-center font-semibold text-ink">Advance</div>
            <div className="py-4 text-center font-semibold text-primary">Ultimate</div>
          </div>

          {sections.map((section) => (
            <div key={section.heading} className="pt-10">
              <h3 className="pb-3 font-semibold text-ink">{section.heading}</h3>
              <div className="divide-y divide-line border-t border-line">
                {section.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_96px_96px] sm:grid-cols-[1fr_140px_140px] items-center hover:bg-tile transition-colors"
                  >
                    <div className="py-4 pr-4 text-body text-[15px] leading-snug">{row.label}</div>
                    <div className="py-4">{row.advance ? <Check /> : <Cross />}</div>
                    <div className="py-4">{row.ultimate ? <Check /> : <Cross />}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default PricingPage;
