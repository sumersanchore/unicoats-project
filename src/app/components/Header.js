"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaDownload,
  FaArrowRight,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaQuestionCircle,
  FaAddressBook,
  FaBoxOpen,
} from "react-icons/fa";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown((prev) => (prev === "products" ? null : prev));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = [
    { name: "Aluminium Oxide", href: "/aluminium_oxide" },
    { name: "Steel Shots", href: "/steel_shots" },
    { name: "Glass Beads", href: "/glass_beads" },
    { name: "Chilled Iron Grit", href: "/chilled_iron_grit" },
    { name: "Steel Grit", href: "/steel_grit" },
    { name: "Garnet Sand", href: "/garnet_sand" },
    { name: "Copper Slag", href: "/copper_slag" },
    { name: "Steel Cut Wire", href: "/steel_cut_wire" },
  ];

  const navItemsLeft = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About Us", href: "/about", icon: <FaInfoCircle /> },
  ];

  const navItemsRight = [
    { name: "Application", href: "/application", icon: <FaLayerGroup /> },
    { name: "Inquiry", href: "/inquiry", icon: <FaQuestionCircle /> },
    { name: "Contact Us", href: "/contact", icon: <FaAddressBook /> },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-white py-2.5 border-b border-white/10 hidden md:block">
        <div className="w-full px-2 lg:px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-10 text-base">
              <motion.a
                whileHover={{ scale: 1.02, color: "#dc2626" }}
                href="tel:+919879110368"
                className="flex items-center text-xl transition-colors duration-200"
              >
                <FaPhoneAlt className="mr-2 text-red-700" />
                <span className="font-medium text-lg">+91 98791 10368</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, color: "#dc2626" }}
                href="mailto:unicoat_abrasives@yahoo.com"
                className="flex items-center text-xl transition-colors duration-200"
              >
                <FaEnvelope className="mr-2 text-red-700" />
                <span className="font-medium ">unicoat_abrasives@yahoo.com</span>
              </motion.a>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Unicoat_Abrasives_industries.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-red-700 hover:bg-red-900 px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/20"
            >
              <FaDownload className="mr-2" />
              Download Brochure
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 border-b bg-white ${raleway.className} ${scrolled
          ? "backdrop-blur-md border-slate-200 shadow-sm"
          : "backdrop-blur-md border-slate-200 shadow-sm md:backdrop-blur-none md:border-transparent md:shadow-none"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="w-full px-2 lg:px-2">
          <div className="flex justify-between items-center py-1 md:py-2 lg:py-1 transition-all duration-300">
            {/* Logo - increased sizes for better visibility */}
            <Link href="/" className="flex items-center group relative z-50">
              <div
                className={`relative transition-all duration-300 w-36 h-16 md:w-40 md:h-14 ${scrolled
                  ? "lg:w-40 lg:h-14 xl:w-56 xl:h-18"
                  : "lg:w-56 lg:h-20 xl:w-72 xl:h-24"
                  }`}
              >
                <Image
                  src="/UNICOATLOGO2.jpg"
                  alt="Unicoat Abrasives"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 300px"
                />
              </div>
            </Link>

            {/* Desktop Navigation - larger fonts and spacing */}
            <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
              {navItemsLeft.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 lg:px-3 xl:px-4 py-3 font-semibold text-sm lg:text-base xl:text-xl transition-all duration-200 relative group rounded-lg ${isActive(item.href)
                    ? "text-red-800 scale-105"
                    : "text-slate-900 hover:text-blue-600"
                    }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-300 origin-left ${isActive(item.href) ? "bg-red-700 scale-x-100" : "bg-blue-600 scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              ))}

              {/* Products Dropdown */}
              <div
                className="relative h-full flex items-center"
                ref={dropdownRef}
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-2 lg:px-3 xl:px-4 py-3 text-sm lg:text-base xl:text-xl text-slate-900 hover:text-red-900 font-semibold transition-colors duration-200 group h-full">
                  Products
                  <FaChevronDown
                    className={`ml-1 lg:ml-2 text-xs lg:text-sm transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden ring-1 ring-black/5 max-w-[90vw]"
                    >
                      <div className="p-3">
                        <div className="px-4 py-3 mb-2 bg-slate-50 rounded-xl">
                          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                            Our Products
                          </h4>
                        </div>
                        <div className="space-y-1">
                          {products.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium text-base group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {product.name}
                              <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItemsRight.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 lg:px-3 xl:px-4 py-3 font-semibold text-sm lg:text-base xl:text-xl transition-all duration-200 relative group rounded-lg ${isActive(item.href)
                    ? "text-red-800 scale-105"
                    : "text-slate-900 hover:text-blue-600"
                    }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-300 origin-left ${isActive(item.href) ? "bg-red-700 scale-x-100" : "bg-blue-600 scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              ))}

              {/* Get Quote Button - bigger */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="ml-2 lg:ml-4 xl:ml-6 px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 bg-red-800 hover:bg-red-900 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/30 inline-flex items-center text-xs lg:text-sm xl:text-lg"
                >
                  Get Quote
                </Link>
              </motion.div>
            </nav>

            {/* Tablet/Mobile Actions */}
            <div className="flex items-center lg:hidden space-x-4">
              {/* Tablet Get Quote (Visible on MD screens) */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-red-800 hover:bg-red-900 text-white rounded-full font-semibold transition-all duration-300 shadow-md text-base"
                >
                  Get Quote
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-700/50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className={`lg:hidden overflow-y-auto max-h-[85vh] border-t border-slate-100 ${raleway.className}`}
              >
                <div className="py-4 space-y-2">
                  {navItemsLeft.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-5 py-4 text-lg rounded-xl transition-all duration-200 font-bold border-b border-slate-100 last:border-0 ${isActive(item.href)
                        ? "bg-red-800 text-white shadow-md"
                        : "text-slate-800 hover:bg-red-50 hover:text-red-900"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className={`mr-4 text-xl p-2 rounded-lg ${isActive(item.href) ? "text-red-800 bg-white shadow-sm" : "text-red-800 bg-red-50"}`}>{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Products Dropdown */}
                  <div className="py-1 border-b border-slate-100">
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 text-lg text-slate-800 hover:bg-red-50 hover:text-red-900 rounded-xl transition-colors duration-200 font-bold"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === "products-mobile" ? null : "products-mobile")
                      }
                    >
                      <div className="flex items-center">
                        <span className="mr-4 text-red-800 text-xl bg-red-50 p-2 rounded-lg"><FaBoxOpen /></span>
                        Products
                      </div>
                      <FaChevronDown
                        className={`transform transition-transform duration-200 ${activeDropdown === "products-mobile" ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === "products-mobile" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-50/50 rounded-xl mx-3"
                        >
                          <div className="py-2 space-y-1">
                            {products.map((product) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                className="flex items-center justify-between px-6 py-3 text-slate-700 hover:text-red-900 hover:bg-red-100/50 rounded-lg transition-colors duration-200 font-medium text-base group mx-2"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {product.name}
                                <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {navItemsRight.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-5 py-4 text-lg rounded-xl transition-all duration-200 font-bold border-b border-slate-100 last:border-0 ${isActive(item.href)
                        ? "bg-red-800 text-white shadow-md"
                        : "text-slate-800 hover:bg-red-50 hover:text-red-900"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className={`mr-4 text-xl p-2 rounded-lg ${isActive(item.href) ? "text-red-800 bg-white shadow-sm" : "text-red-800 bg-red-50"}`}>{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Get Quote Button */}
                  <div className="pt-4 px-4 pb-2">
                    <Link
                      href="/contact"
                      className="block w-full bg-red-800 hover:bg-red-900 text-white text-center py-4 rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Request Quote
                    </Link>
                  </div>

                  {/* Mobile Download Brochure */}
                  <div className="px-4 pb-4">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="/Unicoat_Abrasives_industries.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold transition-all duration-300"
                    >
                      <FaDownload className="mr-2" />
                      Download Brochure
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
