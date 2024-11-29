
import { Contact } from "./FooterElements/Contact";
import { QuickLinks } from "./FooterElements/QuickLinks";
import { Donate } from "./FooterElements/Donate";
import { Partner} from "./FooterElements/Partner";


export const Footer = () => {
  return (
    <footer className="bg-footer text-center py-6 w-full border border-transparent border-success justify-evenly">
      <section className="flex flex-row gap-6 md:flex-wrap sm:flex-wrap xs:flex-wrap sm:flex md:justify-center 
                          md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center">
          <div className="w-48 h-48 px-6 ml-6 mr-1 my-4 pt-4 justify-center items-center border border-transparent">
            <img src="./logo/colored_logo.svg" alt="logo" />
          </div>
        <div className="flex flex-row w-full justify-evenly border border-transparent border-accent md:flex-wrap 
                        sm:flex-wrap xs:flex-wrap sm:flex sm:flex-col sm:justify-start sm:items-start xs:justify-start 
                        xs:items-start">
              <div className="flex flex-col gap-5 mt-4 px-4 border border-transparent border-info xs:px-0">
                  <div className="w-48 h-12 px-0 ml-0 my-2 pt-4 pl-2">
                    <img src="./logo/WayToHealth_Logo.svg" alt="logo1" />
                  </div>
                  <div className="border border-transparent border-error">
                  <Contact />
                  </div>
              </div>   
              <div className="mt-24 sm:mt-2 sm:ml-2 xs:mt-2">
                  <QuickLinks />
              </div>
              <div className="flex flex-col gap-6 mt-24 sm:mt-2 sm:ml-2 xs:mt-2">
                  <Donate />
              </div>
        </div>
      </section>
        <div className="content-center mb-12 sm:mt-2 sm:ml-2 xs:mt-2">
          <Partner />
        </div>
      <div className="flex justify-center gap-5 mt-4 border border-transparent sm:px-4 sm:mx-24 sm:flex 
                      sm:justify-center sm:items-center">
        <p className="text-1xl align-center md:flex sm:flex-wrap xs:flex-wrap 
        sm:mt-2 xs:mt-2 sm:text-wrap xs:text-wrap sm:mx-6 xs:mx-6 sm:max-w-80">
          Way to Health is a 501(c)(3) non-profit organization, EIN 81-2026805 <br/>
          @2024 Way To Health ~ All Rights Reserved | Privacy Policy</p>
      </div>
    </footer>
  );
};