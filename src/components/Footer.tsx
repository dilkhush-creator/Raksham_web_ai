import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Logo & Description Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center">
                <Shield size={36} className="text-[#6a5cdb]" strokeWidth={1.5} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[3px] py-2">
                  <div className="w-4 h-[2px] bg-[#6a5cdb]/60 rounded-full transform -rotate-12"></div>
                  <div className="w-5 h-[2px] bg-[#6a5cdb]/60 rounded-full transform -rotate-12"></div>
                  <div className="w-4 h-[2px] bg-[#6a5cdb]/60 rounded-full transform -rotate-12"></div>
                </div>
              </div>
              <span className="text-3xl font-bold text-[#1a1a2e] tracking-tight">Raksham</span>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              Simplifying workforce management with reliable tools for attendance, payroll, and employee records. Your business, effortlessly managed.
            </p>

            <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#eef2ff] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-colors">
              <span className="font-bold text-lg font-serif">in</span>
            </a>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#1a1a2e] text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-[15px] text-gray-600">
              <li><Link to="/" className="hover:text-[#6366f1]">Homepage</Link></li>
              <li><Link to="/about" className="hover:text-[#6366f1]">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-[#6366f1]">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-[#6366f1]">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#6366f1]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#1a1a2e] text-lg mb-6">Products</h3>
            <ul className="space-y-4 text-[15px] text-gray-600">
              <li><Link to="/products" className="hover:text-[#6366f1]">Raksham Web</Link></li>
              <li><Link to="/products" className="hover:text-[#6366f1]">Staff App</Link></li>
              <li><Link to="/products" className="hover:text-[#6366f1]">Guard App</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="md:col-span-4 text-[15px] text-gray-600">
            <h3 className="font-bold text-[#1a1a2e] text-lg mb-6">Contact Us</h3>
            <p className="font-bold text-[#1a1a2e] mb-2 text-sm">NammaRaksham AI Private Limited</p>

            <p className="font-semibold text-gray-900 mt-4 mb-1 text-sm">Registered Office :</p>
            <p className="leading-relaxed text-sm">8 33/2/8 2nd Main Netaji Layout Vaderahalli, Yelahanka Vidhyaranyapura post 560097</p>

            <p className="font-semibold text-gray-900 mt-4 mb-1 text-sm">Corporate office :</p>
            <p className="leading-relaxed mb-6 text-sm">Awfis Vista Pixel, 4th Floor, 8/2B and 8, 2nd C Main Rd, Jakkuru Layout, Jakkuru, Bengaluru, Karnataka 560092</p>

            <p className="leading-relaxed mb-6 text-sm">
              Have questions or need assistance? Reach out to the Raksham team via phone or email. We're here to support your workforce management needs and help your business thrive.
            </p>

            <p className="font-semibold text-gray-900">Call Us: +91-8660319788</p>
            <p className="font-semibold text-gray-900 mt-1.5">Mail Us: contact@raksham.ai</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[13px] text-gray-600 md:w-1/2">
            <p>Copyright © 2026 . all rights reserved by NammaRaksham AI Private Limited</p>
            <p className="mt-1">Developed & Managed By <a href="#" className="text-[#6366f1] hover:underline">Static Consultancy</a></p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-bold text-[#1a1a2e] text-lg mr-2">Discover Our App</span>
            {/* Dummy Play Store Button */}
            <a href="#" className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M5.523 19.387c-.183-.162-.294-.41-.294-.748V5.36c0-.338.11-.586.294-.748.243-.213.626-.23 1.056-.046l10.59 4.908c.644.298.644.78 0 1.078l-10.59 4.908c-.43.184-.813.167-1.056-.046zM17.158 10.5c.34-.158.34-.415 0-.573l-4.593-2.128-2.617 2.415 2.617 2.415 4.593-2.129z"/></svg>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none opacity-90 tracking-wider">GET IT ON</div>
                <div className="text-base font-semibold leading-none mt-1">Google Play</div>
              </div>
            </a>
            {/* Dummy App Store Button */}
            <a href="#" className="bg-black text-white px-4 py-2.5 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M16.365 20.62c-1.22.885-2.486 1.77-3.923 1.77-1.408 0-2.645-.885-3.835-.885-1.19 0-2.427.885-3.835.885-1.436 0-2.703-.885-3.923-1.77C-1.87 16.634.352 9.073 5.485 9.073c1.19 0 2.31.782 3.03.782.72 0 1.84-.782 3.03-.782 2.378 0 4.103 1.258 5.257 3.03-4.526 2.05-3.666 7.747 1.047 9.518-.602 1.542-1.272 2.92-2.112 4.14M14.61 6.55C15.54 5.42 16.14 3.9 15.97 2.34c-1.31.06-2.91.89-3.88 2.02-.85 1.01-1.54 2.55-1.34 4.09 1.46.12 2.93-.78 3.86-1.9"/></svg>
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
