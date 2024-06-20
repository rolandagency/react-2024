import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Gallery.module.css";
import AppContext from "../../providers/AppContext";

export const Gallery = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);
  // TODO: Nav Blocks Header, update once nav is updated.
  return (
    <>
      <div className="w-full max-w-[1200px] m-auto ">
        <div>
          <Navbar scrollDirection={scrollDirection} />
        </div>
        <div className={styles.gallery} ref={heroSectionRef}>
          <header>
            <h1>
              <span>GAL</span>LERY
            </h1>
          </header>
          <div className={styles.gallery_images}>
            <section className={styles.images}>
              <div className={styles.galleryGrid}>
                <img
                  className={styles.headerGridImage}
                  src="/gallery/image0.png"
                  alt=""
                />
                <img src="/gallery/image1.png" alt="" />
                <img src="/gallery/image2.png" alt="" />
                <img src="/gallery/image3.png" alt="" />
                <img src="/gallery/image4.png" alt="" />
                <img src="/gallery/image5.png" alt="" />
                <img src="/gallery/image6.png" alt="" />
                <img src="/gallery/image7.png" alt="" />
                <img src="/gallery/image8.png" alt="" />
                <img src="/gallery/image9.png" alt="" />
                <img src="/gallery/image10.png" alt="" />
                <img src="/gallery/image11.png" alt="" />
                <img src="/gallery/image12.png" alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
