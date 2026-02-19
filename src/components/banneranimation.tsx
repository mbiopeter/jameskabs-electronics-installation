'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const bannerData = [
    {
        id: 1,
        header: "Reliable Electrical Installations",
        subtitle: "SAFE & PROFESSIONAL",
        description: "JamesKabs Electrical specializes in high-quality installations for residential and commercial properties. From circuit wiring to full system setups, we ensure your home or office is powered safely and efficiently, reducing risk and maximizing performance.",
        personImg: "/banner1.png",
        whatsappMessage: "jameskabs Hello, I want to learn more about your electrical installation services."
    },
    {
        id: 2,
        header: "Modern Electrical Solutions",
        subtitle: "SMART & EFFICIENT",
        description: "We provide modern, energy-efficient electrical solutions tailored to your property’s needs. Our certified electricians handle everything from panel upgrades to smart home integrations, ensuring reliable power management for the future.",
        personImg: "/banner2.png",
        whatsappMessage: "jameskabs Hello, I am interested in your modern and smart electrical solutions."
    },
    {
        id: 3,
        header: "Expert Maintenance & Upgrades",
        subtitle: "TRUSTED ELECTRICAL SERVICES",
        description: "With years of experience, our team offers professional maintenance and upgrades for your electrical systems. We focus on safety, compliance, and performance, ensuring every installation meets the highest industry standards.",
        personImg: "/banner3.png",
        whatsappMessage: "jameskabs Hello, I would like to know more about your electrical maintenance and upgrade services."
    }
];

const BannerAnimation = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % bannerData.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setIndex((prev) => (prev + 1) % bannerData.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length);

    const phoneNumber = "254742746940";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        bannerData[index].whatsappMessage
    )}`;

    return (
        <section id="home" className="relative w-full h-162 md:h-225 overflow-hidden bg-[#1a1d2b] font-sans">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority/>
                <div className="absolute inset-0 bg-linear-to-r from-blue-800/60 via-blue-600/40 to-blue-500/30"></div>
            </div>

            <div className="relative z-10 max-w-360 mx-auto h-full px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-10">
                    
                    {/* Left: Text Content */}
                    <div className="relative h-full flex flex-col justify-center space-y-6 lg:pr-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={bannerData[index].id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1 }}
                                className="text-white">
                                <motion.div
                                    className="inline-block bg-blue-600 px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-sm"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6 }}>
                                    {bannerData[index].subtitle}
                                </motion.div>
                                <h2 className="text-4xl md:text-6xl font-extrabold leading-snug mt-3">
                                    {bannerData[index].header}
                                </h2>
                                <motion.p
                                    className="text-gray-300 text-lg max-w-lg mt-4 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 1 }}>
                                    {bannerData[index].description}
                                </motion.p>
                                <motion.a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 max-w-55 bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 font-semibold mt-6 rounded-md shadow-md transition-all duration-300 ease-in-out text-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}>
                                    Learn More
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </motion.a>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-full flex items-center justify-end overflow-hidden lg:pl-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={bannerData[index].personImg}
                                initial={{ opacity: 0, y: 50, scale: 1 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1.1
                                }}
                                exit={{ opacity: 0, y: -50, scale: 1.2 }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full h-[80%] md:h-[90%]">
                                <Image
                                    src={bannerData[index].personImg}
                                    alt="Professional"
                                    fill
                                    className="object-contain object-bottom"/>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute md:top-1/2 bottom-2 left-0 right-0 flex justify-between items-center px-4 z-20 -translate-y-1/2">
                <button 
                    onClick={prevSlide}
                    className="p-4 border border-white/20 text-white hover:bg-blue-600 transition-all rounded-full shadow-lg">
                    <ChevronLeft size={28} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="p-4 bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-full shadow-lg">
                    <ChevronRight size={28} />
                </button>
            </div>
        </section>
    );
};

export default BannerAnimation;
