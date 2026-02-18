"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Testimonials from "./testimonials";

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqData = [
        {
            question: "What Electrical Services Do You Provide?",
            answer:
                "We offer a full range of electrical services including residential and commercial wiring, solar panel installation, lighting solutions, EV charging stations, power backup systems, and electrical maintenance."
        },
        {
            question: "Do You Handle Both Residential and Commercial Projects?",
            answer:
                "Yes. Our team works on residential homes, commercial buildings, industrial facilities, and large-scale energy projects, delivering tailored solutions for every environment."
        },
        {
            question: "How Long Does a Typical Installation Take?",
            answer:
                "Project timelines depend on the scope of work. Small installations may take a day, while larger systems such as solar or backup power solutions can take several days after site assessment."
        },
        {
            question: "Do You Offer Maintenance and After-Service Support?",
            answer:
                "Absolutely. We provide ongoing maintenance, system inspections, emergency repairs, and performance optimization to ensure long-term reliability and safety."
        },
        {
            question: "How Can I Get a Quote or Consultation?",
            answer:
                "You can contact us through our website or phone to schedule a consultation. Our experts will assess your needs and provide a clear, transparent quote with no hidden costs."
        }
    ];

    return (
        <section className="relative w-full bg-white pb-30 overflow-hidden ">
            {/* Background split */}
            <div className="absolute inset-0 grid grid-cols-12">
                <div className="col-span-12 lg:col-span-4 bg-linear-to-br from-blue-500 to-blue-800" />
                <div className="hidden lg:block col-span-8 bg-white" />
            </div>

            <motion.div
                id="faqs"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-120px" }}
                className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="relative z-10 border-[3px] border-blue-600 p-3 bg-white shadow-2xl">
                            <Image
                                src="/about1.jpg"
                                alt="Electrical Technician"
                                width={520}
                                height={520}
                                className="object-cover w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* FAQ Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 z-2">
                        <div className="mx-auto lg:mx-0">
                            <h5 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-4">
                                See Our FAQs
                            </h5>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-10 leading-tight">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqData.map((item, index) => {
                                    const isActive = activeIndex === index;

                                    return (
                                        <div
                                            key={index}
                                            className={`border rounded-md shadow transition-all duration-300 ${
                                                isActive
                                                    ? "bg-blue-50 border-blue-200 shadow-md"
                                                    : "bg-white border-gray-200"
                                            }`}>
                                            <button
                                                onClick={() =>
                                                    setActiveIndex(
                                                        isActive ? null : index
                                                    )
                                                }
                                                className="w-full flex items-center justify-between px-6 py-5 text-left">
                                                <span
                                                    className={`text-base sm:text-lg font-semibold ${
                                                        isActive
                                                            ? "text-blue-700"
                                                            : "text-slate-800"
                                                    }`}>
                                                    {item.question}
                                                </span>

                                                <motion.span
                                                    animate={{
                                                        rotate: isActive ? 180 : 0
                                                    }}
                                                    transition={{ duration: 0.25 }}
                                                    className="text-blue-600">
                                                    <ChevronDown size={22} />
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{
                                                            duration: 0.35,
                                                            ease: "easeInOut"
                                                        }}
                                                        className="overflow-hidden">
                                                        <div className="px-6 pb-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                                                            {item.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <div className="absolute top-0 z-1 right-0">
                <Image
                    src="/right-shape.png"
                    alt="Electrical Technician"
                    width={600}
                    height={1000}
                    className="object-cover w-full h-auto"
                />
            </div>
            <div id="testimonials" className="w-full">
                <Testimonials />
            </div>
            
        </section>
    );
};

export default Faqs;
