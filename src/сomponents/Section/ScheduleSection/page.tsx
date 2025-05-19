import "./style.css";

const ScheduleSection = () => {
    return (
        <section className="features-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 mx-auto">
                        <div className="working-hours-box" style={{ background: "#aaaaaa" }}>
                            <div className="inner-content">
                                <div className="title">
                                    <h3>Робочі години</h3>
                                    <p>Ми завжди поруч, коли ваш улюбленець потребує турботи.</p>
                                </div>
                                <ul>
                                    <li><span className="left">Понеділок</span> <span className="right">08:00 - 22:00</span></li>
                                    <li><span className="left">Вівторок</span> <span className="right">08:00 - 22:00</span></li>
                                    <li><span className="left">Середа</span> <span className="right">08:00 - 22:00</span></li>
                                    <li><span className="left">Четвер</span> <span className="right">08:00 - 22:00</span></li>
                                    <li><span className="left">П’ятниця</span> <span className="right">08:00 - 22:00</span></li>
                                    <li><span className="left">Субота</span> <span className="right">08:00 - 22:00</span></li>
                                    <li><span className="left">Неділя</span> <span className="right holiday">Вихідний</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;