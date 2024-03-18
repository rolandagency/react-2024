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
    imgSrc: "/carousel/one.jpg",
    imgAlt: "all hands together",
    link:
      "https://unsplash.com/photos/Zyx1bK9mqmA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Hannah Busing",
    prevId: "slide5",
    nextId: "slide2",
  },
  {
    id: "slide2",
    imgSrc: "/carousel/two.jpg",
    imgAlt: "extended hand holding up the sunset",
    link:
      "https://unsplash.com/@aamir_in?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Aamir Suhail",
    prevId: "slide1",
    nextId: "slide3",
  },
  {
    id: "slide3",
    imgSrc: "/carousel/three.jpg",
    imgAlt: "foggy window with heart etched in the window fog",
    link:
      "https://unsplash.com/photos/0ZQ8vojHNuc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by Michael Fenton",
    prevId: "slide2",
    nextId: "slide4",
  },
  {
    id: "slide4",
    imgSrc: "/carousel/four.jpg",
    imgAlt: "young Haitian student smiling",
    link:
      "https://unsplash.com/photos/5uhOqA194JQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by TopSphere Media",
    prevId: "slide3",
    nextId: "slide5",
  },
  {
    id: "slide5",
    imgSrc: "/carousel/five.jpg",
    imgAlt: "father kissing his child on the cheek",
    link:
      "https://unsplash.com/photos/0mRerwRVqVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    linkText: "Photo by TopSphere Media",
    prevId: "slide4",
    nextId: "slide1",
  },
];
