import "../style.css"

const MainAboutSection = () => {
    return (
        <section className="about-style1-area">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="about-style1-image-box">
                            <div className="main-image">
                                <img src="/images/happy_owner2.jpg" alt="Awesome Image" />
                            </div>
                            <div className="about-experience-box">
                                <div className="count-box">
                                    <h2>
                                        <span className="timer" data-from="1" data-to="20" data-speed="5000" data-refresh-interval="50">20</span>
                                        <span className="icon-plus plus-icon"></span>
                                    </h2>
                                    <h5>Років досвіду</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="about-style1-content-box">
                            <div className="sec-title">
                                <h5>//<span>Про Нас</span>//</h5>
                                <h2>Краща Агенція <br /> Для Вашого Улюбленця</h2>
                            </div>
                            <div className="inner-content">
                                <div className="text">
                                    <p>Наша ветеринарна клініка — це місце, де турбота про здоров’я вашого улюбленця є пріоритетом. Ми пропонуємо професійний підхід, сучасне обладнання та щиру любов до тварин.</p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="title">
                                                    <h5>Сертифіковані Грумери</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="title">
                                                    <h5>Любов до тварин</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="title">
                                                    <h5>20+ років досвіду</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="title">
                                                    <h5>Сучасне обладнання</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MainAboutSection