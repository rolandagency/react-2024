import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import AppContext from "../../providers/AppContext";
import { Footer } from "../../components/Footer/Footer";

const BlockTextHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="leading-tight text-7xl mt-7 mb-9 flex-1 font-normal font-bebas text-center xs:text-5xl">
      {children}
    </div>
  );
};

const H2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="font-bebas text-2xl">{children}</h2>;
};

const BlockTextAccent = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-accent-color">{children}</span>;
};

export const OurWork = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  // const heroOurWork = "./our_work_hero.svg";

  return (
    <>
      <div className="w-full max-w-[1200px] m-auto overflow-auto">
        <div>
          <Navbar scrollDirection={scrollDirection} />
        </div>
      </div>

      {/* Hero */}

      <section
        className={`mt-[10%] w-3/4 h-90 bg-footer ml-auto mr-auto content-center
     flex flex-row md:flex sm:flex-wrap xs:flex-wrap sm:mt-[20%] xs:mt-[30%] md:mt-[15%]`}
        ref={heroSectionRef}
      >
        <div
          className={`w-[40%] mt-auto mb-auto h-26 ml-auto mr-auto text-center justify-items-center
        justify-center flex flex-row`}
        >
          <BlockTextHeader>
            {" "}
            <BlockTextAccent>OUR</BlockTextAccent> WORK
          </BlockTextHeader>
        </div>

        <div
          className={`w-[80%] h-[80%] ml-0 mr-0 mt-0 mb-0 justify-items-end bg-cover content-center
            flex flex-row 2xs:w-[100%] xs:w-[100%] sm:w-[100%] 2xs:justify-items-center 
            sm:justify-items-center xs:justify-items-center
            `}
        >
          <img className={`object-fill`} src="./our_work_hero.svg" alt="" />
        </div>
      </section>
      <section className="mt-[8%] mb-0">
        <BlockTextHeader>
          {" "}
          <BlockTextAccent>MISSION</BlockTextAccent> TRIPS
        </BlockTextHeader>
        <hr />
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Description</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Nov 2023 trip</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Cholera clinic Oct 2022</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
      </section>

      <section className="mt-[8%] mb-0">
        <BlockTextHeader>
          {" "}
          <BlockTextAccent>HEALTH</BlockTextAccent>CARE
        </BlockTextHeader>
        <hr />
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Description</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Primary Care</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Health Clinics</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Health Education</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Healthcare Management</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
      </section>
      <section className="mt-[8%] mb-16">
        <BlockTextHeader>
          {" "}
          <BlockTextAccent>NON-MEDICAL</BlockTextAccent> PROJECTS
        </BlockTextHeader>
        <hr />
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Malnourished feeding program</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>English school</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
        <div className="my-0 mx-7 py-0 px-5">
          <H2>Housing</H2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dolorum, iste odit repudiandae, nostrum accusamus rerum earum dicta
            esse sit ullam! Deleniti vero laudantium dolorum veritatis, corporis
            inventore impedit. Consequuntur. Repudiandae ea quibusdam aliquam
            dolorem similique nostrum voluptate, provident voluptates. Tempora
            eos dolor fugit consequuntur atque unde possimus accusantium quam
            provident placeat hic nemo temporibus, dolorem quos laudantium?
            Aperiam, fugit.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};
