export type TCarouselSlide = {
  id: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
  linkText: string;
  prevId: string;
  nextId: string;
};

export const slides: TCarouselSlide[] = [
  {
    id: "slide1",
    imgSrc: "/carousel/img_1.jpg",
    imgAlt: "Smiling child",
    link: "https://www.facebook.com/medicalhelpforhaiti",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide5",
    nextId: "slide2",
  },
  {
    id: "slide2",
    imgSrc: "/carousel/img_2.jpg",
    imgAlt: "Group Photo",
    link: "https://www.facebook.com/medicalhelpforhaiti",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide1",
    nextId: "slide3",
  },
  {
    id: "slide3",
    imgSrc: "/carousel/img_3.jpg",
    imgAlt: "fishing boats on shore",
    link: "https://www.facebook.com/medicalhelpforhaiti",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide2",
    nextId: "slide4",
  },
  {
    id: "slide4",
    imgSrc: "/carousel/img_4.jpg",
    imgAlt: "truck on dirt road",
    link: "https://www.facebook.com/medicalhelpforhaiti",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide3",
    nextId: "slide5",
  },
  {
    id: "slide5",
    imgSrc: "/carousel/img_5.jpg",
    imgAlt: "health check with child",
    link: "https://www.facebook.com/medicalhelpforhaiti",
    linkText: "Photo by Way to Health Foundation",
    prevId: "slide4",
    nextId: "slide1",
  },
];
