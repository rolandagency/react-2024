import { createContext, useEffect, useRef, useState } from "react";

type AppContextType = {
  scrollDirection: string;
  lastScrollY: number;
  heroSectionRef: React.RefObject<HTMLDivElement>;
};

const AppContext = createContext({} as AppContextType);
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const triggerPoint = heroSectionRef.current
        ? heroSectionRef.current.offsetHeight * 0.75
        : 0;

      if (heroSectionRef.current && currentScrollY > triggerPoint) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection("scroll-down");
        } else {
          setScrollDirection("scroll-up");
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AppContext.Provider
      value={{
        // Add your global state here
        scrollDirection,
        lastScrollY,
        heroSectionRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
