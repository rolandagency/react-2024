import { useContext } from "react";
import AppContext from "../../providers/AppContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { meetingMinuteLinks } from "../../utils/meetingMinutesValues";
import { DocumentLink } from "../../components/Documents/DocumentLink";
import { documentLinks } from "../../utils/documentLinkValues";
import { Footer } from "../../components/Footer/Footer";
import "./PublicDocuments.css";

export const PublicDocuments = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  return (
    <div className="leading-normal w-full max-w-screen-xl font-normal mr-auto ml-auto ">
      <Navbar scrollDirection={scrollDirection} />
      <section
        className="mt-[15%] sm:mt-[25%] xs:mt-[20%]"
        ref={heroSectionRef}
      >
        <div className="leading-tight text-7xl mt-7 mb-9 flex-1 font-normal font-bebas text-center">
          <span className="text-accent-color">PUBLIC</span> DOCUMENTS
        </div>
      </section>
      <section className="border border-solid border-transparent h-auto text-center justify-center my-12 mx-0">
        <div className="py-0 px-7 text-center">
          <p className="mt-7 mr-11 mb-5 ml-20 py-0 px-20 break-normal text-left font-medium text-lg">
            Financials
          </p>

          {documentLinks.map((document) => (
            <DocumentLink
              key={document.title}
              title={document.title}
              file={document.file}
            />
          ))}

          <p className="mt-7 mr-11 mb-5 ml-20 py-0 px-20 break-normal text-left font-medium text-lg">
            Meeting minutes
          </p>
          <div className="h-96 overflow-auto minutesScrollColor">
            {meetingMinuteLinks.map((meetingMinute) => (
              <DocumentLink
                key={meetingMinute.file}
                title={meetingMinute.file}
                file={"/meeting-minutes/" + meetingMinute.file}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
