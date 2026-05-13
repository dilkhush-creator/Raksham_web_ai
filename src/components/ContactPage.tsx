import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const INDUSTRY_OPTIONS = ['IT & Software', 'Healthcare', 'Retail', 'Manufacturing', 'Education', 'Finance', 'Logistics', 'Other'];
const TEAM_SIZE_OPTIONS = ['1–10', '11–50', '51–200', '201–500', '500+'];

const API_URL = 'https://raksham.ai/wp-json/custom/v1/contact';

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4400984326544!2d77.59099517505457!3d13.071270987253293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x27cdf299061732b%3A0x483277d14b529ef9!2sRaksham%20AI!5e0!3m2!1sen!2sin!4v1778656281726!5m2!1sen!2sin';

const EMPTY_FORM = { name: '', email: '', phone: '', org: '', location: '', industry: '', teamSize: '' };

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactPage = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          organizationName: form.org,
          organizationLocation: form.location,
          industry: form.industry,
          staffCount: form.teamSize,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || `Request failed (${res.status})`);
      }

      setStatus('success');
      setForm(EMPTY_FORM);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40 focus:border-[#6366f1] transition-colors';

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-[#100b29] relative overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Contact us</h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Have questions or need assistance? Our team is ready to help. Reach out to us via
            phone, email, or message, and we'll ensure you get the support you need.
          </p>
        </div>
      </section>

      {/* Contact Form Card */}
      <section className="bg-[#f3f4ff] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">

              {/* Left purple panel */}
              <div className="md:w-[42%] bg-[#5b50d6] p-10 flex flex-col justify-between min-h-[420px]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Have a questions?</h3>
                  <p className="text-white/80 text-[15px] leading-relaxed">
                    Need help or have questions? Reach out to our support team for quick assistance with your workforce management needs.
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  <div className="w-48 h-48 bg-white/10 rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 120 140" className="w-36 h-36 opacity-80" fill="none">
                      <circle cx="60" cy="30" r="22" fill="#fff" fillOpacity="0.9"/>
                      <rect x="30" y="58" width="60" height="55" rx="12" fill="#fff" fillOpacity="0.85"/>
                      <rect x="18" y="62" width="18" height="40" rx="9" fill="#fff" fillOpacity="0.7"/>
                      <rect x="84" y="62" width="18" height="40" rx="9" fill="#fff" fillOpacity="0.7"/>
                      <rect x="38" y="113" width="18" height="22" rx="9" fill="#fff" fillOpacity="0.7"/>
                      <rect x="64" y="113" width="18" height="22" rx="9" fill="#fff" fillOpacity="0.7"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div className="flex-1 p-8 md:p-10">
                {/* Success state */}
                {status === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-5">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                      <CheckCircle2 size={44} className="text-green-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827]">Message Sent!</h3>
                    <p className="text-gray-500 max-w-xs leading-relaxed">
                      Thank you for reaching out. Our team will get back to you shortly on your email.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-[#6366f1] font-semibold hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input name="name" value={form.name} onChange={handle} required
                          placeholder="ex. Jayesh Sharma" className={inputCls} />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
                          Email address <span className="text-red-500">*</span>
                        </label>
                        <input type="email" name="email" value={form.email} onChange={handle} required
                          placeholder="example@mail.com" className={inputCls} />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
                          Phone number <span className="text-red-500">*</span>
                        </label>
                        <input name="phone" value={form.phone} onChange={handle} required
                          placeholder="+91 - 1234567890" className={inputCls} />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
                          Organization Name <span className="text-red-500">*</span>
                        </label>
                        <input name="org" value={form.org} onChange={handle} required
                          placeholder="ex. TCS" className={inputCls} />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
                          Organization Location <span className="text-red-500">*</span>
                        </label>
                        <input name="location" value={form.location} onChange={handle} required
                          placeholder="ex. Bangalore" className={inputCls} />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
                          Industry <span className="text-red-500">*</span>
                        </label>
                        <select name="industry" value={form.industry} onChange={handle} required
                          className={`${inputCls} appearance-none`}>
                          <option value="" disabled>Choose Industry</option>
                          {INDUSTRY_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">
                          No of Staff <span className="text-red-500">*</span>
                        </label>
                        <select name="teamSize" value={form.teamSize} onChange={handle} required
                          className={`${inputCls} appearance-none`}>
                          <option value="" disabled>Choose Team Size</option>
                          {TEAM_SIZE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      {/* Error message */}
                      {status === 'error' && (
                        <div className="sm:col-span-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                          {errorMsg}
                        </div>
                      )}

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="bg-[#6366f1] hover:bg-[#5a5ce6] disabled:opacity-70 disabled:cursor-not-allowed text-white px-10 py-3.5 rounded-lg font-semibold text-base transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                        >
                          {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                          {status === 'loading' ? 'Sending…' : 'Submit'}
                        </button>
                      </div>

                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Office Location */}
      <section className="bg-[#f3f4ff] py-16 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] text-center mb-10">
            Corporate Office Location
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full h-[420px]">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raksham Corporate Office"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
