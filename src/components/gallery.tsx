"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement | null>(null);

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

    const [itemsToShow, setItemsToShow] = useState(4);

    // Responsive items per view
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

    // Auto-scroll (perfect for mobile too)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    /* -------------------------------
       Pagination (MAX 4 DOTS)
    -------------------------------- */
    const totalDots = 4;
    const stepSize = Math.ceil((maxIndex + 1) / totalDots);

    const dots = Array.from({ length: Math.min(totalDots, maxIndex + 1) });

    const activeDot = Math.min(
        Math.floor(currentIndex / stepSize),
        dots.length - 1
    );

    return (
        <section className="py-20 bg-white w-full overflow-hidden">
            <div className="mx-auto px-4">
                <div className="relative overflow-hidden" ref={scrollRef}>
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: `-${currentIndex * (100 / itemsToShow)}%`,
                        }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {galleryPosts.map((post) => (
                            <div
                                key={post.id}
                                className="lg:min-w-[calc(25%-18px)] sm:min-w-[calc(50%-12px)] min-w-full relative group cursor-pointer"
                            >
                                <div className="relative h-96 w-full overflow-hidden">
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="absolute bottom-6 left-4 right-4 bg-white p-6 shadow-lg border-l-4 border-blue-600">
                                    <p className="text-blue-600 text-sm font-semibold mb-2">
                                        {post.tag}
                                    </p>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Dots (MAX 4) */}
                <div className="flex justify-center mt-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-blue-200 border-dotted">
                        {dots.map((_, i) => (
                            <button
                                key={i}
                                onClick={() =>
                                    setCurrentIndex(
                                        Math.min(i * stepSize, maxIndex)
                                    )
                                }
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                                    activeDot === i
                                        ? "bg-blue-600"
                                        : "bg-blue-200 hover:bg-blue-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
