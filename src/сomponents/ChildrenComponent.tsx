"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const authPages = ["/register", "/login", "/reset-password", "/forgot"];
    const [isAuthPage, setIsAuthPage] = useState(authPages.includes(pathname));

    useEffect(() => {
        setIsAuthPage(authPages.includes(pathname));
    }, [pathname]);

    if (isAuthPage) {
        return (
            <div className="bg-light d-flex justify-content-center align-items-center vh-100 service-style1-area">
                {children}
            </div>
        );
    }

    return <div className="boxed_wrapper">
        <Header />
        {children}
        <Footer />
    </div>;
}
