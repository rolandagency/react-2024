import { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import styles from './Gallery.module.css';

export const Gallery = () => {
  const [scrollDirection, setScrollDirection] = useState('scroll-up');
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const currentScrollY = (e.target as HTMLElement).scrollTop;
    console.log(currentScrollY, lastScrollY);
    if (currentScrollY > lastScrollY) {
      setScrollDirection('scroll-down');
    } else {
      setScrollDirection('scroll-up');
    }

    setLastScrollY(currentScrollY);
  };
  return (
    <>
      <div className="w-full max-w-[1200px] m-auto overflow-auto">
        <div onScroll={handleScroll}>
          <Navbar scrollDirection={scrollDirection} />
        </div>
        <div className={styles.gallery}>
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
