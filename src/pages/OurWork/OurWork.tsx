import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";





const BlockTextHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="leading-tight text-7xl mt-7 mb-9 flex-1 font-normal font-bebas text-center xs:text-5xl">
      {children}
    </div>
  );
};



const BlockTextAccent = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-accent-color">{children}</span>;
};



export const OurWork = () => {
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

  // const heroOurWork = "./our_work_hero.svg";

  return (
    <>
      <div className="w-full max-w-[1200px] m-auto overflow-auto">
        <div onScroll={handleScroll}>
          <Navbar scrollDirection={scrollDirection} />
        </div>
      </div>    

    {/* Hero */}

    <section className={`mt-[10%] w-3/4 h-90 bg-secondary ml-auto mr-auto content-center
     flex flex-row md:flex sm:flex-wrap xs:flex-wrap sm:mt-[20%] xs:mt-[30%] md:mt-[15%]`}> 
      

       <div className={`w-[40%] mt-auto mb-auto h-26 ml-auto mr-auto text-center justify-items-center
        justify-center flex flex-row`}>
          <BlockTextHeader>
            {" "}
            <BlockTextAccent>OUR</BlockTextAccent> WORK
          </BlockTextHeader>
        </div>
       
        <div
            className={`w-[80%] h-[80%] ml-0 mr-0 mt-0 mb-0 justify-items-end bg-cover content-center
            flex flex-row 2xs:w-[100%] xs:w-[100%] sm:w-[100%] 2xs:justify-items-center 
            sm:justify-items-center xs:justify-items-center
            `}>
              <img className={`object-fill`} src="./our_work_hero.svg" alt="" />
        </div>
   
    </section>
        

  {/* Mission Trip */}

        <section className="mt-[8%] mb-0">
          <BlockTextHeader>
            {" "}
            <BlockTextAccent>MISSION</BlockTextAccent> TRIP
          </BlockTextHeader>
        </section>

        <section className="missionTrips" id="missionTrips">
  
          <p className="w-3/4 mt-0 mb-5 ml-auto mr-auto pt-0 pr-35 pb-7 pl-35 gap-12 break-normal font-medium text-lg" >
            Contact us for the next scheduled trip. Missionaries pay their own
            travel expenses, food, lodging and water. Mission travel is eight
            days. Trip itineraries are planned months in advance to ensure a
            successful trip for the poor. Health and business professionals
            put their skills to the test in mobile medical clinics, working
            alongside and training the poor.
          </p>
        </section>

    </>
  );
};

