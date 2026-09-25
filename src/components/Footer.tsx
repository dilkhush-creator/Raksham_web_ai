import { Link } from 'react-router-dom';
import { LinkedinLogo, GooglePlayLogo, AppStoreLogo } from '@phosphor-icons/react';
import rakshamLogo from '../assets/Raksham_logo.png';

const linkCls = 'text-muted hover:text-ink hover:underline transition-colors';

const Footer = () => {
  return (
    <footer className="bg-surface-2 pt-14 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={rakshamLogo} alt="" className="h-7" />
              <span className="text-lg font-semibold text-ink tracking-tight">Raksham</span>
            </Link>
            <p className="mt-4 text-muted leading-relaxed max-w-[36ch]">
              Reliable tools for attendance, payroll and employee records. Your business, effortlessly managed.
            </p>
            <a href="https://www.linkedin.com/company/raksham/" target="_blank" rel="noopener noreferrer" aria-label="Raksham on LinkedIn" className="mt-5 inline-flex w-9 h-9 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors">
              <LinkedinLogo size={22} weight="fill" />
            </a>
          </div>

          {/* Company */}
          <nav className="md:col-span-2" aria-label="Company">
            <h3 className="font-semibold text-ink mb-3">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className={linkCls}>Home</Link></li>
              <li><Link to="/about" className={linkCls}>About us</Link></li>
              <li><Link to="/pricing" className={linkCls}>Pricing</Link></li>
              <li><Link to="/blog" className={linkCls}>Blog</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact us</Link></li>
            </ul>
          </nav>

          {/* Products */}
          <nav className="md:col-span-2" aria-label="Products">
            <h3 className="font-semibold text-ink mb-3">Products</h3>
            <ul className="space-y-2.5">
              <li><Link to="/products#products" className={linkCls}>Raksham Web</Link></li>
              <li><Link to="/products#products" className={linkCls}>Staff App</Link></li>
              <li><Link to="/products#products" className={linkCls}>Guard App</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4 text-muted">
            <h3 className="font-semibold text-ink mb-3">Contact</h3>
            <p className="font-medium text-ink">NammaRaksham AI Private Limited</p>

            <p className="mt-4 font-medium text-ink">Registered office</p>
            <p className="mt-1 leading-relaxed">8 33/2/8 2nd Main Netaji Layout Vaderahalli, Yelahanka Vidhyaranyapura post 560097</p>

            <p className="mt-4 font-medium text-ink">Corporate office</p>
            <p className="mt-1 leading-relaxed">Awfis Vista Pixel, 4th Floor, 8/2B and 8, 2nd C Main Rd, Jakkuru Layout, Jakkuru, Bengaluru, Karnataka 560092</p>

            <p className="mt-5"><a href="tel:+918660319788" className={linkCls}>+91 86603 19788</a></p>
            <p className="mt-1"><a href="mailto:contact@raksham.ai" className={linkCls}>contact@raksham.ai</a></p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-line pt-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-muted md:w-1/2">
            <p>© {new Date().getFullYear()} NammaRaksham AI Private Limited. All rights reserved.</p>
            <p className="mt-1">Developed & Managed By <a href="https://www.raksham.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Raksham AI</a></p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-medium text-ink mr-2">Get the app</span>
            <a href="https://play.google.com/store/apps/details?id=com.raksham.raksham" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-4 py-2 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <GooglePlayLogo size={26} weight="fill" />
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none opacity-90 tracking-wider">GET IT ON</div>
                <div className="text-base font-semibold leading-none mt-1">Google Play</div>
              </div>
            </a>
            <a href="https://apps.apple.com/in/app/raksham/id6740204818" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-4 py-2 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <AppStoreLogo size={26} weight="fill" />
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none opacity-90 tracking-wider">Available on the</div>
                <div className="text-base font-semibold leading-none mt-1">App Store</div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
