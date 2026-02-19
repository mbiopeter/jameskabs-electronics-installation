"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bolt,
    Plug,
    Lightbulb,
    Wrench,
    BatteryCharging,
    ShieldCheck,
    Power,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    const services = [
        { 
            title: "Electrical Installation", 
            desc: "Safe and professional installation of residential and commercial electrical systems.", 
            icon: <Bolt />, 
            whatsappMessage: "jameskabs | Electrical Installation Hello, I would like more information about your Electrical Installation services." 
        },
        { 
            title: "Wiring & Rewiring", 
            desc: "Complete wiring solutions for new builds, renovations, and upgrades.", 
            icon: <Plug />, 
            whatsappMessage: "jameskabs | Wiring & Rewiring Hello, I want more details about your Wiring & Rewiring services." 
        },
        { 
            title: "Lighting Installation", 
            desc: "Indoor, outdoor, and security lighting installed for efficiency and style.", 
            icon: <Lightbulb />, 
            whatsappMessage: "jameskabs | Lighting Installation Hello, I would like more info about your Lighting Installation services."
        },
        { 
            title: "Electrical Repairs", 
            desc: "Fast fault diagnosis and long-lasting electrical repairs.", 
            icon: <Wrench />, 
            whatsappMessage: "jameskabs | Electrical Repairs Hello, I want more information about your Electrical Repairs services." 
        },
        { 
            title: "Power Backup Systems", 
            desc: "Inverter, UPS, and backup power installations for uninterrupted supply.", 
            icon: <BatteryCharging />, 
            whatsappMessage: "jameskabs | Power Backup Systems Hello, I would like details about your Power Backup Systems." 
        },
        { 
            title: "Safety Inspection", 
            desc: "Detailed inspections to ensure compliance and electrical safety.", 
            icon: <ShieldCheck />, 
            whatsappMessage: "jameskabs | Safety Inspection Hello, I want more information about your Safety Inspection services." 
        },
        { 
            title: "Panel & Breaker Upgrade", 
            desc: "Upgrading panels and breakers to handle modern power demands.", 
            icon: <Power />, whatsappMessage: "jameskabs | Panel & Breaker Upgrade Hello, I want more details about your Panel & Breaker Upgrade services." 
        },
    ];

    // Determine how many cards to show per screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else setItemsToShow(4);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(services.length - itemsToShow, 0);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    const totalDots = 4;
    const stepSize = Math.ceil(services.length / totalDots);
    const dots = Array.from({ length: totalDots });
    const activeDot = Math.min(Math.floor(currentIndex / stepSize), dots.length - 1);

    const phoneNumber = "254742746940";
    const currentGroup = services.slice(currentIndex, currentIndex + itemsToShow);

    return (
        <section id="services" className="bg-gray-50 w-full overflow-hidden py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h5 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h5>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Professional Electrical Solutions</h2>
                    </div>
                    {/* Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1))}
                            className="w-12 h-12 z-2 rounded-full border bg-white border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={() => setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))}
                            className="w-12 h-12 z-2 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
                            <ChevronRight />
                        </button>
                    </div>
                </motion.div>
                {/* Cards */}
                <div className="relative w-full flex items-center justify-center h-112 overflow-hidden">
                    <AnimatePresence initial={false}>
                        {currentGroup.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                className={`absolute top-0 left-0 w-full sm:w-[calc(50%-6px)] lg:w-[calc(25%-12px)] px-0`}
                                style={{ left: `${i * 100 / itemsToShow}%` }}>
                                <div className="group bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-xl transition relative h-96">
                                    <div className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                                    <div className="overflow-hidden">
                                        <a
                                            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            Learn More
                                            <ChevronRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-blue-200 border-dotted">
                        {dots.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(Math.min(i * stepSize, maxIndex))}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${activeDot === i ? "bg-blue-600" : "bg-blue-200 hover:bg-blue-400"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
