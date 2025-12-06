'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin, FaAngleRight } from 'react-icons/fa';

export default function RealFooter() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  // Exact information from the real website
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-emerald-500" />,
      title: 'Address',
      text: 'Plot No. 6, Vrajbhumi Society, Nr. Uma School, Galaxy Cinema Road, Naroda, Ahmedabad - 382330. Gujarat (INDIA).',
      link: 'https://www.google.com/maps?q=Unicoat+Abrasives+industries'
    },
    {
      icon: <FaPhone className="text-emerald-500" />,
      title: 'Phone',
      text: '+91 98791 10368',
      link: 'tel:+919879110368'
    },
    {
      icon: <FaEnvelope className="text-emerald-500" />,
      title: 'Email',
      text: 'unicoat_abrasives@yahoo.com',
      link: 'mailto:unicoat_abrasives@yahoo.com'
    }
  ];

  // Products from the real website (exact names)
  const products = [
    'Aluminium Oxide',
    'Steel Shots',
    'Glass Beads',
    'Chilled Iron Grit',
    'Steel Grit',
    'Garnet Sand',
    'Copper Slag',
    'Steel Cut Wire'
  ];

  // Navigation links from the real website
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '#' },
    { name: 'Application', href: '/application' },
    { name: 'Inquiry', href: '/inquiry' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Download Brochure', href: '/Unicoat_Abrasives_industries.pdf', target: '_blank' }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaGooglePlus, href: '#' },
    { icon: FaLinkedin, href: '#' },
  ];

  return (
    <footer className="bg-slate-800 pt-6 pb-2 text-white border-t-4 border-emerald-600 font-sans">
      {/* Main Footer Content */}
      <div className="py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Company & Contact Info - Takes up 5 columns on large screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-4 ">
                <Link href="/" className="flex items-center gap-3 group lg:rounded-xl bg-white/5 p-2 w-fit">
                  <img src="/UNICOAT.jpg" alt="Unicoat Abrasives Logo" className="h-20 w-auto object-contain rounded-bl-xl rounded-tr-xl" />
                  <img src="/UNICOATLOGO2.jpg" alt="Unicoat Abrasives Logo" className="h-20 w-auto object-contain rounded-tl-xl rounded-br-xl" />

                </Link>
                <p className="text-white text-lg leading-relaxed w-full">
                  Manufacturers of premium quality abrasives including Aluminium Oxide, Steel Shots,
                  Glass Beads, Steel Grit, Garnet Sand, and other industrial abrasives.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Address Card - Full Width */}
                <a
                  href={contactInfo[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="bg-slate-900 p-3 rounded-xl shrink-0 shadow-sm border border-slate-700/50 group-hover:border-emerald-500/50 transition-colors mt-0.5">
                    {contactInfo[0].icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">{contactInfo[0].title}</h4>
                    <p className="text-white group-hover:text-white transition-colors text-lg font-medium leading-snug">
                      {contactInfo[0].text}
                    </p>
                  </div>
                </a>

                {/* Phone & Email Cards - Side by Side on larger screens */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Phone */}
                  <a
                    href={contactInfo[1].link}
                    className="flex-auto flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="bg-slate-900 p-2.5 rounded-lg shrink-0 shadow-sm border border-slate-700/50 group-hover:border-emerald-500/50 transition-colors">
                      {contactInfo[1].icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-0.5">{contactInfo[1].title}</h4>
                      <p className="text-white group-hover:text-white transition-colors text-base font-medium truncate">
                        {contactInfo[1].text}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={contactInfo[2].link}
                    className="flex-auto flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="block bg-slate-900 p-2.5 rounded-lg shrink-0 shadow-sm border border-slate-700/50 group-hover:border-emerald-500/50 transition-colors">
                      {contactInfo[2].icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-0.5">{contactInfo[2].title}</h4>
                      <p className="text-white group-hover:text-white transition-colors text-base font-medium whitespace-nowrap">
                        {contactInfo[2].text}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Products & Quick Links Container - Takes up 7 columns on large screens */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-8 lg:pt-16 lg:pl-24">

              {/* Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                  Our Products
                </h4>
                <div className="space-y-4">
                  {products.map((product, index) => (
                    <Link key={index} href="#" className="flex items-center group cursor-pointer w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-emerald-500 mr-3 transition-colors duration-300"></span>
                      <span className="text-white group-hover:text-emerald-400 transition-colors text-lg break-words leading-tight group-hover:translate-x-1 duration-300">{product}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                  Quick Links
                </h4>
                <div className="space-y-4">
                  {navigationLinks.map((link, index) => (
                    link.target ? (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group cursor-pointer w-fit"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-emerald-500 mr-3 transition-colors duration-300"></span>
                        <span className="text-white group-hover:text-emerald-400 transition-colors text-lg break-words leading-tight group-hover:translate-x-1 duration-300">{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        key={index}
                        href={link.href}
                        className="flex items-center group cursor-pointer w-fit"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-300 ${isActive(link.href) ? "bg-emerald-500" : "bg-slate-600 group-hover:bg-emerald-500"}`}></span>
                        <span className={`transition-all duration-300 text-lg break-words leading-tight ${isActive(link.href) ? "text-emerald-400 font-bold translate-x-1" : "text-white group-hover:text-emerald-400 group-hover:translate-x-1"}`}>{link.name}</span>
                      </Link>
                    )
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Map & Follow Us Container - Moved to span full width below main content */}
            <div className="lg:col-span-12  grid grid-cols-1 lg:grid-cols-[65%_35%] gap-4 items-center">
              {/* Map */}
              <div className="w-full">
                <h4 className="text-lg font-bold mb-4 text-white">Our Location</h4>
                <div className="w-full rounded-xl overflow-hidden border border-slate-700/50 shadow-lg h-[250px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5863290427696!2d72.64660167509346!3d23.07562277913654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e813769b4d20f%3A0xb396163d96cb5f72!2sUnicoat%20Abrasives%20industries!5e0!3m2!1sen!2sin!4v1764993971438!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Unicoat Abrasives Location"
                  ></iframe>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col items-center justify-center text-center h-full">
                <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, backgroundColor: '#059669' }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      className="bg-slate-800 p-3 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className=" pb-16 pt-5 lg:px-10 border-t border-slate-800">
        <div className="">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-white text-base">
                © {new Date().getFullYear()} Unicoat Abrasives Industries. All Rights Reserved.
              </div>
            </div>

            <div className="text-white text-base flex items-center">
              <span>Designed By</span>
              <a
                href="https://shraddhawebsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-white hover:text-emerald-500 font-semibold transition-colors"
              >
                Shraddha Websoft
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}