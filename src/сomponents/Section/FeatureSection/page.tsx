
import React from 'react';
import './style.css';

const FeatureSection = () => {
    return (
        <section className="featured-area">
            <div className="container">
                <div className="row">

                    <div className="col-xl-4">
                        <div className="single-featured-box">
                            <div className="inner">
                                <div className="icon">
                                    <span className="icon-dog"></span>
                                </div>
                                <div className="text">
                                    <h3>Турбота про здоров'я</h3>
                                    <p>Комплексний підхід до діагностики, лікування та профілактики для вашого улюбленця.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="single-featured-box">
                            <div className="inner">
                                <div className="icon">
                                    <span className="icon-dog clr3"></span>
                                </div>
                                <div className="text">
                                    <h3>Сучасне обладнання</h3>
                                    <p>Використовуємо передові технології для обстежень, забезпечуючи комфорт вашого улюбленця.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="single-featured-box">
                            <div className="inner">
                                <div className="icon">
                                    <span className="icon-dog "></span>
                                </div>
                                <div className="text">
                                    <h3>Любов і професіоналізм</h3>
                                    <p>Поєднуємо досвід і щире ставлення до тваринок, щоб ваші улюбленці почувалися як вдома.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeatureSection