import Link from "next/link";
import HeaderAuthButtons from "./HeaderAuthButtons";
import { X } from "lucide-react";


interface HeaderBurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: { href: string; label: string; dropdown?: { href: string; label: string }[] }[];
  pathname: string;
}

const HeaderBurgerMenu = ({ isMenuOpen, setIsMenuOpen, navLinks, pathname }: HeaderBurgerMenuProps) => {
  return (
    <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)}></div>
      <div className="close-btn" onClick={() => setIsMenuOpen(false)}>
        <span className="icon">
          <X size={24} />
        </span>
      </div>

      <nav className="menu-box">
        <div className="nav-logo">
          <a href="/"><img src="/images/vet_logo_white.png" alt="Logo" title="" />VetWorld</a>
        </div>
        <div className="menu-outer main-menu">
          <ul className="navigation clearfix">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`${pathname === link.href ? "current" : ""} ${link.dropdown?.length ? "dropdown" : ""}`.trim()}
              >
                <Link href={link.href}>{link.label}</Link>
                {link.dropdown && (
                  <ul>
                    {link.dropdown.map((subLink) => (
                      <li key={subLink.href}>
                        <Link href={subLink.href}>{subLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <HeaderAuthButtons />
        </div>
        <div className="social-links">
                <ul className="clearfix">
                    <li><a href="#"><span className="fab fa fa-facebook-square"></span></a></li>
                    <li><a href="#"><span className="fab fa fa-twitter-square"></span></a></li>
                    <li><a href="#"><span className="fab fa fa-pinterest-square"></span></a></li>
                    <li><a href="#"><span className="fab fa fa-google-plus-square"></span></a></li>
                    <li><a href="#"><span className="fab fa fa-youtube-square"></span></a></li>
                </ul>
            </div>
      </nav>
    </div>
  );
};

export default HeaderBurgerMenu;
