import Link from "next/link";

const FooterLogo = () => {
    return (
        <div className="footer-top-content">
            <div className="footer-logo">
                <div className="logo">
                    <Link href="/">
                        <img src="/images/vet_logo_white.png" alt="VetWorld" />
                        VetWorld
                    </Link>
                </div>
            </div>
            <div className="footer-social-info">
                <a href="#" className="fb-clr"><i className="fa fa-facebook"></i></a>
                <a href="#" className="tw-clr"><i className="fa fa-twitter"></i></a>
                <a href="#" className="you-clr"><i className="fa fa-youtube"></i></a>
                <a href="#" className="sk-clr"><i className="fa fa-skype"></i></a>
            </div>
        </div>
    );
};

export default FooterLogo;
