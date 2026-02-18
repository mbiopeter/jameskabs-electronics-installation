"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "James Anderson",
        role: "Facility Manager",
        image: "/user5.jpg",
        rating: 5,
        text: "Jameskabs delivered a clean and professional electrical installation for our facility. Every detail was handled carefully, and the work was completed on schedule with no issues."
    },
    {
        name: "Linda Roberts",
        role: "Homeowner",
        image: "/user2.jpg",
        rating: 4,
        text: "Very satisfied with the wiring and lighting installation. The team was polite, knowledgeable, and explained everything clearly before starting the job."
    },
    {
        name: "Michael Brown",
        role: "Operations Manager",
        image: "/user3.jpg",
        rating: 5,
        text: "Excellent service from Jameskabs. They handled our control panel and electronic system installation efficiently and met all safety standards."
    },
    {
        name: "Samuel Okoye",
        role: "Site Supervisor",
        image: "/user4.jpg",
        rating: 4,
        text: "Reliable electrical installation with solid workmanship. Troubleshooting was fast, and the final setup worked perfectly as expected."
    }
];


const Testimonials = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative z-30 px-6">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto bg-white shadow-2xl px-6 py-14 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-72 h-72 opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
                    <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
                        <div className="relative w-70 h-85 rounded overflow-hidden border-[3px] border-blue-600 p-3 bg-white ">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ x: 120, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -120, opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "linear" }}
                                    className="absolute inset-0 p-3">
                                    <Image
                                        src={testimonials[active].image}
                                        alt={testimonials[active].name}
                                        fill
                                        className="object-cover"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="absolute -bottom-6 z-1 left-4 bg-white p-4 rounded-full flex gap-1 shadow">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className={
                                        i < testimonials[active].rating
                                            ? "text-blue-600 fill-blue-600"
                                            : "text-gray-300" 
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
                            Testimonials
                        </span>

                        <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-6">
                            What’s Clients Say
                        </h2>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={active}
                                initial={{ x: 120, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -120, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "linear" }}
                                className="text-gray-600 leading-relaxed text-lg max-w-3xl">
                                {testimonials[active].text}
                            </motion.p>
                        </AnimatePresence>

                        <div className="mt-8 border-t border-blue-200 pt-6">
                            <p className="text-xl font-semibold text-slate-900">
                                {testimonials[active].name}
                            </p>
                            <p className="text-gray-500 text-lg">
                                {testimonials[active].role}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="absolute right-10 bottom-10 flex gap-2 border-2 border-dotted border-blue-600 rounded-full px-5 py-3">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-2.5 h-2.5 rounded-full transition ${
                                active === i
                                    ? "bg-blue-600"
                                    : "border border-blue-600"
                            }`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
