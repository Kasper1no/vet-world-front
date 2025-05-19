"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./style.css";

type ServiceDetailProps = {
    title: string;
    subtitle: string;
    mainImage: string;
    mainHeading: string;
    mainText1: string;
    mainText2: string;
    additionalImages: string[];
    bottomText: string;
};

const ServiceDetailSection: React.FC<ServiceDetailProps> = (serviceData: ServiceDetailProps) => {

    const activeCategory = usePathname().split("/").pop();

    const categories = [
        { id: "pet-grooming", name: "Грумінг" },
        { id: "dog-walking", name: "Вигулювання" },
        { id: "veterinary-service", name: "Ветеринарні послуги" },
        { id: "pet-naming", name: "Генератор Клички" }
    ];

    return (
        <section className="service-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="service-details-content">
                            <div className="service-details-main-image">
                                <img src={serviceData.mainImage} alt="" />
                                <div className="overlay-box">
                                    <div className="icon">
                                        <span className="icon-vet"></span>
                                    </div>
                                    <div className="title">
                                        <h3>{serviceData.title}</h3>
                                        <p>{serviceData.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-details-text-box">
                                <h2>{serviceData.mainHeading}</h2>
                                <p>{serviceData.mainText1}</p>
                                <p>{serviceData.mainText2}</p>
                            </div>
                            <div className="service-details-bottom-image">
                                <div className="row">
                                    {serviceData.additionalImages.map((image, index) => (
                                        <div className="col-xl-6" key={index}>
                                            <div className="single-image-nox">
                                                <img src={image} alt={`${serviceData.mainHeading} ${index + 1}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="service-details-bottom-text">
                                <p>{serviceData.bottomText}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4">
                        <div className="service-details-sidebar">
                            <div className="service-details-categories">
                                <div className="title">
                                    <h3>Категорії Послуг</h3>
                                </div>
                                <div className="categories-box">
                                    <ul className="categories clearfix">
                                        {categories.map((category) => (
                                            <li key={category.id} className={activeCategory === category.id ? "active" : ""}>
                                                <a href={`/services/${category.id}`}>{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="callto-action-box text-center">
                                <p>Запишіться Вже Зараз</p>
                                <h3>Ощасливіть Вашого<br /> Улюбленця</h3>
                                <a className="btn-one" href="/contact"><span className="txt">Записатися</span></a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServiceDetailSection;