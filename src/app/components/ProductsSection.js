"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

/**
 * ProductCard - memoized card component with color cycling
 */
const ProductCard = memo(({ product, index }) => {
    // Cycle themes: Blue, Emerald, Red
    const themes = [
        {
            name: 'blue',
            ring: 'focus-visible:ring-blue-500',
            badgeBg: 'bg-blue-100',
            badgeText: 'text-blue-900',
            hoverText: 'group-hover:text-blue-800',
            scale: 'group-hover:scale-105',
            borderColor: 'border-blue-200',
            hoverBorder: 'group-hover:border-blue-500',
            bgHover: 'group-hover:bg-blue-50/20'
        },
        {
            name: 'red-dark',
            ring: 'focus-visible:ring-red-800',
            badgeBg: 'bg-red-50',
            badgeText: 'text-red-950',
            hoverText: 'group-hover:text-red-900',
            scale: 'group-hover:scale-105',
            borderColor: 'border-red-200',
            hoverBorder: 'group-hover:border-red-800',
            bgHover: 'group-hover:bg-red-50/30'
        },
        {
            name: 'red',
            ring: 'focus-visible:ring-red-500',
            badgeBg: 'bg-red-100',
            badgeText: 'text-red-900',
            hoverText: 'group-hover:text-red-800',
            scale: 'group-hover:scale-105',
            borderColor: 'border-red-200',
            hoverBorder: 'group-hover:border-red-500',
            bgHover: 'group-hover:bg-red-50/20'
        }
    ];

    const theme = themes[index % themes.length];

    return (
        <Link
            href={product.link}
            className={`group block h-full focus:outline-none focus-visible:ring-2 ${theme.ring} focus-visible:ring-offset-2 rounded-2xl`}
            aria-label={`View ${product.name} product page`}
        >
            <article className={`h-full bg-white rounded-2xl p-5 border-2 ${theme.borderColor} ${theme.hoverBorder} ${theme.bgHover} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                {/* Image / Media */}
                <div className="relative w-full rounded-xl overflow-hidden bg-slate-50 aspect-[4/3] shadow-inner mb-6 border border-slate-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width:640px) 180px, (max-width:1024px) 220px, 320px"
                        className={`object-cover transition-transform duration-500 ${theme.scale}`}
                        priority={false}
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="mt-5 flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug truncate">
                        {product.name}
                    </h3>

                    <p className="mt-3 text-base text-slate-700 font-medium line-clamp-2 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                {/* Footer: CTA */}
                <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide ${theme.badgeBg} ${theme.badgeText} whitespace-nowrap`}>
                        Details
                    </span>

                    <span className={`flex items-center text-base font-semibold text-slate-600 ${theme.hoverText} transition-colors`}>
                        <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </article>
        </Link>
    );
});

ProductCard.displayName = "ProductCard";

/* sample products */
const PRODUCTS = [
    { id: 1, name: "Aluminium Oxide", image: "/img/prd/1.png", link: "/aluminium_oxide", description: "High-performance abrasive material" },
    { id: 2, name: "Steel Shots", image: "/img/prd/2.png", link: "/steel_shots", description: "Round metallic abrasive" },
    { id: 3, name: "Glass Beads", image: "/img/prd/3.png", link: "/glass_beads", description: "For peening and cleaning" },
    { id: 4, name: "Copper Slag", image: "/img/prd/4.png", link: "/copper_slag", description: "Blasting abrasive media" },
    { id: 5, name: "Steel Grit", image: "/img/prd/5.png", link: "/steel_grit", description: "Angular abrasive material" },
    { id: 6, name: "Garnet Sand", image: "/img/prd/6.png", link: "/garnet_sand", description: "Natural mineral abrasive" },
    { id: 7, name: "Chilled Iron Grit", image: "/img/prd/7.png", link: "/chilled_iron_grit", description: "Hard abrasive grit" },
    { id: 8, name: "Steel Cut Wire", image: "/img/prd/8.png", link: "/steel_cut_wire", description: "Cut wire shots" },
];

const ProductsSection = () => {
    return (
        <section className="py-10 lg:py-14 lg:px-14 px-4 md:px-6 bg-white text-slate-900">
            <div className=" mx-auto">
                {/* Header - Left Aligned */}
                <div className="mb-14 text-left">
                    <span className="inline-block text-lg font-bold tracking-wider uppercase bg-red-800 text-white px-4 py-2 rounded-lg mb-6">
                        Our Products
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Premium Industrial <br className="hidden lg:block" />
                        <span className="text-red-700">
                            Abrasives & Media
                        </span>
                    </h2>
                    <p className="mt-6 text-slate-600 leading-relaxed text-lg lg:text-xl max-w-3xl">
                        High-performance abrasive solutions engineered for precision surface preparation and finishing across industries.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {PRODUCTS.map((p, idx) => (
                        <ProductCard key={p.id} product={p} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
