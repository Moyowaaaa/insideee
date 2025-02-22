// import { useEffect, useState } from "react";

// type Place = google.maps.places.PlaceResult;

// export const useFetchNearbyPlaces = ({
//   interest,
//   userLocation,
//   isFetching,
// }: {
//   interest: string[];
//   userLocation: google.maps.LatLngLiteral | null;
//   isFetching: boolean;
// }) => {
//   const [places, setPlaces] = useState<Place[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!userLocation || !isFetching) return; // Fetch only when triggered

//     async function search() {
//       try {
//         setLoading(true);
//         const { Place, SearchNearbyRankPreference } =
//           (await google.maps.importLibrary(
//             "places"
//           )) as google.maps.PlacesLibrary;

//         const request = {
//           fields: ["displayName", "location", "businessStatus"],
//           locationRestriction: {
//             center: userLocation,
//             radius: 5000, // 🔹 5km radius
//           },
//           includedPrimaryTypes: interest,
//           rankPreference: SearchNearbyRankPreference.POPULARITY,
//           language: "en-US",
//         };

//         const { places } = await Place.searchNearby(request);
//         setPlaces(places || []);
//       } catch (error) {
//         console.error("Error fetching places:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     search();
//   }, [interest, userLocation, isFetching]);

//   return { places, loading };
// };
