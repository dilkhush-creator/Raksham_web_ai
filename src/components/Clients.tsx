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

const logos = [
  clientFirst, clientSec, clientThird,
  client12, client13, client18, client19, client20,
  client21, client22, client23, client25, client26,
  client27, client29, client30, client33, client113, client114,
];

const Clients = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trusted By Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#111827] mb-6">Trusted by</h2>
          <p className="text-3xl md:text-4xl font-medium text-[#111827] max-w-4xl mx-auto leading-tight">
            <span className="text-[#6a5cdb]">50+ clients</span> across{' '}
            <span className="text-[#6a5cdb]">17 Cities</span> with{' '}
            <span className="text-[#6a5cdb]">
              8000+ Staffs and
              <br className="hidden md:block" />
              Guards
            </span>
          </p>
        </div>

        {/* Auto-scrolling Logo Marquee */}
        <div className="relative overflow-hidden mb-32">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

          {/* Scrolling track — duplicated for seamless loop */}
          <div className="flex items-center gap-6 animate-marquee" style={{ width: 'max-content' }}>
            {[...logos, ...logos].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-20 w-44 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center px-5 py-3"
              >
                <img
                  src={src}
                  alt={`client-${i}`}
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#111827]">Client Testimonial</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
            <div className="w-24 h-16 mx-auto bg-gray-50 rounded-xl flex items-center justify-center mb-8 border border-gray-100 px-3 py-2">
              <img src={client30} alt="Tiddly Tavern" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-gray-600 leading-relaxed flex-1 mb-10 text-[15px]">
              Raksham enables efficient staff management with real-time attendance, task tracking, and performance visibility—streamlining shifts and daily operations.
            </p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src={Smitha} alt="Smitha Jha" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Smitha Jha</h4>
                <p className="text-xs text-[#6a5cdb] mt-0.5">MD, Tiddly Tavern<br />Bar &amp; Grill</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
            <div className="w-24 h-16 mx-auto bg-gray-50 rounded-xl flex items-center justify-center mb-8 border border-gray-100 px-3 py-2">
              <img src={client12} alt="SRF Security" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-gray-600 leading-relaxed flex-1 mb-10 text-[15px]">
              Raksham transforms security with real-time guard tracking, automated attendance, smart scheduling, and instant alerts for visibility and quick response.
            </p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src={Sheetal} alt="Sheetal Kumar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Sheetal Kumar</h4>
                <p className="text-xs text-[#6a5cdb] mt-0.5">MD - SRF Security</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col h-full transform transition-transform hover:-translate-y-2 duration-300">
            <div className="w-24 h-16 mx-auto bg-gray-50 rounded-xl flex items-center justify-center mb-8 border border-gray-100 px-3 py-2">
              <img src={client112} alt="RapidMan" className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-gray-600 leading-relaxed flex-1 mb-10 text-[15px]">
              Raksham completely revolutionized our multi-location guard tracking, providing real-time visibility and ensuring accountability across all sites. Highly efficient and recommended!
            </p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src={Thejas} alt="Thejas" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Thejas</h4>
                <p className="text-xs text-[#6a5cdb] mt-0.5">MD RapidMan</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
