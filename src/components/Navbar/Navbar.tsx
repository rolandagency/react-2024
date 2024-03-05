import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/navLinks";
import WayToHealth_Logo from "../../assets/WayToHealth_Logo.svg";
import {
  NavbarWrapper,
  FlexNav,
  NavHeader,
  NavLogo,
  NavToggle,
  NavLinks,
  NavLiLink,
} from "../../styledComponents/Navbar/Navbar";
import styles from "./Navbar.module.css";

type NavbarProps = {
  scrollDirection: string;
};

export const Navbar = ({ scrollDirection }: NavbarProps) => {
  return (
    <div className={scrollDirection === "scroll-down" ? styles.scrollDown : ""}>
      <NavbarWrapper>
        <FlexNav>
          <NavHeader>
            <NavLogo>
              <img src={WayToHealth_Logo} alt="Way to Health" />
            </NavLogo>
            <NavToggle>☰</NavToggle>
          </NavHeader>
          <NavLinks>
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
