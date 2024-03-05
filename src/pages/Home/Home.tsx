import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

export const Home = () => {
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const currentScrollY = (e.target as HTMLElement).scrollTop;
    console.log(currentScrollY, lastScrollY);

    if (currentScrollY > lastScrollY) {
      setScrollDirection("scroll-down");
    } else {
      setScrollDirection("scroll-up");
    }

    setLastScrollY(currentScrollY);
  };

  return (
    <div onScroll={handleScroll} className={styles.div}>
      <div style={{ height: "5000px", width: "100%" }}>
        <Navbar scrollDirection={scrollDirection} />
      </div>
    </div>
  );
};
