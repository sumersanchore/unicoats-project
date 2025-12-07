'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Users2, ShieldCheck, Target,
  Warehouse, Package, Scissors, Factory,
  CheckCircle, MapPin, Award, Truck
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* --- ABOUT HERO --- */}
      <section className="pt-32 pb-20 px-4 md:px-14">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              About <span className="text-emerald-600">UNICOAT</span>
            </h1>
            <p className="text-xl text-slate-600">
              India's Premier Abrasives & Industrial Solutions Provider
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Location & Introduction */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-emerald-50 rounded-xl mt-1">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">About Us</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Unicoat Abrasives Industries, located at Plot No 6, Vrajbhumi Society, N H No 8,
                    Nr Uma School, Naroda, Ahmedabad, is India's reputed industrial abrasives company.
                    Our vision focuses on providing customized solutions with quality and cost-effective
                    product ranges.
                  </p>
                  <p>
                    A strong customer-focused approach and constant quest for top-class quality and
                    services have enabled us to attain and sustain leadership position in the industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Process */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-xl mt-1">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Excellence</h3>
                <p className="text-slate-700">
                  To maintain product quality, we have a team of quality experts who keep vigilant
                  checks on every aspect of the business process—from client requests to final delivery.
                  Our team stays conversant with the latest market trends and developments, ensuring
                  efficient synchronization between clients and employees. We maintain enduring
                  relationships that benefit both parties.
                </p>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-50 rounded-xl mt-1">
                <Warehouse className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Infrastructure & Logistics</h3>
                <p className="text-slate-700">
                  We operate a large warehouse where products are stored before delivery. Our effective
                  packaging systems prevent any damage or breakage during transit, ensuring products
                  reach clients in perfect condition.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- OUR TEAM --- */}
      <section className="py-20 px-4 md:px-14 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <Users2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Team</h2>
              </div>

              <div className="space-y-6">
                <p className="text-slate-700">
                  Our team comprises dynamic and enthusiastic industry professionals including
                  technocrats, marketing personnel, and researchers who impart their in-depth
                  knowledge in producing superior quality abrasives for our clients.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">
                      Our team stays abreast with all advancements in the technicalities and
                      intricacies of the abrasives business.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">
                      Our R&D team consistently engages in research work using modern tools
                      and equipment.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">
                      We have a professional sales team ensuring timely dispatch of products
                      to their destinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
                  <Users2 className="w-32 h-32 text-slate-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- QUALITY STANDARDS --- */}
      <section className="py-20 px-4 md:px-14">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-slate-300" />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Quality Standards</h2>
              </div>

              <div className="space-y-6">
                <p className="text-slate-700">
                  Adhering to international standards, we carry out stringent quality checks on
                  our wide range of abrasive products. We maintain a well-equipped laboratory
                  where products are tested against strict parameters to ensure consistent quality.
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-lg">Our Commitment:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">International standard compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Well-equipped testing laboratory</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Stringent quality parameters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-700">Continuous quality improvement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* --- CONTACT CTA --- */}
      <section className="py-16 px-4 md:px-14 bg-emerald-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Partner with UNICOAT for Industrial Excellence
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Experience superior abrasive solutions backed by quality, expertise, and reliability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-emerald-700 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                Contact Our Team
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                View Product Range
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}