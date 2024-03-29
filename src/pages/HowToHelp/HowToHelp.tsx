import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactUs from "../../components/ContactUs/ContactUs";

export const HowToHelp = () => {
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
    <>
      <div className="w-full overflow-auto">
        <div onScroll={handleScroll}>
          <Navbar scrollDirection={scrollDirection} />
          <div className="mb-4 mt-[10rem]">
            <h1 className="text-3xl font-bold underline">How To Help</h1>
            <p>way to health</p>
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};
