import { useContext, useMemo } from "react";
import "./placeDetailsCard.scss";
import ImageSwitcher from "./ImageSwitcher";
import { locationContext } from "../../context/LocationContext";
import { Place } from "../../constants/types";
import { StatesContext } from "../../context/StatesContext";
import { StarIcon } from "../skeletons/StarIcon";

const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const toRadians = (deg: number) => (deg * Math.PI) / 180;

  const R = 6371; // Radius of Earth in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const PlaceDetailsCard = () => {
  const { currentLocationIndex, userLocation } = useContext(StatesContext);
  const { results } = useContext(locationContext);
  const details = results[currentLocationIndex] as any;
  const ratingCount = (results[currentLocationIndex] as Place)?.rating || 0;
  const roundedRating = Math.round(ratingCount);

  // const placeLat = parseFloat(details?.location[0]);
  // const placeLng = details?.geometry?.location;

  // console.log([placeLat]);

  // // Get user location
  // const userLat = userLocation?.lat;
  // const userLng = userLocation?.lng;

  // // Calculate distance if all values exist
  // const distance =
  //   userLat !== undefined &&
  //   userLng !== undefined &&
  //   placeLat !== undefined &&
  //   placeLng !== undefined
  //     ? getDistance(userLat, userLng, placeLat, placeLng).toFixed(2) + " km"
  //     : "Calculating...";

  // console.log({ distance });

  return (
    <>
      <div className="place-details-container">
        <>
          <div className="place-details-container__top-section">
            <div className="place-details-container__top-section--ratings-section">
              <div>
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} filled={index < roundedRating} />
                ))}
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M6.08458 9.56954L10.9225 12.3887M10.9154 4.61121L6.08458 7.43038M14.875 3.54163C14.875 4.71523 13.9236 5.66663 12.75 5.66663C11.5764 5.66663 10.625 4.71523 10.625 3.54163C10.625 2.36802 11.5764 1.41663 12.75 1.41663C13.9236 1.41663 14.875 2.36802 14.875 3.54163ZM6.375 8.49996C6.375 9.67356 5.4236 10.625 4.25 10.625C3.07639 10.625 2.125 9.67356 2.125 8.49996C2.125 7.32635 3.07639 6.37496 4.25 6.37496C5.4236 6.37496 6.375 7.32635 6.375 8.49996ZM14.875 13.4583C14.875 14.6319 13.9236 15.5833 12.75 15.5833C11.5764 15.5833 10.625 14.6319 10.625 13.4583C10.625 12.2847 11.5764 11.3333 12.75 11.3333C13.9236 11.3333 14.875 12.2847 14.875 13.4583Z"
                    stroke="#525252"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="place-details-container__top-section--info-card">
              <div className="place-details-container__top-section--info-card__desc-container">
                <div>
                  <p>Open from 9am to 9pm</p>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_44_1003)">
                      <path
                        d="M6.70842 2.91663H6.96181C8.73937 2.91663 9.62815 2.91663 9.96554 3.23588C10.2572 3.51184 10.3864 3.91837 10.3077 4.31208C10.2166 4.76755 9.49098 5.28079 8.03975 6.30727L5.66875 7.98432C4.21753 9.01079 3.49191 9.52403 3.40082 9.9795C3.32208 10.3732 3.45132 10.7797 3.74296 11.0557C4.08034 11.375 4.96912 11.375 6.74668 11.375H7.29175M4.66675 2.91663C4.66675 3.88312 3.88325 4.66663 2.91675 4.66663C1.95025 4.66663 1.16675 3.88312 1.16675 2.91663C1.16675 1.95013 1.95025 1.16663 2.91675 1.16663C3.88325 1.16663 4.66675 1.95013 4.66675 2.91663ZM12.8334 11.0833C12.8334 12.0498 12.0499 12.8333 11.0834 12.8333C10.1169 12.8333 9.33342 12.0498 9.33342 11.0833C9.33342 10.1168 10.1169 9.33329 11.0834 9.33329C12.0499 9.33329 12.8334 10.1168 12.8334 11.0833Z"
                        stroke="#525252"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_44_1003">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>3km from you</p>
                </div>
              </div>

              <div className="place-details-container__top-section--info-card__details-container">
                <h1>{details?.displayName}</h1>
                <p>{details?.formattedAddress}</p>

                <div className="bookmark-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33325 5.2C3.33325 4.0799 3.33325 3.51984 3.55124 3.09202C3.74299 2.71569 4.04895 2.40973 4.42527 2.21799C4.85309 2 5.41315 2 6.53325 2H9.46659C10.5867 2 11.1467 2 11.5746 2.21799C11.9509 2.40973 12.2569 2.71569 12.4486 3.09202C12.6666 3.51984 12.6666 4.0799 12.6666 5.2V14L7.99992 11.3333L3.33325 14V5.2Z"
                      fill="#525252"
                      stroke="#525252"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <ImageSwitcher />
        </>
      </div>
    </>
  );
};

export default PlaceDetailsCard;
