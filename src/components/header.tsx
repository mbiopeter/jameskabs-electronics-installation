'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Mail, 
    Phone, 
    Facebook,
    Twitter, 
    Linkedin, 
    Instagram,
    ChevronDown, 
    ArrowRight, 
    Menu, 
    X,
} from 'lucide-react';

const socialLinks = [
    {
        icon: Facebook,
        href: "https://facebook.com/yourusername",
        label: "Facebook",
    },
    {
        icon: Twitter,
        href: "https://twitter.com/yourusername",
        label: "Twitter",
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/yourusername",
        label: "LinkedIn",
    },
    {
        icon: Instagram,
        href: "https://instagram.com/yourusername",
        label: "Instagram",
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContact, setShowContact] = useState(true);
    const lastScrollRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScrollRef.current) {
                setShowContact(false);
            } else {
                setShowContact(true);
            }
            lastScrollRef.current = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const phoneNumber = "254742746940";

    const quoteMessage =
        "jameskabs | QUOTATION REQUEST Hello, I would like to request a quotation for your services.";

    const whatsappQuoteLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        quoteMessage
    )}`;

    return (
        <>
            {/* Contact Bar */}
            <div className={`w-full bg-[#1a1d2b] text-white text-xs md:text-sm transition-transform duration-300 ${showContact ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="mx-auto flex flex-col md:flex-row justify-between items-stretch">
                    <div className="flex items-center space-x-4 md:space-x-8 py-3 px-4 md:px-10">
                        <a href="mailto:info@example.com" className="flex items-center hover:text-[#ad1559] transition-colors group">
                            <Mail className="w-4 h-4 mr-2 text-[#ad1559] group-hover:text-white transition-colors" />
                            mainajames@gmail.com
                        </a>
                        <a href={`tel:+${phoneNumber}`} className="flex items-center hover:text-[#ad1559] transition-colors group">
                            <Phone className="w-4 h-4 mr-2 text-[#ad1559] group-hover:text-white transition-colors" />
                            +254-742-746-940
                        </a>
                    </div>

                    <div className="bg-blue-600 hidden md:flex items-center px-6 md:px-10 py-2 md:py-0 md:rounded-b-lg">
                        <span className="font-bold mr-4 hidden sm:inline">Follow Me:</span>
                        <div className="flex space-x-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-[#ad1559] hover:text-white transition-all shadow-md">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white sticky top-0 z-50 shadow">
                <div className="w-full flex justify-between items-center h-20 md:h-24 px-0">
                    <Link href="/" className="flex group -ml-12 md:ml-20">
                        <Image 
                            src="/logo.png"  
                            alt="JamesKabs"
                            width={350}
                            height={180}
                            className="object-contain"/>
                    </Link>

                    <nav className="hidden xl:flex items-center space-x-10">
                        {['Home', 'About', 'Services', 'Gallery', 'Faqs', 'Testimonials'].map((item) => (
                            <Link 
                                key={item} 
                                href={item.toLowerCase() === 'home' ? '#' : `/#${item.toLowerCase()}`}
                                className="text-[#1a1d2b] text-[15px] font-extrabold hover:text-blue-600 transition-colors flex items-center gap-1">
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center md:mr-80 h-full">
                        <a
                            href={whatsappQuoteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center bg-blue-600 hover:bg-[#0426ba] text-white px-8 md:px-10 h-full font-bold transition-all group">
                            Get A Quote
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="bg-blue-600 text-white px-5 h-full xl:hidden flex items-center border-l border-[#0426ba]"
                            aria-label="Toggle Menu">
                            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
                    <div className="bg-white px-6 py-6 space-y-4 shadow-inner">
                        {['Home', 'About', 'Services', 'Pages', 'Blog', 'Contact'].map((item) => (
                            <Link 
                                key={item} 
                                href={item.toLowerCase() === 'home' ? '#' : `/#${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex justify-between items-center text-[#1a1d2b] font-bold text-lg hover:text-blue-600">
                                    {item}
                                    {['Home', 'Services', 'Pages', 'Blog'].includes(item) && <ChevronDown size={18} />}
                            </Link>
                        ))}
                        <button className="w-full bg-blue-600 text-white py-4 font-bold rounded mt-4 ">
                            <a
                                href={whatsappQuoteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex justify-center items-center gap-2'>
                                Get A Quote
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
