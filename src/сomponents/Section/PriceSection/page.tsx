import "./style.css";

const PriceSection = () => {
    return (
        <section className="priceing-plan-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sec-title">
                            <h5>//<span>Прайси</span>//</h5>
                            <h2>Тарифні пакети</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="priceing-plan-content">
                            <div className="priceing-plan-tabs tabs-box">

                                <div className="tabs-content">

                                    <div className="tab active-tab" id="yearly">
                                        <div className="priceing-plan-tab-content">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="single-priceing-plan-box">
                                                        <div className="top">
                                                            <div className="left pull-left">
                                                                <p>Базовий</p>
                                                                <h2>Грумінг</h2>
                                                            </div>
                                                            <div className="right pull-left">
                                                                <h2><span>₴</span>600</h2>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>Професійний догляд<span className="icon-tick"></span></li>
                                                            <li>Стрижка та укладка<span className="icon-tick"></span></li>
                                                            <li>Купання та обробка шерсті<span className="icon-tick"></span></li>
                                                            <li>Гігієнічні процедури<span className="icon-tick"></span></li>
                                                            <li className="deactive">Харчування<span className="icon-tick deactive"></span></li>
                                                            <li className="deactive">Діагностика<span className="icon-tick deactive"></span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="single-priceing-plan-box style2">
                                                        <div className="top">
                                                            <div className="left pull-left">
                                                                <p>Стандарт</p>
                                                                <h2>Вигул</h2>
                                                            </div>
                                                            <div className="right pull-right">
                                                                <h2><span>₴</span>500</h2>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>Індивідуальний підхід<span className="icon-tick"></span></li>
                                                            <li>Активні прогулянки<span className="icon-tick"></span></li>
                                                            <li>Догляд під час вигулу<span className="icon-tick"></span></li>
                                                            <li>Харчування<span className="icon-tick"></span></li>
                                                            <li className="deactive">Грумінг<span className="icon-tick deactive"></span></li>
                                                            <li className="deactive">Діагностика<span className="icon-tick deactive"></span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-4 col-lg-12 col-md-12">
                                                    <div className="single-priceing-plan-box style3">
                                                        <div className="top">
                                                            <div className="left pull-left">
                                                                <p>Преміум</p>
                                                                <h2>Повний</h2>
                                                            </div>
                                                            <div className="right pull-right">
                                                                <h2><span>₴</span>1380</h2>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>Грумінг<span className="icon-tick"></span></li>
                                                            <li>СПА-процедури<span className="icon-tick"></span></li>
                                                            <li>Вигулювання<span className="icon-tick"></span></li>
                                                            <li>Діагностика<span className="icon-tick"></span></li>
                                                            <li>Вправи 2x<span className="icon-tick"></span></li>
                                                            <li>Харчування<span className="icon-tick"></span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
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

export default PriceSection;