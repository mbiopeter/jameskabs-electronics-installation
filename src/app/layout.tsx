"use client";

import "./global.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <title>JamesKabs Electrical installation</title>
                <link rel="icon" href="/iconlogo.png" />
                <link rel="apple-touch-icon" href="/iconlogo.png" />
                <meta name="description" content="Electrical installation" />
            </head>

            <body className="flex min-h-screen flex-col bg-white">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
