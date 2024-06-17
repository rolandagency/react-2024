import { useContext, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { slides, TCarouselSlide } from "../../utils/carouselValues";
import { convertedStyles } from "../../utils/convertedStyles";
import AppContext from "../../providers/AppContext";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Home.module.css";

export const Home = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  const heroSlides: TCarouselSlide[] = slides;
  // const heroImage = "./hero_boy-semi-final-2.png";

  return (
    <div className="w-full overflow-auto">
      <div>
        <Navbar scrollDirection={scrollDirection} />
        {/* work on hero image to make it look good on mobile */}
        <div
          ref={heroSectionRef}
          className={`${styles.hero_main} mt-10`}
          // className="hero min-h-screen mb-4 mt-[10rem]"
          // style={{
          //   backgroundImage: `url(${heroImage})`,
          // }}
        >
          {/* hero-overlay */}
          <div className="bg-opacity-60"></div>
          <div className="hero-content text-center text-base-100">
            <div className="max-w-lg">
              <h1 className="mb-5 text-9xl font-bold uppercase font-bebas ">
                Way To Health
              </h1>

              <button className="btn btn-primary btn-wide font-bebas text-4xl ">
                Donate
              </button>
            </div>
          </div>
        </div>

        <Carousel slides={heroSlides} />
        <section className="flex justify-center items-center mt-6">
          <iframe
            width="675"
            height="400"
            className="rounded-lg"
            src="https://www.youtube.com/embed/bgwJ0ohfO34?si=MqSADAM6ZYJG69I5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </section>
        <section>
          <h2 className="font-bebas text-center font-normal text-7xl my-8">
            <span className="text-primary">About</span> Us
          </h2>

          <p className="mx-auto w-1/2">
            Committedly Focused on Enriching the Lives of the Underprivileged,
            both in our Local Community and in Haiti. Since its establishment in
            2016, Way to Health has provided vital medical services to more than
            12,000 patients through mobile clinics and personalized care at an
            individual level. Although our primary emphasis is on Cite Soleil,
            Haiti—arguably one of the world's most impoverished slums—we also
            extend our efforts to other regions in Haiti and individuals within
            our local community. Our commitment to serving the most vulnerable
            reflects the essence of Proverbs 19:17, which declares, "Whoever is
            kind to the poor lends to the Lord, and he will reward them for what
            they have done.
          </p>
        </section>
        <section className="text-center justify-center mx-auto h-auto w-1/2">
          <div className={convertedStyles["block-text-header"]}>
            <span className="text-primary">UPCOMING </span>
            EVENTS
          </div>
          <div>
            <div className="flex px-7 items-center justify-center">
              <p>Keep an eye out for upcoming events</p>
              {/* <p>
                Giving Tuesday, November 28, 2023 Participate in Giving Tuesday
                by supporting Way to Health, enabling us to sustain crucial care
                for the underprivileged. A mere $1 can furnish medicine for a
                malnourished baby, potentially saving their life. Your
                contribution makes a significant impact on those in need.
              </p>
              <p>
                Expansion of the Malnourished Baby Feeding Initiative As we
                conclude 2023, unite with us to broaden our feeding initiative.
                We aim to extend the feeding program from 34 malnourished babies
                to 90, reaching more communities by expanding into additional
                neighborhoods in Cite Soleil, Haiti. (Add in a LEARN MORE link
                that goes into the "Our Work" datapage)
              </p> */}
            </div>
          </div>
        </section>
        <section
          className={`${convertedStyles.scripture} mx-auto w-2/3 leading-10`}
        >
          <p className="text-2xl">2 Corinthians 9: 6-11</p>
          <p>
            <sup>6</sup> Remember this: Whoever sows sparingly will also reap
            sparingly, and whoever sows generously will also reap generously.
            <br />
            <sup>7</sup> Each of you should give what you have decided in your
            heart to give, not reluctantly or under compulsion, for God loves a
            cheerful giver
            <sup>8</sup> And God is able to bless you abundantly, so that in all
            things at all times, having all that you need ,you will abound in
            every good work.
            <sup>9</sup> As it is written:
            <blockquote>
              "They have freely scattered their gifts to the poor; their
              righteousness endures forever."<sup>[a]</sup>
            </blockquote>
            <sup>10</sup> Now he who supplies seed to the sower and bread for
            food will also supply and increase your store of see and will
            enlarge the harvest of your righteousness. <sup>11</sup> You will be
            enriched in every way so that you can be generous aon every
            occasion, and through us your generosity will result in thanksgiving
            to God
          </p>
        </section>
      </div>
      <section className="mb-5 mx-auto px-8">
        <img src="./group-2-banner.png" alt="group photo" />
      </section>
      <section className="font-raleway text-center justify-center mb-12">
        <div className={convertedStyles["block-text-header"]}>
          <span className="text-primary">HOW TO </span>
          HELP
        </div>
        <div className={`flex p-8 mx-auto gap-4 ${styles.how_to_help}`}>
          <p>
            DONATE: Empower change effortlessly by making a donation—it's the
            simplest and most impactful way to get involved! Every contribution,
            no matter how modest, holds the potential to make a substantial
            difference.
          </p>
          <p>
            VOLUNTEER: Ready to leverage your skills for a meaningful cause?
            We're actively seeking compassionate individuals eager to get
            involved. Explore various opportunities to join our volunteer team,
            whether through internships, preparing for upcoming mission trips,
            or engaging in fundraising efforts. The possibilities to make an
            immediate impact are limitless—join us today!
          </p>
          <p>
            BECOME A MISSIONARY: Elevate your involvement with Way to Health by
            taking the next step and joining us on a mission trip! You don't
            need to be a healthcare professional to contribute your skills.
            Embark on a mission trip to Haiti with us and witness healthcare in
            its purest form. Your participation can make a significant impact.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const Carousel = ({ slides }: { slides: TCarouselSlide[] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };
  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel shadow-2xl bg-base-100 w-full p-6">
      {slides.map((slide, index) => {
        if (index !== activeSlide) return null;
        return (
          <CarouselSlide
            key={index}
            slide={slide}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      })}
    </div>
  );
};

const CarouselSlide = ({
  slide,
  handleNext,
  handlePrev,
}: {
  slide: TCarouselSlide;
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  return (
    <div id={slide.id} className="carousel-item w-full relative ">
      <div className="mx-auto">
        <img
          src={slide.imgSrc}
          alt={slide.imgAlt}
          className="w-full relative rounded-lg"
        />
        <div className="absolute bottom-5 left-5 right-5">
          <a
            href={slide.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-neutral text-lg"
          >
            {slide.linkText}
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={handlePrev} className="btn btn-circle">
            ❮
          </button>
          <button onClick={handleNext} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};
