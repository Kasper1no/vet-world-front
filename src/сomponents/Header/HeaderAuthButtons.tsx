"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getCookie } from "@/utils/cookieUtil";
import { refreshToken } from "@/utils/tokenUtil";

const HeaderAuthButtons = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            setIsLoading(true); 
            var token = await getCookie("accessToken");
            if (!token) {
                await refreshToken();
            }
            token = await getCookie("accessToken");
            const isLoggedIn = !!token;
            
            setIsAuthenticated(isLoggedIn);
            setIsLoading(false); 
        };
    
        checkAuthentication();
    }, []);

    if (isLoading) {
        return null; 
    }
    

    return (
        <div className="btns-box">
            {isAuthenticated ? (
                <div className="button">
                    <Link className="btn-one" href="/profile">
                        <span className="txt">
                            <span className="icon-user txt"></span> Profile
                        </span>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="button">
                        <Link className="btn-one" href="/login">
                            <span className="txt">Увійти</span>
                        </Link>
                    </div>
                    <div className="button">
                        <Link className="btn-one style2" href="/register">
                            <span className="txt">Реєстрація</span>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default HeaderAuthButtons;
