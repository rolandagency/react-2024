import { useContext } from "react";
import AppContext from "../../providers/AppContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { meetingMinuteLinks } from "../../utils/meetingMinutesValues";

export const MeetingMinutes = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  return (
    <div className="leading-normal w-full max-w-screen-xl font-normal mr-auto ml-auto ">
      <Navbar scrollDirection={scrollDirection} />
      <section ref={heroSectionRef}>
        {meetingMinuteLinks.map((meetingMinute) => (
          <div>
            <a download href={meetingMinute.link}>
              {meetingMinute.link}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
