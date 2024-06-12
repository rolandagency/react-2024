import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import AppContext from "../../providers/AppContext";
import { Footer } from "../../components/Footer/Footer";
import { articles, events } from "../../utils/newsLetterValues";

const Article = ({ title, content }: { title: string; content: string }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
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
        <h1 className="text-center text-3xl font-bold">NewLetter</h1>

        <div>
          <img src="newsletter_hero.svg" alt="hero" />
        </div>
      </section>
      <section className="grid grid-cols-3">
        <div className="col-span-2">
          {articles.map((article) => (
            <Article
              key={article.title}
              title={article.title}
              content={article.content}
            />
          ))}
          <div className="bg-[#29282D] mix-blend-screen">
            WAY TO HEALTH - JANUARY 2024
          </div>
        </div>
        <div className="bg-[#333135]">
          <h2>Upcoming Events</h2>
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
      </section>
      <Footer />
    </div>
  );
};
