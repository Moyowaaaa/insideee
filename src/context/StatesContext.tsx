import React, { createContext, useState } from "react";

export const StatesContext = createContext<any>(null);

const StatesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState<number>(0);
  const [currentLocationImageIndex, setCurrentLocationImageIndex] =
    useState<number>(0);

  return (
    <StatesContext.Provider
      value={{
        currentLocationIndex,
        setCurrentLocationIndex,
        currentLocationImageIndex,
        setCurrentLocationImageIndex,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export default StatesContextProvider;
