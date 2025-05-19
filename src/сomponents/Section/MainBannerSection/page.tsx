"use client";

import React from "react";
import './style.css';


const MainBannerSection = () => {
    return (
        <section
            className="main-banner"
            style={{ backgroundImage: `url(/images/1920x800pets.jpg)` }}
        >
            <div className="container">
                <div className="content">
                    <h5>//<span>Насоложуйтесь вихідними</span>//</h5>
                    <h2>Ми Зробимо<br /> Їх Щасливими</h2>
                </div>
            </div>
        </section>
    );
};

export default MainBannerSection;