'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-4 z-[90] p-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg hover:shadow-red-600/40 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 group"
                    aria-label="Scroll to top"
                >
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "loop"
                        }}
                    >
                        <FaArrowUp className="text-xl" />
                    </motion.div>
                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:animate-ping" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
