"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    Zap,
    ShieldCheck,
    Users,
    Play,
    X,
    ArrowRight
} from 'lucide-react';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = "254742746940";

    const exploreMessage =
        "jameskabs | MORE INFORMATION Hello, I would like to get more information about your electrical services.";

    const whatsappExploreLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        exploreMessage
    )}`;

    return (
        <div id="about" className='bg-white overflow-x-hidden w-full'>
            <section className="py-24 bg-white px-4 md:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative">
                        {/* Main Image */}
                        <div className="relative z-10 border-[3px] border-blue-600 p-4 inline-block ml-10 bg-white">
                            <Image
                                src="/about1.jpg"
                                alt="Electrical Installation"
                                width={450}
                                height={500}
                                className="object-cover"/>
                        </div>

                        <div className="absolute -bottom-10 -right-10 z-20">
                            <Image
                                src="/about2.jpg"
                                alt="Professional Electrician"
                                width={300}
                                height={350}
                                className="shadow-2xl"/>
                        </div>

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-0 bottom-60 md:bottom-12 -translate-y-1/2 z-30 bg-white p-6 shadow-xl flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <Zap className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">6,500+</h3>
                                <p className="text-sm text-gray-500">Projects Completed</p>
                            </div>
                        </motion.div>

                        {/* Rotating Play Button */}
                        <div className="absolute top-[40%] right-[30%] z-30 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="relative w-32 h-32">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        fill="none"/>
                                    <text className="text-[10px] uppercase font-bold fill-[#FFF]">
                                        <textPath xlinkHref="#circlePath">
                                            • Play Our Video • Play JamesKabs Video
                                        </textPath>
                                    </text>
                                </svg>
                                <div className="absolute inset-0 bg-blue-600 rounded-full -z-10 opacity-90"></div>
                            </motion.div>

                            <button
                                onClick={() => setIsOpen(true)}
                                className="absolute bg-white text-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 ml-1" />
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6">
                        <h5 className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                            About Us
                        </h5>

                        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Trusted Electrical Installation <br /> & Power Solutions
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            JamesKabs Electrical provides professional electrical installation,
                            maintenance, and upgrade services for residential and commercial clients.
                            We focus on safety, efficiency, and compliance to ensure reliable power
                            systems you can trust.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600 p-4 rounded-full text-white">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-2xl">
                                        Safety & Compliance
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        All installations meet industry safety standards and regulations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600 p-4 rounded-full text-white">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-2xl">
                                        Experienced Professionals
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Skilled electricians delivering reliable and efficient solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 my-8" />

                        <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8">
                            <a
                                href={whatsappExploreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-blue-600 text-xl text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors rounded-md shadow-lg">
                                Explore More
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-blue-600 overflow-hidden">
                                    <Image src="/profile.jpeg" alt="Founder" width={48} height={48} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-2xl text-gray-900">James Maina</h5>
                                    <p className="text-xs text-gray-500 uppercase tracking-tight">
                                        Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[00 bg-black/80 z-100 flex items-center justify-center p-4"
                            onClick={() => setIsOpen(false)}>
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 text-white hover:text-blue-500">
                                    <X size={28} />
                                </button>

                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/s3vpH3A_eTA?si=JaPX7DFfmSY7uVbt&amp;controls=1&amp;start=6"
                                    title="JamesKabs Video"
                                    allow="autoplay; encrypted-media; fullscreen"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default About;
