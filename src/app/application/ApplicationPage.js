'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2, Users2, ShieldCheck, Target,
    Warehouse, Package, Scissors, Factory,
    CheckCircle, MapPin, Award, Truck
} from 'lucide-react';

export default function ApplicationPageDetails() {
    return (

        < section className="py-20 px-4 md:px-14 bg-gradient-to-b from-slate-50 to-white" >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Industrial <span className="text-emerald-600">Applications</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Premium garnet abrasives for diverse industrial requirements
                    </p>
                </motion.div>

                {/* Waterjet Garnet Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-emerald-50 rounded-xl">
                            <Scissors className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Waterjet Garnet Applications</h3>
                    </div>

                    {/* Waterjet Garnet Images Gallery */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">


                        <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <img
                                src="/WATERJETGARNETIMG1.jpg"
                                alt="Waterjet Cutting Demonstration - Clean cutting of metals, stone, and composites"
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4 bg-white">
                                <p className="text-sm text-slate-600">Precision Cutting</p>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <img
                                src="/WATERJETGARNETIMG2.jpg"
                                alt="Industrial Applications - Machinery cutting automotive and aerospace components"
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4 bg-white">
                                <p className="text-sm text-slate-600">Industrial Applications</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Materials Processed:</h4>
                            <p className="text-slate-700">
                                Our high-purity garnet enables clean cutting of metals (steel, aluminum, titanium),
                                stone (marble, granite), glass, and aerospace-grade composites with perfect edge quality.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Key Features:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Shiny, reddish-brown garnet particles with consistent grain size</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Clean appearance without dust or impurities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Precision cutting for automotive and aerospace components</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Sand Blasting Applications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-amber-50 rounded-xl">
                            <Factory className="w-8 h-8 text-amber-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Sand Blasting Applications</h3>
                    </div>

                    {/* Sand Blasting Garnet Images Gallery */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <img
                                src="/Sand Blasting Garnet-2.jpg"
                                alt="Industrial Surface Preparation - Rust removal and surface cleaning for painting applications"
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4 bg-white">
                                <p className="text-sm text-slate-600">Surface Preparation</p>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <img
                                src="/Sand-Blasting Garnet-1.jpg"
                                alt="Industrial Equipment in Use - Blasting machines for shipyards, oil & gas, and mining applications"
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4 bg-white">
                                <p className="text-sm text-slate-600">Industrial Applications</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Surface Preparation:</h4>
                            <p className="text-slate-700">
                                Effective rust removal, mill scale removal, and surface cleaning for painting
                                and coating applications with perfect anchor profile.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Industry Applications:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Shipyards: Hull blasting and repair</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Oil & Gas: Pipeline surface preparation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Mining & Industrial plant maintenance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Metal Fabrication: Preparing surfaces for welding</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">Maritime & Military: Equipment maintenance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Packaging & Quality */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-12 border-t border-slate-200"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <Package className="w-6 h-6 text-blue-600" />
                                <h4 className="text-xl font-bold text-slate-900">Packaging Solutions</h4>
                            </div>
                            <p className="text-slate-700">
                                Available in 25kg and 50kg HDPE bags, and 1 metric ton jumbo bags with UNICOAT
                                branding. Our packaging features quality seals and certifications for assured
                                product integrity.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <Target className="w-6 h-6 text-emerald-600" />
                                <h4 className="text-xl font-bold text-slate-900">Quality Assurance</h4>
                            </div>
                            <p className="text-slate-700">
                                Laboratory testing equipment, consistent grain flow, minimal dust generation,
                                and rigorous quality control procedures ensure optimal performance in all
                                industrial applications.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}