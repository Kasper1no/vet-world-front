"use client";

import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeedbackSection = () => {
    return (
        <section className="testimonial-style1-area">
            <div className="layer-outer" style={{ backgroundImage: `url(/images/map.png)` }}></div>
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Відгуки Клієнтів</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 10000 }}
                            navigation={true}
                            pagination={{ clickable: true }}
                            className="testimonial-carousel"
                        >
                            <SwiperSlide>
                                <div className="single-testimonial-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <img src="images/feedback2.jpg" alt="Awesome Image" />
                                    </div>
                                    <div className="text-holder">
                                        <h2>Софія Шевченко</h2>
                                        <span>Перше відвідування</span>
                                        <div className="text-box">
                                            <p>"Я щиро вдячна за професійний підхід команди та любов до тварин! Вони дійсно піклуються про комфорт і здоров'я наших улюбленців. Завдяки їхнім послугам мій чотирилапий друг щасливий і доглянутий."</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-testimonial-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                    <div className="img-holder">
                                        <img src="images/feedback1.jpg" alt="Awesome Image" />
                                    </div>
                                    <div className="text-holder">
                                        <h2>Тарас Лисенко</h2>
                                        <span>Постійний відвідувач</span>
                                        <div className="text-box">
                                            <p>"Я регулярно користуюся послугами цього сервісу, і кожного разу вражений професіоналізмом і турботою персоналу. Тут завжди знають, як зробити мого улюбленця щасливим та доглянутим. Дякую за вашу роботу!"</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
