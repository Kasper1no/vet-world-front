"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BannerSection from "@/сomponents/Section/BannerSection/page";
import PetNamingSection from "@/сomponents/Section/PetNamingSection/page";
import { getCookie } from "@/utils/cookieUtil";

export default function PetNaming() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = await getCookie("accessToken");
            console.log("token: " + token);
            const isLoggedIn = !!token; 
            console.log("isAuthenticated: " + isLoggedIn);
            setIsAuthenticated(isLoggedIn);

            if (!isLoggedIn) {
                router.push("/login");
            }
        };
    
        checkAuthentication();
    }, [router]);

    return (
        <>
            {isAuthenticated ? (
                <>
                    <BannerSection
                        backgroundImage={"/images/1920x800pets2.jpg"}
                        title="Генератор Клички"
                    />
                    <PetNamingSection />
                </>
            ) : (
                <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>
                        <h1>Перенаправлення...</h1>
                    </div>
                </div>
            )}
        </>
    );
};