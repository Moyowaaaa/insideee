import { useEffect, useState } from "react";

export const useGetDistance = (
  origin: google.maps.LatLngLiteral | null,
  destination: google.maps.LatLngLiteral | undefined
) => {
  const [distance, setDistance] = useState<string | null>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    const service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK" && response.rows.length > 0) {
          const distanceText = response.rows[0].elements[0].distance.text;
          setDistance(distanceText);
        }
      }
    );
  }, [origin, destination]);

  return distance;
};
