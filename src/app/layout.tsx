import "./global.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JamesKabs Electrical installation",
    description: "Electrical installation",
    icons: {
        icon: "/iconlogo.png",
        apple: "/iconlogo.png",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="flex min-h-screen flex-col bg-white">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}