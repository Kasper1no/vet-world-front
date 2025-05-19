import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterAbout from "./FooterAbout";
import './Footer.css' 

const Footer = () => {
    return (
        <footer className="footer-style2-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <FooterLogo />
                    </div>
                </div>
            </div>

            <div className="footer-style2">
                <div className="container">
                    <div className="row">
                        <FooterLinks />
                        <FooterAbout />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
