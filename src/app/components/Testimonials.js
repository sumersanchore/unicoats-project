"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
    FaQuoteLeft,
    FaStar,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const TESTIMONIALS = [
    {
        name: "Ishwar Patel",
        company: "Standard Quality Assurance",
        text: "Best Quality of Garnet Sand. Packing also Good & Quick Response for our materials need.",
        rating: 5,
    },
    {
        name: "Nitin Patel",
        company: "Satisfied Customer",
        text: "BEST ABRASIVES MATERIAL SUPPLIERS. GOOD QUALITY",
        rating: 5,
    },
    {
        name: "Nitin Patel",
        company: "Long-term Partner",
        text: "Garnet & Aluminum oxide best quality manufacturer",
        rating: 5,
    },
    {
        name: "Krunal Sathawara",
        company: "Industry Professional",
        text: "Best manufacturer and supplier",
        rating: 5,
    },
    {
        name: "GSK IRRIGATION PVT. LTD.",
        company: "Corporate Client",
        text: "Consistent quality and reliable service. Highly recommended.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const getSlidesPerView = () => {
        if (typeof window === "undefined") return 1;

        const width = window.innerWidth;
        if (width >= 1280) return 4; // xl: desktop
        if (width >= 1024) return 3; // lg: laptop
        if (width >= 768) return 2; // md: tablet
        return 1; // mobile
    };

    const getMaxSlides = useCallback(() => {
        return Math.ceil(TESTIMONIALS.length / slidesPerView) - 1;
    }, [slidesPerView]);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextTestimonial = useCallback(() => {
        const maxSlides = getMaxSlides();
        setActiveTestimonial((prev) => (prev >= maxSlides ? 0 : prev + 1));
    }, [getMaxSlides]);

    const prevTestimonial = useCallback(() => {
        const maxSlides = getMaxSlides();
        setActiveTestimonial((prev) => (prev <= 0 ? maxSlides : prev - 1));
    }, [getMaxSlides]);

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) {
            nextTestimonial();
        } else if (info.offset.x > 50) {
            prevTestimonial();
        }
    };

    return (
        <section className="py-10 cursor-pointer lg:py-14 relative overflow-hidden lazy-load">
            {/* Abstract Background Patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-[0.03]" />
            </div>

            <div className=" mx-auto px-4 md:px-6 lg:px-10 relative z-10">
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
                    <div className="overflow-hidden -mx-4 px-4 pb-12 cursor-grab active:cursor-grabbing">
                        <motion.div
                            className="flex"
                            drag="x"
                            dragMomentum={false}
                            onDragEnd={handleDragEnd}
                            animate={{
                                x: `-${activeTestimonial *
                                    (100 / Math.ceil(TESTIMONIALS.length / slidesPerView))
                                    }%`,
                            }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                            style={{
                                width: `${Math.ceil(TESTIMONIALS.length / slidesPerView) * 100
                                    }%`,
                            }}
                        >
                            {/* Mobile: 1 per view */}
                            {TESTIMONIALS.map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    className="px-3 bg-transparent flex-shrink-0 md:hidden"
                                    style={{
                                        width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)
                                            }%`,
                                    }}
                                >
                                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl h-full relative group hover:border-emerald-500/30 transition-colors duration-300">
                                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <FaQuoteLeft className="text-6xl text-emerald-500" />
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex gap-1 mb-6">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={
                                                            i < testimonial.rating
                                                                ? "text-yellow-400 drop-shadow-sm"
                                                                : "text-slate-700"
                                                        }
                                                        size={16}
                                                    />
                                                ))}
                                            </div>

                                            <p className="text-slate-200 text-lg leading-relaxed mb-8 font-light italic">
                                                "{testimonial.text}"
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-slate-800 flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-2 ring-slate-900">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white text-lg">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-emerald-400 text-sm font-medium">
                                                        {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Tablet: 2 per view */}
                            {Array.from({ length: Math.ceil(TESTIMONIALS.length / 2) }).map(
                                (_, groupIndex) => (
                                    <div
                                        key={`tablet-${groupIndex}`}
                                        className="hidden  md:flex lg:hidden gap-6 px-3 flex-shrink-0"
                                        style={{
                                            width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)
                                                }%`,
                                        }}
                                    >
                                        {TESTIMONIALS.slice(
                                            groupIndex * 2,
                                            groupIndex * 2 + 2
                                        ).map((testimonial, idx) => (
                                            <div key={`${groupIndex}-${idx}`} className="flex-1 ">
                                                <div className="bg-slate-900 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl h-full relative group hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20">
                                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-all opacity-0 group-hover:opacity-100" />

                                                    <div className="relative z-10 flex flex-col h-full">
                                                        <div className="flex justify-between items-start mb-6">
                                                            <div className="flex gap-1">
                                                                {Array.from({ length: 5 }).map((_, i) => (
                                                                    <FaStar
                                                                        key={i}
                                                                        className={
                                                                            i < testimonial.rating
                                                                                ? "text-amber-400"
                                                                                : "text-slate-700"
                                                                        }
                                                                        size={14}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <FaQuoteLeft className="text-3xl text-slate-700 group-hover:text-emerald-500/50 transition-colors" />
                                                        </div>

                                                        <p className="text-slate-200 text-lg leading-relaxed mb-8 flex-grow font-light">
                                                            "{testimonial.text}"
                                                        </p>

                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-white font-bold shadow-inner group-hover:scale-110 transition-transform duration-300">
                                                                {testimonial.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                                                                    {testimonial.name}
                                                                </h4>
                                                                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                                                                    {testimonial.company}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {TESTIMONIALS.slice(groupIndex * 2, groupIndex * 2 + 2)
                                            .length < 2 && <div className="flex-1 invisible" />}
                                    </div>
                                )
                            )}

                            {/* Laptop: 3 per view */}
                            {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map(
                                (_, groupIndex) => (
                                    <div
                                        key={`laptop-${groupIndex}`}
                                        className="hidden lg:flex xl:hidden gap-6 px-3 flex-shrink-0"
                                        style={{
                                            width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)
                                                }%`,
                                        }}
                                    >
                                        {TESTIMONIALS.slice(
                                            groupIndex * 3,
                                            groupIndex * 3 + 3
                                        ).map((testimonial, idx) => (
                                            <div key={`${groupIndex}-${idx}`} className="flex-1">
                                                <div className="bg-slate-900 backdrop-blur-md border border-slate-800 p-8 rounded-2xl h-full relative group hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
                                                    <div className="relative z-10 flex flex-col h-full">
                                                        <div className="mb-6">
                                                            <FaQuoteLeft className="text-3xl text-emerald-500/30 mb-4" />
                                                            <div className="flex gap-1">
                                                                {Array.from({ length: 5 }).map((_, i) => (
                                                                    <FaStar
                                                                        key={i}
                                                                        className={
                                                                            i < testimonial.rating
                                                                                ? "text-amber-400"
                                                                                : "text-slate-800"
                                                                        }
                                                                        size={14}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <p className="text-slate-200 leading-relaxed mb-6 flex-grow">
                                                            "{testimonial.text}"
                                                        </p>

                                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                                                            <div className="w-10 h-10 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                                                                {testimonial.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-slate-200 text-sm">
                                                                    {testimonial.name}
                                                                </h4>
                                                                <p className="text-slate-400 text-xs uppercase tracking-wide">
                                                                    {testimonial.company}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {TESTIMONIALS.slice(groupIndex * 3, groupIndex * 3 + 3)
                                            .length < 3 &&
                                            Array.from({
                                                length:
                                                    3 -
                                                    TESTIMONIALS.slice(groupIndex * 3, groupIndex * 3 + 3)
                                                        .length,
                                            }).map((_, i) => (
                                                <div key={`empty-${i}`} className="flex-1 invisible" />
                                            ))}
                                    </div>
                                )
                            )}

                            {/* Desktop: 4 per view */}
                            {Array.from({ length: Math.ceil(TESTIMONIALS.length / 4) }).map(
                                (_, groupIndex) => (
                                    <div
                                        key={`desktop-${groupIndex}`}
                                        className="hidden xl:flex gap-6 px-3 flex-shrink-0"
                                        style={{
                                            width: `${100 / Math.ceil(TESTIMONIALS.length / slidesPerView)
                                                }%`,
                                        }}
                                    >
                                        {TESTIMONIALS.slice(
                                            groupIndex * 4,
                                            groupIndex * 4 + 4
                                        ).map((testimonial, idx) => (
                                            <div key={`${groupIndex}-${idx}`} className="flex-1">
                                                <div className="h-full p-[1px] rounded-3xl bg-gradient-to-b from-slate-800 to-transparent hover:from-emerald-500/50 hover:to-teal-500/50 transition-all duration-300">
                                                    <div className="bg-slate-900 rounded-[23px] h-full p-6 relative overflow-hidden group">
                                                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />

                                                        <div className="relative z-10 flex flex-col h-full">
                                                            <div className="flex justify-between items-start mb-5">
                                                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white font-bold group-hover:bg-emerald-600 transition-colors duration-300">
                                                                    {testimonial.name.charAt(0)}
                                                                </div>
                                                                <div className="flex gap-0.5">
                                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                                        <FaStar
                                                                            key={i}
                                                                            className={
                                                                                i < testimonial.rating
                                                                                    ? "text-amber-400"
                                                                                    : "text-slate-800"
                                                                            }
                                                                            size={12}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                                                                {testimonial.name}
                                                            </h4>
                                                            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4 border-b border-slate-800 pb-4 group-hover:border-emerald-500/30 transition-colors">
                                                                {testimonial.company}
                                                            </p>

                                                            <div className="flex-grow">
                                                                <FaQuoteLeft className="text-emerald-500/20 text-xl mb-2" />
                                                                <p className="text-slate-200 text-sm leading-relaxed group-hover:text-slate-100 transition-colors">
                                                                    {testimonial.text}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {TESTIMONIALS.slice(groupIndex * 4, groupIndex * 4 + 4)
                                            .length < 4 &&
                                            Array.from({
                                                length:
                                                    4 -
                                                    TESTIMONIALS.slice(groupIndex * 4, groupIndex * 4 + 4)
                                                        .length,
                                            }).map((_, i) => (
                                                <div key={`empty-${i}`} className="flex-1 invisible" />
                                            ))}
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>

                    {/* Control Buttons Bottom Right */}
                    <div className="flex justify-end gap-3 mb-1">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border border-slate-300 bg-white/50 text-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 group shadow-sm"
                            aria-label="Previous slide"
                        >
                            <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border border-slate-300 bg-white/50 text-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 group shadow-sm"
                            aria-label="Next slide"
                        >
                            <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* Pagination Lines/Dots */}
                    <div className="hidden md:flex justify-center gap-3">
                        {Array.from({ length: getMaxSlides() + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTestimonial(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeTestimonial
                                        ? "w-12 bg-emerald-500"
                                        : "w-4 bg-slate-700 hover:bg-slate-600"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
