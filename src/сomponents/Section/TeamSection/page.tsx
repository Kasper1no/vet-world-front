import "./style.css";

interface TeamSectionProps {
    backgroundColor?: string;
  }
  
  const TeamSection: React.FC<TeamSectionProps> = ({ backgroundColor = '' }) => {
    return (
        <section className="team-area" style={{background: backgroundColor}}>
            <div className="container">
                <div className="sec-title text-center">
                    <h2>Наша Команда</h2>
                </div>
                <div className="row">

                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-team-member wow animated fadeInUp" data-wow-delay="0.1s">
                            <div className="img-holder">
                                <div className="round-top"></div>
                                <div className="round-bottom"></div>
                                <div className="inner">
                                    <img src="images/founder.jpg" alt="Awesome Image" />
                                    <div className="overlay-style-one bg1"></div>
                                </div>
                            </div>
                            <div className="title-holder text-center">
                                <h3><a href="#">Олександр Ткачук</a></h3>
                                <h5>Засновник</h5>
                                <div className="team-social-link">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fa fa-facebook custom-icon" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="tw" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-team-member wow animated fadeInUp" data-wow-delay="0.3s">
                            <div className="img-holder">
                                <div className="round-top"></div>
                                <div className="round-bottom"></div>
                                <div className="inner">
                                    <img src="images/ceo.jpg" alt="Awesome Image" />
                                    <div className="overlay-style-one bg2"></div>
                                </div>
                            </div>
                            <div className="title-holder text-center">
                                <h3><a href="#">Мирослава Коваленко</a></h3>
                                <h5>Генеральний директор</h5>
                                <div className="team-social-link">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="tw" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-team-member wow animated fadeInUp" data-wow-delay="0.5s">
                            <div className="img-holder">
                                <div className="round-top"></div>
                                <div className="round-bottom"></div>
                                <div className="inner">
                                    <img src="images/groomer.jpg"  alt="Awesome Image" />
                                    <div className="overlay-style-one bg2"></div>
                                </div>
                            </div>
                            <div className="title-holder text-center">
                                <h3><a href="#">Галина Бровченко</a></h3>
                                <h5>Грумер</h5>
                                <div className="team-social-link">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="tw" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-team-member wow animated fadeInUp" data-wow-delay="0.7s">
                            <div className="img-holder">
                                <div className="round-top"></div>
                                <div className="round-bottom"></div>
                                <div className="inner">
                                    <img src="images/vet.jpg" alt="Awesome Image" />
                                    <div className="overlay-style-one bg2"></div>
                                </div>
                            </div>
                            <div className="title-holder text-center">
                                <h3><a href="#">Ярослав Яременко</a></h3>
                                <h5>Ветеринар</h5>
                                <div className="team-social-link">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="tw" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TeamSection;