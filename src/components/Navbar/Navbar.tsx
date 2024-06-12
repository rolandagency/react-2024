import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/navLinks";
import WayToHealth_Logo from "/logo/WayToHealth_Logo.svg";
import {
  NavbarWrapper,
  FlexNav,
  NavHeader,
  NavLogo,
  NavToggle,
  NavLinks,
  NavLiLink,
  HeaderLinks,
} from "../../styledComponents/Navbar/Navbar";
import styles from "./Navbar.module.css";
import { useState } from "react";

type NavbarProps = {
  scrollDirection: string;
};

export const Navbar = ({ scrollDirection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // need to add content to navbar on monday
    <div
      className={`container ${
        scrollDirection === "scroll-down" ? styles.scrollDown : ""
      }`}
    >
      <NavbarWrapper>
        <FlexNav>
          <NavHeader>
            <NavLogo>
              <img src={WayToHealth_Logo} alt="Way to Health" />
            </NavLogo>
            <NavToggle onClick={handleToggle}>☰</NavToggle>
          </NavHeader>
          <NavLinks className={`${isOpen ? "flex" : "hidden"}`}>
            <HeaderLinks>
              <a
                className="contact-btns"
                href="https://www.paypal.com/donate/?hosted_button_id=SG5VSJCXAEXQQ"
              >
                Donate
              </a>
            </HeaderLinks>
            <ul className={styles.ul}>
              {navLinks.map((link) => {
                const { id, href, text } = link;
                return (
                  <NavLiLink key={id}>
                    <NavLink to={href}>{text}</NavLink>
                  </NavLiLink>
                );
              })}
            </ul>
          </NavLinks>
        </FlexNav>
      </NavbarWrapper>
    </div>
  );
};
