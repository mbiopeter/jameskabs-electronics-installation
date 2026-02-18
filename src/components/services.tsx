"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
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
    const scrollRef = useRef<HTMLDivElement>(null);

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
            icon: <Power />,
            whatsappMessage: "jameskabs | Panel & Breaker Upgrade Hello, I want more details about your Panel & Breaker Upgrade services."
        }
    ];

    const scroll = (direction = "right") => {
        if (!scrollRef.current) return;

        const scrollAmount = 335;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    const phoneNumber = "254742746940";

    return (
        <div id="services" className="bg-gray-50 relative overflow-x-hidden w-full">
            <section className="py-24 px-6 md:px-12 overflow-hidden">
                <div className="
                    absolute right-0 top-0
                    w-full h-full
                    z-1
                    opacity-15
                    pointer-events-none
                    bg-[radial-gradient(#0028dc_1px,transparent_1px)]
                    bg-size-[16px_16px]"></div>
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <h5 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
                                Our Services
                            </h5>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Professional Electrical Solutions
                            </h2>
                        </div>

                        {/* Controls */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll("left")}
                                className="w-12 h-12 z-2 rounded-full border bg-white border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={() => scroll("right")}
                                className="w-12 h-12 z-2 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
                                <ChevronRight />
                            </button>
                        </div>
                    </motion.div>

                    {/* Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-7 overflow-x-auto scroll-smooth pb-6 scrollbar-hide">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="
                                    group min-w-74 z-2 max-w-74
                                    bg-white border border-gray-200
                                    p-8 rounded-xl shadow-sm
                                    hover:shadow-xl transition
                                ">
                                <div className="
                                    w-16 h-16 mb-6 rounded-xl
                                    bg-blue-100 text-blue-600
                                    flex items-center justify-center
                                    group-hover:bg-blue-600
                                    group-hover:text-white transition">
                                    {service.icon}
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h4>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>

                                <div className="overflow-hidden">
                                    <a
                                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-flex items-center gap-2
                                            text-blue-600 font-bold text-sm
                                            translate-y-6 opacity-0
                                            group-hover:translate-y-0
                                            group-hover:opacity-100
                                            transition-all duration-300">
                                        Learn More
                                        <ChevronRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </section>
        </div>
    );
};

export default Services;
