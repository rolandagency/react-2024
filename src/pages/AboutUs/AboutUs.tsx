//import styles from "./aboutUs.module.css";

const BlockTextHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="leading-tight text-7xl mt-7 mb-9 flex-1 font-normal font-bebas text-center">
      {children}
    </div>
  );
};

const BlockText = ({ children }: { children: React.ReactNode }) => {
  return (
    // <p className="mt-8 mr-12 mb-5 ml-9 pt-12 pr-5 pb-7 pl-5 gap-12 columns-2">
    <p className="mt-2.5 mx-0 mb-7 py-0 px-2.5 break-normal font-medium text-lg">
      {children}
    </p>
  );
};

const BlockTextAccent = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-accent-color">{children}</span>;
};

const H2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="font-bebas text-2xl">{children}</h2>;
};

const FL = ({ children }: { children: React.ReactNode }) => {
  return <li className="text-lg font-medium">{children}</li>;
};

const BoardMember = ({
  name,
  img,
  description,
}: {
  name: string;
  img: string;
  description: string;
}) => {
  return (
    <div className="items-center mt-7 mb-5 mx-4 py-5 px-6 border border-solid border-font-light rounded-lg shadow-[0_8px_36px_0_#404045] backdrop-blur-[2px] h-[800px] w-[380px]">
      <div>
        <img
          className="max-w-full h-auto box-border rounded-t-xl rounded-r-xl"
          src={img}
          alt="Avatar"
        />
      </div>
      <h2 className="mt-10 pl-2.5">{name}</h2>
      <p className="font-medium text-lg my-2.5 mr-5 ml-0 py-0 pr-5 pl-2.5 w-[340px] h-[370px] overflow-y-auto">
        {description}
      </p>
    </div>
  );
};

const FlipCard = () => {
  return (
    <div className="group perspective bg-transparent w-[300px] h-[350px] rounded-xl">
      <div className="preserve-3d relative w-full h-full text-center duration-[600ms] shadow-[0 4px 8px 0 rgba(74, 74, 74, 0.2)] group-hover:rotate-y-180">
        <div className="backface-hidden absolute w-full h-full rounded-xl bg-flip-card overflow-hidden">
          <img
            className="w-[300px] h-[280px] rounded-[10px 10px 0px 0px]"
            src="https://headshots-inc.com/wp-content/uploads/2023/03/Office-Headshot-Examples-2-1.jpg"
            alt="Avatar"
          />
          <h1 className="text-call-to-action mb-0 mt-3.5 leading-3 font-semibold">
            Teah
          </h1>
          <h3 className="text-call-to-action mb-0 mt-3.5 leading-3">
            Volunteer
          </h3>
        </div>
        <div className="backface-hidden absolute w-full h-full rounded-xl rotate-y-180 bg-accent-color text-font-light">
          <p className="break-normal text-center font-medium m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            deserunt eos doloribus! Architecto eveniet dolorum tempora, aut
            nesciunt quod debitis temporibus culpa. Sed expedita, esse labore ut
            similique odio. Corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            deserunt eos doloribus! Architecto eveniet dolorum tempora, aut
            nesciunt quod debitis
          </p>
        </div>
      </div>
    </div>
  );
};

const DocumentLink = () => {
  return (
    <div className="border border-solid border-transparent flex justify-center items-center flex-row gap-2.5 flex-wrap my-0 mx-auto py-0 px-12">
      <h3 className="text-left ml-12 text-lg">Profit and Loss 2020</h3>
      <div className="border border-solid border-transparent flex justify-center items-center flex-row gap-2.5 flex-wrap my-6 mx-0">
        <div className="view">
          <a href="/assets/profit_and_loss_2020.pdf" target="_blank">
            <i className="fa-regular fa-eye"></i>View
          </a>
        </div>
        <div className="download">
          <a href="/assets/profit_and_loss_2020.pdf" download>
            <i className="fa-solid fa-download"></i>Download
          </a>
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  const boardMembers = [
    {
      name: "Lisa O'Brien",
      img: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/b488239b-f181-4333-8662-45ba36335d7f/2022-02-11-Trinet-Geena-0319-OneDrive+-+Social+Media.jpg",
      description: `Meet Lisa, the heart and soul behind Way to Health. With 30 years of
  nursing under her belt, she's not just our founder and President but
  also your go-to person for all things caring and compassionate.
  Lisa's journey with Way to Health started with her first mission
  trip to Haiti in 2014, and the rest, as they say, is history.After
  lots of prayers and a hefty dose of determination, Way to Health
  officially took flight in 2016. Lisa's been fearlessly leading
  medical missions all over Haiti since then, but her heart found a
  special place in the vibrant communities of Cite Soleil. It's become
  the heartbeat of Way to Health.Having Lisa in your life means
  inevitably catching the Way to Health bug because her passion and
  Godly heart are just too contagious to resist.`,
    },
    {
      name: "Julie McFarland",
      img: "https://liketherazor.com/wp-content/uploads/2019/12/WEB-VERSION-Chris-Gillett-Houston-Headshot-Photographer-21.jpg",
      description: `Meet Julie, our detail-oriented and heartfelt prayer warrior. She's
    been an essential part of the Way to Health family since its
    founding in 2016, serving with passion on the Board of Directors. As
    our Vice President, Julie spearheads some of our most impactful
    projects, with the latest gem being the Malnourished Baby Feeding
    Initiative.In 2017, Julie took a leap of faith and joined her first
    mission trip. Being on the ground, seeing the direct impact of the
    work she and the Board contribute, changed her perspective forever.
    Julie hasn't been the same since that eye-opening experience, and
    her dedication to our cause shines through in everything she does.`,
    },
    {
      name: "Sarah Dray",
      img: "https://liketherazor.com/wp-content/uploads/2022/12/Allianjtgroup-0826211132-2-Edit-WEB-VERSION-Chris-Gillett-Houston-Headshot-Photographer.jpg",
      description: `Introducing Sarah, the multitasking force behind Way to Health—our
    Secretary and the newly appointed Director of Humanitarian
    Initiatives. Just like Julie, Sarah has been a dedicated part of our
    journey since the beginning in 2016, eagerly volunteering for a
    variety of projects that come her way.With numerous trips to Haiti
    under her belt, Sarah discovered her passion for healthcare on her
    very first visit. When in Haiti, you'll likely spot Sarah at the
    forefront, orchestrating our mobile medical clinics. Her commitment
    to quality and team safety takes the top spot on her priority list.`,
    },
    {
      name: "Gail Howard",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbf-rNIeNz2T2Qd7_FCe3AOZanqLvgfuPCX7xoqMveYsF9eLyRdqNieC3kieI5vVaAa0&usqp=CAU",
      description: `Say hello to Gail, our newest superstar on the Way to Health Board
    of Directors! Gail's been part of the Way to Health family for a
    while, and in 2022, she officially stepped into her role as a
    Director. What makes Gail stand out? It's her out-of-the-box
    thinking and that awesome businesswoman mindset—making her the
    perfect addition to our Director team.Even though Gail hasn't been
    on a mission trip (yet!), her passion and joy shine through in
    everything she does with Way to Health. And here's the best
    part—she's got her friends and family right alongside her, making
    every step of the journey a shared adventure.`,
    },
  ];

  const teamMembers = [1, 2, 3, 4, 5, 6];
  const documentLinks = [1, 2, 3];

  return (
    <div className="leading-normal w-full max-w-screen-xl font-normal mr-auto ml-auto ">
      {/* <div className="container"> */}
      <section className="mt-[10%]">
        <BlockTextHeader>
          {" "}
          <BlockTextAccent>WHO</BlockTextAccent> WE SERVE
        </BlockTextHeader>
        <hr />
        <p className="mt-8 mr-12 mb-5 ml-9 pt-12 pr-5 pb-7 pl-5 gap-12 columns-2 break-normal font-medium text-lg">
          Your donations make a significant impact in our healthcare efforts in
          Haiti. They support the hiring of Haitian medical professionals,
          purchase of medications and supplies, and engagement of translators
          and security personnel. On clinic days, our team, comprising
          in-country doctors and nurses, provides care to 100-250 patients daily
          via mobile medical clinics. Nurses take vital signs, doctors diagnose,
          and prescribed medications come with a 20-day supply and guidance. We
          also distribute reading glasses when available. Our healthcare
          addresses various conditions like Tuberculosis, Typhoid, Cholera,
          Pneumonia, Bronchitis, Intestinal Worms, Malnourishment, and Sexually
          Transmitted Diseases. For infants, the common causes of
          death—dehydration and fever—can be treated with a simple antibiotic.
          In cases where patients can't reach the clinic, our mission team
          travels with medical supplies to provide on-site care. Way to Health
          operates entirely with volunteers, and your donations directly support
          the purchase of medications, supplies, and in-country medical
          assistance, making a meaningful impact on those we serve.
        </p>
      </section>
      <section className="mt-[2%]">
        <BlockTextHeader>
          <BlockTextAccent>WHO</BlockTextAccent> WE ARE
        </BlockTextHeader>
        <hr />

        <div className="flex ml-auto max-w-[80%] gap-[10%] text-left my-7 mx-auto">
          <div>
            <H2>Vision</H2>
            <p className="mt-2.5 mx-0 mb-7 py-0 px-2.5 break-normal font-medium text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              aliquam faucibus purus in massa tempor nec feugiat nisl. Amet
              porttitor eget dolor morbi non arcu risus quis varius. Tristique
              sollicitudin nibh sit amet commodo. Aliquam nulla facilisi cras
              fermentum odio eu feugiat. Sit amet aliquam id diam. Molestie ac
              feugiat sed lectus vestibulum mattis ullamcorper. Pretium fusce id
              velit ut tortor pretium viverra suspendisse potenti. Ligula
              ullamcorper malesuada proin libero nunc consequat interdum varius.
              Sed turpis tincidunt id aliquet risus feugiat in. Non sodales
              neque sodales ut. Ac odio tempor orci dapibus ultrices. Urna et
              pharetra pharetra massa massa ultricies mi quis hendrerit. At
              tempor commodo ullamcorper a lacus vestibulum sed arcu non. Eget
              gravida cum sociis natoque penatibus et. Urna condimentum mattis
              pellentesque id nibh tortor id aliquet. Rhoncus aenean vel elit
              scelerisque mauris pellentesque.
            </p>
          </div>

          <div>
            <H2>Values</H2>
            <BlockText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              aliquam faucibus purus in massa tempor nec feugiat nisl. Amet
              porttitor eget dolor morbi non arcu risus quis varius. Tristique
              sollicitudin nibh sit amet commodo. Aliquam nulla facilisi cras
              fermentum odio eu feugiat. Sit amet aliquam id diam. Molestie ac
              feugiat sed lectus vestibulum mattis ullamcorper. Pretium fusce id
              velit ut tortor pretium viverra suspendisse potenti. Ligula
              ullamcorper malesuada proin libero nunc consequat interdum varius.
              Sed turpis tincidunt id aliquet risus feugiat in. Non sodales
              neque sodales ut. Ac odio tempor orci dapibus ultrices. Urna et
              pharetra pharetra massa massa ultricies mi quis hendrerit. At
              tempor commodo ullamcorper a lacus vestibulum sed arcu non. Eget
              gravida cum sociis natoque penatibus et. Urna condimentum mattis
              pellentesque id nibh tortor id aliquet. Rhoncus aenean vel elit
              scelerisque mauris pellentesque.
            </BlockText>
          </div>
        </div>

        <div className="my-0 mx-7 py-0 px-5">
          <H2>Statement of Faith</H2>
          <ol className="px-7 pt-7 list-decimal">
            <FL>
              We believe the Bible to be the inspired, authoritative Word of
              God, useful to teach us truth about God and His love, and to
              correct us when we are wrong. God uses Scripture to prepare and
              equip His people to do every good work.
            </FL>
            <FL>
              We believe in one God, eternally existent in three persons:
              Father, Son, and Holy Spirit.
            </FL>
            <FL>
              We believe that Jesus is the Christ, the Anointed Son of God,
              fully human and fully divine. He was born of a virgin, performed
              miracles, and lived a sinless life. His death on the cross
              provided the atoning sacrifice for the sins of the world. We
              believe in His bodily resurrection, His ascension to heaven, and
              that He will return again at the time appointed by the Father.
            </FL>
            <FL>
              We believe that all humans are created in God's image but all have
              sinned and are therefore under God's judgment. We believe that
              faith in God's Son, Jesus, is the only path to salvation, to
              escape God's judgment.
            </FL>
          </ol>
        </div>
      </section>

      <section className="mt-[5%]">
        <BlockTextHeader>
          <BlockTextAccent>BOARD</BlockTextAccent> MEMBERS
        </BlockTextHeader>
        <hr />
        <div className="flex justify-center items-center my-1 mx-0 flex-row gap-7 flex-wrap">
          {boardMembers.map((member) => (
            <BoardMember
              name={member.name}
              img={member.img}
              description={member.description}
            />
          ))}
        </div>
      </section>

      <section>
        <BlockTextHeader>
          <BlockTextAccent>OUR</BlockTextAccent> TEAM
        </BlockTextHeader>
        <div>
          <p className="mt-7 mr-11 mb-5 ml-9 py-0 px-5 text-left font-medium text-lg">
            "Meet our evergrowing team of volunteers and missionaries. (More to
            come)"
          </p>
        </div>

        <div className="border border-solid border-transparent justify-center items-center flex flex-row flex-row flex-wrap gap-8 my-12 px-6">
          {teamMembers.map(() => (
            <FlipCard />
          ))}
        </div>
      </section>

      <section className="border border-solid border-transparent h-auto text-center justify-center my-12 mx-0">
        <BlockTextHeader>
          <BlockTextAccent>PUBLIC</BlockTextAccent> DOCUMENTS
        </BlockTextHeader>

        <p className="mt-7 mr-11 mb-5 ml-20 py-0 px-20 break-normal text-left font-medium text-lg">
          Financials and meeting minutes
        </p>

        <div className="py-0 px-7 text-center">
          {documentLinks.map(() => (
            <DocumentLink />
          ))}
        </div>
      </section>
    </div>
  );
};
