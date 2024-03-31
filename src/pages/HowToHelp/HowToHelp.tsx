import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
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
      <div className="w-full max-w-[1200px] m-auto overflow-auto">
        <div onScroll={handleScroll}>
          <Navbar scrollDirection={scrollDirection} />
          <div className="mb-4 mt-[10rem]">
            {/* TODO update later with provided information */}
            {/* <h1 className="text-3xl font-bold underline">How To Help</h1>
            <p>way to health</p> */}
            <div className="text-6xl text-center font-bebas mb-6">
              <span className="text-primary">CONTACT</span> US
            </div>
            <div className="text-center mb-6">
              Please contact us with any questions or if you need info about
              traveling abroad as a volunteer. Do you have questions about how
              to channel your skills to get involved? Are you interested in
              partnering with Way to Health? Do you have ideas you'd like to
              contribute? Reach out to us! We welcome your inquiries and would
              love to hear from you, ready to answer any questions you may have.
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};
