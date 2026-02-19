"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const sections = [
    { id: "acceptance", label: "Acceptance & Scope" },
    { id: "services", label: "Service Description" },
    { id: "client", label: "Client Obligations" },
    { id: "payments", label: "Payments & Fees" },
    { id: "safety", label: "Safety & Compliance" },
    { id: "liability", label: "Liability & Warranty" },
    { id: "termination", label: "Termination & Changes" },
];

const Page = () => {
    const [activeSection, setActiveSection] = useState<string>("acceptance");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
            }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section className="relative bg-[#f6f9fc] overflow-hidden">

            {/* Hero */}
            <div className="w-full px-6 pt-28 pb-24">
                <div className="max-w-7xl mx-auto">
                    <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
                        Legal & Compliance
                    </span>
                    <h1 className="mt-5 text-2xl sm:text-5xl lg:text-4xl font-extrabold text-slate-900">
                        Terms of Service
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-7xl">
                        These Terms of Service establish the legal framework governing the use of Jameskabs’ electrical and electronic installation services. They define the rights, responsibilities, and obligations of both Jameskabs and its clients, set expectations for service delivery, safety compliance, payments, and liability, and ensure that all projects are executed in accordance with industry standards and applicable regulations.
                    </p>
                </div>
            </div>

            <div className="w-full px-6 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32 bg-white  shadow-sm p-8">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">
                                On this page
                            </h3>

                            <ul className="space-y-3">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-4 py-2  text-sm transition
                                                ${
                                                    activeSection === section.id
                                                        ? "bg-blue-600 text-white font-semibold"
                                                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                                }`}>
                                            {section.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t text-xs text-gray-500">
                                Last updated: {new Date().getFullYear()}
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-6">

                        <section id="acceptance" className="scroll-mt-32 bg-white relative shadow-sm p-10">
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Acceptance & Scope
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                By engaging Jameskabs, you acknowledge that you have read, understood,
                                and agreed to these Terms of Service. These terms apply to all services,
                                projects, and consultations unless otherwise agreed in writing.
                            </p>
                        </section>

                        <section id="services" className="scroll-mt-32 bg-white relative shadow-sm p-10">
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Service Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Jameskabs provides electrical wiring, panel installation, electronic
                                system integration, troubleshooting, upgrades, and maintenance in
                                compliance with safety and industry standards.
                            </p>
                        </section>

                        <section id="client" className="scroll-mt-32 bg-white relative shadow-sm p-10">
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Client Obligations
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Clients must provide accurate information, safe access to the worksite,
                                and ensure that working conditions meet basic safety requirements.
                                Delays caused by non-compliance may affect cost and timelines.
                            </p>
                        </section>

                        <section id="payments" className="scroll-mt-32 bg-white relative shadow-sm p-10">
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Payments & Fees
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All fees are agreed upon prior to commencement. Payments must be made
                                according to the agreed schedule. Failure to pay may result in service
                                suspension or termination.
                            </p>
                        </section>

                        <section id="safety" className="scroll-mt-32 bg-white relative shadow-sm p-10">
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Safety & Compliance
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Safety procedures must not be obstructed. Any post-installation
                                modifications should only be performed by qualified professionals.
                            </p>
                        </section>

                        <section id="liability" className="scroll-mt-32 bg-white relative shadow-sm p-10">
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Liability & Warranty
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Jameskabs provides limited warranty coverage as outlined in service
                                agreements. Liability does not extend to misuse, unauthorized changes,
                                or external damage.
                            </p>
                        </section>

                        <section id="termination" className="scroll-mt-32 bg-white relative shadow-sm p-10">
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] bg-size-[16px_16px]" />
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Termination & Changes
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to terminate services if terms are violated or
                                unsafe conditions are identified. These terms may be updated at any
                                time, with continued use indicating acceptance.
                            </p>
                        </section>

                    <div className="absolute top-0 z-1 right-0">
                        <Image
                            src="/right-shape.png"
                            alt="Electrical Technician"
                            width={600}
                            height={1000}
                            className="object-cover w-full h-auto"
                        />
                    </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
