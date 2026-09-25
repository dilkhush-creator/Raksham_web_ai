import clientFirst from '../assets/clients/Client_first.png';
import clientSec from '../assets/clients/Client_sec.png';
import clientThird from '../assets/clients/Client_third.png';
import client12 from '../assets/clients/12-r7j6f5j3asbktsn763nfxmtp7yomzz193fz9r9jmwe.png';
import client13 from '../assets/clients/13-r7j6f4l93yaai6okbl8td528mkt9s9xirbbs9zl12m.png';
import client18 from '../assets/clients/18-r7j6f3nex4906kpxh2u6snas16xwkktsf6oaspmf8u.png';
import client19 from '../assets/clients/19-r7j6f2pkqa7puyramkfk85jbft2jcvq2320tbfntf2.png';
import client20 from '../assets/clients/20-r7j6f2pkqa7puyramkfk85jbft2jcvq2320tbfntf2.png';
import client21 from '../assets/clients/21-r7j6f2pkqa7puyramkfk85jbft2jcvq2320tbfntf2.png';
import client22 from '../assets/clients/22-r7j6f1rqjg6fjcsns20xnnruuf7656mbqxdbu5p7la.png';
import client23 from '../assets/clients/23-r7j6f1rqjg6fjcsns20xnnruuf7656mbqxdbu5p7la.png';
import client25 from '../assets/clients/25-r7j6f0twcm557qu0xjmb360e91bsxhilespucvqlri.png';
import client26 from '../assets/clients/26-r7j6f0twcm557qu0xjmb360e91bsxhilespucvqlri.png';
import client27 from '../assets/clients/27-r7j6f0twcm557qu0xjmb360e91bsxhilespucvqlri.png';
import client29 from '../assets/clients/29-r7j6ezw25s3uw4ve317oio8xnngfpsev2o2cvlrzxq.png';
import client30 from '../assets/clients/30-r7j6eyy7yy2kkiwr8it1y6hh29l2i3b4qjevebte3y.png';
import client33 from '../assets/clients/33-r7j6ey0ds41a8wy4e0efdoq0gvppae7eeerdx1usa6.png';
import client113 from '../assets/clients/113-r7j722tdzbpbzfcfb0dvqukes9owq81kwwrl47jz5a.png';
import client114 from '../assets/clients/114-r7j722tdzbpbzfcfb0dvqukes9owq81kwwrl47jz5a.png';
import Sheetal from '../assets/clients/sheetal.jpg';
import Smitha from '../assets/clients/smitha.jpg';
import Thejas from '../assets/clients/Thejas.jpg';
import client112 from '../assets/clients/112-r7j722tdzbpbzfcfb0dvqukes9owq81kwwrl47jz5a.png';
import { useRef } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Section from './motion/Section';

const logos = [
  clientFirst, clientSec, clientThird,
  client12, client13, client18, client19, client20,
  client21, client22, client23, client25, client26,
  client27, client29, client30, client33, client113, client114,
];

const testimonials = [
  {
    logo: client30,
    company: 'Tiddly Tavern',
    quote: 'Raksham enables efficient staff management with real-time attendance, task tracking, and performance visibility, streamlining shifts and daily operations.',
    photo: Smitha,
    name: 'Smitha Jha',
    role: 'MD, Tiddly Tavern Bar & Grill',
  },
  {
    logo: client12,
    company: 'SRF Security',
    quote: 'Raksham transforms security with real-time guard tracking, automated attendance, smart scheduling, and instant alerts for visibility and quick response.',
    photo: Sheetal,
    name: 'Sheetal Kumar',
    role: 'MD, SRF Security',
  },
  {
    logo: client112,
    company: 'RapidMan',
    quote: 'Raksham completely revolutionized our multi-location guard tracking, providing real-time visibility and ensuring accountability across all sites. Highly efficient and recommended!',
    photo: Thejas,
    name: 'Thejas',
    role: 'MD, RapidMan',
  },
];

const Clients = () => {
  const track = useRef<HTMLDivElement>(null);
  // Scroll the testimonial carousel by roughly one card
  const scrollBy = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 440, behavior: 'smooth' });

  return (
    <Section className="py-24 md:py-32 bg-surface-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trusted by */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.08]">
            Trusted by 200+ clients
            <br className="hidden sm:block" /> across 21 cities.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted">More than 19,000+ staff and guards managed on Raksham.</p>
        </div>

        {/* Auto-scrolling logo marquee */}
        <div className="relative overflow-hidden mt-14 mb-28">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-surface-2 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-surface-2 to-transparent z-10" />

          {/* Track is duplicated for a seamless loop; the copy is hidden from screen readers */}
          <div className="flex items-center gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {[...logos, ...logos].map((src, i) => (
              <div
                key={i}
                aria-hidden={i >= logos.length}
                className="flex-shrink-0 h-20 w-44 bg-white rounded-2xl flex items-center justify-center px-5 py-3"
              >
                <img
                  src={src}
                  alt={i < logos.length ? 'Client logo' : ''}
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-ink tracking-tight">What our clients say.</h2>
          <div className="hidden sm:flex gap-3">
            <button onClick={() => scrollBy(-1)} aria-label="Previous testimonial" className="w-11 h-11 rounded-full bg-line/60 hover:bg-line text-ink flex items-center justify-center transition-colors">
              <CaretLeft size={18} weight="bold" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next testimonial" className="w-11 h-11 rounded-full bg-line/60 hover:bg-line text-ink flex items-center justify-center transition-colors">
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed track that lines up with the page container; scroll-px keeps snapping from eating that padding */}
      <div
        ref={track}
        className="no-scrollbar mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] scroll-px-4 sm:scroll-px-6 lg:scroll-px-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] pb-4"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="snap-start shrink-0 w-[85vw] sm:w-[420px] bg-surface rounded-3xl p-8 md:p-10 flex flex-col"
          >
            <img src={t.logo} alt={t.company} className="h-10 w-auto self-start object-contain" />
            <blockquote className="mt-8 flex-1 text-xl text-ink leading-snug tracking-tight">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <img src={t.photo} alt="" className="w-11 h-11 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-ink text-sm">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default Clients;
