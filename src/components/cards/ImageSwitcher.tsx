import { useContext } from "react";
import "./imageSwtcher.scss";
import { StatesContext } from "../../context/StatesContext";
import { locationContext } from "../../context/LocationContext";

const ImageSwitcher = () => {
  const {
    currentLocationIndex,
    setCurrentLocationIndex,
    setCurrentLocationImageIndex,
  } = useContext(StatesContext);
  const { results } = useContext(locationContext);

  const onHandlePreviousLocationClick = () => {
    if (currentLocationIndex !== 0) {
      setCurrentLocationIndex(currentLocationIndex - 1);
      setCurrentLocationImageIndex(0);
    }
  };

  const onHandleNextLocationClick = () => {
    if (currentLocationIndex !== results.length - 1) {
      setCurrentLocationIndex(currentLocationIndex + 1);
      setCurrentLocationImageIndex(0);
    }
  };

  return (
    <>
      <div className="place-details-container__bottom-section">
        <button
          style={{ opacity: currentLocationIndex !== 0 ? 1 : 0 }}
          onClick={() => onHandlePreviousLocationClick()}
          className="place-details-container__bottom-section--right-arrow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M8.70001 9.59996L5.5 6.39996L8.70001 3.19995"
              stroke="#525252"
              strokeWidth="1.28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          style={{
            opacity: currentLocationIndex === results.length - 1 ? 0 : 1,
          }}
          onClick={() => onHandleNextLocationClick()}
          className="place-details-container__bottom-section--right-arrow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M5.29999 9.59996L8.5 6.39996L5.29999 3.19995"
              stroke="#525252"
              strokeWidth="1.28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ImageSwitcher;
