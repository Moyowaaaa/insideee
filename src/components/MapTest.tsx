import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type Place = google.maps.places.PlaceResult;

export default function MapTest() {
  const API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY; // 🔹 Replace this with your actual API key
  const MAP_ID = import.meta.env.VITE_REACT_APP_GOOGLE_MAP_ID;
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);

  useEffect(() => {
    async function loadMap(userLocation: { lat: number; lng: number }) {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places,marker`;
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve) => (script.onload = resolve));
      }
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      const { Place, SearchNearbyRankPreference } =
        (await google.maps.importLibrary(
          "places"
        )) as google.maps.PlacesLibrary;
      const { LatLngBounds } = (await google.maps.importLibrary(
        "core"
      )) as google.maps.CoreLibrary;

      const { Geocoder } = (await google.maps.importLibrary(
        "geocoding"
      )) as google.maps.GeocodingLibrary;

      const geocoder = new Geocoder();
      geocoder.geocode({ location: userLocation }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results?.length) {
          setLocationName(results[0].formatted_address);
        } else {
          console.error("Geocoder failed:", status);
        }
      });

      const mapInstance = new Map(
        document.getElementById("map") as HTMLElement,
        {
          center: userLocation,
          zoom: 14,
          mapId: MAP_ID,
        }
      );

      setMap(mapInstance);
      const request = {
        fields: ["displayName", "location", "businessStatus"],
        locationRestriction: {
          center: userLocation,
          radius: 5000, // 🔹 Search within 1km radius
        },
        includedPrimaryTypes: ["bank"],
        maxResultCount: 5,
        rankPreference: SearchNearbyRankPreference.POPULARITY,
        language: "en-US",
      };

      //@ts-ignore
      const { places } = await Place.searchNearby(request);

      if (places.length) {
        const bounds = new LatLngBounds();

        places.forEach((place) => {
          new AdvancedMarkerElement({
            map: mapInstance,
            position: place.location,
            title: place.displayName,
          });

          bounds.extend(place.location as google.maps.LatLng);
        });

        mapInstance.fitBounds(bounds);
      } else {
        console.log("No places found nearby.");
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            // lat: position.coords.latitude,
            // lng: position.coords.longitude,
            lat: 6.535166,
            lng: 3.374075,
          };
          setLocation(userLocation);
          loadMap(userLocation).catch((error) =>
            console.error("Google Maps failed to load:", error)
          );
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
}
