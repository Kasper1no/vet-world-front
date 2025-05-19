import "./style.css"

const AdvantagesSection = () => {
    return (
        <section className="features-area">
            <div className="container">
                <div className="row g-4">

                    <div className="col-xl-6">
                        <div className="features-content-box">
                            <div className="sec-title">
                                <h5>//<span>Особливості</span>//</h5>
                                <h2>Ключові Переваги</h2>
                            </div>
                            <div className="inner-content">
                                <div className="text">
                                    <p>Наша клініка забезпечує високий рівень послуг і турботи, щоб ваші улюбленці завжди були здоровими та щасливими.</p>
                                </div>

                                <ul className="top">
                                    <li>
                                        <div className="inner">
                                            <div className="icon">
                                                <span className="icon-vet"></span>
                                            </div>
                                            <div className="title">
                                                <h3>Догляд за улюбленцями</h3>
                                                <p>Професійний підхід до здоров'я та комфорту.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="icon">
                                                <span className="icon-injection"></span>
                                            </div>
                                            <div className="title">
                                                <h3>Ветеринарні препарати</h3>
                                                <p>Ефективність і якість для улюбленця.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="bottom">
                                    <li>
                                        <div className="inner">
                                            <div className="icon">
                                                <span className="icon-veterinary"></span>
                                            </div>
                                            <div className="title">
                                                <h3>Грумінг</h3>
                                                <p>Догляд для краси та здоров’я ваших тварин.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="icon">
                                                <span className="icon-vaccine"></span>
                                            </div>
                                            <div className="title">
                                                <h3>Щомісячний догляд</h3>
                                                <p>Регулярна турбота для щасливого життя.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="working-hours-box">
                                <img src="/images/happy_owner2.jpg" style={{ borderRadius: "30px", height: "100%", objectFit: "cover" }} alt="Awesome Image" />
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AdvantagesSection;