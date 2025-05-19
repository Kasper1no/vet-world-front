import { usePathname } from "next/navigation";

const HeaderTop = () => {
  const pathname = usePathname();

    return (
      <div className="header-top">
        <div className="outer-container">
          <div className="outer-box clearfix">
            <div className="header-top-left pull-left">
              <div className={`header-contact-info ${pathname === "/profile" ? "dark" : ""}`}>
                <ul>
                  <li>
                    <span className="icon-envelope"></span>
                    <a href="mailto:info@website.com">info@website.com</a>
                  </li>
                  <li>
                    <span className="icon-phone-call"></span>
                    <a href="tel:123456789">+098987 876 767</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right pull-right">
              <div className={`header-social-link ${pathname === "/profile" ? "dark" : ""}`}>
                <ul>
                  {["facebook", "twitter", "linkedin", "behance", "pinterest"].map((social) => (
                    <li key={social}>
                      <a href="#">
                        <i className={`fa fa-${social}`} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeaderTop;
  