import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import ContactUs from "../../components/ContactUs/ContactUs";
import AppContext from "../../providers/AppContext";
import { Footer } from "../../components/Footer/Footer";
import { Volunteer } from "../../components/howToHelpComponents/Volunteer/Volunteer";
import { QuestionsAndAnswers } from "../../components/howToHelpComponents/Q&A/Q&A";
import { NeededSupplies } from "../../components/howToHelpComponents/NeededSupplies/NeededSupplies";
import { MissionExpenses } from "../../components/howToHelpComponents/MissionExpenses/MissionExpenses";
import { MatchingExpenses } from "../../components/howToHelpComponents/MatchingExpenses/MatchingExpenses";
import { HowToDonate } from "../../components/howToHelpComponents/HowToDonate/HowToDonate";

export const HowToHelp = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  return (
    <>
      <div className="w-full max-w-[1200px] m-auto overflow-auto">
        <div>
          <Navbar scrollDirection={scrollDirection} />
          <div className="mb-4 mt-[10rem]">
            <section
              className="flex flex-col gap-2 border-b-[1px] border-white pb-4 mb-8 py-10 px-10"
              ref={heroSectionRef}
            >
              <HowToDonate />
              <NeededSupplies />
              <MissionExpenses />
              <QuestionsAndAnswers />
              <MatchingExpenses />
            </section>
            <section>
              <div className="flex flex-col justify-center items-center py-5 px-10">
                <Volunteer />
              </div>
            </section>

            <div className="text-7xl text-center font-bebas mb-6">
              <span className="text-primary">CONTACT</span> US
            </div>
            <div className="text-center mb-6 px-10">
              Please contact us with any questions or if you need info about
              traveling abroad as a volunteer. Do you have questions about how
              to channel your skills to get involved? Are you interested in
              partnering with Way to Health? Do you have ideas you'd like to
              contribute? Reach out to us! We welcome your inquiries and would
              love to hear from you, ready to answer any questions you may have.
            </div>
            <ContactUs />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
