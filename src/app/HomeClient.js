"use client";

import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCheckCircle,
  FaShippingFast,
  FaArrowRight,
  FaIndustry,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCertificate,
  FaAward,
  FaShieldAlt,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaHeart,
  FaGlobe,
  FaHeadset,
  FaTrophy,
  FaClipboardCheck,
  FaStar,
  FaChartLine,
  FaQuoteLeft,
} from 'react-icons/fa';

// Dynamic imports with loading states
const ContactForm = dynamic(() => import('./components/ContactForm'), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded-lg" />,
});

import ProductsSection from './components/ProductsSection';

// --- MEMOIZED COMPONENTS ---
const SlideIndicator = memo(({ total, current, onClick }) => (
  <div className="flex gap-2">
    {Array.from({ length: total }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => onClick(idx)}
        className={`h-1.5 transition-all duration-300 ${current === idx
          ? 'w-8 bg-red-700'
          : 'w-2 bg-white/50 hover:bg-white/70'
          }`}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
  </div>
));

SlideIndicator.displayName = 'SlideIndicator';



// --- DATA ---
const BANNER_IMAGES = [
  {
    src: '/img/banner4.jpg',
    alt: 'Unicoat Abrasives - Industrial Abrasives Manufacturer',
  },
  {
    src: '/img/banner3.png',
    alt: 'Unicoat Abrasives - Custom Abrasive Solutions',
  },
  {
    src: '/img/banner5.png',
    alt: 'Unicoat Abrasives - Custom Abrasive Solutions',
  },
  {
    src: '/img/banner6.png',
    alt: 'Unicoat Abrasives - Custom Abrasive Solutions',
  },



];



const SERVICES = [
  { icon: FaIndustry, title: "Modern Facility", desc: "High-capacity production with consistent QC." },
  { icon: FaCheckCircle, title: "Quality Assured", desc: "Laboratory testing & batch traceability." },
  { icon: FaShippingFast, title: "Secure Packaging", desc: "Customer-ready packaging and reliable logistics." },
];

const CONTACT_INFO = [
  { icon: FaPhone, text: "+91 98791 10368", sub: "Primary contact", color: "bg-red-50 text-red-700" },
  { icon: FaEnvelope, text: "unicoat_abrasives@yahoo.com", sub: "For inquiries & quotes", color: "bg-red-100 text-red-800" },
  { icon: FaMapMarkerAlt, text: <>Plot No. 4/2, Asutosh Ind. Estate, Zak-Kadadara Road, <br /> Village-Zak, Ta. Dehgam, Dist. Gandhinagar. Gujarat (INDIA).</>, sub: "Factory Address", color: "bg-slate-100 text-slate-700" },
];

const TESTIMONIALS = [
  {
    name: "Ishwar Patel",
    company: "Standard Quality Assurance",
    text: "Best Quality of Garnet Sand. Packing also Good & Quick Response for our materials need.",
    rating: 5
  },
  {
    name: "Nitin Patel",
    company: "Satisfied Customer",
    text: "BEST ABRASIVES MATERIAL SUPPLIERS. GOOD QUALITY",
    rating: 5
  },

  {
    name: "Krunal Sathawara",
    company: "Industry Professional",
    text: "Best manufacturer and supplier",
    rating: 5
  },
  {
    name: "GSK IRRIGATION PVT. LTD.",
    company: "Corporate Client",
    text: "Consistent quality and reliable service. Highly recommended.",
    rating: 5
  },
  {
    name: "Nitin Patel",
    company: "Long-term Partner",
    text: "Garnet & Aluminum oxide best quality manufacturer",
    rating: 5
  },
];

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const observerRef = useRef(null);

  // Auto-play with cleanup
  const startAutoPlay = useCallback(() => {
    if (!isPaused && BANNER_IMAGES.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
      }, 8000);
    }
  }, [isPaused]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.lazy-load');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % BANNER_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length);
  }, []);

  const handleSlideClick = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    startAutoPlay();
  }, [startAutoPlay]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const testimonialIntervalRef = useRef(null);


  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 1;

    const width = window.innerWidth;
    if (width >= 1280) return 4; // xl: desktop
    if (width >= 1024) return 3; // lg: laptop
    if (width >= 768) return 2;  // md: tablet
    return 1;                    // mobile
  };

  const [slidesPerView, setSlidesPerView] = useState(1); // Default to 1

  // Helper function to get max slides based on current view
  const getMaxSlides = useCallback(() => {
    return Math.ceil(TESTIMONIALS.length / slidesPerView) - 1;
  }, [slidesPerView]);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView()); // Ensure this function is defined or moved appropriately if needed, or inline the logic
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = useCallback(() => {
    const maxSlides = getMaxSlides();
    setActiveTestimonial((prev) => (prev >= maxSlides ? 0 : prev + 1));
  }, [getMaxSlides]);

  const prevTestimonial = useCallback(() => {
    const maxSlides = getMaxSlides();
    setActiveTestimonial((prev) => (prev <= 0 ? maxSlides : prev - 1));
  }, [getMaxSlides]);

  // Testimonial Autoplay
  useEffect(() => {
    if (!isTestimonialPaused) {
      testimonialIntervalRef.current = setInterval(() => {
        // Explicitly block autoplay on laptop screens (1024px - 1279px)
        const width = window.innerWidth;
        if (width >= 1024 && width < 1280) {
          return;
        }
        nextTestimonial();
      }, 3000);
    }
    return () => clearInterval(testimonialIntervalRef.current);
  }, [isTestimonialPaused, nextTestimonial]);

  // Drag Handler
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      nextTestimonial();
    } else if (info.offset.x > 50) {
      prevTestimonial();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 text-slate-800 selection:bg-red-700 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section
        className="relative w-full h-[148px] sm:h-[400px] md:h-[70vh] flex items-center bg-gray-900 justify-center overflow-hidden touch-pan-y"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Hero banner"
      >
        <AnimatePresence mode="wait" initial={false}>
          {BANNER_IMAGES.map((img, i) => (
            currentSlide === i && (
              <motion.div
                key={img.src}

                exit={{ opacity: 0 }}

                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000 || offset.x < -100) {
                    nextSlide();
                  } else if (swipe > 10000 || offset.x > 100) {
                    prevSlide();
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain md:object-cover object-center w-full h-full"
                  priority={true}
                  loading="eager"
                  placeholder="empty"
                  unoptimized={true}
                  draggable={false}
                  sizes="100vw"
                />


                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/10 pointer-events-none" />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slider Controls */}
        <div className=" hidden md:flex absolute z-20 bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-6 px-4 pb-2 w-max">
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-red-700 hover:text-white transition-all border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white scale-90 md:scale-100 active:scale-95"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>

          <SlideIndicator
            total={BANNER_IMAGES.length}
            current={currentSlide}
            onClick={handleSlideClick}
          />

          <button
            onClick={nextSlide}
            className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-red-700 hover:text-white transition-all border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white scale-90 md:scale-100 active:scale-95"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="relative z-10 bg-gray-50 w-full">
        <div className="w-full mx-auto px-0 md:px-6 lg:px-14 py-0 md:py-10">
          <div className="bg-white rounded-3xl py-8 md:px-12 lg:px-16 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-start">
              {/* Left Column: Headings */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                  <span className="text-sm font-bold tracking-wide uppercase text-red-900">
                    Welcome to Unicoat Abrasives
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                  Leading Abrasives <br />
                  <span className="text-blue-600 bg-clip-text font-extrabold  leading-[1.1] ">
                    Manufacturer Worldwide
                  </span>
                </h2>
              </div>

              {/* Right Column: Content & Actions */}
              <div className="flex flex-col gap-8">
                <div className="prose prose-lg">
                  <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium">
                    At Unicoat Abrasives, we redefine surface finishing with industrial-grade materials designed for performance and longevity. From Garnet Sand to Aluminum Oxide, our products are engineered to meet the rigorous demands of modern manufacturing.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link
                    href="/about"
                    className="inline-flex justify-center items-center gap-2 bg-red-800 hover:bg-red-900 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 group"
                  >
                    Discover Our Story
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-md group"
                  >
                    Get in Touch
                    <FaPhone className="text-red-700 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- PRODUCTS --- */}
      {/* --- PRODUCTS --- */}
      <ProductsSection />



      {/* --- CTA SECTION --- */}
      <section className="py-10 lg:py-14 px-4 md:px-6 lg:px-14 lazy-load ">
        <div className=" mx-auto">
          <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 shadow-2xl p-8 md:p-12 lg:p-14 text-center">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to optimize your process?
              </h3>
              <p className="text-slate-300 text-base lg:text-lg mb-6 lg:mb-8">
                Get a tailored quote and rapid support from our team.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
                <Link
                  href="/contact"
                  className="bg-red-800 border border-transparent text-white py-3 px-6 lg:px-8 items-center rounded-full font-bold shadow-lg hover:bg-red-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Contact Us
                </Link>
                <Link
                  href="/inquiry"
                  className="border border-white/30 text-white py-3 px-6 lg:px-8 rounded-full font-bold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES / EXPERTISE SECTION --- */}
      {/* --- SERVICES / EXPERTISE SECTION --- */}
      <section className="py-10 lg:py-14 relative overflow-hidden bg-white text-slate-900 lazy-load">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className=" mx-auto px-4 md:px-6 lg:px-14 relative z-10">

          {/* Header - Left Aligned to match About */}
          <div className="w-full mb-12 lg:mb-16">
            <span className="inline-block text-sm md:text-base font-bold tracking-wider uppercase bg-red-800 text-white px-4 py-2 rounded-lg mb-4 md:mb-6">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Industrial-Grade <br className="hidden lg:block" />
              <span className="text-blue-700 bg-clip-text">Excellence</span>
            </h2>
            <p className="mt-4 md:mt-6 text-slate-600 leading-relaxed text-lg md:text-xl max-w-3xl">
              We deliver end-to-end abrasive solutions with precision, quality, and reliability at the core of our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { ...SERVICES[0], theme: "blue", borderColor: "border-blue-100", hoverBorder: "hover:border-blue-500", iconColor: "text-blue-600", bgHover: "hover:bg-blue-50/50", gradient: "from-blue-500 to-indigo-600" },
              { ...SERVICES[1], theme: "red-dark", borderColor: "border-red-100", hoverBorder: "hover:border-red-800", iconColor: "text-red-800", bgHover: "hover:bg-red-50/50", gradient: "from-red-800 to-red-900" },
              { ...SERVICES[2], theme: "red", borderColor: "border-red-100", hoverBorder: "hover:border-red-500", iconColor: "text-red-600", bgHover: "hover:bg-red-50/50", gradient: "from-red-500 to-rose-600" },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`group relative bg-white border-2 ${service.borderColor} rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.hoverBorder} ${service.bgHover}`}
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-2xl md:text-3xl ${service.iconColor} shadow-md mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br ${service.gradient} group-hover:text-white transition-all duration-300`}>
                    <service.icon />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-base md:text-lg group-hover:text-slate-700">
                    {service.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-10 lg:py-14 px-4 md:px-6 lg:px-14 bg-slate-50 lazy-load">
        <div className=" mx-auto">
          {/* Section Header */}
          <div className="text-left mb-10">
            <span className="inline-block text-lg font-bold tracking-wider uppercase bg-red-900 text-white px-4 py-2 rounded-lg mb-6">
              Why Choose Unicoat
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Core Values & <br className="hidden lg:block" />
              <span className="text-red-800">Advantages</span>
            </h2>

          </div>

          {/* ======= IMPROVED TWO-COLUMN BLOCK ======= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 w-full">

            {/* LEFT SIDE - Advantages */}
            <div className="flex flex-col h-full bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
              <div className="mb-4 pb-6 border-b border-slate-100">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg text-red-800">
                    <FaTrophy className="text-xl" />
                  </div>
                  Our Advantages
                </h3>
              </div>
              <ul className="space-y-6 flex-1">
                {[
                  { title: "Commitment to Excellence", desc: "Uncompromising standards in every product we manufacture.", icon: FaTrophy, color: "text-amber-600", bg: "bg-amber-50/50" },
                  { title: "Implement Quality", desc: "Rigorous quality control protocols at every production stage.", icon: FaCheckCircle, color: "text-red-700", bg: "bg-red-50/50" },
                  { title: "Exceed Expectations", desc: "Going above and beyond to ensure total customer satisfaction.", icon: FaStar, color: "text-purple-600", bg: "bg-purple-50/50" },
                  { title: "Constant Improvement", desc: "Continuous innovation in our technology and processes.", icon: FaChartLine, color: "text-blue-600", bg: "bg-blue-50/50" },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-5 items-start group">
                    <div className={`mt-1 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${item.bg} ${item.color}`}>
                      <item.icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-red-800 transition-colors">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE - Commitment */}
            <div className="flex flex-col h-full bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="mb-8 pb-6 border-b border-slate-100">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <FaClipboardCheck className="text-xl" />
                  </div>
                  Our Commitment
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1 ">
                {[
                  {
                    title: "Excellence",
                    desc: "Uncompromising standards",
                    icon: FaTrophy,
                    bg: "bg-slate-50",
                    border: "border-slate-100",
                    iconColor: "text-red-700",
                    iconBg: "bg-red-100"
                  },
                  {
                    title: "Quality",
                    desc: "Rigorous control",
                    icon: FaClipboardCheck,
                    bg: "bg-slate-50",
                    border: "border-slate-100",
                    iconColor: "text-blue-600",
                    iconBg: "bg-blue-100"
                  },
                  {
                    title: "Innovation",
                    desc: "Continuous improvement",
                    icon: FaChartLine,
                    bg: "bg-slate-50",
                    border: "border-slate-100",
                    iconColor: "text-purple-600",
                    iconBg: "bg-purple-100"
                  },
                  {
                    title: "Satisfaction",
                    desc: "Exceeding expectations",
                    icon: FaStar,
                    bg: "bg-slate-50",
                    border: "border-slate-100",
                    iconColor: "text-amber-600",
                    iconBg: "bg-amber-100"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.bg} border ${item.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white flex flex-col items-start h-full group`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                      <item.icon className={`text-xl ${item.iconColor}`} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* --- CONTACT FOOTER --- */}
      <section className="py-10 lg:py-14 px-4 md:px-6 lg:px-14 lazy-load">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
              Let's discuss your requirements
            </h3>
            <p className="text-slate-600 mb-6 lg:mb-8 text-base lg:text-lg">
              Fast response and support for quotes, samples and logistics.
            </p>

            <ul className="space-y-4 lg:space-y-6">
              {CONTACT_INFO.map((item, i) => {
                let href = "";
                if (item.icon === FaPhone) href = `tel:${item.text.replace(/\s+/g, '')}`;
                else if (item.icon === FaEnvelope) href = `mailto:${item.text}`;
                else if (item.icon === FaMapMarkerAlt) href = "https://www.google.com/maps?q=Unicoat+Abrasives+industries";

                return (
                  <li key={i}>
                    <Link
                      href={href}
                      className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-white/50 transition-all border border-slate-200 hover:border-red-300 hover:shadow-md group"
                    >
                      <div
                        className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-lg lg:text-xl shadow-sm transition-transform group-hover:scale-110 ${item.color}`}
                      >
                        <item.icon />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-base lg:text-lg group-hover:text-red-700 transition-colors">
                          {item.text}
                        </div>
                        <div className="text-xs lg:text-sm text-slate-500">
                          {item.sub}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-4 lg:p-6 shadow-xl">
              <ContactForm compact showTitle={false} />
            </div>
          </div>
        </div>
      </section>




      <section className="py-10 cursor-pointer lg:py-14 relative overflow-hidden lazy-load">
        {/* Abstract Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-700/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className=" mx-auto px-4 md:px-6 lg:px-14 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
            <div className="max-w-3xl text-left">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                What Our Clients Say
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-lg lg:text-xl max-w-3xl">
                Hear from industry leaders who trust Unicoat for their abrasive needs.
              </p>
            </div>
          </div>

          <div className="relative ">
            {/* Carousel Content */}
            <div
              className="overflow-hidden -mx-4 px-4 pb-12 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsTestimonialPaused(true)}
              onMouseLeave={() => setIsTestimonialPaused(false)}
            >
              <motion.div
                className="flex"
                drag="x"
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                animate={{
                  x: `-${activeTestimonial * (100 / Math.ceil(TESTIMONIALS.length / slidesPerView))}%`
                }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                style={{
                  width: `${Math.ceil(TESTIMONIALS.length / slidesPerView) * 100}%`
                }}
              >
                {/* Mobile: 1 per view */}
                {TESTIMONIALS.map((testimonial, idx) => (
                  <div key={idx} className="px-3 bg-transparent flex-shrink-0 md:hidden" style={{ width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)}%` }}>
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl h-full relative group hover:border-red-500/30 transition-colors duration-300">
                      <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                        <FaQuoteLeft className="text-6xl text-red-500" />
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex gap-1 mb-6">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400 drop-shadow-sm" : "text-slate-700"} size={16} />
                          ))}
                        </div>

                        <p className="text-slate-200 text-lg leading-relaxed mb-8 font-light italic">
                          "{testimonial.text}"
                        </p>

                        <div className="mt-auto pt-6 border-t border-slate-800 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-2 ring-slate-900">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                            <p className="text-red-400 text-sm font-medium">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}




                {/* Tablet: 2 per view */}
                {Array.from({ length: Math.ceil(TESTIMONIALS.length / 2) }).map((_, groupIndex) => (
                  <div key={`tablet-${groupIndex}`} className="hidden  md:flex lg:hidden gap-6 px-3 flex-shrink-0" style={{ width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)}%` }}>
                    {TESTIMONIALS.slice(groupIndex * 2, groupIndex * 2 + 2).map((testimonial, idx) => (
                      <div key={`${groupIndex}-${idx}`} className="flex-1 ">
                        <div className="bg-slate-900 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl h-full relative group hover:border-red-700/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20">
                          <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-700/20 rounded-full blur-2xl group-hover:bg-red-700/30 transition-all opacity-0 group-hover:opacity-100" />

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                              <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <FaStar key={i} className={i < testimonial.rating ? "text-amber-400" : "text-slate-700"} size={14} />
                                ))}
                              </div>
                              <FaQuoteLeft className="text-3xl text-slate-700 group-hover:text-red-500/50 transition-colors" />
                            </div>

                            <p className="text-slate-200 text-lg leading-relaxed mb-8 flex-grow font-light">
                              "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-white font-bold shadow-inner group-hover:scale-110 transition-transform duration-300">
                                {testimonial.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-bold text-white group-hover:text-red-300 transition-colors">{testimonial.name}</h4>
                                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{testimonial.company}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {TESTIMONIALS.slice(groupIndex * 2, groupIndex * 2 + 2).length < 2 && <div className="flex-1 invisible" />}
                  </div>
                ))}

                {/* Laptop: 3 per view */}
                {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, groupIndex) => (
                  <div key={`laptop-${groupIndex}`} className="hidden lg:flex xl:hidden gap-6 px-3 flex-shrink-0" style={{ width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)}%` }}>
                    {TESTIMONIALS.slice(groupIndex * 3, groupIndex * 3 + 3).map((testimonial, idx) => (
                      <div key={`${groupIndex}-${idx}`} className="flex-1">
                        <div className="bg-slate-900 backdrop-blur-md border border-slate-800 p-8 rounded-2xl h-full relative group hover:border-red-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6">
                              <FaQuoteLeft className="text-3xl text-red-500/30 mb-4" />
                              <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <FaStar key={i} className={i < testimonial.rating ? "text-amber-400" : "text-slate-800"} size={14} />
                                ))}
                              </div>
                            </div>

                            <p className="text-slate-200 leading-relaxed mb-6 flex-grow">
                              "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                              <div className="w-10 h-10 rounded-full bg-red-900/50 text-red-400 border border-red-500/30 flex items-center justify-center font-bold">
                                {testimonial.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-200 text-sm">{testimonial.name}</h4>
                                <p className="text-slate-400 text-xs uppercase tracking-wide">{testimonial.company}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {TESTIMONIALS.slice(groupIndex * 3, groupIndex * 3 + 3).length < 3 &&
                      Array.from({ length: 3 - TESTIMONIALS.slice(groupIndex * 3, groupIndex * 3 + 3).length }).map((_, i) => (
                        <div key={`empty-${i}`} className="flex-1 invisible" />
                      ))
                    }
                  </div>
                ))}

                {/* Desktop: 4 per view */}
                {Array.from({ length: Math.ceil(TESTIMONIALS.length / 4) }).map((_, groupIndex) => (
                  <div key={`desktop-${groupIndex}`} className="hidden xl:flex gap-6 px-3 flex-shrink-0" style={{ width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)}%` }}>
                    {TESTIMONIALS.slice(groupIndex * 4, groupIndex * 4 + 4).map((testimonial, idx) => (
                      <div key={`${groupIndex}-${idx}`} className="flex-1">
                        <div className="h-full p-[1px] rounded-3xl bg-gradient-to-b from-slate-800 to-transparent hover:from-red-700/50 hover:to-red-900/50 transition-all duration-300">
                          <div className="bg-slate-900 rounded-[23px] h-full p-6 relative overflow-hidden group">
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-700/10 rounded-full blur-2xl group-hover:bg-red-700/20 transition-all duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                              <div className="flex justify-between items-start mb-5">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white font-bold group-hover:bg-red-800 transition-colors duration-300">
                                  {testimonial.name.charAt(0)}
                                </div>
                                <div className="flex gap-0.5">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} className={i < testimonial.rating ? "text-amber-400" : "text-slate-800"} size={12} />
                                  ))}
                                </div>
                              </div>

                              <h4 className="text-white font-bold text-lg mb-1 group-hover:text-red-300 transition-colors">{testimonial.name}</h4>
                              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4 border-b border-slate-800 pb-4 group-hover:border-red-500/30 transition-colors">
                                {testimonial.company}
                              </p>

                              <div className="flex-grow">
                                <FaQuoteLeft className="text-red-500/20 text-xl mb-2" />
                                <p className="text-slate-200 text-sm leading-relaxed group-hover:text-slate-100 transition-colors">
                                  {testimonial.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {TESTIMONIALS.slice(groupIndex * 4, groupIndex * 4 + 4).length < 4 &&
                      Array.from({ length: 4 - TESTIMONIALS.slice(groupIndex * 4, groupIndex * 4 + 4).length }).map((_, i) => (
                        <div key={`empty-${i}`} className="flex-1 invisible" />
                      ))
                    }
                  </div>
                ))}

              </motion.div>
            </div>

            {/* Control Buttons Bottom Right */}
            <div className="flex justify-end gap-3 mb-1">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-slate-300 bg-white/50 text-slate-700 flex items-center justify-center hover:bg-red-800 hover:text-white hover:border-red-800 transition-all duration-300 group shadow-sm"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-slate-300 bg-white/50 text-slate-700 flex items-center justify-center hover:bg-red-800 hover:text-white hover:border-red-800 transition-all duration-300 group shadow-sm"
                aria-label="Next slide"
              >
                <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Pagination Lines/Dots */}
            <div className="hidden md:flex justify-center gap-3">
              {
                Array.from({ length: getMaxSlides() + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeTestimonial ? "w-12 bg-red-700" : "w-4 bg-slate-700 hover:bg-slate-600"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
