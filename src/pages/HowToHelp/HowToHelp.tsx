import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import ContactUs from "../../components/ContactUs/ContactUs";
import AppContext from "../../providers/AppContext";
import { Footer } from "../../components/Footer/Footer";

export const HowToHelp = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  return (
    <>
      <div className="w-full max-w-[1200px] m-auto overflow-auto">
        <div>
          <Navbar scrollDirection={scrollDirection} />
          <div className="mb-4 mt-[10rem]">
            {/* TODO update later with provided information */}
            {/* <h1 className="text-3xl font-bold underline">How To Help</h1>
            <p>way to health</p> */}

            <section
              className="flex flex-col gap-2 border-b-[1px] border-white pb-4 mb-8"
              ref={heroSectionRef}
            >
              <div className="flex flex-col gap-2">
                <h2>DONATIONS</h2>
                {/* <p>Paypal Link</p> */}
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=SG5VSJCXAEXQQ"
                  className="btn btn-primary btn-wide font-bebas text-4xl "
                  target="_blank"
                >
                  Donate
                </a>
                {/* <p>Venmo: @Cite-Soleil</p> */}
              </div>

              {/* <section>
                <div>
                  <h2 className="mb-2">needed supplies</h2>
                  TBd
                </div>
              </section>
              <section>
                <div>
                  <h2 className="mb-2">mission trips</h2>
                  TBD
                </div>
              </section> */}
              <section>
                <div>
                  <h2 className="mb-2">MATCHING DONATION PROGRAMS</h2>
                  <p>
                    Looking to maximize the impact of your donation? Inquire
                    with your employer about their donation matching program!
                    When you contribute to Way to Health through this
                    initiative, your employer will automatically double your
                    donation using their funds. If Way to Health is not
                    currently among the nonprofits your company supports, reach
                    out to us. We can work together to join their matching
                    donations program, ensuring your donation goes even further.
                    Supply EIN number. "Here is everything you will need for
                    your employer to partner with WTH..."Currently, we have
                    partnerships with HCA and the Shell Oil Foundation. If you'd
                    like to see your employer join in to double your donation,
                    encourage them to connect with us! Contact information
                  </p>
                </div>
              </section>
            </section>
            <div className="text-7xl text-center font-bebas mb-6">
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
          <Footer />
        </div>
      </div>
    </>
  );
};
