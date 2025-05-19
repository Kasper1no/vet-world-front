import Link from "next/link";
import "../style.css"

const AboutAreaSection = () => {
    return (
        <section className="about-style2-area">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6">
                        <div className="about-style1-content-box style1instyle2">
                            <div className="sec-title">
                                <h5>//<span>Про нас</span>//</h5>
                                <h2>Кращий сервіс для<br /> вашого улюбленця</h2>
                            </div>
                            <div className="inner-content">
                                <div className="text">
                                    <p>Ми спеціалізуємося на наданні якісних послуг для вашого улюбленця. Наша команда дбає про комфорт, здоров'я та щастя кожного чотирилапого клієнта, гарантуючи індивідуальний підхід і найвищі стандарти обслуговування.</p>
                                </div>
                                <div className="button-box">
                                    <Link className="btn-one" href="/contact"><span className="txt">Записатися</span></Link>
                                    <a className="btn-one style2 marleft" href="tel:123456789">
                                        <i className="fa fa-phone" aria-hidden="true"></i><span className="txt">987-876-876-87</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="main-image">
                            <img src="/images/veterinary.jpg" style={{ borderRadius: "30px", objectFit: "cover" }} alt="Awesome Image" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutAreaSection;