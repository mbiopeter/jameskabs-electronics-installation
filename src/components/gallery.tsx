"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    const galleryPosts = [
        { id: 1, img: "/gallery1.jpg", tag: "Electrical Installation", title: "Commercial Electrical Wiring Project" },
        { id: 2, img: "/gallery2.jpg", tag: "Solar Panel", title: "Rooftop Solar Installation – Residential" },
        { id: 3, img: "/gallery3.jpg", tag: "Lighting Solutions", title: "Smart LED Lighting Upgrade" },
        { id: 4, img: "/gallery4.jpg", tag: "Power Backup", title: "Industrial Generator Installation" },
        { id: 5, img: "/gallery5.jpg", tag: "Solar & EV", title: "EV Charging Station Setup" },
        { id: 6, img: "/gallery6.jpg", tag: "Hybrid Energy", title: "Wind & Solar Hybrid Project" },
        { id: 7, img: "/gallery7.jpg", tag: "Electrical Maintenance", title: "High-Rise Electrical Panel Upgrade" },
        { id: 8, img: "/gallery8.jpg", tag: "Energy Efficiency", title: "Smart Home Energy Management" },
    ];

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

    const maxIndex = Math.max(galleryPosts.length - itemsToShow, 0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    const totalDots = 4;
    const stepSize = Math.ceil(galleryPosts.length / totalDots);
    const dots = Array.from({ length: totalDots });
    const activeDot = Math.min(Math.floor(currentIndex / stepSize), dots.length - 1);

    return (
        <section className="py-20 bg-white w-full overflow-hidden">
            <div className="mx-auto px-4">
                <div className="relative w-full h-120 flex items-center justify-center overflow-hidden">
                    <AnimatePresence initial={false}>
                        {galleryPosts.slice(currentIndex, currentIndex + itemsToShow).map((post, i) => (
                            <motion.div
                                key={post.id}
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                                className={`absolute top-0 left-0 w-full sm:w-[calc(50%-6px)] lg:w-[calc(25%-12px)] px-0`}
                                style={{ left: `${i * 100 / itemsToShow}%` }}>
                                <div className="relative h-110 w-full overflow-hidden shadow-sm border border-gray-200 group cursor-pointer">
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-6 left-4 right-4 bg-white p-6 shadow-lg border-l-4 border-blue-600">
                                        <p className="text-blue-600 text-sm font-semibold mb-2">{post.tag}</p>
                                        <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
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

export default Gallery;
