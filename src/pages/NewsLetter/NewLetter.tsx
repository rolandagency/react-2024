import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import AppContext from "../../providers/AppContext";
import { Footer } from "../../components/Footer/Footer";

export const NewLetter = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  return (
    <div>
      <Navbar scrollDirection={scrollDirection} />
      <h1 className="text-3xl font-bold underline">NewLetter</h1>
      <section ref={heroSectionRef}>
        <p>way to health</p>
      </section>
      <Footer />
    </div>
  );
};
