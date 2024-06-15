import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import AppContext from "../../providers/AppContext";
import { Footer } from "../../components/Footer/Footer";
import { articles, events } from "../../utils/newsLetterValues";

const Article = ({ title, content }: { title: string; content: string }) => {
  return (
    <>
      <h2 className="font-inter font-bold text-4xl my-5">{title}</h2>
      <p className="text-neutral-200 mb-20">{content}</p>
    </>
  );
};

const Event = ({ description }: { description: string }) => {
  return <p>{description}</p>;
};

export const NewsLetter = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  return (
    <div className="leading-normal w-full max-w-screen-xl font-normal mr-auto ml-auto ">
      <Navbar scrollDirection={scrollDirection} />
      <section
        className="bg-[#363438] grid grid-cols-2 items-center"
        ref={heroSectionRef}
      >
        <h1 className="font-inter text-center text-6xl italic">
          <span className="text-accent-color">NEWS</span>LETTER
        </h1>

        <div>
          <img src="Newsletter_hero.png" alt="hero" />
        </div>
      </section>
      <section className="grid grid-cols-3">
        <div className="col-span-2 px-20 pt-20">
          {articles.map((article) => (
            <Article
              key={article.title}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
        <div className="bg-[#333135] px-10 pt-20">
          <h2 className="font-inter text-4xl my-5 text-center">
            Upcoming Events
          </h2>
          <div>
            {events.map((ev, index) => (
              <Event key={`event-${index}`} description={ev.description} />
            ))}
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
        <div className="text-5xl col-span-2 bg-[#29282D] mix-blend-screen py-10 px-16">
          <span className="text-accent-color">WAY TO</span> HEALTH - JANUARY
          2024
        </div>
        <div className="bg-[#333135] mix-blend-screen"></div>
      </section>
      <Footer />
    </div>
  );
};
