"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    Mail,
    MessageCircle,
    Send,
    MessageSquareText 
} from "lucide-react";

const FloatingContact = () => {
    const [open, setOpen] = useState(false);

    const actions = [
        {
            icon: <MessageCircle size={20} />,
            bg: "bg-green-500",
            label: "WhatsApp",
            link: "https://wa.me/254742746940"
        },
        {
            icon: <Phone size={20} />,
            bg: "bg-blue-500",
            label: "Call",
            link: "tel:+254742746940"
        },
        {
            icon: <Mail size={20} />,
            bg: "bg-red-500",
            label: "Email",
            link: "mailto:mainajamed682@gmail.com?subject=Jameskabs%20electrical%20Installation%20Enquirement"
        },
        {
            icon: <Send size={20} />,
            bg: "bg-sky-500",
            label: "Telegram",
            link: "https://t.me/Jameskabs254"
        }
    ];

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute bottom-16 right-0 flex flex-col gap-3">
                        {actions.map((action, i) => (
                            <motion.a
                                key={i}
                                href={action.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ x: 40, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 40, opacity: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${action.bg}`}
                                title={action.label}>
                                {action.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl">
                <motion.div>
                    <MessageSquareText size={26} />
                </motion.div>
            </motion.button>
        </div>
    );
};

export default FloatingContact;
