import React, { createContext, useState } from "react";
import { Place } from "../constants/types";

type locationContextType = {
  userLocation: userLocation | null;
  setUserLocation: React.Dispatch<React.SetStateAction<userLocation | null>>;
};

export const locationContext = createContext<any>(null);

type userLocation = {
  lat: number;
  lng: number;
};

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userLocation, setUserLocation] = useState<userLocation | null>(null);
  const [locationName, setLocationName] = useState<string>("");
  const [results, setResults] = useState<Place[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  return (
    <locationContext.Provider
      value={{
        userLocation,
        locationName,
        setLocationName,
        setUserLocation,
        isFetching,
        setIsFetching,
        results,
        setResults,
      }}
    >
      {children}
    </locationContext.Provider>
  );
};
