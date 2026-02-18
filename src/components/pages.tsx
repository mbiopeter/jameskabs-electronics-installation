"use client";

import { motion } from 'framer-motion';
import { Users, Briefcase, Award, Star } from 'lucide-react';

const Pages = () => {
    const stats = [
        {
            number: "6,561+",
            label: "Team Members",
            icon: <Users className="w-12 h-12 text-blue-500 mb-3" />
        },
        {
            number: "600+",
            label: "Completed Projects",
            icon: <Briefcase className="w-12 h-12 text-blue-500 mb-3" />
        },
        {
            number: "250+",
            label: "Awards Won",
            icon: <Award className="w-12 h-12 text-blue-500 mb-3" />
        },
        {
            number: "590+",
            label: "Client Reviews",
            icon: <Star className="w-12 h-12 text-blue-500 mb-3" />
        }
    ];

    return (
        <section id="gallery" className="bg-[#001f3f] w-full text-white py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side Heading */}
                <motion.div
                    className="lg:w-1/3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h5 className="uppercase font-semibold tracking-widest text-sm text-blue-400 mb-2">
                        About Our Services
                    </h5>
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
                        Powering the Future <br /> with <span className="text-blue-400">Electrical Excellence</span>
                    </h2>
                    <p className="mt-3 text-blue-200 text-base leading-relaxed">
                        We provide a complete range of electrical services, including installation, maintenance, repairs, and energy-efficient solutions for residential, commercial, and industrial projects.
                    </p>
                </motion.div>

                {/* Right Side Stats Grid */}
                <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center bg-[#002a5c] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {stat.icon}
                            <h3 className="text-2xl md:text-3xl font-bold mt-2">{stat.number}</h3>
                            <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pages;
