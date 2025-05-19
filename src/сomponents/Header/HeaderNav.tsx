"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNav = ({ navLinks }: { navLinks: { href: string; label: string; dropdown?: { href: string; label: string }[] }[] }) => {
  const pathname = usePathname();
  return (
    <nav className="main-menu style1 navbar-expand-md navbar-light">
      <div className="collapse navbar-collapse show clearfix">
        <ul className="navigation clearfix">
          {navLinks.map((link) => (
            <li
            key={link.href}
            className={`${pathname === link.href ? "current" : ""} ${link.dropdown?.length ? "dropdown" : ""}`.trim()}
          >
              <Link href={link.href} >{link.label}</Link>
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
      </div>
    </nav>
  );
};

export default HeaderNav;
