import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { slides, TCarouselSlide } from "../../utils/carouselValues";
import { convertedStyles } from "../../utils/convertedStyles";

export const Home = () => {
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const currentScrollY = (e.target as HTMLElement).scrollTop;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("scroll-down");
    } else {
      setScrollDirection("scroll-up");
    }

    setLastScrollY(currentScrollY);
  };
  const heroSlides: TCarouselSlide[] = slides;
  const heroImage = "./hero_boy-semi-final-2.png";

  return (
    <div className="w-full overflow-auto" onScroll={handleScroll}>
      <div>
        <Navbar scrollDirection={scrollDirection} />
        <div
          className="hero min-h-screen mb-4"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
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
          <hr />
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
        <section className="text-center justify-center h-auto">
          <div className={convertedStyles["block-text-header"]}>
            <span className="text-primary">UPCOMING </span>
            EVENTS
          </div>
        </section>
        <div>
          <div className="flex px-7">
            <p>
              Giving Tuesday, November 28, 2023 Participate in Giving Tuesday by
              supporting Way to Health, enabling us to sustain crucial care for
              the underprivileged. A mere $1 can furnish medicine for a
              malnourished baby, potentially saving their life. Your
              contribution makes a significant impact on those in need.
            </p>
            <p>
              Expansion of the Malnourished Baby Feeding Initiative As we
              conclude 2023, unite with us to broaden our feeding initiative. We
              aim to extend the feeding program from 34 malnourished babies to
              90, reaching more communities by expanding into additional
              neighborhoods in Cite Soleil, Haiti. (Add in a LEARN MORE link
              that goes into the "Our Work" datapage)
            </p>
          </div>
          <section className={convertedStyles["scripture"]}>
            <p>2 Corinthians 9: 6-11</p>
            <p>
              <sup>6</sup> Remember this: Whoever sows sparingly will also reap
              sparingly, and whoever sows generously will also reap generously.
              <br />
              <sup>7</sup> Each of you should give what you have decided in your
              heart to give, not reluctantly or under compulsion, for God loves
              a cheerful giver
              <sup>8</sup> And God is able to bless you abundantly, so that in
              all things at all times, having all that you need ,you will abound
              in every good work.
              <sup>9</sup> As it is written:
              <blockquote>
                "They have freely scattered their gifts to the poor; their
                righteousness endures forever."<sup>[a]</sup>
              </blockquote>
              <sup>10</sup> Now he who supplies seed to the sower and bread for
              food will also supply and increase your store of see and will
              enlarge the harvest of your righteousness. <sup>11</sup> You will
              be enriched in every way so that you can be generous aon every
              occasion, and through us your generosity will result in
              thanksgiving to God
            </p>
          </section>
        </div>
      </div>
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
    <div className="carousel shadow-2xl bg-base-100 w-full">
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
    <div id={slide.id} className="carousel-item  w-full relative ">
      <div className="mx-auto">
        <img
          src={slide.imgSrc}
          alt={slide.imgAlt}
          className="w-full relative"
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
