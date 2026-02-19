"use client";

import Image from "next/image";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
            {/* Top Accent Line */}
            <div className="h-1 w-full bg-linear-to-r from-blue-500 to-blue-700" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand / About */}
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/logo.png"
                                alt="Company Logo"
                                width={150}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We deliver reliable electrical, solar, and energy
                            solutions for residential, commercial, and
                            industrial projects — built for performance and
                            long-term safety.
                        </p>

                        <div className="flex items-center gap-4">
                            <a className="hover:text-blue-500 transition">
                                <Facebook size={18} />
                            </a>
                            <a className="hover:text-blue-500 transition">
                                <Twitter size={18} />
                            </a>
                            <a className="hover:text-blue-500 transition">
                                <Linkedin size={18} />
                            </a>
                            <a className="hover:text-blue-500 transition">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Electrical Installation",
                                "Solar Panel Systems",
                                "EV Charging Stations",
                                "Power Backup Solutions",
                                "Maintenance & Support"
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#services"
                                        className="hover:text-blue-500 transition"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "About Us",
                                "Projects",
                                "FAQs",
                                "Careers",
                                "Contact"
                            ].map((item, index) => (
                                <li key={index}>
                                    <p className="hover:text-blue-500 transition">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="text-blue-500 mt-1"
                                />
                                <span>
                                    Ruiru, Kiambu County, Kenya
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500" />
                                <span>+25474274694</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500" />
                                <span>mainajamed682@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>
                        JamesKabs©{new Date().getFullYear()}. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="/terms" className="hover:text-blue-500 transition">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
