import Link from "next/link";

const FooterLinks = () => {
    return (
        <>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div className="single-footer-widget marbtm">
            <div className="title">
                <h3>Наші Сторінки</h3>
            </div>
            <ul className="widget-link1">
                <li><Link href="/about">Про Нас</Link></li>
                <li><Link href="/contact">Зв'язатися З Нами</Link></li>
                <li><Link href="/services/pet-grooming">Послуги Грумінгу</Link></li>
                <li><Link href="/services/pet-naming">Генератор Клички</Link></li>
            </ul>
        </div>
    </div>

    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div className="single-footer-widget marbtm">
            <div className="title">
                <h3>Профіль</h3>
            </div>
            <ul className="widget-link2">
                <li><Link href="/profile">Мій Профіль</Link></li>
                <li><Link href="/register">Реєстрація</Link></li>
                <li><Link href="/login">Увійти</Link></li>
            </ul>
        </div>
    </div>
</>
    );
};

export default FooterLinks;
