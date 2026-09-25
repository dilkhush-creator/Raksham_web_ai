import { useState } from 'react';
import { CheckCircle, CircleNotch, Phone, Envelope, WhatsappLogo, MapPin } from '@phosphor-icons/react';
import PageHero from './PageHero';
import Section from './motion/Section';

const INDUSTRY_OPTIONS = ['IT & Software', 'Healthcare', 'Retail', 'Manufacturing', 'Education', 'Finance', 'Logistics', 'Other'];
// Values are sent to the API unchanged; only the visible label swaps the en dash for a hyphen
const TEAM_SIZE_OPTIONS = ['1–10', '11–50', '51–200', '201–500', '500+'];

const API_URL = 'https://raksham.ai/wp-json/custom/v1/contact';

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4400984326544!2d77.59099517505457!3d13.071270987253293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x27cdf299061732b%3A0x483277d14b529ef9!2sRaksham%20AI!5e0!3m2!1sen!2sin!4v1778656281726!5m2!1sen!2sin';

const EMPTY_FORM = { name: '', email: '', phone: '', org: '', location: '', industry: '', teamSize: '' };

type Status = 'idle' | 'loading' | 'success' | 'error';

const Req = () => <span className="text-red-600" aria-hidden="true">*</span>;

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

  const inputCls = 'w-full bg-surface border border-line rounded-xl px-4 py-3.5 text-[17px] text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors';
  const labelCls = 'block text-sm font-medium text-ink mb-2';

  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk."
        subtitle="Questions, a demo, or help with your account. Reach us by phone, email or WhatsApp and we'll get back to you quickly."
      />

      <Section className="bg-surface pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Direct contact */}
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight">Talk to our team.</h2>
              <p className="mt-3 text-body leading-relaxed">
                Fill in the form and we'll set up a demo for your business, or reach us directly.
              </p>
            </div>

            <ul className="space-y-5">
              <li>
                <a href="tel:+918660319788" className="group flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center"><Phone size={20} className="text-primary" /></span>
                  <span>
                    <span className="block text-sm text-muted">Call us</span>
                    <span className="font-medium text-ink group-hover:text-primary">+91 86603 19788</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@raksham.ai" className="group flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center"><Envelope size={20} className="text-primary" /></span>
                  <span>
                    <span className="block text-sm text-muted">Email us</span>
                    <span className="font-medium text-ink group-hover:text-primary">contact@raksham.ai</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/918660319788" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center"><WhatsappLogo size={20} className="text-primary" /></span>
                  <span>
                    <span className="block text-sm text-muted">WhatsApp</span>
                    <span className="font-medium text-ink group-hover:text-primary">Chat with us</span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="flex gap-4 border-t border-line pt-8">
              <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-body leading-relaxed">
                <span className="block font-medium text-ink mb-1">Corporate office</span>
                Awfis Vista Pixel, 4th Floor, 8/2B and 8, 2nd C Main Rd, Jakkuru Layout, Jakkuru, Bengaluru, Karnataka 560092
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8 rounded-3xl bg-surface-2 p-6 sm:p-10 md:p-12">
            {status === 'success' ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center gap-4" role="status">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle size={36} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-ink">Message sent</h3>
                <p className="text-body max-w-xs leading-relaxed">
                  Thank you for reaching out. Our team will reply to your email shortly.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-2 text-primary font-medium hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelCls}>Full name <Req /></label>
                    <input id="name" name="name" value={form.name} onChange={handle} required autoComplete="name"
                      placeholder="e.g. Jayesh Sharma" className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>Email address <Req /></label>
                    <input id="email" type="email" name="email" value={form.email} onChange={handle} required autoComplete="email"
                      placeholder="you@company.com" className={inputCls} />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className={labelCls}>Phone number <Req /></label>
                    <input id="phone" type="tel" name="phone" value={form.phone} onChange={handle} required autoComplete="tel"
                      placeholder="+91 98765 43210" className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="org" className={labelCls}>Organization name <Req /></label>
                    <input id="org" name="org" value={form.org} onChange={handle} required autoComplete="organization"
                      placeholder="e.g. TCS" className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="location" className={labelCls}>Organization location <Req /></label>
                    <input id="location" name="location" value={form.location} onChange={handle} required
                      placeholder="e.g. Bengaluru" className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="industry" className={labelCls}>Industry <Req /></label>
                    <select id="industry" name="industry" value={form.industry} onChange={handle} required className={inputCls}>
                      <option value="" disabled>Choose industry</option>
                      {INDUSTRY_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="teamSize" className={labelCls}>Number of staff <Req /></label>
                    <select id="teamSize" name="teamSize" value={form.teamSize} onChange={handle} required className={inputCls}>
                      <option value="" disabled>Choose team size</option>
                      {TEAM_SIZE_OPTIONS.map(o => <option key={o} value={o}>{o.replace('–', '-')}</option>)}
                    </select>
                  </div>

                  {status === 'error' && (
                    <div role="alert" className="sm:col-span-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                      {errorMsg}
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-full text-[17px] transition-all active:scale-[0.98]"
                    >
                      {status === 'loading' && <CircleNotch size={18} className="animate-spin" />}
                      {status === 'loading' ? 'Sending...' : 'Send message'}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Office map */}
      <Section className="bg-surface pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-ink tracking-tight mb-10">Visit our office.</h2>
          <div className="rounded-3xl overflow-hidden w-full h-[460px]">
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Raksham corporate office"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
