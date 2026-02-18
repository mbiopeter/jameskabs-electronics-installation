'use client';

import React from 'react';

const Marquee = () => {
    const services = [
        "Electrical Installations",
        "Residential Wiring",
        "Commercial Electrical Works",
        "Electrical Panel Upgrades",
        "Lighting Installation & Design",
        "Fault Detection & Repairs",
        "Electrical Maintenance",
        "Backup Power Systems",
        "Generator Installation",
        "Smart Home Electrical Setup",
        "Electrical Safety Inspections",
        "Energy Efficiency Solutions",
        "CCTV & Security Systems",
        "Data & Network Cabling",
        "Surge Protection Systems"
    ];

    return (
        <div className="relative w-full overflow-hidden bg-linear-to-r from-blue-900 via-blue-800 to-blue-700 py-5">
            <div className="flex whitespace-nowrap animate-marquee items-center">
                {[...services, ...services].map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center mx-8">
                        <span className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                            {service}
                        </span>
                        <span className="ml-8 w-2 h-2 rounded-full bg-blue-300"></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
