import { createContext } from "react";

const AppContext = createContext({});
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <AppContext.Provider
      value={
        {
          // Add your global state here
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
