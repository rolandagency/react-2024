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
      <section className="grid grid-cols-3">
        <div className="col-span-2">
          <h2>Serving the Poor</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
          </div>
          <h2>Reflection & Thought</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
          </div>
          <h2>Cholera in Haiti Report</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
          </div>
          <div>WAY TO HEALTH - JANUARY 2024</div>
        </div>
        <div>
          <h2>Upcoming Events</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo conse
          </div>
          <div>DONATE</div>
          <h2>Contact Info</h2>
          <div>
            Way to Health 414 Towne Ct. Alvin TX, 77511 281-229-3139
            waytohealthorg@gmail.com
          </div>
          <div>
            <div>Sign up for our Newsletter</div>
            <div>EMAIL</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
