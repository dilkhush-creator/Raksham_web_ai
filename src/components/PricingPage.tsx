import { CheckCircle2, XCircle } from 'lucide-react';

const Check = () => <CheckCircle2 size={22} className="text-[#22c55e] mx-auto" fill="#dcfce7" strokeWidth={2} />;
const Cross = () => <XCircle size={22} className="text-[#ef4444] mx-auto" fill="#fee2e2" strokeWidth={2} />;

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
      { label: 'View Attendance Summary including - present employees, absent employees, on leave employees', advance: true, ultimate: true },
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
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#100b29] relative overflow-hidden text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Pricing</h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
            Choose from flexible pricing plans tailored to your business needs. Get the right features without overpaying, ensuring value for every budget.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-gray-300 text-lg">For Enterprise Pricing</span>
            <a
              href="mailto:contact@raksham.ai"
              className="bg-[#6366f1] hover:bg-[#5a5ce6] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#f3f4ff] py-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-lg">

            {/* Sticky header — sticks below the navbar when you scroll to it */}
            <div
              className="sticky z-20 bg-white border-b-2 border-gray-200 shadow-sm rounded-t-2xl"
              style={{ top: '88px' }}
            >
              <div className="grid grid-cols-[1fr_140px_140px]">
                <div className="px-6 py-5">
                  <span className="text-xl font-bold text-[#111827]">Attendance &amp; Report Features</span>
                </div>
                <div className="px-6 py-5 text-center border-l border-gray-200">
                  <span className="text-lg font-bold text-[#111827]">Advance</span>
                </div>
                <div className="px-6 py-5 text-center border-l border-gray-200">
                  <span className="text-lg font-bold text-[#111827]">Ultimate</span>
                </div>
              </div>
            </div>

            {/* All feature rows — scroll with the page beneath the stuck header */}
            <div className="bg-white rounded-b-2xl overflow-hidden">
              {sections.map((section) => (
                <div key={section.heading}>
                  <div className="grid grid-cols-[1fr_140px_140px] bg-[#eef0fb]">
                    <div className="px-6 py-3.5 col-span-3">
                      <span className="font-bold text-[#111827] text-[15px]">{section.heading}</span>
                    </div>
                  </div>
                  {section.rows.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1fr_140px_140px] border-t border-gray-100 hover:bg-gray-50/60 transition-colors"
                    >
                      <div className="px-6 py-4 text-gray-700 text-[14.5px] leading-snug">{row.label}</div>
                      <div className="px-6 py-4 flex items-center justify-center border-l border-gray-100">
                        {row.advance ? <Check /> : <Cross />}
                      </div>
                      <div className="px-6 py-4 flex items-center justify-center border-l border-gray-100">
                        {row.ultimate ? <Check /> : <Cross />}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Contact Sales / Get Started row */}
              <div className="grid grid-cols-[1fr_140px_140px] border-t-2 border-gray-200">
                <div className="px-6 py-5">
                  <span className="font-bold text-[#111827] text-base">Contact Sales</span>
                </div>
                <div className="px-6 py-5 flex items-center justify-center border-l border-gray-200">
                  <a
                    href="mailto:contact@raksham.ai"
                    className="bg-[#6366f1] hover:bg-[#5a5ce6] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                  >
                    Get Started
                  </a>
                </div>
                <div className="px-6 py-5 flex items-center justify-center border-l border-gray-200">
                  <a
                    href="mailto:contact@raksham.ai"
                    className="bg-[#6366f1] hover:bg-[#5a5ce6] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
