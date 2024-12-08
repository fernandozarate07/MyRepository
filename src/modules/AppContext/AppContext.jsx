import { createContext, useState } from "react";

const AppContext = createContext();

const ProviderAppContext = ({ children }) => {
  const [sectionState, setSectionState] = useState("home");

  return <AppContext.Provider value={{ sectionState, setSectionState }}>{children}</AppContext.Provider>;
};

export { AppContext, ProviderAppContext };
