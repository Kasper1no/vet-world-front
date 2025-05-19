"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderTop from "./HeaderTop";
import HeaderNav from "./HeaderNav";
import HeaderAuthButtons from "./HeaderAuthButtons";
import Logo from "./Logo";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Головна" },
    { href: "/about", label: "Про Нас"},
    { href: "#", label: "Послуги", dropdown: [
      { href: "/services/pet-grooming", label: "Грумінг" },
      { href: "/services/dog-walking", label: "Вигулювання" },
      { href: "/services/veterinary-service", label: "Ветеринарні Послуги" },
      { href: "/services/pet-naming", label: "Генератор клички" },
    ]  },
    { href: "/contact", label: "Контакти" }
  ];

  return (
    <header className={`main-header header-style-one`}>
      {!isScrolled && (
        <>
          <HeaderTop />
          <div className="header">
            <div className="outer-container">
              <div className="outer-box clearfix">
                <div className="header-left clearfix pull-left">
                  <Logo />
                  <div className="nav-outer clearfix">
                    <HeaderNav navLinks={navLinks}/>
                  </div>
                </div>
                <div className="header-right pull-right clearfix">
                {!isMobile && <HeaderAuthButtons />}
                  {isMobile && (
                    <div
                      className={`mobile-nav-toggler ${isMenuOpen ? "open" : ""}`}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <div className="inner">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </div>
                    </div>
                  )}
                    
                </div>

              </div>
            </div>
          </div>
        </>
      )}
      {isScrolled && (
        <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              <div className="logo float-start">
                <Logo />
              </div>
              <div className="right-col float-end">
                <nav className="main-menu clearfix">
                  <HeaderNav navLinks={navLinks}/>
                  <HeaderAuthButtons />
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <HeaderBurgerMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navLinks={navLinks}
          pathname={pathname}
        />
      )}
    </header>
  );
};

export default Header;
