import { NavbarWrapper } from "../../styledComponents/Navbar/Navbar";
import { FlexNav } from "../../styledComponents/Navbar/Navbar";
import { NavHeader } from "../../styledComponents/Navbar/Navbar";
import { NavLogo } from "../../styledComponents/Navbar/Navbar";
import { NavToggle } from "../../styledComponents/Navbar/Navbar";
import { NavLinks } from "../../styledComponents/Navbar/Navbar";
import { NavLiLink } from "../../styledComponents/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/navLinks";
import WayToHealth_Logo from "../../assets/WayToHealth_Logo.svg";
import styles from "./Navbar.module.css";
// import { useState, useRef } from "react";

type NavbarProps = {
  scrollDirection: string;
};

export const Navbar = ({ scrollDirection }: NavbarProps) => {
  // const [scrollDirection, setScrollDirection] = useState("scroll-up");
  // const lastScrollY = useRef(0);

  // const handleScroll = (e: React.UIEvent<HTMLElement>) => {
  //   const currentScrollY = (e.target as HTMLElement).scrollTop;
  //   console.log(currentScrollY, lastScrollY.current);

  //   if (currentScrollY > lastScrollY.current) {
  //     setScrollDirection("scroll-down");
  //   } else {
  //     setScrollDirection("scroll-up");
  //   }

  //   lastScrollY.current = currentScrollY;
  // };
  // console.log(scrollDirection, lastScrollY);

  // const [scrollDirection, setScrollDirection] = useState("scroll-up");

  // useEffect(() => {
  //   let lastScroll = 0;

  //   const handleScroll = () => {
  //     const currentScroll = window.scrollY;
  //     if (currentScroll <= 0) {
  //       setScrollDirection("scroll-up");
  //     } else if (currentScroll > lastScroll) {
  //       setScrollDirection("scroll-down");
  //     } else if (currentScroll < lastScroll) {
  //       setScrollDirection("scroll-up");
  //     }
  //     lastScroll = currentScroll;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
