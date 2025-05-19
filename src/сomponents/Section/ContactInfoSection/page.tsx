import "./style.css";

const ContactInfoSection = () => {
    return (
        <section className="contact-info-area style3">
            <div className="container">
                <div className="row">

                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp">
                        <div className="single-contact-info-box">
                            <span className="icon-envelope"></span>
                            <div className="title">
                                <h3>Електоронна Пошта</h3>
                            </div>
                            <ul>
                                <li><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                                <li><a href="mailto:jobs@webmail.com">jobs@webmail.com</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="single-contact-info-box">
                            <span className="icon-call"></span>
                            <div className="title">
                                <h3>Номер Телефону</h3>
                            </div>
                            <ul>
                                <li><a href="tel:123456789">244-344-786-999-6</a></li>
                                <li><a href="tel:123456789">987-675-987-908</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="single-contact-info-box">
                            <span className="icon-pin-2"></span>
                            <div className="title">
                                <h3>Адреса</h3>
                            </div>
                            <p>13/A, Jhumando City<br /> New York, NYC</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="single-contact-info-box">
                            <span className=" icon-mail-1"></span>
                            <div className="title">
                                <h3>Соціальні мережі</h3>
                            </div>
                            <ul>
                                <li><a href="https://www.facebook.com/webexample">fb.com/webexample</a></li>
                                <li><a href="https://www.facebook.com/webexample">tw.com/webexample</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactInfoSection;