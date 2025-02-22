import { useContext, useEffect } from "react";

import "./App.scss";
import { useLenisScroll } from "./hooks/useLenisScroll";
import Home from "./components/home/Home";
import TopBar from "./components/topbar/TopBar";
import { locationContext } from "./context/LocationContext";

const apiKey = "AIzaSyAFSIlnC3AxCLdNb4RBU2b1BGdic8nBpCI";

function App() {
  const { userLocation, setLocationName, setUserLocation } =
    useContext(locationContext);

  useEffect(() => {
    useLenisScroll();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(newLocation);
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (!userLocation) return;

    async function loadGoogleMaps() {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geocoding`;
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve) => (script.onload = resolve));
      }
    }

    async function getUserLocationDetails() {
      await loadGoogleMaps();

      const { Geocoder } = (await google.maps.importLibrary(
        "geocoding"
      )) as google.maps.GeocodingLibrary;

      const geocoder = new Geocoder();
      geocoder.geocode({ location: userLocation }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results?.length) {
          setLocationName(results[0]);
        } else {
          console.error("Geocoder failed:", status);
        }
      });
    }

    getUserLocationDetails().catch((error) =>
      console.error("Error getting location details:", error)
    );
  }, [userLocation]);

  return (
    <div className="main-container">
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
