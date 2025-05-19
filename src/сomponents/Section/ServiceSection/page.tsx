import "./style.css";

const ServiceSection = () => {
    return (
        <section className="service-style1-area">
            <div className="shape1">
                <img src="/images/shape-1.png" alt="" />
            </div>
            <div className="shape2">
                <img src="/images/shape-2.png" alt="" />
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Наші Послуги</h2>
                </div>
                <div className="row">

                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="single-service-style1">
                            <div className="img-holder">
                                <div className="inner">
                                    <img src="/images/grooming2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="text-holder">
                                <h3><a href="/services/pet-grooming">Грумінг</a></h3>
                                <p>Професійний догляд, щоб ваш улюбленець виглядав і почувався бездоганно. </p>
                                <div className="button">
                                    <a href="/services/pet-grooming">Дізнатись більше</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="single-service-style1">
                            <div className="img-holder">
                                <div className="inner">
                                    <img src="/images/setting1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="text-holder">
                                <h3><a href="/services/dog-walking">Вигулювання</a></h3>
                                <p>Активний відпочинок і турбота про вашого чотирилапого друга, навіть коли ви зайняті. </p>
                                <div className="button">
                                    <a href="/services/dog-walking">Дізнатись більше</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="single-service-style1">
                            <div className="img-holder">
                                <div className="inner">
                                    <img src="/images/veterinary.jpg" alt="" />
                                </div>
                            </div>
                            <div className="text-holder">
                                <h3><a href="/services/veterinary-service">Ветеринарні послуги</a></h3>
                                <p>Широкий спектр послуг для здоров', комфорту та хорошого самопчуття вашого улюбленця. </p>
                                <div className="button">
                                    <a href="/services/veterinary-service">Дізнатись більше</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ServiceSection;