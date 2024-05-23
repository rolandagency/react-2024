import { useContext } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Gallery.module.css";
import AppContext from "../../providers/AppContext";

export const Gallery = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  return (
    <>
      <div className="w-full max-w-[1200px] m-auto overflow-auto">
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
              placeholder until images are placed
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
