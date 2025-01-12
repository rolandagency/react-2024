import { useContext, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Gallery.module.css";
import AppContext from "../../providers/AppContext";
import {
  TGallerySlide,
  gallerySlides,
} from "../../utils/galleryCarouselValues";
export const Gallery = () => {
  const { scrollDirection, heroSectionRef } = useContext(AppContext);

  const GalleryCarousel = ({ slides }: { slides: TGallerySlide[] }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const handleNext = () => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    };
    const handlePrev = () => {
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    return (
      <>
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
      </>
    );
  };

  const CarouselSlide = ({
    slide,
    handleNext,
    handlePrev,
  }: {
    slide: TGallerySlide;
    handleNext: () => void;
    handlePrev: () => void;
  }) => {
    return (
      <div className="carousel-item w-full relative ">
        <div className="mx-auto ">
          {slide.type === "image" && (
            <img
              src={slide.src}
              className="w-full relative rounded-lg object-cover"
            />
          )}
          {slide.type === "video" && (
            <video
              controls
              autoPlay
              muted
              className="max-h-[400px] w-full relative rounded-lg"
            >
              <source src={slide.src} type={"video/mp4"} />
            </video>
          )}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrev}
              className="btn btn-circle opacity-[.5] hover:opacity-[1]"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle opacity-[.5] hover:opacity-[1]"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    );
  };
  // TODO: Nav Blocks Header, update once nav is updated.

  return (
    <>
      <div className="w-full max-w-[800px] m-auto ">
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
              <GalleryCarousel slides={gallerySlides} />
              <div className={styles.galleryGrid}>
                {gallerySlides.map(
                  (slide) =>
                    slide.type === "image" && (
                      <img src={slide.src} alt="gallery image" />
                    )
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
